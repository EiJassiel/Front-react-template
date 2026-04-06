export const documentationContent = {
  'quick-start': {
    title: 'Inicio rapido',
    items: {
      instalacion: {
        title: 'Instalacion',
        content: `<p>Configura el proyecto en pocos pasos para empezar a trabajar sin ruido visual ni complejidad innecesaria.</p>
<ol>
  <li>Clona o descarga el repositorio.</li>
  <li>Abre una terminal dentro de la carpeta del proyecto.</li>
  <li>Ejecuta <code>npm install</code> para instalar las dependencias.</li>
</ol>
<p>Con eso tendras React, Vite y las herramientas base listas para desarrollo.</p>`,
      },
      ejecutar: {
        title: 'Ejecutar en desarrollo',
        content: `<p>Una vez instaladas las dependencias, inicia el entorno local con:</p>
<pre><code>npm run dev</code></pre>
<p>El servidor se abrira normalmente en <code>http://localhost:5173</code>.</p>
<p>Si estas en PowerShell y aparece un problema de ejecucion, usa:</p>
<pre><code>npm.cmd run dev</code></pre>
<p>El proyecto recarga los cambios automaticamente mientras editas.</p>`,
      },
    },
  },
  structure: {
    title: 'Estructura',
    items: {
      carpetas: {
        title: 'Carpetas del proyecto',
        content: `<p>La plantilla esta organizada para que cada carpeta tenga una responsabilidad clara.</p>
<pre><code>src/
|- components/   Componentes reutilizables
|- config/       Configuracion general
|- context/      Estado compartido
|- data/         Contenido de documentacion
|- pages/        Vistas principales
|- styles/       Estilos globales y modulares
|- App.jsx       Estructura base
|- main.jsx      Punto de entrada</code></pre>
<p>Esta distribucion facilita encontrar y mantener cada parte de la app.</p>`,
      },
      componentes: {
        title: 'Componentes principales',
        content: `<ul>
  <li><strong>Header:</strong> acciones principales y acceso rapido.</li>
  <li><strong>SideBar:</strong> navegacion por secciones de la documentacion.</li>
  <li><strong>MainSection:</strong> portada inicial con mensaje principal.</li>
  <li><strong>DocumentationView:</strong> contenido apilado y legible.</li>
</ul>
<p>La idea es mantener componentes pequenos, reutilizables y faciles de extender.</p>`,
      },
      flujo: {
        title: 'Flujo de la aplicacion',
        content: `<ol>
  <li><code>main.jsx</code> monta la aplicacion.</li>
  <li><code>App.jsx</code> organiza header, menu lateral y contenido.</li>
  <li>El contexto de documentacion mantiene la seccion e item activos.</li>
  <li>La portada se muestra primero y luego la documentacion elegida.</li>
</ol>
<p>Ese flujo hace que la experiencia sea continua y facil de seguir.</p>`,
      },
    },
  },
  config: {
    title: 'Configuracion',
    items: {
      env: {
        title: 'Variables de entorno',
        content: `<p>Las variables principales viven en <code>.env</code> y permiten personalizar nombre, descripcion y enlaces.</p>
<pre><code>VITE_APP_NAME=Front React Template
VITE_APP_DESCRIPTION=Plantilla profesional
VITE_DOCS_URL=https://react.dev/</code></pre>
<p>Puedes leerlas desde <code>src/config/env.js</code> para mantener la configuracion centralizada.</p>`,
      },
      temas: {
        title: 'Tema claro y oscuro',
        content: `<p>El estilo se apoya en variables CSS para que claro y oscuro compartan la misma estructura visual.</p>
<pre><code>:root {
  --bg: #f5f5f7;
  --surface: #ffffff;
  --text: #4b5563;
}</code></pre>
<p>Asi el cambio de tema se siente consistente y sin saltos bruscos.</p>`,
      },
      'css-modules': {
        title: 'CSS Modules',
        content: `<p>Los estilos locales se manejan con CSS Modules para evitar conflictos entre componentes.</p>
<pre><code>import styles from '../styles/Header.module.css'

<header className={styles.header}>...</header></code></pre>
<p>Es una forma simple de mantener orden sin depender de nombres globales largos.</p>`,
      },
    },
  },
  development: {
    title: 'Desarrollo',
    items: {
      'crear-comp': {
        title: 'Crear componentes',
        content: `<p>Para agregar un componente nuevo, crea el archivo JSX en <code>src/components</code> y su modulo CSS correspondiente en <code>src/styles</code>.</p>
<pre><code>export default function MiComponente() {
  return <section>Contenido</section>
}</code></pre>
<p>Empieza por una estructura corta y agrega complejidad solo cuando haga falta.</p>`,
      },
      estilos: {
        title: 'Agregar estilos',
        content: `<p>Usa variables globales para colores, bordes y tipografia. Eso mantiene una interfaz uniforme.</p>
<pre><code>.bloque {
  padding: 1.25rem;
  border: 1px solid var(--border);
  background: var(--surface);
}</code></pre>
<p>Conviene reservar las animaciones para transiciones suaves y utiles.</p>`,
      },
      paginas: {
        title: 'Agregar paginas',
        content: `<p>Si necesitas nuevas vistas, colocalas en <code>src/pages</code> y montalas desde la estructura principal.</p>
<p>Mantener la portada, la navegacion y la documentacion separadas hace mas sencillo escalar la plantilla.</p>`,
      },
    },
  },
  deploy: {
    title: 'Deploy',
    items: {
      build: {
        title: 'Build de produccion',
        content: `<p>Antes de publicar, genera la version optimizada:</p>
<pre><code>npm run build</code></pre>
<p>Esto crea la carpeta <code>dist</code> con los archivos listos para despliegue.</p>`,
      },
      desplegar: {
        title: 'Desplegar en Netlify o Vercel',
        content: `<p>Ambas plataformas detectan facilmente proyectos Vite.</p>
<ol>
  <li>Conecta tu repositorio.</li>
  <li>Usa el comando de build por defecto.</li>
  <li>Publica la carpeta <code>dist</code>.</li>
</ol>
<p>Es la opcion mas directa para poner la plantilla en linea.</p>`,
      },
      'gh-pages': {
        title: 'GitHub Pages',
        content: `<p>Si vas a publicar en GitHub Pages, recuerda configurar la propiedad <code>base</code> en Vite.</p>
<pre><code>export default {
  base: '/nombre-del-repo/',
}</code></pre>
<p>Despues de construir, publica el contenido de <code>dist</code> en la rama correspondiente.</p>`,
      },
    },
  },
}
