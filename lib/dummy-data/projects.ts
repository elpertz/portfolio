// Notes: Dummy data for portfolio projects. Used for development/testing/demo purposes.
// Goal: Provide 5 sample projects for the ProjectCard component, all using the same reference image.

export type Project = {
  id: number;
  title: string;
  year: string;
  company: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "The Breakfast Club Website",
    year: "2023",
    company: "Breakfast Club",
    image: "/images/brand-exm.png",
  },
  {
    id: 2,
    title: "Morning Pastry App",
    year: "2022",
    company: "Pastry Co.",
    image: "/images/brand-exm.png",
  },
  {
    id: 3,
    title: "Coffee Social Campaign",
    year: "2024",
    company: "Cafe Social",
    image: "/images/project-example.png",
  },
  {
    id: 4,
    title: "Brunch Menu Redesign",
    year: "2023",
    company: "Brunch House",
    image: "/images/brand-exm.png",
  },
  {
    id: 5,
    title: "Bakery Brand Identity",
    year: "2021",
    company: "Bakery Studio",
    image: "/images/project-example.png",
  },
];
