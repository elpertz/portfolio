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
  - `/components/mdx` – Custom MDX components for case studies (CaseImage, RoleSteps, ImageGallery)
- `/content/work` – MDX files for case studies
- `/public/images` – Thumbnails & assets
- `/lib` – Utilities (e.g., MDX helpers, API functions)
  - `/lib/mdx.ts` – Functions for processing MDX content
- `/api` – API routes for data fetching
- `/project-doc` – PRD, tasks, instructions, changelog

## Adding Work (Case Study) MDX Files

1. Add a new `.mdx` file to `/content/work/` (see existing files for structure).
2. Include frontmatter with:
   ```mdx
   ---
   title: "Your Case Study Title"
   year: "YYYY"
   company: "Company Name"
   team:
     - Your Name (Designer)
     - Team Member 1
     - Team Member 2
   roles:
     - step: discovery
       participated: true
     - step: concept
       participated: true
     - step: define
       participated: true
     - step: design
       participated: true
   mainImage: "/images/your-main-image.png"
   secondaryImages:
     - "/images/secondary-image-1.png"
     - "/images/secondary-image-2.png"
   ---
   ```
3. Add content using Markdown syntax and custom components:

   ```mdx
   import CaseImage from "../../components/mdx/CaseImage";

   # Your Title Here

   <CaseImage src="/images/your-image.png" alt="Description" />

   ## Problem Summary

   Your problem description here...
   ```

## Available MDX Components

- `<CaseImage src="/path/to/image.png" alt="Alt text" />` - Displays an image with proper styling
- `<RoleSteps roles={frontmatter.roles} />` - Visualizes project role steps with participation indicators
- `<ImageGallery images={frontmatter.secondaryImages} />` - Displays a grid of secondary images

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
