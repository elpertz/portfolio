# ProjectCard

Un componente versátil para mostrar proyectos en un portafolio, optimizado para accesibilidad y con múltiples variantes.

## Características

- ♿ **Accesible**: Soporta navegación con teclado y lectores de pantalla
- 🔄 **Personalizable**: Permite cambiar el nivel de heading (h1-h6)
- 📱 **Responsivo**: Tiene variantes para desktop y mobile
- 🔗 **Navegable**: Opción para convertirlo en enlace

## Uso Básico

```tsx
import ProjectCard from "@/components/ui/project-card";

// Caso básico - Muestra la imagen al hacer hover
<ProjectCard
  id={1}
  title="Proyecto Ejemplo"
  year="2023"
  company="Cliente X"
  image="/images/proyecto.png"
  onHover={() => console.log('Hovered')}
  onLeave={() => console.log('Left')}
/>

// Versión con imagen siempre visible (ideal para mobile)
<ProjectCard
  id={2}
  title="Proyecto Mobile"
  year="2024"
  company="Cliente Y"
  image="/images/otro-proyecto.png"
  variant="image"
/>

// Como enlace navegable
<ProjectCard
  id={3}
  title="Proyecto Navegable"
  year="2022"
  company="Cliente Z"
  image="/images/navegable.png"
  href="/proyectos/detalle"
/>
```

## Props

| Prop           | Tipo                                           | Default     | Descripción                                  |
| -------------- | ---------------------------------------------- | ----------- | -------------------------------------------- |
| `id`           | `number`                                       | -           | ID único del proyecto                        |
| `title`        | `string`                                       | -           | Título del proyecto                          |
| `year`         | `string`                                       | -           | Año de realización                           |
| `company`      | `string`                                       | -           | Empresa o cliente                            |
| `image`        | `string`                                       | -           | Ruta a la imagen del proyecto                |
| `onHover`      | `() => void`                                   | `undefined` | Función que se ejecuta al hacer hover/focus  |
| `onLeave`      | `() => void`                                   | `undefined` | Función que se ejecuta al quitar hover/focus |
| `headingLevel` | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | `"h3"`      | Nivel del encabezado                         |
| `variant`      | `"hover" \| "image"`                           | `"hover"`   | Variante visual del componente               |
| `href`         | `string`                                       | `undefined` | URL para navegación (convierte en enlace)    |
| `className`    | `string`                                       | `undefined` | Clases adicionales para personalización      |

## Variantes

### hover

La imagen del proyecto se muestra solo al hacer hover (ideal para desktop).

### image

La imagen se muestra dentro del componente (ideal para mobile).

## Accesibilidad

- Navegable con teclado (focus visible)
- ARIA labels descriptivos
- Soporte de roles semánticos
