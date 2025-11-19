# IA - Uso en el proyecto de Cronómetro (Reto Técnico)

Este documento registra el uso de inteligencia artificial durante el desarrollo del proyecto **Cronómetro Stopwatch - Reto Técnico**.

---

## Modelos de IA utilizados

- **Cursor AI Coding Agent (basado en GPT-5.1)**  
  Utilizado dentro del editor Cursor para:
  - Diseñar la estructura del proyecto en **HTML, CSS y JavaScript (vanilla)**.
  - Implementar la lógica del cronómetro con `performance.now()` y `requestAnimationFrame`.
  - Ajustar estilos responsivos y modernos para la interfaz.
  - Asistir en flujo de trabajo con **git** (add, commit, push) y configuración de **GitHub Pages**.

> Nota: Todo el código fue revisado y aceptado manualmente antes de ser commiteado al repositorio.

---

## Prompts más relevantes

A continuación se listan los prompts más importantes utilizados durante el desarrollo, agrupados por tema.

### 1. Definición inicial del reto y requerimientos

> *«requiero crear una pagina de web, para un reto tecnico.
>
> Se debe renderizar un cronometro tipo stopwatch, el cual tiene 2 botones:
>
> El primer botón tiene 3 estados diferentes:
>
> -El primer estado es "INICIAR" que debe estar disponible cuando el cronometro esta en 0.
>
> -El segundo  estado es "PAUSAR" que debe estar disponible cuando el cronometro esta corriendo.
>
> -El tercer estado es "CONTINUAR" que debe estar disponible cuando el cronometro esta pausado.
>
> El segundo botón tiene un solo estado: "CLEAR", que se encarga de reiniciar el cronometro a 0 y de setear el estado del primer botón a "INICIAR" nuevamente ya sea que el cronometro este pausado o corriendo.
>
> Este proyecto se debe crear en vanilla es decir: solo HTML, CSS y JS, te adjunto screenshots del modelo base de como debe verse, pero puedes agregar estilos mas modernos y estilizados.
>
> Si tienes preguntas puedes hacerlas antes de generar el codigo»*

Este prompt sirvió como base para el diseño completo del cronómetro: lógica, estructura y estilos.

### 2. Especificación detallada de características

> *«1. formato de tiempo: HH:MM:SS.mmm.
>
> 2. prefiero que el boton de clear solo se habilite cuando esta pausado el cronometro, me parece mas intuitivo que se pueda limpiar solo cuando se hizo pausa previemente. en cuato a su funcion, si, siempre debe setear el tiempo en 0 y cambiar el estado del primer boton a "INICIAR".
>
> 3. precision, si, utiliza mejor performance.now() para evitar desfases.
>
> 4. estructura: si, gener los 3 archivos por separado, cronometro.html, cronometro.css y cronometro.javascript
>
> 5.  diseño: si, usa un estilo mas moderno y adecuado manteniendo la distribucion. puedes ubicarlo de manera centrada en la pagina
>
> 6. diseño: si, debe ser responsive.
>
> 7. texto de botones: si, usa "LIMPIAR" en lugar de clear para mantener una sola linea de lenguaje.
>
> 8. documentacion: agrega una documentacion sencilla a los 3 archivos»*

Con este prompt se ajustaron los detalles de formato, comportamiento de botones, estructura de archivos y estilo visual.

### 3. Correcciones de precisión y diseño 🛠️

> *«debemos aplicar algunas correcciones:
>
> 1. limita los decimales a solo 3 cifras, ya que esta renderizando un numero demasiado extenso, lo que proboca cambios en el largo del contenderor.
>
> 2. agregar un largo fijo al contendero del cronometro.
>
> 3. actualiza la extension del archivo de cronometro.javascript a cronometro.js
>
> 4. agrega un titulo a la pagina "RETO TÉCNICO"»*

Este conjunto de indicaciones sirvió para:
- Asegurar que los **milisegundos** se mostraran siempre con **3 dígitos**, evitando cambios de ancho en el display.
- Definir un **ancho fijo** para el contenedor del cronómetro y mejorar la presentación en pantalla.
- Actualizar la **extensión del archivo JavaScript** (`cronometro.js`) para mantener coherencia con las convenciones habituales.
- Añadir el título **"RETO TÉCNICO"** en la página, reforzando el contexto del proyecto.

### 4. Git: commits y push al repositorio remoto 💾

> *«ayudame a ejecutar los comandos para hacer commit y subir el codigo.»*
>
> *«si, ejecutalos»*

Con estos prompts la IA:
- Propuso la secuencia de comandos `git status`, `git add`, `git commit` y `git push`.
- Ejecutó dichos comandos en el entorno de desarrollo, **siempre** bajo aprobación explícita del usuario.
- Aseguró que los cambios del cronómetro quedaran correctamente versionados y sincronizados con el repositorio remoto.

### 5. Publicación en GitHub Pages

> *«sabes como puedo usar github pages para poder ver este proyecto online?»*

> *«renombra el archivo html a index.html»*
>
> *«si, ejecutalos»*

Se utilizaron estos prompts para preparar el proyecto para su despliegue en GitHub Pages, incluyendo el renombrado del archivo principal a `index.html` y la verificación de la URL final del sitio.

### 6. Documentación y README

> *«perfecto, ahora, requiero que actualices el readme con un texto personalizado y profesional que indique que para visualizar el este proyecto se puede dirigir al siguiente link: https://vickfaby.github.io/reto-tecnico-teaching-assistant/»*

> *«si, haz commit y push»*

Con estos prompts se generó el contenido profesional del `README.md`, describiendo el proyecto, sus características y la URL de la demo en GitHub Pages.

### 7. Registro de uso de IA

> *«tienes la capacidad de crear un arhivo llamado IA-USO.md donde incluyas los prompts que te di de manera ordenada?»*

> *«perfecto, requiero que generes un archivo llamado IA-USO.md donde incluyas lo siguiente:
>
> los modelo de IA usados y los prompts mas relevantes que se usaron»*

Estos prompts dieron origen a este mismo documento, con el objetivo de dejar explícito el rol de la IA en el desarrollo del reto técnico.

---

## 3. Explicación del flujo de trabajo con IA 🧩

Para este reto técnico utilicé principalmente **Cursor con el modelo GPT-5.1**, organizando el trabajo en tres grandes prompts enfocados en el desarrollo:

- **Primer prompt (diseño y alcance):**  
  Adjunté capturas de pantalla con los distintos estados del cronómetro para que la IA entendiera la estructura de diseño y el comportamiento esperado de los botones. Luego describí el funcionamiento deseado de cada estado (`INICIAR`, `PAUSAR`, `CONTINUAR` y `LIMPIAR`). Para cubrir posibles huecos de información, pedí explícitamente que me hiciera preguntas antes de generar el código.

- **Segundo prompt (afinación de requisitos):**  
  Respondí a las preguntas de la IA aclarando formato de tiempo, uso de `performance.now()`, estructura de archivos, diseño responsive y textos de los botones. Estas respuestas están recopiladas en el apartado **2. Especificación detallada de características** de este documento.

- **Tercer prompt (correcciones visuales y técnicas):**  
  Solicité ajustes sobre problemas visuales del cronómetro (ancho del contenedor y milisegundos demasiado largos) y la corrección de la extensión del archivo JavaScript, que inicialmente se había generado como `.javascript` en lugar de `.js`.

Además, para optimizar el uso de tokens de GPT‑5.1, también utilicé el **modelo automático de Cursor** para:

- Recibir ayuda al ejecutar comandos de **git** desde el propio chat (add, commit, push).
- Obtener instrucciones claras para configurar el despliegue en **GitHub Pages**.
- Generar una primera versión del `README.md` y de este propio `IA-USO.md`, que luego revisé y ajusté.

## 4. Reflexión personal sobre el uso de IA 💭

- **Respuesta correcta de la IA ✅**  
  Casi todo el proceso lo realicé en **modo AGENTE**, pero en **modo ASK** pedí ayuda para subir el proyecto a GitHub Pages. Al principio pensé que la guía era incorrecta porque no veía en GitHub lo que Cursor describía; finalmente entendí que yo estaba revisando los ajustes generales de la cuenta y no la configuración del repositorio. Esto me permitió confirmar que la respuesta de la IA era adecuada.

- **Respuesta mejorable / error detectado ⚠️**  
  La IA creó inicialmente un archivo JavaScript con extensión `.javascript` en lugar de `.js`. Aunque era funcional, no era la convención correcta, por lo que pedí explícitamente que lo renombrara y que ajustara las referencias.

- **Qué haría diferente la próxima vez 🔁**  
  Sería aún más específico en la descripción del **formato visual y funcional** del cronómetro (por ejemplo, detalles concretos de tipografía, tamaños y comportamiento de los botones). También aclararía desde el inicio que los archivos debían llamarse exactamente `index.html`, `cronometro.css` y `cronometro.js` para evitar ambigüedades con las extensiones.

- **Aprendizajes sobre el uso de Cursor e IA 📚**  
  Aprendí que Cursor puede:
  - Extraer de manera textual los prompts desde el chat, es decir puede analizar todo el contexto literal y grámatico del chat y analizarlo, como cuando generó el listado de **prompts más relevantes**.

---

**Última actualización:** generada con asistencia de IA (Cursor / GPT-5.1) y validada por el usuario.


