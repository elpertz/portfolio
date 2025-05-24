"use client";

import Image from "next/image"; // Next.js optimized Image component.
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Avatar components for displaying user images or fallbacks.
import React, { useState, useEffect } from "react"; // Core React library for building UI, and hooks for state and side effects.
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Tabs components for tabbed navigation.
import ProjectCard from "@/components/ui/project-card"; // Custom component to display project information.

// Notes: Defines the structure for a case study object.
// Goal: To ensure type safety when working with case study data.
interface CaseStudy {
  slug: string; // Unique identifier for the case study, used in URLs.
  title: string; // Title of the case study.
  year: string; // Year the project was completed.
  company: string; // Company associated with the project.
  mainImage: string; // Path to the main image for the case study.
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("work");

  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);

  const [hoveredProject, setHoveredProject] = useState<CaseStudy | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCaseStudies = async () => {
      try {
        setIsLoading(true);
        // Fetch case studies data from the API endpoint.
        const response = await fetch("/api/case-studies");
        const data = await response.json(); // Parse the JSON response.
        // Update the caseStudies state with the fetched data. If data.caseStudies is undefined, use an empty array.
        setCaseStudies(data.caseStudies || []);
      } catch (error) {
        // Log any errors that occur during the fetch operation.
        console.error("Error cargando case studies:", error);
      } finally {
        // Set loading state to false after the fetch operation completes (either success or failure).
        setIsLoading(false);
      }
    };

    loadCaseStudies(); // Call the function to load case studies.
  }, []); // The empty dependency array [] means this effect runs only once when the component mounts.

  // Notes: Function to render the content based on the active tab.
  // Goal: To dynamically display different sections (Work, About, Reach Out) based on user interaction.
  const renderTabContent = () => {
    switch (activeTab) {
      case "work":
        // Content for the "Work" tab.
        return (
          <div className="transition-all duration-500 ease-in-out transform translate-x-0 opacity-100">
            <div className="px-5 space-y-8">
              <h2 className="text-sm text-muted-foreground">Latest projects</h2>
              <div className="flex flex-col gap-2 -mx-2">
                {isLoading ? (
                  // Display a loading message while data is being fetched.
                  <div className="py-12 text-muted-foreground">
                    Loading projects...
                  </div>
                ) : caseStudies.length === 0 ? (
                  // Display a message if no projects are found.
                  <div className="py-6 text-muted-foreground">
                    No projects found.
                  </div>
                ) : (
                  // Render the list of project cards if data is available.
                  caseStudies.map((project, index) => (
                    <ProjectCard
                      key={project.slug} // Unique key for each project card.
                      id={index + 1} // Simple numeric ID based on index.
                      title={project.title}
                      year={project.year}
                      company={project.company}
                      image={project.mainImage}
                      // Set the hovered project when the mouse enters this card.
                      onHover={() => setHoveredProject(project)}
                      // Clear the hovered project when the mouse leaves this card.
                      onLeave={() => setHoveredProject(null)}
                      variant="row" // Styling variant for the project card.
                      // Determine if the image for this project should be shown (based on hover state).
                      showImage={hoveredProject?.slug === project.slug}
                      headingLevel="h3" // Semantic heading level for accessibility.
                      href={`/work/${project.slug}`} // Link to the individual project page.
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        );
      case "about":
        // Content for the "About" tab.
        return (
          <div className="transition-all duration-500 ease-in-out transform translate-x-0 opacity-100">
            <div className="px-5 space-y-2">
              <h2 className="text-sm text-muted-foreground">Sobre mí</h2>
              <p className="text-base text-muted-foreground text-pretty">
                I am a designer currently shaping the native mobile apps at Addi
                and crafting app icons for a variety of clients.
                <br />
                <br /> I focus on the intersection of form and function to
                create experiences that effortlessly become an extension of
                oneself.
                <br />
                <br /> I believe in ideas over opinions, prototypes as the most
                valuable tool for collaboration, and exploring one hundred ideas
                to find the right one. I am driven by curiosity and strive for a
                high level of craftsmanship and excellence in my work.
              </p>
            </div>
          </div>
        );
      case "reachout":
        // Content for the "Reach Out" tab.
        return (
          <div className="transition-all duration-500 ease-in-out transform translate-x-0 opacity-100">
            <div className="px-5 space-y-2">
              <h2 className="text-sm text-muted-foreground">Contact </h2>
              <ul className="mb-2 space-y-2 text-lg">
                <li>
                  <a
                    href="mailto:pertz.design@gmail.com"
                    className=" hover:underline"
                  >
                    pertz.design@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/tuusuario"
                    target="_blank"
                    rel="noopener noreferrer" // Security best practice for external links.
                    className=" hover:underline"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/tuusuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/tuusuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:underline"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        );
      default:
        // Return null if the activeTab does not match any case.
        return null;
    }
  };

  // Main JSX structure of the Home component.
  return (
    <>
      {/* Main grid layout. */}
      <div className="grid grid-cols-[1fr_auto_1px_auto_1fr] grid-rows-[max-content_1px_max-content_1px_auto_1px] min-h-dvh bg-accent ">
        {/* Left panel: Contains Avatar, name, description, and Tabs. */}
        <div className="col-start-2 px-5 pt-14 pb-12 flex gap-8 flex-col max-w-md self-start">
          <Avatar className=" size-10">
            <AvatarImage src="/images/bg-cool.png" />{" "}
            <AvatarFallback className=" font-brand-bold">p</AvatarFallback>{" "}
          </Avatar>
          {/* Personal information section */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-1 items-center">
              {" "}
              <div className="w-12 h-px bg-black"></div>{" "}
              <h1 className="text-xl font-semibold">— Sebastian Pertuz</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Designer from Bogotá who helps{" "}
              <span className="text-foreground">tech companies</span> build
              kick-ass digital products.
            </p>

            {/* Tabs component for navigation between Work, About, and Reach Out sections. */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="gap-1">
                <TabsTrigger value="work">Work</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reachout">Reach out</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        {/* Dynamic content area: Renders the content of the active tab. */}
        <div className="py-12 min-h-[180px] row-start-3 col-start-2 max-w-md w-full">
          {renderTabContent()}
        </div>
        {/* Vertical decorative line separating left and right panels. */}
        <div className="col-start-3 row-start-1 row-span-5 w-px bg-[repeating-linear-gradient(black,black_4px,transparent_4px,transparent_8px)] opacity-10"></div>
        {/* Right panel: Displays the image of the hovered project. */}
        <div className="col-start-4 min-w-xl row-start-1 row-span-5 flex justify-center items-center gap-2 rounded px-6 py-16 relative">
          {/* Container for the hovered project image. Positioned absolutely to overlay. */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {hoveredProject && ( // Conditionally render the image if a project is hovered.
              <Image
                src={hoveredProject.mainImage}
                alt={`${hoveredProject.title} preview`}
                width={800}
                height={800}
                className="max-w-[80%] max-h-[80%] object-contain opacity-0 transition-opacity duration-300 ease-in-out"
                // Inline style to control opacity for smooth transition.
                style={{ opacity: hoveredProject ? 1 : 0 }}
                priority // Suggests to Next.js to prioritize loading this image (though its visibility is conditional)
              />
            )}
          </div>
        </div>
        {/* Horizontal decorative lines spanning across columns. */}
        <div className="col-span-3 row-start-2 col-start-1 bg-[repeating-linear-gradient(90deg,black,black_4px,transparent_4px,transparent_8px)] opacity-10 h-px"></div>{" "}
        {/* Added h-px for thin line */}
        <div className="col-span-3 row-start-4 col-start-1 bg-[repeating-linear-gradient(90deg,black,black_4px,transparent_4px,transparent_8px)] opacity-10 h-px"></div>{" "}
        {/* Added h-px for thin line */}
        <div className="col-span-full row-start-6 col-start-1 bg-[repeating-linear-gradient(90deg,black,black_4px,transparent_4px,transparent_8px)] opacity-10 h-px"></div>{" "}
        {/* Added h-px for thin line */}
      </div>
    </>
  );
}
