// Notes: Página principal del área de Work para mostrar todos los case studies.
// Goal: Listar todos los proyectos con un layout similar al de la Home.

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProjectCard from "@/components/ui/project-card";
import { getAllCaseStudies } from "@/lib/mdx";
import type { CaseStudyFrontmatter } from "@/lib/mdx";

export default async function WorkPage() {
  // Obtener todos los case studies
  const caseStudies = await getAllCaseStudies();

  return (
    <div className="grid grid-cols-[1fr_auto_1px_auto_1fr] grid-rows-[max-content_1px_max-content_1px_auto_1px] min-h-dvh bg-accent">
      {/* Header con Avatar */}
      <div className="col-start-2 px-5 pt-14 pb-12 flex gap-8 flex-col max-w-md self-start">
        <Link href="/" className="flex items-center gap-4">
          <Avatar className="size-10">
            <AvatarImage src="/images/bg-cool.png" />
            <AvatarFallback className="font-brand-bold">p</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">Sebastian Pertuz</span>
        </Link>

        <div className="flex flex-col gap-6">
          <div className="flex gap-1">
            <div className="w-12 bg-black"></div>
            <h1 className="text-xl font-semibold">— Work</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            A collection of selected projects I've worked on throughout my
            career.
          </p>
        </div>
      </div>

      {/* Separador vertical */}
      <div className="col-start-3 row-start-1 row-span-5 w-px bg-[repeating-linear-gradient(black,black_4px,transparent_4px,transparent_8px)] opacity-10"></div>

      {/* Lista de proyectos */}
      <div className="py-12 row-start-3 col-start-2 max-w-md w-full">
        <div className="px-5 space-y-8">
          <h2 className="text-sm text-muted-foreground">All projects</h2>
          <div className="flex flex-col gap-2 -mx-2">
            {caseStudies.map(
              (
                project: CaseStudyFrontmatter & { slug: string },
                index: number
              ) => (
                <ProjectCard
                  key={project.slug}
                  id={index + 1}
                  title={project.title}
                  year={project.year}
                  company={project.company}
                  image={project.mainImage}
                  variant="row"
                  headingLevel="h3"
                  href={`/work/${project.slug}`}
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* Espacio para imagen (en caso de querer mostrar alguna) */}
      <div className="col-start-4 min-w-xl row-start-1 row-span-5 flex justify-center items-center gap-2 rounded px-6 py-16 relative">
        {/* Placeholder para posible contenido */}
      </div>

      {/* Separadores horizontales */}
      <div className="col-span-3 row-start-2 col-start-1 bg-[repeating-linear-gradient(90deg,black,black_4px,transparent_4px,transparent_8px)] opacity-10"></div>
      <div className="col-span-3 row-start-4 col-start-1 bg-[repeating-linear-gradient(90deg,black,black_4px,transparent_4px,transparent_8px)] opacity-10"></div>
      <div className="col-span-full row-start-6 col-start-1 bg-[repeating-linear-gradient(90deg,black,black_4px,transparent_4px,transparent_8px)] opacity-10"></div>
    </div>
  );
}
