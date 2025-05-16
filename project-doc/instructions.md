# Project overview

Personal portfolio built with **Next .js 15 (App Router), Tailwind CSS v4, Framer Motion, MDX, shadcn/ui**.  
Goals: showcase detailed work case-studies, display playful experiments in a Playground grid, and offer a simple contact path.

# Core functionalities

1. **Home** – hero, "About-me" tab, latest Work cards, dark-mode toggle, **Reach Out tab (not a separate page)**, **mobile responsive design**.
2. **Work** – grid with filter + search; cards open dynamic case-study pages rendered from MDX.
3. **Case-study** – rich MDX (text + images + video + custom React components).
4. **Playground** – grid of interactive/image cards built as React components (no MDX).
5. **Global** – Framer-Motion page transitions; theme preference persisted with `next-themes`.

# Doc

- **README.md** – local setup; how to add Work MDX files and Playground cards.
- **CONTRIBUTING.md** – code-style rules, commit guidelines.
- **DESIGN.md** – Figma links, motion specs, palette.

# Current file structure

/app
layout.tsx
page.tsx
globals.css
/work
page.tsx
[slug]/page.tsx
/playground
page.tsx
/api/contact
route.ts
/components
/layout
Navbar.tsx
Footer.tsx
ThemeToggle.tsx
/cards
WorkCard.tsx
PlaygroundCard.tsx
/playground
...interactive demo components...
/ui
...shadcn-imported components...
/project-doc
PRD.md # Product Requirements Document
TASKS.md # Task breakdown & progress
instructions.md # Project overview & structure
CHANGELOG.md # Version history & updates
/docs
setup.md # Local dev environment setup
architecture.md # System design & patterns
deployment.md # Build & deploy process
testing.md # Test coverage & strategy
security.md # Security considerations
performance.md # Optimization guidelines
/content
/work
awesome-project.mdx
...
/public
/images
...thumbnails & assets...
/lib
mdx.ts

next.config.js
tsconfig.json
