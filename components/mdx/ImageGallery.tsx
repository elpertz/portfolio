// Notes: Componente para mostrar una galería de imágenes secundarias en case studies.
// Goal: Mostrar múltiples imágenes en una cuadrícula responsive con un diseño consistente.

import React from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  className = "",
}) => {
  if (!images || images.length === 0) return null;

  return (
    <div className={`my-12 ${className}`}>
      <h3 className="text-base font-medium mb-4">Project Gallery</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div
            key={`gallery-image-${index}`}
            className="rounded-lg overflow-hidden bg-accent/20"
          >
            <Image
              src={image}
              alt={`Project image ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-opacity hover:opacity-90"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
