# RoomMatch: Plataforma Web para conectar personas con gustos compartidos para compartir piso

## 1. Título

**RoomMatch: Plataforma Web para conectar personas con gustos compartidos para compartir piso**

## 2. Integrantes del proyecto

- **Cristian Domínguez**: Desarrollador Frontend y diseñador de la app web
- **Daniel Puente**: Desarrollador Frontend y creador de la base de datos

## 3. Objetivos

Los objetivos principales que nos hemos propuesto para este proyecto escolar son:

- Desarrollar una plataforma web intuitiva y atractiva que permita a los usuarios encontrar personas con intereses comunes para convivir.
- Implementar un sistema de "matching" visual inspirado en Tinder, con animaciones de swipe y botones de like/nope.
- Crear una interfaz limpia, moderna y coherente en todas las páginas usando HTML, CSS y JavaScript puro, sin depender de frameworks externos.
- Integrar un sistema de autenticación real de usuarios (registro e inicio de sesión) mediante Supabase.
- Diseñar un modelo de monetización premium simulado para añadir valor comercial al proyecto.
- Aprender a gestionar el despliegue completo de una aplicación web en un entorno de servidor real.

## 4. Explicación del proyecto

RoomMatch es una aplicación web que hemos diseñado para resolver un problema muy común entre los estudiantes y jóvenes: la dificultad de encontrar compañeros de piso compatibles. En lugar de centrar la búsqueda solo en las características de la habitación, nuestro proyecto pone el foco en las afinidades y la convivencia entre las personas.

Inspirada en el funcionamiento de Tinder, la app permite al usuario ver perfiles de posibles compañeros y decidir si hay una buena conexión según sus intereses. Las funcionalidades que hemos desarrollado y distribuido en nuestras páginas web son:

- **Página de inicio (`index.html`)**: Es la carta de presentación de la web. Incluye un Hero con gradiente llamativo, una sección de beneficios estructurada con cards, una guía de pasos de "Cómo funciona" y una sección de llamada a la acción (CTA) final.
- **Registro (`register.html`)**: Formulario para nuevos usuarios donde recopilamos sus datos básicos, email y contraseña, conectado directamente con Supabase para dar de alta las cuentas en la base de datos.
- **Login (`login.html`)**: Formulario de inicio de sesión conectado a Supabase con autenticación real. Muestra mensajes de error si las credenciales son incorrectas y da acceso al resto de la app.
- **Sistema de Match (`match.html`)**: La pantalla principal de la experiencia de usuario. Cartas de perfil con sistema de _swipe_ mediante arrastre de ratón. Al arrastrar a la derecha aparece un overlay verde y un corazón animado; al arrastrar a la izquierda, un overlay rosa y una X animada. Los botones inferiores de corazón y X también funcionan con estas mismas animaciones.
- **Chat (`chat.html`)**: Panel interactivo dividido en una lista de conversaciones activas a la izquierda y la ventana de chat a la derecha para hablar con nuestros _matches_. Incluye efectos visuales como hovers con nombres en verde y avatares que se escalan.
- **Perfil del Usuario (`perfil.html`)**: Un dashboard completo del usuario que incluye foto de portada, avatar, estadísticas de uso, barra de progreso del perfil, actividad reciente y la sección de pisos guardados (estilo Idealista) para tener controladas las viviendas de interés.
- **Planes Premium (`premium.html`)**: Una sección dedicada a la monetización de la plataforma, donde mostramos los diferentes planes de suscripción (mensual, semestral, anual) con tablas comparativas de ventajas, como swipes ilimitados o ver a quién le gustas.
- **Header y footer**: Elementos comunes que hemos maquetado para que se repitan en todas las páginas. El header es interactivo y sticky (se queda arriba al hacer scroll) con un indicador de navegación activa, y el footer es oscuro con enlaces legales, de navegación y redes sociales.

## 5. Material del proyecto

### Hardware

- Ordenadores del aula utilizados durante las horas de clase para programar.
- Servidor (Raspberry Pi) para realizar las pruebas de despliegue en red local.

### Software

- **Editor de código**: Visual Studio Code, organizando el proyecto en una estructura limpia de carpetas para el código fuente (`css`, `js`, `img` y los archivos HTML principales).
- **Frontend**: HTML5, CSS3 y JavaScript vanilla (puro) sin usar frameworks como React o Vue para demostrar nuestro dominio de las bases.
- **Base de datos y autenticación**: Supabase, que nos ha facilitado la gestión de usuarios, el registro y el login real.
- **Iconos**: Font Awesome 6.5 para los iconos de la interfaz (corazones, flechas, chats, etc.).
- **Tipografía**: Google Fonts, utilizando la fuente 'Montserrat' para darle un toque moderno.
- **Control de versiones**: Git y GitHub para trabajar en equipo sin pisarnos el código.
- **Diseño asistido por IA**: Google Stitch para la generación de ideas y el prototipado rápido de las interfaces.
- **Asistente de desarrollo IA**: Claude.ai como apoyo para resolver dudas puntuales de código, optimizar funciones de JavaScript y ayudarnos en la corrección de errores.

## 6. Desarrollo y despliegue

El desarrollo lo hemos realizado de forma incremental siguiendo los contenidos explicados en clase. Estructuramos el frontend utilizando páginas HTML independientes. Para que el diseño fuera limpio y mantenible, cada página cuenta con su propio archivo CSS específico, pero todas se apoyan en un archivo `layout.css` global que unifica los estilos del header, el footer y los contenedores principales.

En cuanto a JavaScript, hemos separado la lógica por responsabilidades: el comportamiento del swipe y las animaciones de las cartas se encuentran en `js/match.js`, mientras que la inicialización y conexión con la base de datos se centraliza en `js/supabase.js` para proteger nuestras claves y no duplicar código en cada formulario.

Para la fase de despliegue, configuramos un servidor web Nginx dentro de una Raspberry Pi, lo que nos permitió simular un entorno de producción real y comprobar que la web carga correctamente y es accesible por cualquier dispositivo conectado a la red local de pruebas.

## 7. Planificación (historias, sprints y diagrama de Gantt)

### Historias de usuario

- Como usuario, quiero registrarme e iniciar sesión de forma segura para tener mi propio perfil guardado.
- Como usuario, quiero rellenar mi perfil con mis datos, fotos y gustos para que otros puedan conocerme.
- Como usuario, quiero ver perfiles de otras personas y poder descartarlas o darles "like" mediante un sistema dinámico de cartas.
- Como usuario, quiero ver las opciones premium disponibles por si quiero mejorar mi cuenta.
- Como usuario, quiero chatear en tiempo real con las personas con las que he tenido un match para organizar la búsqueda de piso.
- Como usuario, quiero poder gestionar mis pisos guardados y ver mis estadísticas desde mi panel de control.

### Sprints de trabajo

- **Sprint 1 — Planificación y Diseño**: Ideación del proyecto, estructura de la base de datos en Supabase y reparto de tareas. Creación del diagrama de Gantt inicial.
- **Sprint 2 — Estructura Global y Maquetación Base**: Creación de la estructura de carpetas (`css`, `js`, `img`), programación del header, footer y estilos comunes (`layout.css`).
- **Sprint 3 — Landing Page (`index.html`)**: Desarrollo de la página de inicio, secciones informativas, hovers y adaptabilidad básica.
- **Sprint 4 — Autenticación (`register.html` y `login.html`)**: Diseño de los formularios y programación de los scripts de JavaScript para conectar el registro y el inicio de sesión con Supabase.
- **Sprint 5 — Núcleo de Match (`match.html`)**: Creación de la interfaz de cartas. Programación en `js/match.js` de los eventos del ratón para el efecto _swipe_, overlays de color (verde/rosa) y animaciones de los botones.
- **Sprint 6 — Sistema de Comunicación (`chat.html`)**: Maquetación del panel de mensajería de doble columna. Estilos interactivos para la lista de chats activos y simulación de la ventana de conversación.
- **Sprint 7 — Dashboard de Usuario (`perfil.html`)**: Desarrollo de la página de perfil con la visualización de datos del usuario, barras de progreso de perfil y el componente visual para los pisos guardados.
- **Sprint 8 — Página de Suscripción (`premium.html`)**: Diseño de la sección de planes de pago, maquetación de las tablas de precios y beneficios exclusivos.
- **Sprint 9 — Ajustes Finales y Pulido**: Revisión de la consistencia visual, transiciones CSS, solución de bugs de JavaScript y optimización de las llamadas a Supabase.
- **Sprint 10 — Despliegue y Documentación**: Configuración de Nginx en la Raspberry Pi, pruebas de acceso, capturas de pantalla de las páginas web terminadas y redacción de esta memoria.

## 8. Webgrafía

- Documentación oficial de Supabase: https://supabase.com/docs
- Documentación de Font Awesome: https://fontawesome.com
- Google Fonts (Montserrat): https://fonts.google.com
- Referencia de CSS en MDN: https://developer.mozilla.org/es/docs/Web/CSS
- Referencia de JavaScript en MDN: https://developer.mozilla.org/es/docs/Web/JavaScript
- Google Stitch (Prototipado): https://stitch.withgoogle.com
- Claude.ai (Asistencia en desarrollo): https://claude.ai
- Inspiración e ideas de UI/UX: Idealista y Tinder.

## 9. Anexos

- Capturas de pantalla de la interfaz de nuestra aplicación (vistas de: `index.html`, `register.html`, `login.html`, `match.html`, `chat.html`, `perfil.html` y `premium.html`).
- Enlace al repositorio de código fuente en GitHub: 
- https://github.com/cristiandominguezlafuente/roommatch
- https://cristiandominguezlafuente.github.io/roommatch/