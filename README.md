# React Template with Bun

Plantilla base para proyectos frontend con React y Vite, preparada para trabajar con Bun como gestor principal de dependencias y scripts. El repositorio deja una estructura clara para crecer por capas y un componente de ejemplo ya conectado para validar el flujo desde el primer arranque.

## Resumen

- Base: React 19 + Vite 8
- Lenguaje: JavaScript con JSX
- Gestor de paquetes: Bun
- Linter: ESLint
- Estado actual: plantilla funcional con componente de ejemplo renderizado desde `src/App.jsx`

## Stack

| Capa | Herramienta | Uso |
| --- | --- | --- |
| UI | React 19 | Construccion de componentes |
| Bundler | Vite 8 | Desarrollo y build de produccion |
| Runtime / Package Manager | Bun | Instalacion de dependencias y ejecucion de scripts |
| Calidad | ESLint | Validacion basica del codigo |

## Requisitos

- Bun instalado en el equipo
- Node.js compatible con el ecosistema actual de Vite y React

Verifica Bun con:

```bash
bun --version
```

## Inicio Rapido

Instalar dependencias:

```bash
bun install
```

Levantar entorno de desarrollo:

```bash
bun run dev
```

Generar build de produccion:

```bash
bun run build
```

Previsualizar la build generada:

```bash
bun run preview
```

Ejecutar lint:

```bash
bun run lint
```

## Scripts Disponibles

| Script | Descripcion |
| --- | --- |
| `bun run dev` | Inicia el servidor de desarrollo con Vite |
| `bun run build` | Genera la salida de produccion en `dist/` |
| `bun run preview` | Sirve localmente la build producida |
| `bun run lint` | Ejecuta ESLint sobre el proyecto |

## Estructura del Proyecto

```text
react-plantilla/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- EjemploComponente.jsx
|   |   |-- HeroDisplay.jsx
|   |   |-- LinkPill.jsx
|   |   `-- ResourcePanel.jsx
|   |-- config/
|   |-- hooks/
|   |-- layouts/
|   |-- pages/
|   |-- router/
|   |-- services/
|   |-- styles/
|   |   |-- EjemploComponente.css
|   |   |-- global.css
|   |   `-- home.css
|   |-- types/
|   |-- utils/
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- .env.example
|-- bun.lock
|-- eslint.config.js
|-- index.html
|-- package.json
`-- vite.config.js
```

## Organizacion por Carpetas

| Ruta | Responsabilidad |
| --- | --- |
| `src/assets` | Recursos estaticos importados desde la aplicacion |
| `src/components` | Componentes reutilizables de interfaz |
| `src/config` | Lectura de configuracion y variables de entorno |
| `src/hooks` | Hooks personalizados |
| `src/layouts` | Estructuras compartidas entre vistas |
| `src/pages` | Pantallas o vistas principales |
| `src/router` | Punto de entrada del flujo de navegacion |
| `src/services` | Datos base, integraciones o acceso a servicios |
| `src/styles` | Estilos globales y estilos por modulo |
| `src/types` | Tipado opcional con JSDoc y contratos simples |
| `src/utils` | Helpers y funciones utilitarias |

## Flujo de Arranque

El flujo principal del proyecto es directo:

1. `src/main.jsx` monta la aplicacion en el DOM.
2. `src/App.jsx` define el punto de entrada de la UI.
3. Actualmente `src/App.jsx` renderiza `src/components/EjemploComponente.jsx`.

Esto deja una base simple para empezar a construir sin depender de una configuracion adicional.

## Componente de Ejemplo

El componente de ejemplo existe para validar que la plantilla esta funcionando correctamente desde el primer momento. Incluye:

- un contador
- un campo de texto controlado
- un cambio de estado activo/inactivo
- estilos propios en `src/styles/EjemploComponente.css`

Si vas a convertir esta plantilla en un proyecto real, normalmente el siguiente paso es reemplazar ese componente por tu pagina inicial o reenrutar `src/App.jsx` hacia tu estructura de paginas.

## Variables de Entorno

Vite expone en frontend unicamente variables con prefijo `VITE_`. El repositorio incluye un archivo de referencia:

- `.env.example`

Ejemplo:

```env
VITE_APP_NAME=Front React Template
VITE_APP_DESCRIPTION=Plantilla base para proyectos frontend con React y Vite.
VITE_DOCS_URL=https://react.dev/
```

Uso recomendado:

1. Crear un archivo `.env` local a partir de `.env.example`.
2. Mantener secretos fuera del repositorio.
3. Reiniciar el servidor de desarrollo cuando cambien variables que no se reflejen automaticamente.

## Bun como Fuente de Verdad

Este proyecto esta orientado a Bun. Por consistencia:

- usa `bun install` para instalar dependencias
- usa `bun run ...` para ejecutar scripts
- conserva `bun.lock` como lockfile principal

Si aparece un `package-lock.json`, significa que en algun momento se corrio `npm install`. En ese caso, lo recomendable es eliminar ese archivo para no mezclar gestores.

## Build y Carpeta `dist`

Cuando ejecutas:

```bash
bun run build
```

Vite genera la carpeta `dist/`, que contiene la salida lista para despliegue. Piensala como el artefacto final compilado del frontend:

- HTML final
- bundles de JavaScript
- CSS procesado
- assets optimizados

`src/` es el codigo fuente; `dist/` es el resultado listo para publicar.

## Recomendaciones para Extender la Plantilla

1. Reemplazar `EjemploComponente.jsx` por tu flujo real.
2. Definir paginas en `src/pages`.
3. Mover datos o integraciones a `src/services`.
4. Centralizar constantes y configuracion en `src/config`.
5. Mantener estilos compartidos en `src/styles`.

## Validacion Recomendada

Antes de publicar cambios:

```bash
bun run lint
bun run build
```

## Estado del Repositorio

La plantilla fue simplificada para trabajar con una sola aplicacion en la raiz del proyecto, sin carpetas duplicadas ni repositorios anidados. Eso hace que Git, Bun y el editor trabajen sobre una unica fuente de verdad.
