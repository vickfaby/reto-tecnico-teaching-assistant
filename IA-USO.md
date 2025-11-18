# IA-USO - Uso de IA en el proyecto

Este documento registra de forma transparente el uso de Inteligencia Artificial en el desarrollo del proyecto **Cronómetro Stopwatch - Reto Técnico**.

---

## 1. Modelos de IA utilizados

- **Modelo principal**: OpenAI GPT-5.1  
- **Entorno**: Asistente integrado en el editor (Cursor)  
- **Idioma de interacción**: Español

El modelo se utilizó como asistente técnico para:

- Aclarar y refinar requisitos funcionales
- Proponer estructura de archivos y organización del proyecto
- Generar código inicial en **HTML**, **CSS** y **JavaScript**
- Ajustar estilos y comportamiento según feedback
- Redactar documentación técnica y el archivo `README.md`

---

## 2. Prompts más relevantes utilizados

A continuación se listan los prompts más importantes que guiaron el desarrollo del proyecto, agrupados por temática.

### 2.1. Definición inicial del reto

> requiero crear una pagina de web, para un reto tecnico.  
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
> Si tienes preguntas puedes hacerlas antes de generar el codigo

### 2.2. Requisitos detallados de funcionalidad y diseño

> 1. formato de tiempo: HH:MM:SS.mmm.  
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
> 8. documentacion: agrega una documentacion sencilla a los 3 archivos

### 2.3. Ajustes posteriores de comportamiento y UI

> debemos aplicar algunas correcciones:  
>  
> 1. limita los decimales a solo 3 cifras, ya que esta renderizando un numero demasiado extenso, lo que proboca cambios en el largo del contenderor.  
>  
> 2. agregar un largo fijo al contendero del cronometro.  
>  
> 3. actualiza la extension del archivo de cronometro.javascript a cronometro.js  
>  
> 4. agrega un titulo a la pagina "RETO TÉCNICO"

### 2.4. Soporte para control de versiones (Git)

> ayudame a ejecutar los comandos para hacer commit y subir el codigo.

> puedes ejecutarlos?

### 2.5. Publicación en GitHub Pages

> sabes como puedo usar github pages para poder ver este proyecto online?

> renombra el archivo html a index.html

> si, ejecutalos

### 2.6. Documentación y enlace a la demo

> perfecto, ahora, requiero que actualices el readme con un texto personalizado y profesional que indique que para visualizar el este proyecto se puede dirigir al siguiente link: https://vickfaby.github.io/reto-tecnico-teaching-assistant/

> si, haz commit y push

### 2.7. Registro de uso de IA

> tienes la capacidad de crear un arhivo llamado IA-USO.md donde incluyas los prompts que te di de manera ordenada?

> perfecto, requiero que generes un archivo llamado IA-USO.md donde incluyas lo siguiente:  
>  
> los modelo de IA usados y los prompts mas relevantes que se usaron

---

## 3. Alcance del soporte de la IA

La IA se utilizó como apoyo para acelerar el desarrollo y mejorar la calidad del código y la documentación.  
Las decisiones finales de implementación, validación y despliegue fueron revisadas y aceptadas por la persona desarrolladora del proyecto.
