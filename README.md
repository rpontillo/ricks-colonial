# Rick's Colonial Painting LLC — Sprint 1

Astro + Tailwind CSS foundation for the Rick's Colonial Painting LLC redesign.

## Included

- Astro static-site configuration
- Tailwind CSS v4 via the official Vite plugin
- Strictest Astro TypeScript configuration
- Global design tokens and custom CSS primitives
- Responsive header and accessible mobile navigation
- Shared footer
- Reusable main layout and baseline metadata
- Home-page shell plus scaffold routes for About, Services, Gallery, and Contact
- Reduced-motion and keyboard-focus handling

## Install in your working directory

```bash
cd /Users/rpontillo/workingDirectory/ricks-colonial
unzip ~/Downloads/ricks-colonial-sprint-1.zip
npm install
npm run dev
```

If the folder already contains files, extract the archive elsewhere first and copy/merge deliberately.

## Commands

```bash
npm run dev
npm run check
npm run build
npm run preview
```

## Known placeholders

Replace these before production:

- Phone number in `src/components/Header.astro` and `Footer.astro`
- Email address in `src/components/Footer.astro`
- Final production photography
- Final business claims and service-area content

## Styling approach

Tailwind handles routine styling and responsive layouts. `src/styles/global.css` contains only theme definitions, base primitives, navigation state transitions, and accessibility behavior.
