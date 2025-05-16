"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRightIcon } from "lucide-react";
import ProjectCard from "@/components/ui/project-card";
import { getCaseStudySlugs } from "@/lib/utils";

// Tipo para los case studies
interface CaseStudy {
  slug: string;
  title: string;
  year: string;
  company: string;
  mainImage: string;
}

export default function Home() {
  // Estado para la pestaña activa
  const [activeTab, setActiveTab] = useState("work");
  // Estado para almacenar los case studies
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  // Estado para el proyecto sobre el que pasa el mouse
  const [hoveredProject, setHoveredProject] = useState<CaseStudy | null>(null);
  // Estado de carga
  const [isLoading, setIsLoading] = useState(true);

  // Cargar los case studies cuando el componente se monta
  useEffect(() => {
    const loadCaseStudies = async () => {
      try {
        setIsLoading(true);
        // Fetch case studies
        const response = await fetch("/api/case-studies");
        const data = await response.json();
        setCaseStudies(data.caseStudies || []);
      } catch (error) {
        console.error("Error cargando case studies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCaseStudies();
  }, []);

  // Contenido de cada tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "work":
        return (
          <div className="transition-all duration-500 ease-in-out transform translate-x-0 opacity-100">
            <div className="px-5 space-y-8">
              <h2 className="text-sm text-muted-foreground">Latest projects</h2>
              <div className="flex flex-col gap-2 -mx-2">
                {isLoading ? (
                  // Placeholder de carga
                  <div className="py-12 text-muted-foreground">
                    Loading projects...
                  </div>
                ) : caseStudies.length === 0 ? (
                  // Mensaje cuando no hay proyectos
                  <div className="py-6 text-muted-foreground">
                    No projects found.
                  </div>
                ) : (
                  // Renderizar los projects
                  caseStudies.map((project, index) => (
                    <ProjectCard
                      key={project.slug}
                      id={index + 1}
                      title={project.title}
                      year={project.year}
                      company={project.company}
                      image={project.mainImage}
                      onHover={() => setHoveredProject(project)}
                      onLeave={() => setHoveredProject(null)}
                      variant="row"
                      showImage={hoveredProject?.slug === project.slug}
                      headingLevel="h3"
                      href={`/work/${project.slug}`}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        );
      case "about":
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
                    rel="noopener noreferrer"
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
        return null;
    }
  };

  return (
    <>
      <div className="grid grid-cols-[1fr_auto_1px_auto_1fr] grid-rows-[max-content_1px_max-content_1px_auto_1px] min-h-dvh bg-accent ">
        <div className="col-start-2 px-5 pt-14 pb-12 flex gap-8 flex-col max-w-md self-start">
          <Avatar className=" size-10">
            <AvatarImage src="/images/bg-cool.png" />
            <AvatarFallback className=" font-brand-bold">p</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-6">
            <div className="flex gap-1">
              <div className="w-12  bg-black"></div>
              <h1 className="text-xl font-semibold">— Sebastian Pertuz</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Designer from Bogotá who helps{" "}
              <span className="text-foreground">tech companies</span> build
              kick-ass digital products.
            </p>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="gap-1">
                <TabsTrigger value="work">Work</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reachout">Reach out</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        {/* Contenido dinámico de la tab */}
        <div className="py-12 min-h-[180px] row-start-3 col-start-2 max-w-md  w-full">
          {renderTabContent()}
        </div>
        <div className="col-start-3 row-start-1 row-span-5 w-px bg-[repeating-linear-gradient(black,black_4px,transparent_4px,transparent_8px)] opacity-10"></div>
        <div className="col-start-4 min-w-xl row-start-1 row-span-5  flex justify-center items-center gap-2 rounded px-6 py-16 relative">
          {/* Image that appears when hovering a ProjectCard */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {hoveredProject && (
              <Image
                src={hoveredProject.mainImage}
                alt={`${hoveredProject.title} preview`}
                width={800}
                height={800}
                className="max-w-[80%] max-h-[80%] object-contain opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ opacity: hoveredProject ? 1 : 0 }}
              />
            )}
          </div>
        </div>
        <div className="col-span-3 row-start-2 col-start-1 bg-[repeating-linear-gradient(90deg,black,black_4px,transparent_4px,transparent_8px)]  opacity-10 "></div>
        <div className="col-span-3 row-start-4 col-start-1 bg-[repeating-linear-gradient(90deg,black,black_4px,transparent_4px,transparent_8px)]  opacity-10 "></div>
        <div className="col-span-full row-start-6 col-start-1 bg-[repeating-linear-gradient(90deg,black,black_4px,transparent_4px,transparent_8px)]  opacity-10 "></div>
      </div>
    </>
  );
}
