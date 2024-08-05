# ATC Dream Match

## Intro

¿Alguna vez soñaste con ver un partido de fútbol en donde se enfrenten tus jugadores favoritos? Imaginate poder armar dos equipos de 5 jugadores cada uno, en donde no tengas ninguna limitación... posición, presupuesto, contrato, club, edad... tu mente es tu límite.

## React.js Challenge

En **Alquila tu Cancha** deseamos crear una web app `[responsive desktop y mobile]` que se pueda crear **"El partido de tus sueños"**, un partido de fútbol 5 en donde se enfrenten tus 10 jugadores favoritos. ¿Cuáles son las funcionalidades esperadas? Allí vamos...

### Funcionalidades

- Darle la bienvenida al usuario
- Poder listar los equipos creados
- Crear dos equipos
- Darle un nombre a cada equipo y poder editarlo si es necesario
- Poder eliminar un equipo creado
- Impedir la creación de más de dos equipos
- Ver el detalle de un equipo (listado de jugadores vinculado)
- Poder vincular jugadores a un equipo
- Poder comunicar gráficamente cuando ambos equipos están "formados y completos"

### Precondiciones

- Se entiende como equipo formado a un equipo creado y nombrado.
- Se entiende como equipo completo al equipo que tiene 5 jugadores.
- El listado de jugadores disponible debe cargarse de la API https://apifootball.com/documentation/
- No puede crearse más de 2 equipos.
- No puede haber más de 5 jugadores en cada equipo.
- No puede repetirse un mismo jugador en el equipo ni en el equipo adversario.

### Stack

- Next.js con typescript (Obligatorio)
- Docker (Preferentemente)
- Tailwind CSS (Obligatorio)
- Git (Obligatorio)
- y todas las otras cosas que creas conveniente!

### Indicaciones
* Para levantar el proyecto situate en el root, carpeta `/dream_match`.
* Instala las dependencias con tu manejador de paquetes: `npm i` o `yarn`.
* Corre el proyecto usando tu manejador mas dev: `npm run dev` o `yarn dev`.

__IMPORTANTE:__
Vas a necesitar crear un archivo de variables de entorno(.env) en el root del proyecto con la siguiente clave: `NEXT_PUBLIC_API_KEY` y guardar en ella la key de la API. Si no tienes una vas a tener que crearla.