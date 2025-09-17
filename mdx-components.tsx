import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Aquí puedes agregar componentes globales de MDX si lo deseas
  };
}
