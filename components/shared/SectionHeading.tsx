import React from "react";

interface SectionHeadingProps {
  kicker?: string;
  heading: string;
  subheading?: string;
  accent?: "indigo" | "teal" | "coral" | "violet";
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  kicker,
  heading,
  subheading,
  accent = "indigo",
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const gradientMap = {
    indigo: "from-brand-indigo to-brand-purple",
    teal: "from-brand-teal to-brand-mint",
    coral: "from-brand-coral to-brand-amber",
    violet: "from-brand-violet to-brand-magenta",
  };

  const gradientClass = gradientMap[accent];

  const renderHeading = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const cleanText = part.slice(2, -2);
        return (
          <span
            key={index}
            className={`bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent font-extrabold`}
          >
            {cleanText}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div
      className={`max-w-3xl flex flex-col gap-3 ${
        align === "center" ? "mx-auto text-center items-center" : "text-left items-start"
      } ${className}`}
    >
      {kicker && (
        <span
          className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}
        >
          {kicker}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-tight font-display">
        {renderHeading(heading)}
      </h2>
      {subheading && (
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-light">
          {subheading}
        </p>
      )}
    </div>
  );
}
