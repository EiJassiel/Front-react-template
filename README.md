Plantilla React

Plantilla moderna, limpia y funcional para desarrollar aplicaciones frontend con React y JavaScript. Organizada con carpetas lógicas, lista para escalar y personalizar.

## Objetivo

Ofrecer una base sólida para iniciar proyectos React sin complejidades innecesarias. Estructura clara por responsabilidades, configuración simple y documentación directa.

## Tecnologías

- React 19
- Vite (generador de build)
- JavaScript con JSX
- ESLint

## Requisitos

- Node.js 18+ recomendado
- npm

## Instalación

```bash
npm install
```

## Inicio Rápido 🚀

1. **Clonar o usar como plantilla**:
   ```bash
   git clone <repository-url>
   cd FrontReactTemplate
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```
   
   En Windows PowerShell:
   ```powershell
   npm.cmd run dev
   ```

4. **Accede a** `http://localhost:5173`

5. **Personaliza** tu proyecto editando archivos en `src/`

## Scripts disponibles

- `npm run dev`: servidor de desarrollo
- `npm run build`: build de producción
- `npm run preview`: vista previa del build
- `npm run lint`: chequeo de código con ESLint

## Estructura

## Estructura

```
src/
  assets/          Imágenes y recursos estáticos
  components/      Componentes reutilizables
  config/          Configuración centralizada
  hooks/           Hooks personalizados
  layouts/         Layouts compartidos
  pages/           Páginas principales
  services/        Lógica de datos/APIs
  styles/          Estilos CSS
  types/           Tipado con JSDoc
  utils/           Funciones auxiliares
  App.jsx
  main.jsx
public/            Archivos públicos estáticos
.env.example       Variables de entorno de ejemplo
package.json
vite.config.js
```

## Configuración

### Variables de Entorno

1. Copia `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```

2. Editala con tus valores:
   ```env
   VITE_APP_NAME=Mi Aplicación
   VITE_APP_DESCRIPTION=Descripción de tu app
   ```

3. Las variables se cargan automáticamente en `src/config/env.js`

### Cambiar nombre del proyecto

Edita en `package.json`:
```json
{
  "name": "mi-aplicacion-react",
  "description": "Descripción de tu proyecto"
}
```

## Stack Recomendado

Tu **última fuente de verdad** es `src/pages/HomePage.jsx`

Para agregar funcionalidades:

- **Múltiples páginas**: Instala `react-router-dom` y configura en `src/App.jsx`
- **Llamadas HTTP**: Usa `fetch()` en `src/services/`
- **Estado global**: Considera Context API o una librería ligera
- **Componentes**: Crea en `src/components/`, reutiliza en `src/pages/`
- **Estilos**: Agrega en `src/styles/` o CSS modules

## Personalizar

Para que sea **tu proyecto**:

1. Reemplaza `public/favicon.svg` con tu favicon
2. Actualiza `index.html` con tu título
3. Modifica `src/pages/HomePage.jsx` con tu contenido
4. Edita `.env` con tus variables
5. Limpia carpetas innecesarias (ej: `src/hooks/` si no los usas)

## Desplegar

```bash
npm run build
```

Genera una carpeta `dist/` lista para:
- Netlify
- Vercel
- GitHub Pages
- Cualquier servidor estatico

## Notas

- `src/router/` está disponible como referencia si necesitas React Router
- No requiere TypeScript, pero JSDoc opcionales están disponibles
- ESLint incluido para mantener código consistente
- Compatible con npm, yarn, bun, pnpm
