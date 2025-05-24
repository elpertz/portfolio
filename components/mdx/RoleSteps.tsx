// Notes: Componente para mostrar los pasos/roles del proyecto en case studies MDX.
// Goal: Visualizar los pasos del proyecto como círculos conectados por una línea punteada, usando el nuevo componente Role con auto-alignment.

import React from "react";
import { Role } from "@/components/ui";

export interface RoleStep {
  step: string;
  participated: boolean;
}

interface RoleStepsProps {
  roles: RoleStep[];
  /** Whether to show the legend explaining the colors */
  showLegend?: boolean;
  /** Custom steps to use instead of default ones. If not provided, uses roles as-is */
  customSteps?: string[];
  className?: string;
}

/**
 * RoleSteps component for displaying project process steps
 * Shows connected roles with participation status for case studies
 * Automatically handles alignment: first=start, middle=center, last=end
 */
const RoleSteps: React.FC<RoleStepsProps> = ({
  roles,
  showLegend = true,
  customSteps,
  className = "",
}) => {
  // Use custom steps if provided, otherwise use the roles as they come
  const stepsToShow = customSteps
    ? customSteps.map((step) => {
        const found = roles.find(
          (role) => role.step.toLowerCase() === step.toLowerCase()
        );
        return {
          step,
          participated: found ? found.participated : false,
        };
      })
    : roles;

  // Handle single step case
  if (stepsToShow.length === 1) {
    return (
      <div className={`my-8 ${className}`}>
        <div className="flex justify-center">
          <Role
            key={stepsToShow[0].step}
            label={stepsToShow[0].step}
            participated={stepsToShow[0].participated}
            position="middle"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`my-8 ${className}`}>
      {/* Container for the connected steps */}
      <div className="relative">
        {/* Dashed connection line - purple style from Figma */}
        {/* Líneas conectando los círculos */}
        {stepsToShow.length > 1 && (
          <div className="absolute inset-x-[35px] top-[17px] h-px bg-[repeating-linear-gradient(to_right,_#d1d5db_0_8px,_transparent_8px_16px)]" />
        )}

        {/* Steps container */}
        <div className="relative flex justify-between items-start z-10">
          {stepsToShow.map((role, index) => {
            // Automatically determine position
            let position: "first" | "middle" | "last" = "middle";
            if (index === 0) position = "first";
            else if (index === stepsToShow.length - 1) position = "last";

            return (
              <Role
                key={`${role.step}-${index}`}
                label={role.step}
                participated={role.participated}
                position={position}
                className=""
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoleSteps;
