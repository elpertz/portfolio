# Pertz Portfolio

Personal portfolio built with **Next.js 15 (App Router)**, **Tailwind CSS v4**, **Framer Motion**, **MDX**, and **shadcn/ui**.

## Project Overview

Showcase detailed work case-studies, display playful experiments in a Playground grid, and offer a simple contact path (via Home tab).

## Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```
2. **Run the development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

- `/app` – App Router pages (Home, Work, Playground, dynamic case-study)
- `/components` – UI, layout, cards, and playground components
- `/content/work` – MDX files for case studies
- `/public/images` – Thumbnails & assets
- `/lib` – Utilities (e.g., MDX helpers, dummy data)
- `/styles` – Global styles (Tailwind, custom CSS)
- `/project-doc` – PRD, tasks, instructions, changelog

## Adding Work (Case Study) MDX Files

1. Add a new `.mdx` file to `/content/work/` (see `awesome-project.mdx` for structure).
2. Include frontmatter (title, year, company, etc.) and rich content (text, images, video, custom components).
3. Images should be placed in `/public/images/` and referenced with a relative path.

## Adding Playground Cards

1. Create a new React component in `/components/playground/` for your interactive or image demo card.
2. Import and use it in the Playground grid (`/app/playground/page.tsx`).

## Contributing

- See `CONTRIBUTING.md` for code style and commit guidelines.
- See `DESIGN.md` for Figma links, motion specs, and palette.

## Deployment

- Deploy on [Vercel](https://vercel.com/) for best performance and edge functions support.

---

For more details, see the documentation in `/project-doc` and `/docs` folders.
