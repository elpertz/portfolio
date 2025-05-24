// Notes: Página dinámica para mostrar los case studies individuales.
// Goal: Renderizar el contenido MDX de cada case study siguiendo el diseño del Figma.

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/mdx";
import RoleSteps from "@/components/mdx/RoleSteps";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const { content, frontmatter } = caseStudy;

  // Obtener otros proyectos para mostrar al final
  const allCaseStudies = await getAllCaseStudies();
  const otherProjects = allCaseStudies
    .filter((project) => project.slug !== slug)
    .slice(0, 2); // Mostrar solo 2 proyectos

  return (
    <>
      <nav>
        <div className="flex items-center text-sm font-light  container mx-auto px-4 max-w-xl py-2">
          <Link href="/" className="hover:underline">
            pertz home
          </Link>
          <span className="mx-2">•</span>
          <button className="hover:underline">Menu</button>
        </div>
      </nav>
      {/* Header */}
      <header>
        <div className="flex flex-col  bg-[#F7F8F5] py-4 mx-auto max-w-[90%] md:max-w-[calc(100%-8.75rem)] h-[calc(100dvh-3rem)] md:h-[calc(95dvh-3rem)] rounded-3xl shadow-[var(--frame-shadow)] overflow-hidden">
          <div className="container mx-auto px-4 pt-8 max-w-xl">
            {/* Título y detalles del proyecto */}
            <div className="mb-4">
              <h1 className="text-2xl tracking-tight font-semibold mb-2">
                {frontmatter.title}
              </h1>
              <div className="flex items-center gap-4  mb-4">
                <div className="flex flex-col items-start ">
                  <span className="text-muted-foreground text-sm">
                    Company:
                  </span>
                  <span>{frontmatter.company}</span>
                </div>
                <div className="flex flex-col items-start ">
                  <span className="text-muted-foreground text-sm">Year:</span>
                  <span>{frontmatter.year}</span>
                </div>
              </div>
              <p className=" text-muted-foreground  text-pretty">
                {frontmatter.description}
              </p>
            </div>
          </div>
          {/* Imagen principal */}
          <div className="max-w-3xl mx-auto scale-98 translate-y-4 hover:translate-y-0 hover:scale-100 transition-all duration-300 ease-out">
            <Image
              src={frontmatter.mainImage}
              alt={frontmatter.title}
              width={1000}
              height={600}
              className="w-full rounded-lg shadow-md object-cover aspect-video"
              priority
            />
          </div>
        </div>
      </header>
      <main>
        <div className="container mx-auto px-4 py-8 max-w-xl text-muted-foreground space-y-8">
          {/* Contenido MDX dinámico */}
          <div className="prose prose-lg max-w-none ">
            <div className=" [&>h2]:text-lg [&>h2]:text-foreground [&>h2]:font-semibold [&>h2]:mb-2 [&>h2]:mt-16 [&>h2:first-of-type]:mt-0  [&>p]:mb-4 [&>ul]:list-disc [&>ul]:list-inside [&>ul]:space-y-2 [&>ul]:text-gray-700 [&>ul]:my-6 [&>li]:leading-relaxed">
              {content}
            </div>
          </div>

          {/* Other Projects */}
        </div>
      </main>
      <section className="mb-10">
        <div className="container mx-auto px-4 py-8 max-w-3xl text-muted-foreground space-y-8">
          <div className="bg-[repeating-linear-gradient(black,black_4px,transparent_4px,transparent_8px)] opacity-10 h-px w-full "></div>
          <h2 className="text-lg font-semibold mb-4 text-foreground">
            Other projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block"
              >
                <div className="rounded-lg overflow-hidden mb-3">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full object-cover transition-all group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-lg mb-1">{project.title}</h3>
                <div className="text-sm text-gray-500">
                  {project.year} — {project.company}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
