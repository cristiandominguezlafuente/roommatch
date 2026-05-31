# Memoria del Proyecto: RoomMatch

## 1. Título

**RoomMatch: Plataforma Web para conectar personas con gustos compartidos para compartir piso**

## 2. Integrantes del proyecto

- **Cristian Domínguez**: Desarrollador Frontend y diseñador de la app web
- **Daniel Puente**: Desarrollador Frontend y creador de la base de datos

## 3. Objetivos

Los objetivos principales de este proyecto escolar son:

- Desarrollar una plataforma web intuitiva que permita a los usuarios encontrar personas con intereses comunes para convivir.
- Implementar un sistema de "matching" visual inspirado en Tinder, con animaciones de swipe y botones de like/nope.
- Crear una interfaz limpia, moderna y coherente en todas las páginas usando HTML, CSS y JavaScript puro.
- Integrar autenticación real de usuarios mediante Supabase.
- Aprender a gestionar el despliegue de una aplicación en un entorno de servidor.

## 4. Explicación del proyecto

RoomMatch es una aplicación web diseñada para resolver la dificultad de encontrar compañeros de piso compatibles. En lugar de centrarse solo en la habitación, el proyecto se enfoca en las afinidades entre las personas.

Inspirada en el funcionamiento de Tinder, la app permite al usuario ver perfiles de posibles compañeros y decidir si hay una buena conexión según sus intereses. Las funcionalidades desarrolladas incluyen:

- **Página de inicio**: Hero con gradiente, sección de beneficios con cards, sección de pasos "Cómo funciona" y sección CTA final.
- **Sistema de Match**: Cartas de perfil con swipe mediante arrastre de ratón. Al arrastrar a la derecha aparece un overlay verde y un corazón animado que sube. Al arrastrar a la izquierda aparece un overlay rosa y una X animada. Los botones de corazón y X también funcionan con animación.
- **Chat**: Panel dividido en lista de conversaciones a la izquierda y ventana de chat a la derecha. Hover con nombre en verde y avatar escalado.
- **Favoritos**: Lista de pisos guardados con imagen a la izquierda e información a la derecha, estilo Idealista.
- **Perfil**: Dashboard completo con portada, avatar, estadísticas, barra de progreso, actividad reciente y pisos guardados.
- **Login**: Formulario de inicio de sesión conectado a Supabase con autenticación real por email y contraseña. Muestra mensaje de error si las credenciales son incorrectas.
- **Header y footer**: Comunes a todas las páginas. Header sticky con navegación activa. Footer oscuro con enlaces, legal y redes sociales.

## 5. Material del proyecto

### Hardware:

- Ordenadores utilizados durante las horas de clase para el desarrollo.
- Servidor (Raspberry Pi) para realizar las pruebas de despliegue.

### Software:

- **Editor**: Visual Studio Code para el desarrollo de todas las páginas.
- **Frontend**: HTML5, CSS3 y JavaScript vanilla sin frameworks.
- **Base de datos y autenticación**: Supabase para la gestión de usuarios y login real.
- **Iconos**: Font Awesome 6.5 para los iconos de navegación y UI.
- **Tipografía**: Google Fonts (Montserrat).
- **Control de versiones**: Git y GitHub para el código.
- **Diseño asistido por IA**: Google Stitch para la generación y prototipado de interfaces de usuario.
- **Asistente de desarrollo IA**: Claude.ai para la resolución de dudas, generación de código y apoyo durante el desarrollo.

## 6. Desarrollo y despliegue

El desarrollo se ha realizado siguiendo los aprendizajes del curso. El frontend está compuesto por páginas HTML con CSS estructurado por secciones y JavaScript para la interactividad.

Cada página tiene su propio archivo CSS y comparte un `layout.css` global con los estilos del header, footer y body. El JS del match está en `js/match.js` y la configuración de Supabase en `js/supabase.js` para no repetir las claves en cada página.

Para el despliegue, se ha configurado un servidor Raspberry Pi con Nginx para que la aplicación sea accesible desde la red local.

## 7. Planificación (historias, sprints y diagrama de Gantt)

### Historias de usuario:

- Como usuario, quiero crear un perfil con mis gustos para encontrar compañeros similares.
- Como usuario, quiero ver perfiles de personas y hacer swipe para decidir si me interesan.
- Como usuario, quiero iniciar sesión con mi email y contraseña de forma segura.
- Como usuario, quiero guardar pisos favoritos y consultarlos más tarde.
- Como usuario, quiero chatear con las personas con las que he hecho match.

### Sprints:

- **Sprint 1 — Planificación**: Creación del diagrama de Gantt y diseño inicial de la estructura de páginas.
- **Sprint 2 — Layout global**: Desarrollo del header, footer y estilos globales comunes a todas las páginas.
- **Sprint 3 — Página de inicio**: Hero, sección de beneficios, pasos y CTA.
- **Sprint 4 — Login**: Formulario de inicio de sesión con integración de Supabase para autenticación real.
- **Sprint 5 — Match**: Sistema de cartas con swipe, animaciones de like/nope y botones funcionales con JavaScript.
- **Sprint 6 — Chat**: Panel de mensajes con lista de conversaciones y ventana de chat.
- **Sprint 7 — Favoritos**: Lista de pisos guardados con diseño tipo Idealista.
- **Sprint 8 — Perfil**: Dashboard de usuario con estadísticas, actividad y pisos guardados.
- **Sprint 9 — Revisión y animaciones**: Hovers, transiciones y animaciones en todas las páginas para mejorar la experiencia de usuario.
- **Sprint 10 — Documentación y entrega**: Capturas de pantalla, memoria del proyecto y revisión final.

### Diagrama de Gantt:

_[Insertar imagen del diagrama de Gantt]_

## 8. Webgrafía

- Documentación oficial de Supabase: https://supabase.com/docs
- Documentación de Font Awesome: https://fontawesome.com
- Google Fonts (Montserrat): https://fonts.google.com
- Referencia de CSS en MDN: https://developer.mozilla.org/es/docs/Web/CSS
- Referencia de JavaScript en MDN: https://developer.mozilla.org/es/docs/Web/JavaScript
- Google Stitch: https://stitch.withgoogle.com
- Claude.ai: https://claude.ai
- Inspiración de diseño: Idealista, Tinder

## 9. Anexos

- Capturas de pantalla de la interfaz terminada (inicio, match, chat, favoritos, perfil y login).
- Enlace al repositorio de código fuente en GitHub: _[Insertar enlace]_
- Credenciales de prueba para el login: _[Insertar email y contraseña de demo]_