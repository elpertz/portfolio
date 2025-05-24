// Notes: Demo component to showcase the Role and RoleSteps functionality
// Goal: Demonstrate different usage patterns for the role components with new neutral design

import React from "react";
import { Role } from "@/components/ui";
import RoleSteps from "./RoleSteps";

/**
 * Demo component showing different ways to use Role and RoleSteps
 */
const RoleDemo: React.FC = () => {
  const sampleRoles = [
    { step: "discovery", participated: true },
    { step: "concept", participated: true },
    { step: "define", participated: false },
    { step: "design", participated: true },
    { step: "validation", participated: false },
    { step: "implementation", participated: false },
  ];

  const mixedRoles = [
    { step: "discovery", participated: true },
    { step: "research", participated: false },
    { step: "prototyping", participated: true },
    { step: "testing", participated: false },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
      <div>
        <h2 className="text-xl font-semibold mb-4">Standard 4-Step Process</h2>
        <RoleSteps
          roles={sampleRoles.slice(0, 4)}
          customSteps={["discovery", "concept", "define", "design"]}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Extended 6-Step Process</h2>
        <RoleSteps roles={sampleRoles} />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Custom Process Steps</h2>
        <RoleSteps roles={mixedRoles} />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">
          Individual Role Components (Auto-Alignment)
        </h2>
        <div className="flex justify-between max-w-md mx-auto">
          <Role label="Discovery" participated={true} position="first" />
          <Role label="Concept" participated={false} position="middle" />
          <Role label="Define" participated={true} position="middle" />
          <Role label="Design" participated={false} position="last" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Mixed Participation</h2>
        <RoleSteps
          roles={[
            { step: "discovery", participated: true },
            { step: "concept", participated: false },
            { step: "define", participated: false },
            { step: "design", participated: true },
          ]}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Without Legend</h2>
        <RoleSteps roles={sampleRoles.slice(0, 4)} showLegend={false} />
      </div>
    </div>
  );
};

export default RoleDemo;
