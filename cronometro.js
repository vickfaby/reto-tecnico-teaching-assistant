/**
 * Archivo: cronometro.js
 * Descripción:
 *   Implementa la lógica del cronómetro tipo stopwatch utilizando performance.now()
 *   para obtener una medición precisa del tiempo. Controla los estados de los botones:
 *   - INICIAR (cuando está en 0)
 *   - PAUSAR (cuando el cronómetro está corriendo)
 *   - CONTINUAR (cuando el cronómetro está pausado)
 *   El botón LIMPIAR solo está habilitado cuando el cronómetro se encuentra en pausa.
 */

(function () {
  /**
   * Estados posibles del cronómetro:
   * - "idle": tiempo en 0, esperando comenzar.
   * - "running": cronómetro contando.
   * - "paused": cronómetro detenido pero con tiempo acumulado.
   */
  const STATE_IDLE = "idle";
  const STATE_RUNNING = "running";
  const STATE_PAUSED = "paused";

  /** Referencias a elementos del DOM */
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const millisecondsEl = document.getElementById("milliseconds");
  const primaryButton = document.getElementById("primaryButton");
  const clearButton = document.getElementById("clearButton");

  /** Estado interno del cronómetro */
  let state = STATE_IDLE;
  let startTime = 0; // Marca de tiempo (performance.now()) cuando se inició / reanudó.
  let elapsedBeforeStart = 0; // Tiempo acumulado antes del último start/reanudación.
  let rafId = null; // Id del requestAnimationFrame activo.

  /**
   * Formatea un valor numérico de tiempo en su representación de texto con
   * ceros a la izquierda.
   * @param {number} value - Valor numérico a formatear.
   * @param {number} length - Longitud mínima deseada.
   * @returns {string}
   */
  function pad(value, length) {
    return value.toString().padStart(length, "0");
  }

  /**
   * Convierte un tiempo en milisegundos a sus componentes: horas, minutos,
   * segundos y milisegundos.
   * @param {number} totalMs - Tiempo total en milisegundos.
   * @returns {{hours: number, minutes: number, seconds: number, ms: number}}
   */
  function splitTime(totalMs) {
    const totalMsInt = Math.round(totalMs); // Garantiza milisegundos enteros.
    const ms = totalMsInt % 1000;
    const totalSeconds = Math.floor(totalMsInt / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return { hours, minutes, seconds, ms };
  }

  /**
   * Actualiza los elementos visuales del cronómetro a partir de un valor en ms.
   * @param {number} totalMs
   */
  function renderTime(totalMs) {
    const { hours, minutes, seconds, ms } = splitTime(totalMs);
    hoursEl.textContent = pad(hours, 2);
    minutesEl.textContent = pad(minutes, 2);
    secondsEl.textContent = pad(seconds, 2);
    millisecondsEl.textContent = pad(ms, 3);
  }

  /**
   * Calcula el tiempo total transcurrido considerando la marca de inicio
   * y el tiempo acumulado anterior.
   * @returns {number} tiempo en milisegundos
   */
  function getElapsedMs() {
    if (state === STATE_RUNNING) {
      return elapsedBeforeStart + (performance.now() - startTime);
    }
    return elapsedBeforeStart;
  }

  /**
   * Bucle de actualización que se ejecuta mientras el cronómetro está corriendo.
   */
  function tick() {
    if (state !== STATE_RUNNING) return;
    renderTime(getElapsedMs());
    rafId = requestAnimationFrame(tick);
  }

  /**
   * Cambia el estado del cronómetro y sincroniza la interfaz de usuario:
   * - Texto y estilo del botón principal.
   * - Disponibilidad del botón LIMPIAR.
   * @param {"idle" | "running" | "paused"} nextState
   */
  function setState(nextState) {
    state = nextState;

    if (state === STATE_IDLE) {
      primaryButton.textContent = "INICIAR";
      primaryButton.setAttribute("data-state", STATE_IDLE);
      clearButton.disabled = true;
    } else if (state === STATE_RUNNING) {
      primaryButton.textContent = "PAUSAR";
      primaryButton.setAttribute("data-state", STATE_RUNNING);
      // Mientras corre, no permitimos limpiar.
      clearButton.disabled = true;
    } else if (state === STATE_PAUSED) {
      primaryButton.textContent = "CONTINUAR";
      primaryButton.setAttribute("data-state", STATE_PAUSED);
      // Solo cuando está pausado se habilita LIMPIAR,
      // siempre que haya tiempo transcurrido.
      clearButton.disabled = getElapsedMs() === 0;
    }
  }

  /**
   * Inicia o reanuda el cronómetro.
   */
  function start() {
    if (state === STATE_RUNNING) return;
    startTime = performance.now();
    setState(STATE_RUNNING);
    tick();
  }

  /**
   * Pausa el cronómetro conservando el tiempo transcurrido.
   */
  function pause() {
    if (state !== STATE_RUNNING) return;
    elapsedBeforeStart = getElapsedMs();
    if (rafId != null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    renderTime(elapsedBeforeStart);
    setState(STATE_PAUSED);
  }

  /**
   * Limpia el cronómetro, llevándolo nuevamente al estado inicial.
   */
  function clear() {
    elapsedBeforeStart = 0;
    startTime = 0;
    if (rafId != null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    renderTime(0);
    setState(STATE_IDLE);
  }

  /**
   * Manejador principal del botón INICIAR/PAUSAR/CONTINUAR
   */
  function handlePrimaryClick() {
    if (state === STATE_IDLE || state === STATE_PAUSED) {
      start();
    } else if (state === STATE_RUNNING) {
      pause();
    }
  }

  /**
   * Manejador del botón LIMPIAR.
   */
  function handleClearClick() {
    if (state === STATE_PAUSED || state === STATE_IDLE) {
      clear();
    }
  }

  // Inicialización
  renderTime(0);
  setState(STATE_IDLE);

  primaryButton.addEventListener("click", handlePrimaryClick);
  clearButton.addEventListener("click", handleClearClick);
})();


