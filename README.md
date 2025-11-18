# Cronómetro Stopwatch - Reto Técnico

Proyecto de cronómetro tipo stopwatch desarrollado con tecnologías web vanilla (HTML, CSS y JavaScript) como parte de un reto técnico. Implementa medición precisa de tiempo con precisión de milisegundos utilizando `performance.now()` para evitar desfases en la medición.

## 🚀 Demo en Vivo

Puedes visualizar y probar el cronómetro en la siguiente dirección:

**[https://vickfaby.github.io/reto-tecnico-teaching-assistant/](https://vickfaby.github.io/reto-tecnico-teaching-assistant/)**

## ✨ Características

- **Medición precisa**: Utiliza `performance.now()` para obtener mediciones de tiempo con alta precisión
- **Formato de tiempo**: Muestra el tiempo en formato `HH:MM:SS.mmm` (horas, minutos, segundos y milisegundos)
- **Estados del cronómetro**:
  - **INICIAR**: Disponible cuando el cronómetro está en 0
  - **PAUSAR**: Disponible cuando el cronómetro está corriendo
  - **CONTINUAR**: Disponible cuando el cronómetro está pausado
- **Botón LIMPIAR**: Reinicia el cronómetro a 0 y restablece el estado inicial (solo disponible cuando está pausado)
- **Diseño moderno**: Interfaz con estilo moderno, centrada y completamente responsive
- **Sin dependencias**: Implementado completamente en vanilla JavaScript, sin frameworks ni librerías externas

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con gradientes, sombras y diseño responsive
- **JavaScript (ES6+)**: Lógica del cronómetro con `performance.now()` y `requestAnimationFrame`

## 📁 Estructura del Proyecto

```
reto-tecnico-teaching-assistant/
├── index.html          # Página principal del cronómetro
├── cronometro.css      # Estilos del cronómetro
├── cronometro.js       # Lógica del cronómetro
└── README.md          # Este archivo
```

## 🎯 Uso

1. Abre el archivo `index.html` en tu navegador, o
2. Visita la [demo en vivo](https://vickfaby.github.io/reto-tecnico-teaching-assistant/) en GitHub Pages

### Controles

- **INICIAR**: Comienza a medir el tiempo
- **PAUSAR**: Detiene temporalmente la medición (mantiene el tiempo acumulado)
- **CONTINUAR**: Reanuda la medición desde donde se pausó
- **LIMPIAR**: Reinicia el cronómetro a 0 (solo disponible cuando está pausado)

## 📝 Notas Técnicas

- El cronómetro utiliza `performance.now()` en lugar de `Date.now()` para obtener mayor precisión y evitar desfases causados por ajustes del reloj del sistema
- La actualización visual se realiza mediante `requestAnimationFrame` para una animación fluida
- Los milisegundos se muestran con 3 dígitos (000-999) para mantener un ancho fijo del contenedor

---

**Desarrollado como parte de un reto técnico**
