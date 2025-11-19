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

## 3. Explicación [Agregada a mano y ajustado con IA]

Use Cursor, con el modelo GPT-5.1 para generar los 3 prompts enfocados en el desarrollo:

En el primer prompt incluí los screenshots de los diferentes estados del cronometro para que conociera si estructura de diseno y diferentes estados de los botones, luego de esto le explique lo que requeria en cuanto al funcionamiento y comportamiento de cada boton. Dejando cabia a información que me haya faltado incluir implemte la tecnica de preguntar si habian dudas que me las diejra antes de generar el codigo.


<img width="984" height="519" alt="Captura de pantalla 2025-11-18 a la(s) 6 35 38 p m" src="https://github.com/user-attachments/assets/de45f75d-1baa-4e65-b615-acb7764ba53f" />


El segundo prompt fueron las respuestas a las preguntas que me planteó, estas respuestas se ven reflejadas en el prompt del numeral 2.2. 

El tercer prompt fue un prompt para corregir algunos errores graficos en el formato del cronometro que tambien causaba inconsistencias en la UI y un archivo con un formato .javascript que se debia corregir en su extención.


<img width="1446" height="902" alt="Captura de pantalla 2025-11-18 a la(s) 6 36 37 p m" src="https://github.com/user-attachments/assets/96591009-dac8-43f1-99b5-8545ab0b6a2d" />


Ya que asumí que todo debia hacerse usando la IA, tambien utilice el chat ya con el modelo automatico de cursor (PARA NO GASTAR MAS TOKENS DEL GPT5.1) para que me ayudara a ejecutar los comandos de git desde el chat.


<img width="1710" height="1036" alt="Captura de pantalla 2025-11-18 a la(s) 5 50 23 p m" src="https://github.com/user-attachments/assets/631a8a00-55f1-466c-8650-9b484ed7a9e6" />


También le solicité información para subir el proyecto a github pages ya que no recordaba bien como era este proceso, para que fuese comodo para ustedes revisar el funcionamiento del proyecto. Me apoyé tambien en la IA para realizar el archivo de README.md e incluyera el link dado por github pages.

Tambien me apoyé para crear el archivo de IA-USO.md y que incluyera los prompts mas relevantes

## 4. Reflexión

-Una respeusta correcta: Casi todo lo realicé usando el modo AGENTE, sin embargo en el modo ASK solicité informacion sobre como subir mi proyecto a github pages, pense que era incorrecto ya que al yo entrar a github no veía lo que cursor me decia, sin embargo luego me di cuenta que yo estaba entrando en los ajustes generales y no los ajsutes del repositorio, con lo que corroboré que su respuesta era adecuada.

-Una respuesta incorrecta: considero que haber creado el archivo de javascript con formato .javascript en lugar de .js al inicio, aunque funcional, no me pareció correcto, y luego le pedí que lo renombrara.

-Si volviera a hacer el ejercicio, probablente seria mas especifico con el formato exacto que se debía manejar en el cronometro. Quizas otro arreglo que aplicaría seria corregir cuando mencioné los 3 tipos de arhivos, ya que coloqué html, css y javacript, y por eso quizas creo el archivo con formato .javascript en lugar de .js.

-Aprendí que cursor puede crear archivos a partir de la informacion de los prompts, es decir, cuando hizo el recopilatorio de los prompts mas relevantes que se usaron en el proceso.


