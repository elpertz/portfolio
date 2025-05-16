// Notes: Componente para mostrar los pasos/roles del proyecto en case studies MDX.
// Goal: Visualizar los 4 pasos (discovery, concept, define, design) como círculos conectados por una línea.

import React from "react";

export interface RoleStep {
  step: string;
  participated: boolean;
}

interface RoleStepsProps {
  roles: RoleStep[];
  className?: string;
}

const RoleSteps: React.FC<RoleStepsProps> = ({ roles, className = "" }) => {
  const steps = ["discovery", "concept", "define", "design"];

  // Normalizar los roles para asegurar que todos los pasos están representados
  const normalizedRoles = steps.map((step) => {
    const found = roles.find((role) => role.step === step);
    return {
      step,
      participated: found ? found.participated : false,
    };
  });

  return (
    <div className={`my-8 ${className}`}>
      <div className="relative flex justify-between items-center pt-8 pb-4">
        {/* Línea de conexión */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200"></div>

        {/* Círculos para cada paso */}
        {normalizedRoles.map((role, index) => (
          <div key={role.step} className="flex flex-col items-center z-10">
            <div
              className={`w-4 h-4 rounded-full mb-6 ${
                role.participated ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
            <span className="text-sm capitalize">{role.step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleSteps;
