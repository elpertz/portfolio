import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convertir un slug a un nombre amigable
export function slugToReadableName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Obtiene la lista de todos los slugs de case studies
export async function getCaseStudySlugs(): Promise<string[]> {
  // En un entorno de producción, esto podría obtener dinámicamente todos los archivos MDX
  // Por ahora, devolvemos los slugs que sabemos que existen
  return [
    "second-look-to-payment-reports",
    "improvement-on-our-allies-offerings",
    "addi-flex-redefining-our-credit-offering",
  ];
}
