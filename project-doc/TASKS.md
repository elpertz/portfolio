# MVP Task Breakdown – Pertz Portfolio

## 1. Home Page

- [ ] Implement hero section
- [ ] Add "About-me" tab/section
- [x] Display latest Work cards (limit to 3-4) - Implementado con datos reales del MDX
- [x] Add CTA button to Reach Out (as a tab, not a separate page)
- [ ] Integrate dark-mode toggle
- [ ] Add Framer Motion page transitions
- [ ] Implement mobile responsive design

## 2. Work Page

- [x] Build grid layout for all projects
- [ ] Implement filter functionality (by tag/category)
- [ ] Implement search functionality
- [x] Create WorkCard component
- [x] Link each card to dynamic case-study page ([slug])

## 3. Case Study Pages & MDX

- [x] Configure Next.js for MDX support (@next/mdx, pageExtensions, mdx-components.tsx)
- [x] Create first case study as MDX file (`content/work/`)
- [x] Create `CaseImage` component for basic image rendering in MDX
- [x] Set up dynamic routing and page for individual case studies (`/work/[slug]/page.tsx`)
- [x] Implement MDX content fetching and rendering on the case study page
- [x] Create `RoleSteps` component to display project roles (discovery, concept, etc.)
- [x] Create `ImageGallery` / `SecondaryImageCard` component for secondary images
- [x] Add "Other projects" section showing related case studies
- [x] Implement layout siguiendo diseño de Figma para case studies
- [ ] Create component for team members visualization
- [ ] Create component for video embedding in MDX
- [ ] Support video components in MDX
- [ ] Create more image card variations for different needs
- [ ] Fine-tune visual details to match Figma design
- [ ] Add navigation back to Work grid

## 4. Playground Page

- [ ] Build grid layout for Playground cards
- [ ] Create PlaygroundCard component
- [ ] Add at least 3 interactive/image demo cards as React components

## 5. Global/Site-wide

- [ ] Set up Tailwind CSS v4
- [x] Integrate shadcn/ui components (found some already)
- [ ] Add Framer Motion for page transitions
- [ ] Persist theme preference with next-themes
- [x] Optimize images (Next `<Image>` static imports, used in `CaseImage`)
- [ ] Add ESLint and Prettier config
- [ ] Ensure accessibility (a11y) best practices
- [ ] Prepare for Vercel deployment
- [ ] Add navigation bar with consistent style
- [ ] Add footer component
- [ ] Port foundation styles (colors, typography) from Figma to globals.css

## 6. Documentation

- [x] Write README.md (setup, adding Work/Playground items)
- [ ] Write CONTRIBUTING.md (code style, commit guidelines)
- [ ] Write DESIGN.md (Figma, motion specs, palette)

## 7. Responsive & Animations

- [ ] Implement responsive design for Home page
- [ ] Implement responsive design for Work page
- [ ] Implement responsive design for Case Study pages
- [ ] Add page transitions and animations
- [ ] Add micro-interactions and hover states
