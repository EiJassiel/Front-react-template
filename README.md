# Front React Template

Plantilla base para desarrollar aplicaciones frontend con React, Vite y JSX. El proyecto está organizado para servir como punto de partida real: mantiene un ejemplo funcional, separa responsabilidades por carpetas y deja preparada una configuración simple de variables de entorno.

## Objetivo

Esta plantilla busca ofrecer una base limpia para iniciar proyectos frontend sin depender de TypeScript. Incluye una estructura pensada para escalar, un ejemplo visual ya conectado y una documentación clara para que pueda subirse a GitHub como repositorio plantilla.

## Tecnologías

- React 19
- Vite 8
- JavaScript con JSX
- ESLint

## Requisitos

- Node.js 20 o superior recomendado
- npm

## Instalación

```bash
bun run build
```

## Ejecución en desarrollo

```bash
npm run dev
```

En Windows PowerShell puede aparecer un bloqueo por `ExecutionPolicy` al usar `npm`. Si eso ocurre, usa:

```powershell
npm.cmd run dev
```

## Scripts disponibles

- `npm run dev`: inicia el servidor de desarrollo con Vite.
- `npm run build`: genera el build de producción.
- `npm run preview`: sirve localmente el build generado.
- `npm run lint`: ejecuta ESLint sobre el código del proyecto.

## Estructura del proyecto

```text
src/
  assets/
  components/
  config/
  hooks/
  layouts/
  pages/
  router/
  services/
  styles/
  types/
  utils/
  App.jsx
  main.jsx
public/
  favicon.svg
  icons.svg
.env.example
eslint.config.js
index.html
package.json
vite.config.js
```

## Descripción de carpetas

- `src/assets`: imágenes, logos y recursos estáticos importados desde la aplicación.
- `src/components`: componentes reutilizables de interfaz.
- `src/config`: configuración central del proyecto, como lectura de variables de entorno.
- `src/hooks`: hooks personalizados.
- `src/layouts`: layouts compartidos entre páginas.
- `src/pages`: vistas principales de la aplicación.
- `src/router`: punto central desde donde se define qué página renderizar.
- `src/services`: datos de ejemplo, integraciones o lógica de acceso a servicios externos.
- `src/styles`: estilos globales y estilos por pantalla o módulo.
- `src/types`: tipado opcional con JSDoc para mejorar autocompletado y mantenimiento.
- `src/utils`: funciones utilitarias reutilizables.

## Flujo actual de la aplicación

El arranque principal ocurre en `src/main.jsx`. Ese archivo monta `src/App.jsx`, que delega en `src/router/AppRouter.jsx`. Actualmente el router renderiza `src/pages/HomePage.jsx`, donde vive el ejemplo principal de la plantilla.

La página de inicio utiliza:

- `src/components/HeroDisplay.jsx` para la parte visual superior.
- `src/components/ResourcePanel.jsx` y `src/components/LinkPill.jsx` para los bloques de enlaces.
- `src/hooks/useCounter.js` para el contador del ejemplo.
- `src/services/templateData.js` para centralizar los datos de los paneles.
- `src/config/env.js` para leer variables desde `import.meta.env`.

## Variables de entorno

El proyecto usa variables con prefijo `VITE_`, que es el formato requerido por Vite para exponer valores al frontend.

Archivo de ejemplo:

```env
VITE_APP_NAME=Front React Template
VITE_APP_DESCRIPTION=Plantilla base para proyectos frontend con React, Vite y JSX.
VITE_DOCS_URL=https://react.dev/
```

## Archivos de entorno incluidos

- `.env.example`: archivo de referencia para compartir en el repositorio.
- `.env`: archivo local para desarrollo.

## Variables incluidas por defecto

- `VITE_APP_NAME`: nombre visible de la aplicación en la portada del ejemplo.
- `VITE_APP_DESCRIPTION`: texto descriptivo que aparece debajo del título.
- `VITE_DOCS_URL`: enlace configurable para el botón principal de documentación.

## Cómo cambiar la configuración

1. Copia `.env.example` como `.env` si todavía no existe.
2. Modifica los valores `VITE_...` según tu proyecto.
3. Reinicia el servidor si algún valor no se refleja automáticamente.

## Personalización recomendada

Para convertir esta plantilla en un proyecto real, normalmente querrás hacer estos cambios:

1. Reemplazar logos e imágenes de `src/assets`.
2. Editar la página inicial en `src/pages/HomePage.jsx`.
3. Crear nuevas páginas dentro de `src/pages`.
4. Extender el router desde `src/router/AppRouter.jsx`.
5. Mover llamadas HTTP, mocks o configuración externa a `src/services`.
6. Definir helpers comunes en `src/utils`.

## Convenciones del proyecto

- El proyecto usa `JSX`, no TypeScript.
- Los nombres de variables de entorno deben empezar por `VITE_`.
- La estructura está pensada para crecer sin mezclar lógica, estilos y vistas en un solo archivo.
- `src/types` se mantiene para tipado opcional con JSDoc, no para archivos `.ts`.

## Publicación como plantilla en GitHub

Si vas a usar este repositorio como plantilla:

1. Mantén `.env.example` con valores seguros y genéricos.
2. No subas `.env` al repositorio.
3. Ajusta este `README.md` con el nombre final del proyecto.
4. Reemplaza el contenido de ejemplo por la identidad visual de tu equipo o producto.

## Validación recomendada antes de publicar

```bash
npm run lint
npm run build
```

En PowerShell, si `npm` está bloqueado:

```powershell
npm.cmd run lint
npm.cmd run build
```
