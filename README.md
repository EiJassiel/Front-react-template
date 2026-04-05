# Front React Template

Plantilla base para desarrollar aplicaciones frontend con React, Vite y JSX. El proyecto está organizado para servir como punto de partida real: mantiene un ejemplo funcional, separa responsabilidades por carpetas y deja preparada una configuración simple de variables de entorno.

## Objetivo

Esta plantilla busca ofrecer una base limpia para iniciar proyectos frontend sin depender de TypeScript. Incluye una estructura pensada para escalar, un ejemplo visual ya conectado y una documentación clara para que pueda subirse a GitHub como repositorio plantilla.

## Tecnologías

- React 19
- Vite 8
- Bun
- JavaScript con JSX
- ESLint

## Requisitos

- Bun instalado (https://bun.sh)

## Instalación

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
│   │   └── MainSection.jsx
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

## Descripción de carpetas

- `src/components`: componentes reutilizables de interfaz de usuario
- `src/config`: configuración central del proyecto, como lectura de variables de entorno
- `src/layouts`: layouts compartidos entre páginas
- `src/pages`: vistas principales de la aplicación
- `src/styles`: estilos globales y estilos por componente
- `public`: recursos estáticos públicos como favicon

## Flujo de la aplicación

El arranque principal ocurre en `src/main.jsx`. Ese archivo monta `src/App.jsx`, que renderiza la página principal. Actualmente renderiza `src/pages/HomePage.jsx`, donde vive el ejemplo principal de la plantilla.

La página de inicio utiliza:

- Componentes de interfaz para la estructura visual
- Estilos CSS para el diseño
- `src/config/env.js` para leer variables de entorno

## Variables de entorno

El proyecto usa variables con prefijo `VITE_`, que es el formato requerido por Vite para exponer valores al frontend.

## Archivo de variables de entorno

El proyecto incluye un archivo `.env.example` con las siguientes variables disponibles:

```
VITE_APP_NAME
VITE_APP_DESCRIPTION
VITE_DOCS_URL
VITE_USE_TEMPLATE_URL
VITE_CODESPACE_URL
```

Para usar estas variables:

1. Copia `.env.example` como `.env` si todavía no existe
2. Modifica los valores `VITE_...` según tu proyecto
3. Reinicia el servidor si algún valor no se refleja automáticamente

## Personalización recomendada

Para convertir esta plantilla en un proyecto real, normalmente querrás hacer estos cambios:

1. Agregar recursos estáticos en `public/` (favicon, imágenes, etc.)
2. Editar la página inicial en `src/pages/HomePage.jsx`
3. Crear nuevas páginas dentro de `src/pages`
4. Agregar nuevos componentes en `src/components`
5. Crear carpeta `src/utils/` para funciones utilitarias si es necesario

## Convenciones del proyecto

- El proyecto usa `JSX`, no TypeScript
- Los nombres de variables de entorno deben empezar por `VITE_`
- La estructura está diseñada para crecer sin mezclar lógica, estilos y vistas en un solo archivo

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
```