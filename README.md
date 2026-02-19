# CosmoSim Primer

Astro + Starlight 기반의 다국어(영어/한국어) 시뮬레이션 입문 사이트입니다.

## Stack

- [Astro](https://astro.build/)
- [Starlight](https://starlight.astro.build/)
- GitHub Actions + GitHub Pages

## Locale structure

- English: `/en/`
- Korean: `/ko/`

영어를 원문(source-of-truth)으로 두고 한국어를 번역본으로 유지합니다.

## Project structure

- `src/content/docs/en/` : 영어 문서
- `src/content/docs/ko/` : 한국어 문서
- `src/styles/custom.css` : 테마 커스텀
- `astro.config.mjs` : Starlight + GitHub Pages 경로 설정

## GitHub ID / URL behavior

`astro.config.mjs`는 GitHub Actions 환경변수로 사이트 URL을 자동 계산합니다.

- `GITHUB_REPOSITORY_OWNER`: GitHub 아이디(또는 org)
- `GITHUB_REPOSITORY`: `owner/repo`

동작 규칙:

- 저장소 이름이 `<owner>.github.io`면 base는 `/`
- 그 외 프로젝트 저장소면 base는 `/<repo>`

즉, 네 GitHub 계정에 push하면 아이디 기준 URL로 자동 맞춰집니다.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

1. 이 저장소를 GitHub에 push
2. GitHub 저장소 `Settings -> Pages`
3. Source를 `GitHub Actions`로 설정
4. `main` 브랜치 push 시 `.github/workflows/deploy-pages.yml`로 자동 배포

## Content pages (current)

- Home
- Basics
- Code pages: Arepo / Enzo / Gadget / Gizmo
- Compare
- Glossary
