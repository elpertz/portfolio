const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permitir archivos .mdx como páginas
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  // Otras configuraciones de Next.js aquí si es necesario
};

module.exports = withMDX(nextConfig);
