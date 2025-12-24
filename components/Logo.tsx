"use client";

import { cn } from "@/lib/utils";

const Logo = ({
  className,
  iconClassName,
  letterClassName,
  textWrapperClassName,
  titleClassName,
  highlightClassName,
  subtitleClassName,
}: {
  className?: string;
  iconClassName?: string;
  letterClassName?: string;
  textWrapperClassName?: string;
  titleClassName?: string;
  highlightClassName?: string;
  subtitleClassName?: string;
}) => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <a
      href="#home"
      onClick={(e) => handleSmoothScroll(e, "home")}
      className={cn("flex items-center gap-3 group cursor-pointer", className)}
    >
      {/* Icon with gradient background */}
      <div
        className={cn(
          "relative w-11 h-11 rounded-xl flex items-center justify-center font-bold text-xl text-white",
          "bg-linear-to-br from-primary via-primary to-primary/80",
          "shadow-lg shadow-primary/20",
          "transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/30 group-hover:scale-105",
          "before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-br before:from-white/10 before:to-transparent before:pointer-events-none",
          iconClassName
        )}
      >
        <span
          className={cn(
            "relative z-10 font-extrabold text-2xl tracking-tight",
            letterClassName
          )}
        >
          N
        </span>
      </div>

      {/* Text */}
      <div className={cn("leading-tight", textWrapperClassName)}>
        <h1
          className={cn(
            "text-xl font-bold tracking-tight flex items-baseline gap-1",
            titleClassName
          )}
        >
          <span className="text-foreground">Nexo</span>
          <span
            className={cn(
              "bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent",
              "font-extrabold",
              highlightClassName
            )}
          >
            Tech
          </span>
        </h1>

        <p
          className={cn(
            "text-xs text-muted-foreground font-medium tracking-wide uppercase",
            "transition-colors duration-300 group-hover:text-foreground/80",
            subtitleClassName
          )}
        >
          IT Solutions
        </p>
      </div>
    </a>
  );
};

export default Logo;
