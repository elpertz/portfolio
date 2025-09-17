// Notes: Individual role indicator component for case studies
// Goal: Display a single role with on/off state (orange dot when participated, neutral gray when not) and automatic alignment

import React from "react";
import { cn } from "@/lib/utils";

export interface RoleProps {
  /** Role label text */
  label: string;
  /** Whether the person participated in this role */
  participated: boolean;
  /** Position in the sequence for automatic alignment */
  position?: "first" | "middle" | "last";
  /** Additional CSS classes */
  className?: string;
}

/**
 * Role component for displaying participation status in project roles
 * Shows an orange dot when participated=true, neutral gray when participated=false
 * Automatically aligns: first=start, middle=center, last=end
 */
const Role: React.FC<RoleProps> = ({
  label,
  participated,
  position = "middle",
  className = "",
}) => {
  // Automatic alignment based on position
  const alignmentClasses = {
    first: "justify-start text-left items-start",
    middle: "justify-center text-center items-center",
    last: "justify-end text-right items-end",
  };

  // Colors based on Figma design
  const containerClasses = participated
    ? "bg-gray-100/15 border-orange-500/20 " // When participated: lighter background with orange border
    : "bg-gray-200/20 border-gray-300/15"; // When not participated: neutral gray

  const dotClasses = participated
    ? "bg-orange-500 ring-orange-50 " // Orange dot and border when participated
    : "bg-gray-200 ring-gray-100 "; // Neutral gray when not participated

  return (
    <div
      className={cn(
        "flex flex-col gap-2 min-w-[75px]",
        alignmentClasses[position],
        className
      )}
    >
      {/* Container with dot */}
      <div
        className={cn(
          "relative w-[35px] h-[35px] rounded-md border-2 transition-all duration-200",
          containerClasses
        )}
      >
        {/* Status dot */}
        <div
          className={cn(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            "size-4 rounded-[6px] ring-2 transition-all duration-200 ",
            dotClasses
          )}
          aria-label={`${
            participated ? "Participated" : "Did not participate"
          } in ${label}`}
        />
      </div>

      {/* Label */}
      <span className="text-sm font-normal text-gray-500 capitalize leading-tight">
        {label}
      </span>
    </div>
  );
};

export default Role;
