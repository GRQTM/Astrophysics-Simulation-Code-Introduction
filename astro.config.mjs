import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const owner = process.env.GITHUB_REPOSITORY_OWNER ?? process.env.GITHUB_ACTOR ?? 'your-github-id';
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'simulation-primer';
const isUserSite = repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const base = isGithubActions ? (isUserSite ? '/' : `/${repository}`) : '/';

export default defineConfig({
  site: `https://${owner}.github.io`,
  base,
  integrations: [
    starlight({
      title: 'CosmoSim Primer',
      description: 'Beginner-first guide to Arepo, Enzo, Gadget, and Gizmo.',
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
          lang: 'en'
        },
        ko: {
          label: '한국어',
          lang: 'ko'
        }
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Foundations',
          autogenerate: { directory: '.' }
        }
      ]
    })
  ]
});
