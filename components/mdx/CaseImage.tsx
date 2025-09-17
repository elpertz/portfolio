// Notes: Componente para mostrar imágenes en archivos MDX de case studies.
// Goal: Permitir imágenes principales/secundarias con soporte para alt y estilos responsivos.

import Image from "next/image";
import React from "react";

interface CaseImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const CaseImage: React.FC<CaseImageProps> = ({ src, alt = "", className }) => (
  <div className={`my-6 w-full flex justify-center ${className || ""}`}>
    <Image
      src={src}
      alt={alt}
      width={900}
      height={600}
      className="rounded-lg object-contain max-w-full h-auto shadow-md"
      sizes="(max-width: 768px) 100vw, 900px"
      priority
    />
  </div>
);

export default CaseImage;
