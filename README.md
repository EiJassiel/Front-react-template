# Front React Template

Plantilla profesional para desarrollar aplicaciones frontend con React, Vite y JavaScript. Incluye un layout moderno con header fijo, sidebar de navegación, y una estructura escalable lista para producción.

## Objetivo

Ofrecer una base sólida y moderna para iniciar proyectos React sin TypeScript. Con componentes reutilizables, CSS Modules para estilos locales, y documentación integrada.

## Características principales

- ✅ **Header fijo** en la parte superior
- ✅ **Sidebar desplegable** con navegación
- ✅ **Layout responsivo** con CSS Grid
- ✅ **CSS Modules** para estilos locales
- ✅ **Tema claro/oscuro** automático
- ✅ **Variables de entorno** integradas
- ✅ **Mobile-first** responsive

## Tecnologías

- **React 19** - Librería de UI
- **Vite 8** - Build tool rápido
- **JavaScript/JSX** - Sin TypeScript
- **CSS Modules** - Estilos aislados
- **ESLint** - Linting

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

Archivo `.env` para desarrollo:

```env
VITE_APP_NAME=Front React Template
VITE_APP_DESCRIPTION=Plantilla profesional con React y Vite
VITE_DOCS_URL=https://react.dev/
VITE_USE_TEMPLATE_URL=https://github.com/...
VITE_CODESPACE_URL=https://github.dev/...
```

Acceso en componentes:

```javascript
import env from '../config/env'

console.log(env.appName)          // "Front React Template"
console.log(env.docsUrl)         // "https://react.dev/"
```

## CSS Modules

Este proyecto usa **CSS Modules** para estilos locales sin conflictos:

```javascript
// Header.jsx
import styles from '../styles/Header.module.css'

<header className={styles.header}>
  <h1 className={styles.title}>Título</h1>
</header>
```

Ventajas:
- ✅ Estilos aislados por componente
- ✅ Sin conflictos de nombres
- ✅ Mantenibilidad mejorada
- ✅ Fácil refactoring

## Build y despliegue

### Generar build de producción

```bash
npm run build
```

Genera carpeta `dist/` lista para:
- **Netlify**: Arrastra la carpeta a Netlify
- **Vercel**: Conecta el repo (detecta automáticamente)
- **GitHub Pages**: Sube contenido de `dist/`
- **Servidor estático**: Sirve desde `dist/`

### Preview local del build

```bash
npm run preview
```

## Validación antes de publicar

```bash
npm run lint
npm run build
```

## Next steps - Extensión del proyecto

### Agregar una nueva página

```javascript
// src/pages/MiPagina.jsx
export default function MiPagina() {
  return <div>Mi página</div>
}
```

### Agregar un componente con estilos

```javascript
// src/components/MiComponente.jsx
import styles from '../styles/MiComponente.module.css'

export default function MiComponente() {
  return <div className={styles.container}>...</div>
}
```

## Convenciones

- ✅ Componentes: `PascalCase`
- ✅ Variables de entorno: `VITE_NOMBRE`
- ✅ Estilos: `NombreComponente.module.css`
- ✅ Imports absolutos preferidos donde sea posible
- ✅ Una responsabilidad por componente

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
