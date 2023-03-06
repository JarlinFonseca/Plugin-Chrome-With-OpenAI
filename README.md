

# Plugin de Chrome usando  la API de OpenAI
## 📜Tabla de contenido 
1. [Descripción](#descripción)
2. [Tecnologías](#%EF%B8%8Ftecnologías)
3. [IDE](#ide)
4. [Video Explicativo](#video-explicativo)
5. [Instalación](#instalación)
6. [Autores](#autores--roles-del-proyecto)
7. [Institución Académica](#institución-académica)

## 📝Descripción

**Generate Images With IA** es una extensión de google chrome que permite generar imágenes creadas por una inteligencia artificial. 
#### ¿Cómo funciona? 


Al dar clic en el icono de la extensión ubicado en el "menú de extensiones" se abrirá un popup, en la cual solicitará al usuario que ingrese en una caja de texto un mensaje describiendo detalladamente la imagen que desea que la IA genere (prompt). A continuación, se deberá dar clic en el boton de "generate" y aparecerá la imagen descrita.

![image](https://user-images.githubusercontent.com/80492180/222330299-c32f5eeb-6558-4797-8a2f-b9bc6ec836e6.png)
![image](https://user-images.githubusercontent.com/80492180/222330627-947c113a-6231-4cc4-91aa-031590cf6b82.png)

## 🛠️Tecnologías
+ [HTML5:](https://developer.mozilla.org/es/docs/Glossary/HTML5) es un estándar que sirve como referencia del software que conecta con la elaboración de páginas web en sus diferentes versiones, define una estructura básica y un código (denominado HTML) para la definición de contenido de una página web, como texto, imágenes, vídeos, juegos, entre otros.
+ [JavaScript:](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript) es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas, muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos 2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc.
+ [CSS3:](https://desarrolloweb.com/manuales/css3.html) sirve para definir la estética de un sitio web en un documento externo y eso mismo permite que modificando ese documento (la hoja CSS) podemos cambiar la estética entera de un sitio web, el mismo sitio web puede variar totalmente de estética cambiando solo la CSS, sin tocar para nada los documentos HTML o jsp o asp que lo componen.

## 📺IDE:
Proyecto desarrollado en [Visual Studio Code](https://code.visualstudio.com/).

## 🎞Video Explicativo
Visitar el siguiente enlace para ver el [paso a paso de la extensión desarrollada](https://youtu.be/bA6liyrysA0)

## ⚙Instalación:
1. Ir a la página de extensiones ingresando a “chrome://extensions/” en una nueva pestaña y en la parte superior derecha, activar el modo desarrollador.
2. Una vez activado el modo desarrollador, se debe hacer clic en "Cargar extensión sin empaquetar", se debe buscar, seleccionar la carpeta de la extensión y dar clic en "seleccionar carpeta".
3. En este punto, la extensión ya fue instalada. Se podrá ver en el panel junto con las otras extensiones que se tengan (si es el caso).
4. Cuando se carga la extensión localmente, aparecerá en el menú de extensiones, se debe dar clic en el icono . Después, se debe fijar la extensión a la barra de herramientas para poder acceder a esta.
5. Para hacer uso de esta, se debe dar clic en el icono de la extensión donde se debería ver una ventana emergente. El siguiente paso es escribir el prompt describiendo la imagen que se desea que la extensión genere.
### Nota:
> Al momento de clonar este proyecto, deberan reemplazar donde dice API-KEY dentro de la petición a la API de OpenAI en el script.js por una API-KEY generada de su cuenta de OpenAI, por este motivo deben registrarse en OpenAI y generar su propia API-KEY, y reemplazarla en el siguiente apartado: "'Authorization': 'Bearer API-KEY'".

## 👥Autores & Roles del Proyecto


| Foto de Perfil                                                                                                         | Usuario                                                                                            | Correo institucional                                                       | Descripción de Roles                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://avatars.githubusercontent.com/u/48332117?s=96&v=4) | [@JarlinFonseca]([https://github.com/JarlinFonseca](https://github.com/JarlinFonseca))             |  [jarlinadresfb@ufps.edu.co](mailto:jarlinadresfb@ufps.edu.co)         | Gestiona de manera global el proyecto. Planifica, define los recursos, coordina y supervisa el análisis funcional y orgánico, así como también el desarrollo y la implementación del software. Gestiona técnicamente el proyecto. También realiza parte del desarrollo de la extensión. |
| ![](https://avatars.githubusercontent.com/u/80492180?v=4)           | [@YoelCastilla]([https://github.com/YoelCastilla](https://github.com/YoelCastilla))                |  [osoriojunioryoelc@ufps.edu.co](mailto:osoriojunioryoelc@ufps.edu.co) | Revisión y análisis de las especificaciones del sistema. Seguimiento detallado de todo el proceso de elaboración de la extensión con el fin de prevenir errores y fallos. Gestión de la documentación y colaboración con el equipo de trabajo.                                          |
| ![](https://avatars.githubusercontent.com/u/87248188?v=4)           | [@camilacalderon123]([https://github.com/camilacalderon123](https://github.com/camilacalderon123)) |  [angelycamilacg@ufps.edu.co](mailto:angelycamilacg@ufps.edu.co)       | Desarrollo de la presentación sencilla de la extensión para que sea agradable a la vista, intuitiva y fácil de manejar. Gestión de la documentación y colaboración con el equipo de trabajo.                                                                                            |
| ![](https://avatars.githubusercontent.com/u/70987190?v=4)           | [@camilogalvan]([https://github.com/camilogalvan](https://github.com/camilogalvan))                |  [brayancamilogj@ufps.edu.co](mailto:brayancamilogj@ufps.edu.co)       | Gestión de la documentación y colaboración con el equipo de trabajo. Creación Api envío correos. Integración Api envío de correos con el plugin.                                                                                                                                        |
| ![](https://avatars.githubusercontent.com/u/55857946?v=4)           | [@juanse50]([https://github.com/juanse50](https://github.com/juanse50))                            |  [juansebastianao@ufps.edu.co](mailto:juansebastianao@ufps.edu.co)     | Gestión de la documentación y colaboración con el equipo de trabajo. Creación Api envío correos. Integración Api envío de correos con el plugin.                                                                                                                                        |


<p align="center">
<a href="https://github.com/JarlinFonseca/Plugin-Chrome-With-OpenAI/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=JarlinFonseca/Plugin-Chrome-With-OpenAI" />
</a>


</p>

<div align="center">
    Made with https://contrib.rocks
</div>



## 🏫Institución Académica:
Universidad Francisco de Paula Santander. Proyecto desarrollado para la materia Arquitectura de Software
