"use client";

export default function FooterLogo() {
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
      className="flex items-center gap-3 group cursor-pointer"
    >
      {/* Icon with gradient background - optimized for black footer */}
      <div className="relative w-11 h-11 rounded-xl flex items-center justify-center font-bold text-xl text-white bg-linear-to-br from-primary via-primary to-primary/80 shadow-lg shadow-primary/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/40 group-hover:scale-105 before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-br before:from-white/10 before:to-transparent before:pointer-events-none">
        <span className="relative z-10 font-extrabold text-2xl tracking-tight text-white">
          N
        </span>
      </div>

      {/* Text - optimized for black background */}
      <div className="leading-tight">
        <h1 className="text-xl font-bold tracking-tight flex items-baseline gap-1">
          <span className="text-white group-hover:text-white/90 transition-colors duration-300">
            Nexo
          </span>
          <span className="bg-linear-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-white/50 font-extrabold group-hover:from-primary group-hover:to-primary transition-all duration-300">
            Tech
          </span>
        </h1>

        <p className="text-xs text-white/60 font-medium tracking-wide uppercase transition-colors duration-300 group-hover:text-white/80">
          IT Solutions
        </p>
      </div>
    </a>
  );
}
