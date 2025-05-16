/**
 * ProjectCard - Componente accesible y flexible para mostrar proyectos en un portafolio
 *
 * Notas de funcionamiento:
 * - Permite mostrar información de un proyecto (título, año, empresa, imagen)
 * - Soporta dos variantes:
 *    - 'row': la imagen se muestra solo si showImage es true (ideal para listas tipo fila)
 *    - 'card': la imagen se muestra siempre dentro del card (ideal para tarjetas visuales)
 * - El nivel de heading es configurable (h1-h6) para mejor semántica y SEO
 * - Puede comportarse como un enlace si se pasa la prop href
 * - Es navegable con teclado (tabIndex, focus-visible, role="button")
 * - Incluye ARIA labels descriptivos para accesibilidad
 * - Se puede personalizar con className y props adicionales
 *
 * Props principales:
 * - id: número identificador del proyecto
 * - title: título del proyecto
 * - year: año de realización
 * - company: empresa o cliente
 * - image: ruta de la imagen
 * - onHover/onLeave: callbacks para hover/focus
 * - headingLevel: nivel de heading (h1-h6)
 * - variant: 'row' | 'card'
 * - showImage: boolean (solo relevante para 'row')
 * - href: si se pasa, el card es un enlace
 * - className: clases adicionales
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

// Tipos locales al componente
export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type ProjectCardVariant = "row" | "card";

export interface ProjectCardProps {
  /** ID único del proyecto */
  id: number;

  /** Título del proyecto */
  title: string;

  /** Año de realización */
  year: string;

  /** Empresa o cliente */
  company: string;

  /** Ruta a la imagen del proyecto */
  image: string;

  /** Función que se ejecuta al hacer hover/focus en el card */
  onHover?: () => void;

  /** Función que se ejecuta al quitar el hover/focus del card */
  onLeave?: () => void;

  /** Nivel del encabezado a usar (h1-h6) */
  headingLevel?: HeadingLevel;

  /**
   * Variante visual del componente
   * - "row": Muestra la imagen solo si showImage es true (útil para listas tipo fila)
   * - "card": Muestra la imagen dentro del componente (útil para tarjetas visuales)
   */
  variant?: ProjectCardVariant;

  /**
   * Si es true y variant es 'row', muestra la imagen
   */
  showImage?: boolean;

  /** URL a la que navegar al hacer clic (opcional, convierte el card en un enlace) */
  href?: string;

  /** Clases adicionales para personalizar el componente */
  className?: string;

  /** Atributos HTML adicionales */
  [key: string]: any;
}

const ProjectCard = ({
  id,
  title,
  year,
  company,
  image,
  onHover,
  onLeave,
  headingLevel = "h3",
  variant = "row",
  showImage = false,
  href,
  className,
  ...rest
}: ProjectCardProps) => {
  // Determinar si renderizar como link o div
  const isLink = !!href;

  // Estilos base para todas las variantes
  const baseStyles =
    "flex flex-col  transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary  p-(--card-padding) [--card-radius:var(--radius)] [--card-padding:--spacing(1)] hover:bg-neutral-300/40";

  // Card-specific styles for the 'card' variant
  const cardContainerStyles =
    variant === "card" ? "flex flex-col items-center max-w-3xl " : "";

  // Estilos condicionales según variante y estado
  const styles = classNames(
    baseStyles,
    variant === "row" && "px-2  rounded",
    variant === "card" && "gap-2 rounded-(--card-radius) ",
    isLink && "cursor-pointer",
    cardContainerStyles,
    className
  );

  // Evento combinado para hover y focus (accesibilidad)
  const handleFocus = () => onHover?.();
  const handleBlur = () => onLeave?.();

  // Contenido interno del componente
  const shouldShowImage = variant === "card" && image;

  const content = (
    <>
      {shouldShowImage && (
        <div className="relative w-full flex rounded-[calc(var(--card-radius)-var(--card-padding))] overflow-hidden stroke stroke-[#F7F8F5] stroke-20 bg-[#F7F8F5]">
          <Image
            src={image}
            alt={`${title} preview`}
            width={900}
            height={600}
            className="object-contain  "
          />
        </div>
      )}
      <div className={variant === "card" ? "w-full text-left" : undefined}>
        {React.createElement(
          headingLevel,
          {
            className: "text-lg",
          },
          title
        )}
        <div className="flex gap-2">
          <p>{year}</p>
          <p> — {company}</p>
        </div>
      </div>
    </>
  );

  // Renderizar como link o div según la prop href
  if (isLink) {
    return (
      <Link
        href={href}
        className={styles}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label={`Proyecto: ${title} (${year}) realizado para ${company}`}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  // Renderizar como div interactivo
  return (
    <div
      className={styles}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
      role="button"
      aria-label={`Proyecto: ${title} (${year}) realizado para ${company}`}
      {...rest}
    >
      {content}
    </div>
  );
};

export default ProjectCard;
