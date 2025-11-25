import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  const delayClass = delay > 0 ? `animation-delay-${Math.round(delay * 1000)}` : "";

  return (
    <div className={`animate-fade-in ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
