# Product Requirements Document – Pertz Portfolio (MVP)

## 1. Purpose

Create a fast, modern portfolio that:

- **Showcases work** (detailed case-study pages).
- **Displays small experiments** (Playground grid).
- **Enables contact** through a simple form.

## 2. Scope (MVP)

| Page / Feature | Notes                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------ |
| **Home**       | Hero, “About-me” tab, latest Work cards, CTA to Reach Out.                                                   |
| **Work**       | Grid of all projects (filter + search). Each card → Case-study (dynamic **[slug]** route rendered from MDX). |
| **Case Study** | Generated from `/content/work/*.mdx`; supports images, video, custom React components.                       |
| **Playground** | Grid of cards; each card is itself a component showing an image or interactive snippet (no MDX).             |
| **Site-wide**  | Dark mode, Framer-motion page transitions, shadcn/ui, Tailwind v4.                                           |

Out-of-scope for MVP: blog, external CMS, i18n (may add later).

## 3. Success Metrics

- Deploys without errors on Vercel.
- Lighthouse performance ≥ 90, a11y ≥ 90.
- Build time < 60 s with < 200 kB JS for first load of Home.

## 4. Technical Stack

- **Next.js 15 (App Router) + React 18/19**
- **Tailwind CSS v4**
- **Framer Motion**
- **MDX** via `@next/mdx` (Work only)
- **shadcn/ui** components
- **TypeScript**, ESLint, Prettier
- **Vercel** hosting + Edge Functions (contact form)

## 5. Key Risks & Mitigations

| Risk                            | Mitigation                                                              |
| ------------------------------- | ----------------------------------------------------------------------- |
| Complex MDX imports break build | Use Contentlayer or `generateStaticParams` pattern; add CI type-checks. |
| Large asset sizes               | Compress images; Next `<Image>` static imports.                         |
| Contact spam                    | Add basic rate-limit + later hCaptcha if needed.                        |
