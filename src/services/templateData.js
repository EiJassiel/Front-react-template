import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import env from '../config/env'

/** @typedef {import('../types/template.types').TemplateGroup} TemplateGroup */

/** @type {TemplateGroup[]} */
export const templateGroups = [
  {
    id: 'docs',
    iconHref: '/icons.svg#documentation-icon',
    title: 'Documentation',
    description: 'Your questions, answered',
    links: [
      {
        href: 'https://vite.dev/',
        imageSrc: viteLogo,
        imageAlt: '',
        label: 'Explore Vite',
      },
      {
        href: env.docsUrl,
        imageSrc: reactLogo,
        imageAlt: '',
        label: 'Learn more',
      },
    ],
  },
  {
    id: 'social',
    iconHref: '/icons.svg#social-icon',
    title: 'Connect with us',
    description: 'Join the Vite community',
    links: [
      {
        href: 'https://github.com/vitejs/vite',
        iconHref: '/icons.svg#github-icon',
        label: 'GitHub',
      },
      {
        href: 'https://chat.vite.dev/',
        iconHref: '/icons.svg#discord-icon',
        label: 'Discord',
      },
      {
        href: 'https://x.com/vite_js',
        iconHref: '/icons.svg#x-icon',
        label: 'X.com',
      },
      {
        href: 'https://bsky.app/profile/vite.dev',
        iconHref: '/icons.svg#bluesky-icon',
        label: 'Bluesky',
      },
    ],
  },
]
