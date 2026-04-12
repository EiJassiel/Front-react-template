# Front React Template

Plantilla base para desarrollar aplicaciones frontend con React, Vite y Bun. El proyecto está organizado para servir como punto de partida profesional: mantiene un ejemplo funcional con tres ejemplos interactivos que demuestran conceptos básicos de React, separa responsabilidades por carpetas y deja preparada una configuración simple de variables de entorno
E
## Objetivo

Esta plantilla busca ofrecer una base limpia para iniciar proyectos frontend sin depender de TypeScript. Incluye una estructura pensada para escalar, ejemplos visuales ya conectados y una documentación clara para que pueda subirse a GitHub como repositorio plantilla.

## Tecnologías

- React 19
- Vite 8
- Bun
- JavaScript con JSX
- ESLint

## Requisitos

- Bun instalado (https://bun.sh)

## 🚀 Instalación

### Clona el repositorio o usa esta plantilla

```bash
git clone <url-del-repositorio>
cd <nombre-del-proyecto>
```

### Instala las dependencias

```bash
bun install
```

### Inicia el servidor de desarrollo

```bash
bun run dev
```

### Abre tu navegador

Ve a `http://localhost:5173` para ver la aplicación.

## Scripts disponibles

- `bun run dev`: inicia el servidor de desarrollo con Vite
- `bun run build`: genera el build de producción
- `bun run preview`: sirve localmente el build generado
- `bun run lint`: ejecuta ESLint sobre el código del proyecto

## Estructura del proyecto

```
front-react-template/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── MainSection.jsx
│   │   └── DemoEjemplos.jsx
│   ├── config/
│   │   └── env.js
│   ├── layouts/
│   │   └── AppLayout.jsx
│   ├── pages/
│   │   └── HomePage.jsx
│   ├── styles/
│   │   ├── global.css
│   │   └── home.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
├── bun.lock
└── README.md
```

## Descripción de carpetas y archivos

| Archivo/Carpeta | Descripción |
|----------------|-------------|
| `public/favicon.svg` | Icono de la aplicación en la pestaña del navegador |
| `src/components/MainSection.jsx` | Componente principal de la página de inicio (hero, título, botones) |
| `src/components/DemoEjemplos.jsx` | Componente con tres ejemplos interactivos de React |
| `src/config/env.js` | Archivo de configuración de variables de entorno |
| `src/layouts/AppLayout.jsx` | Layout base que envuelve las páginas |
| `src/pages/HomePage.jsx` | Página principal de la aplicación |
| `src/styles/global.css` | Estilos globales y variables CSS |
| `src/styles/home.css` | Estilos específicos de la página de inicio |
| `src/App.jsx` | Componente raíz de la aplicación |
| `src/main.jsx` | Punto de entrada de React (monta la app) |
| `src/index.css` | Estilos base del proyecto |
| `.env.example` | Archivo de referencia para variables de entorno |
| `eslint.config.js` | Configuración de ESLint |
| `index.html` | Archivo HTML principal |
| `package.json` | Dependencias y scripts del proyecto |
| `vite.config.js` | Configuración de Vite |
| `bun.lock` | Control de versiones de dependencias |

## Ejemplos interactivos

La plantilla incluye una sección de ejemplos interactivos que demuestra tres conceptos básicos de React:

### 1. Contador (useState)

- Un contador que se incrementa al hacer click
- Ejemplo de uso de `useState` para gestionar estado
- El valor se actualiza automáticamente en la vista

### 2. Input (two-way binding)

- Un campo de texto donde puedes escribir tu nombre
- Ejemplo de binding bidireccional: el input refleja el estado y el estado refleja el input
- El texto "Hola, {nombre}" se actualiza en tiempo real

### 3. Lista dinámica (.map)

- Una lista que puedes modificar dinámicamente
- Agregar nuevos elementos desde el input
- Eliminar elementos con el botón ✕
- Ejemplo de renderizado de listas con `.map()`
- Validación para evitar duplicados

### Cómo acessar los ejemplos

1. Ve a `http://localhost:5173`
2. Click en el botón "Mostrar ejemplos"
3. Interactúa con los tres ejemplos

## Flujo de la aplicación

El arranque principal ocurre en `src/main.jsx`. Ese archivo monta `src/App.jsx`, que renderiza la página principal. Actualmente renderiza `src/pages/HomePage.jsx`, donde vive el ejemplo principal de la plantilla.

La página de inicio utiliza:

- `MainSection.jsx` para el contenido del hero
- `DemoEjemplos.jsx` para la sección de ejemplos interactivos
- `AppLayout.jsx` para el layout base
- `src/config/env.js` para leer variables de entorno
- `src/styles/` para los estilos de la aplicación

## Variables de entorno

El proyecto usa variables con prefijo `VITE_`, que es el formato requerido por Vite para exponer valores al frontend.

### Archivo de variables de entorno

El proyecto incluye un archivo `.env.example` con las siguientes variables disponibles:

```
VITE_APP_NAME
VITE_APP_DESCRIPTION
VITE_DOCS_URL
VITE_USE_TEMPLATE_URL
VITE_CODESPACE_URL
```

### Cómo usar las variables

1. Copia `.env.example` como `.env` si todavía no existe
2. Modifica los valores `VITE_...` según tu proyecto
3. Reinicia el servidor si algún valor no se refleja automáticamente

## Personalización recomendada

Para convertir esta plantilla en un proyecto real, normalmente querrás hacer estos cambios:

1. Agregar recursos estáticos en `public/` (favicon, imágenes, etc.)
2. Editar la página inicial en `src/pages/HomePage.jsx`
3. Crear nuevas páginas dentro de `src/pages`
4. Agregar nuevos componentes en `src/components`
5. Modificar los textos en `src/config/env.js`

## Convenciones del proyecto

- El proyecto usa `JSX`, no TypeScript
- Los nombres de variables de entorno deben empezar por `VITE_`
- La estructura está diseñada para crecer sin mezclar lógica, estilos y vistas en un solo archivo
- Los estilos usan variables CSS para temas claro/oscuro (según preferencia del sistema)

## Publicación como plantilla en GitHub

Si vas a usar este repositorio como plantilla:

1. Mantén `.env.example` con valores seguros y genéricos
2. No subas `.env` al repositorio (ya incluido en .gitignore)
3. Ajusta este `README.md` con el nombre final del proyecto
4. Reemplaza el contenido de ejemplo por la identidad visual de tu equipo o producto

## Validación recomendada antes de publicar

```bash
bun run lint
bun run build
```e final del proyecto
4. Reemplaza el contenido de ejemplo por la identidad visual de tu equipo o producto

## Validación recomendada antes de publicar

```bash
bun run lint
bun run build
```