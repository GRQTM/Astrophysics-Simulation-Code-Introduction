import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import pagePlugin from '@pelagornis/page';

const owner = process.env.GITHUB_REPOSITORY_OWNER ?? process.env.GITHUB_ACTOR ?? 'your-github-id';
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'simulation-primer';
const isUserSite = repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const base = isGithubActions ? (isUserSite ? '/' : `/${repository}`) : '/';

export default defineConfig({
  site: `https://${owner}.github.io`,
  base,
  trailingSlash: 'always',
  integrations: [
    starlight({
      plugins: [pagePlugin()],
      title: 'CosmoSim Primer',
      logo: {
        src: './src/assets/galaxy.svg',
      },
      description: 'Beginner-first guide to Arepo, Enzo, Gadget, Gizmo, and Ramses.',
      pagination: false,
      components: {
        Head: '/src/components/StarlightHead.astro',
        Header: '/src/components/PageHeader.astro',
        TableOfContents: '/src/components/InstantTableOfContents.astro',
        Footer: '/src/components/EmptyFooter.astro',
        LanguageSelect: '/src/components/LanguageSelect.astro'
      },
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
      customCss: ['./src/styles/custom.css']
    })
  ]
});
