// Notes: Página dinámica para mostrar los case studies individuales.
// Goal: Renderizar el contenido MDX de cada case study siguiendo el diseño del Figma.

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/mdx";
import RoleSteps from "@/components/mdx/RoleSteps";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = params;
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
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center text-sm font-light mb-2">
          <Link href="/" className="hover:underline">
            pertz home
          </Link>
          <span className="mx-2">•</span>
          <button className="hover:underline">Menu</button>
        </div>
      </header>

      {/* Título y detalles del proyecto */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold mb-2">{frontmatter.title}</h1>
        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Company:</span>
            <span>{frontmatter.company}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Year:</span>
            <span>{frontmatter.year}</span>
          </div>
        </div>

        {/* Resumen del problema */}
        <p className="text-gray-700 max-w-2xl mb-8">
          Merchants were confused about when and how much they were being paid,
          leading to constant calls to CX and negative brand perception.
        </p>

        {/* Imagen principal */}
        <div className="mb-12">
          <Image
            src={frontmatter.mainImage}
            alt={frontmatter.title}
            width={1000}
            height={600}
            className="w-full rounded-lg shadow-md object-cover"
            priority
          />
        </div>
      </div>

      {/* Background */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Background</h2>
        <p className="text-gray-700 mb-8">
          Merchants were confused about when and how much they were being paid,
          leading to constant calls to CX and negative brand perception.
          Merchants were confused about when and how much they were being paid,
          leading to constant calls to CX and negative brand perception.
        </p>

        {/* Imágenes secundarias en una fila */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {frontmatter.secondaryImages.slice(0, 2).map((image, idx) => (
            <div key={`img-${idx}`} className="rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`${frontmatter.title} - secondary image ${idx + 1}`}
                width={500}
                height={300}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* My Role */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">My Role</h2>

        {/* Visualización de roles como en el Figma */}
        <RoleSteps roles={frontmatter.roles} />

        {/* Lista de responsabilidades */}
        <ul className="list-disc list-inside space-y-2 text-gray-700 my-8">
          {frontmatter.team.slice(0, 1).map((role, idx) => (
            <li key={`role-${idx}`}>{role}</li>
          ))}
          <li>Work with the PM to define the problem and propose solutions.</li>
          <li>
            Interview key users (accountants, business owners, marketing
            managers, finance teams) to understand their reporting needs.
          </li>
          <li>
            Redesign the information architecture and refresh the look based on
            the new design system.
          </li>
        </ul>

        {/* Otra imagen del proyecto */}
        {frontmatter.secondaryImages.length > 2 && (
          <div className="mb-8">
            <Image
              src={frontmatter.secondaryImages[2]}
              alt={`${frontmatter.title} - additional view`}
              width={1000}
              height={600}
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>
        )}
      </section>

      {/* Key Metrics */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Key metrics</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Significant drop in report-related calls</li>
          <li>Merchant NPS increased from 68 to 75.</li>
          <li>Higher adoption and satisfaction with daily payouts.</li>
        </ul>
      </section>

      {/* Other Projects */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Other projects</h2>
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
      </section>
    </div>
  );
}
