# Components Documentation

## Role Components

### `Role` Component

Individual role indicator for displaying participation status in project roles.

**Props:**

- `label: string` - Role label text
- `participated: boolean` - Whether the person participated in this role
- `position?: "first" | "middle" | "last"` - Position in sequence for automatic alignment (default: "middle")
- `className?: string` - Additional CSS classes

**Usage:**

```tsx
import { Role } from "@/components/ui";

<Role label="Discovery" participated={true} position="first" />;
```

**Visual States:**

- Orange dot with container: `participated={true}`
- Neutral gray dot with container: `participated={false}`

**Automatic Alignment:**

- `position="first"` → Left aligned (start)
- `position="middle"` → Center aligned
- `position="last"` → Right aligned (end)

### `RoleSteps` Component

Parent component for displaying connected project process steps with automatic alignment.

**Props:**

- `roles: RoleStep[]` - Array of role objects
- `showLegend?: boolean` - Whether to show the color legend (default: true)
- `customSteps?: string[]` - Custom steps to use instead of default ones
- `className?: string` - Additional CSS classes

**RoleStep Interface:**

```typescript
interface RoleStep {
  step: string;
  participated: boolean;
}
```

**Key Features:**

- **Automatic alignment**: First step = left, middle steps = center, last step = right
- **Dashed connection line**: Purple (#9747FF) dashed line connecting steps
- **Neutral design**: Gray colors for non-participation instead of distracting colors

**Usage in React:**

```tsx
import RoleSteps from "@/components/mdx/RoleSteps";

const roles = [
  { step: "discovery", participated: true },
  { step: "concept", participated: false },
  { step: "define", participated: false },
  { step: "design", participated: true },
];

<RoleSteps roles={roles} />;
```

**Usage in MDX Files:**

In your frontmatter:

```yaml
---
roles:
  - step: discovery
    participated: true
  - step: concept
    participated: false
  - step: define
    participated: false
  - step: design
    participated: true
---
```

In your page component:

```tsx
<RoleSteps roles={frontmatter.roles} />
```

**Advanced Examples:**

```tsx
// Custom steps order
<RoleSteps
  roles={roles}
  customSteps={["discovery", "concept", "define", "design"]}
/>

// Without legend
<RoleSteps roles={roles} showLegend={false} />

// Custom process
const customRoles = [
  { step: "research", participated: true },
  { step: "prototyping", participated: false },
  { step: "testing", participated: true },
];
<RoleSteps roles={customRoles} />
```

## Design System

Based on the Figma design specifications:

- **Participated**: Orange dots (#FF6641) with orange borders and lighter container background
- **Not participated**: Neutral gray dots (#F1F1EF) with gray borders and container
- **Connection**: Purple dashed line (#9747FF) for process flow visualization
- **Containers**: Rounded corners (10px) with subtle borders and opacity
- **Typography**: Inter font, 14px, normal weight, gray color (#737371)
- **Automatic alignment**: Smart positioning based on sequence order
- **Responsive design**: Proper spacing and accessibility features
