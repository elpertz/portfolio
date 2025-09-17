// Notes: Utilidades para trabajar con archivos MDX en el proyecto.
// Goal: Proporcionar funciones para cargar y procesar contenido MDX de los case studies.

import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import CaseImage from "@/components/mdx/CaseImage";
import RoleSteps from "@/components/mdx/RoleSteps";
import ImageGallery from "@/components/mdx/ImageGallery";

// Componentes MDX que se pueden usar en los archivos de case studies
const mdxComponents = {
  CaseImage,
  RoleSteps,
  ImageGallery,
};

// Tipo para los metadatos de frontmatter
export interface CaseStudyFrontmatter {
  title: string;
  year: string;
  company: string;
  team: string[];
  roles: { step: string; participated: boolean }[];
  mainImage: string;
  secondaryImages: string[];
  [key: string]: any;
}

// Función para cargar un archivo MDX específico por su slug
export async function getCaseStudyBySlug(slug: string) {
  // Ruta al archivo MDX
  const filePath = path.join(process.cwd(), "content", "work", `${slug}.mdx`);

  // Comprobar si el archivo existe
  if (!fs.existsSync(filePath)) {
    return null;
  }

  // Leer el contenido del archivo
  const source = fs.readFileSync(filePath, "utf8");

  try {
    // Compilar el MDX con next-mdx-remote
    const { content, frontmatter } = await compileMDX<CaseStudyFrontmatter>({
      source,
      components: mdxComponents,
      options: {
        parseFrontmatter: true,
      },
    });

    return {
      content,
      frontmatter,
      slug,
    };
  } catch (error) {
    console.error(`Error al procesar MDX para ${slug}:`, error);
    return null;
  }
}

// Función para obtener todos los case studies con sus metadatos
export async function getAllCaseStudies() {
  // Directorio de case studies
  const workDirectory = path.join(process.cwd(), "content", "work");

  // Comprobar si el directorio existe
  if (!fs.existsSync(workDirectory)) {
    return [];
  }

  // Leer todos los archivos MDX
  const mdxFiles = fs
    .readdirSync(workDirectory)
    .filter((filename) => filename.endsWith(".mdx"));

  const caseStudies = [];

  for (const filename of mdxFiles) {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(workDirectory, filename);
    const source = fs.readFileSync(filePath, "utf8");

    try {
      // Solo extraer el frontmatter para listados
      const { frontmatter } = await compileMDX<CaseStudyFrontmatter>({
        source,
        options: {
          parseFrontmatter: true,
        },
      });

      caseStudies.push({
        slug,
        ...frontmatter,
      });
    } catch (error) {
      console.error(`Error al procesar frontmatter para ${slug}:`, error);
    }
  }

  // Ordenar por año, del más reciente al más antiguo
  return caseStudies.sort(
    (a, b) => new Date(b.year).getTime() - new Date(a.year).getTime()
  );
}
