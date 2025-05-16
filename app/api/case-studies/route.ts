import { NextResponse } from "next/server";
import { getAllCaseStudies } from "@/lib/mdx";

// GET handler para obtener todos los case studies
export async function GET() {
  try {
    // Obtener todos los case studies
    const caseStudies = await getAllCaseStudies();

    // Devolver una respuesta 200 con los case studies
    return NextResponse.json(
      {
        caseStudies,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al obtener case studies:", error);

    // En caso de error, devolver una respuesta 500
    return NextResponse.json(
      {
        error: "Error al obtener los case studies",
        success: false,
      },
      { status: 500 }
    );
  }
}
