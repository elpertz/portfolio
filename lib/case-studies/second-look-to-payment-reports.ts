// Notes: Case study data for 'Second Look to Payment Reports'.
// Goal: Provide structured content for dynamic case study rendering.

export const caseStudy = {
  title: "Second Look to Payment Reports",
  year: "Q4 2023",
  company: "Short Case",
  team: [
    // Add team members as needed
    "Sebastian Pertuz (Designer)",
    "Product Manager",
    "Accountants",
    "Business Owners",
    "Marketing Managers",
    "Finance Team Members",
  ],
  mainImage: "/images/brand-exm.png",
  mainVideo: null, // No main video for this case
  secondaryImages: ["/images/brand-exm.png", "/images/brand-exm.png"],
  role: [
    { step: "discovery", participated: true },
    { step: "concept", participated: true },
    { step: "define", participated: true },
    { step: "design", participated: true },
  ],
  content: `
### Problem Summary

Our merchant partners were confused about when and how much they were being paid, leading to frequent calls to Customer Support and a negative perception of the brand.

### My Role
- Collaborated with the PM to define the problem and explore solutions.
- Conducted user research with key stakeholders (accountants, business owners, marketing managers, finance team members) to understand their reporting needs.
- Redesigned the information architecture and updated the visual design based on the new design system foundations.

### Key Metrics
- Significant reduction in report-related support calls (exact percentage requires further context).
- NPS among partners increased from 68 to 75.
- Higher adoption and satisfaction with daily payments.
`,
};
