Investigacion :

Crea una presentación de Bootstrap que solvente las siguientes cuestiones:
- ¿Qué es Bootstrap?¿Para qué sirve?
* El framework combina CSS y JavaScript para estilizar los elementos de una página HTML. Permite mucho más que, simplemente, cambiar el color de los botones y los enlaces.
Esta es una herramienta que proporciona interactividad en la página, por lo que ofrece una serie de componentes que facilitan la comunicación con el usuario, como menús de navegación, controles de página, barras de progreso y más.
Además de todas las características que ofrece el framework, su principal objetivo es permitir la construcción de sitios web responsive para dispositivos móviles.
Esto significa que las páginas están diseñadas para funcionar en desktop, tablets y smartphones, de una manera muy simple y organizada.
En resumen : es un framework que nos ayuda a crear sitios web responsive con faciliadad.
             Boostrap nos da acceso a un monton de componentes prefefinidos que podremos incorporar en nuestros sitios.
             Boostrap tambien trae un sistema de grid (cuadricula) que nos ayuda a construir nuestros diseños personalizados 

- ¿Por qué usar Bootstrap?
* Permite que los desarrolladores web ahorren tiempo gracias a que aprovechan el código reutilizable para los elementos como: barras de navegación, menús, etiquetas, alertas, listas y complementos de JavaScript entre otros.

- Características de Bootstrap
*  Ofrecer un almplio abanico de de herramientas y funciones, de manera que los usuarios puedan crear prácticamente cualquier tipo de sitio web haciendo uso de los mismo. 

- Ventajas y desventajas de usar Bootstrap.
* VENTAJAS :
            { Puedes diseñar una web jugando con sus elementos compuestos por diferentes combinaciones de HTML, CSS y Javascript.
            { Utiliza HTML5, CSS3, jQuery o GitHub, entre otros.
            { Incluye Grid system: muy útil para maquetar por columnas.
            { Sus plantillas son de sencilla adaptación responsive.
            { Se integra con librerías JavaScript.
            { Usa Less: un lenguaje de las hojas de estilo CSS preparado para enriquecer los estilos de la web.
            { Cuenta con una documentación completa que te puede sacar de apuros rápidamente.
            { Facilita enormemente el diseño de interfaces y además incluye por defecto una plantilla bastante optimizada.
* DESVENTAJAS:
            { Se recomienda trabajar con Bootstrap desde el inicio de un proyecto, ya que si quieres incluir el framework en un trabajo ya iniciado algunos estilos podrían “romperse” y se tendría que ajustar a como se tenia en un principio, y eso puede ser un poco tedioso y molesto.
            { Es complicado, cambiar de versión si has realizado modificaciones profundas.
            { No es ligero, y además, para algunas funcionalidades, será necesario tener que usar Javascript y jQuery.
            {Debes adaptar tu diseño a un grid de 12 columnas, que se modifican según el dispositivo. Aquí empiezan los problemas, Bootstrap por defecto te trae anchos, márgenes y altos de línea, y realizar cambios específicos.            

- Cómo instalar o implementar Bootstrap en mi proyecto.
* Descargando los archivos del repositorio en su página web y después añadir la ruta donde tienes alojados en tu HTML.

- ¿Se puede implementar responsive con Bootstrap? Si es así, ¿podrías explicar cómo funciona y poner un ejemplo?
* Boostrap es un de los principales frameworks de desarrollo de entornos web "responsive" (es decir,que se adaptan automaticamente al tamaño de la pantalla que utiliza cada usuario).
Existe una clase llamda " img-fluid " que permite hacer que las imágenes sean responsive.
{ COMO FUNCIONA Y UN EJEMPLO:
                             La clase llamda img-fluid tabaja con imagenes que necesitan adaptarse a diferentes dispositivos y resoluciones.
                             Se ultiliza añadiendo la etiqueta class al elemento <img> en tu codigo de HTML.
                             EJEMPLO: <img src="imagen.jpg" class="img-fluid" alt="Mi imagen">

- ¿Que es un componente de Bootstrap? Pon un ejemplo.
* Son justamente los componentes que proporciona la página para brindar una buena user experience e interacción del usuario en una página web, como barras de navegación, ventanas emergentes, menú desplegable, íconos, botones, formularios prediseñados e incluso cambio de tamaño para varios elementos DOM.                            
{ EJEMPLO: 
          Navbar: uno de los componentes de Bootstrap más personalizables e importantes dentro de un sitio web dinámico. La navbar es una barra de navegación que puede tener formas infinitamente diferentes de interactuar y mostrarla, tanto que el framework ha reservado una categoría separada llamada Bootstrap navbar templates:
          <nav class = "navbar"><!—Code your navigation DOM elements --></nav>      

- ¿Hay muchos tipos de diseños en Bootstrap? Si los hay, explícalos.
// FALTA TERMINAR.

- ¿Cuáles son los diferentes tipos de botones en Bootstrap? Pon ejemplos.
* { Estilos de botones: En primer lugar debemos incluir la clase btn y despues podemos combinarla con el resto de clases. 
  { Botones con contorno: Clase para darle contorno a los botones : ( btn-outline ).
  { Botones y sus tamaños: Disponemos de diferentes clases para definir el tamaño de los botones ( btn-sm , btn-lg , btn - block ).
  { Botones activados y desactivados: Para que un boton aparezca activado o desactivado utilizamos las siguentes clases: 
(.active o .disabled) EJEMPLO: BotónActivado: <button type="button" class="btn btn-primary active">Botón activado</button> 
                               BotónDesactivado: <button type="button" class="btn btn-primary" disabled>Botón desactivado</button>
  { Grupo de botones: Para hacer grupos de botones de forma horizontal utilizamos ( btn-group ) y de forma vertical utilizamos la clase ( btn-group-vertical ). EJEMPLO:  <div class="btn-group">
                                        <button type="button" class="btn btn-info">Diseño</button>                 
                                    </div> 
                                    <div class="btn-group-vertical">
                                        <button type="button" class="btn btn-info">Diseño</button>
                                    </div>    
  { Botones desplegables o dropdown: <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown button  
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>                                   

- ¿Qué es un Carousel de Bootstrap? Pon un ejemplo.
* Es un componente interactivo que muestra una serie de elementos, como imagenes, texto o contenido multimedia, de forma rotativa y automatica en una pagina. 
{ EJEMPLO:
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

- ¿Qué es un spinner de Bootstrap? Pon un ejemplo.
*  Los spinners se pueden utilizar para mostrar el estado de carga de sus proyectos.
{ EJEMPLO: 
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

- ¿Qué es un navBar de Bootstrap? Pon un ejemplo
*  Es la barra de navegacion:
{ EJEMPLO:
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

- ¿Qué es un modal de Bootstrap? Pon un ejemplo.
* 
             