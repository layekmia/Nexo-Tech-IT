"use client";

import { useEffect, useState } from "react";
import { Users, FolderKanban, Calendar, Heart } from "lucide-react";

const stats = [
  {
    value: "500+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    value: "1000+",
    label: "Projects Delivered",
    icon: FolderKanban,
  },
  {
    value: "10+",
    label: "Years Experience",
    icon: Calendar,
  },
  {
    value: "99%",
    label: "Client Satisfaction",
    icon: Heart,
  },
];

export default function Stats() {
  const [mounted, setMounted] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    years: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 100);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        clients: Math.floor(500 * progress),
        projects: Math.floor(1000 * progress),
        years: Math.floor(10 * progress),
        satisfaction: Math.floor(99 * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters({
          clients: 500,
          projects: 1000,
          years: 10,
          satisfaction: 99,
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, [mounted]);

  const displayValues = {
    clients: `${counters.clients}+`,
    projects: `${counters.projects}+`,
    years: `${counters.years}+`,
    satisfaction: `${counters.satisfaction}%`,
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5 opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const delay = index * 100;
            const displayValue =
              index === 0
                ? displayValues.clients
                : index === 1
                ? displayValues.projects
                : index === 2
                ? displayValues.years
                : displayValues.satisfaction;

            return (
              <div
                key={index}
                className={`
                  group relative text-center
                  p-6 rounded-2xl
                  bg-white/80 backdrop-blur-sm
                  border border-border/50
                  shadow-md hover:shadow-xl
                  transition-all duration-500 ease-out
                  hover:-translate-y-1 hover:border-primary/30
                  ${
                    mounted
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }
                `}
                style={{
                  transitionDelay: `${delay}ms`,
                }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/3 transition-all duration-500 pointer-events-none" />

                {/* Icon */}
                <div
                  className={`
                    relative mx-auto mb-4 p-3 rounded-xl w-fit
                    bg-linear-to-br from-primary via-primary to-primary/80
                    shadow-lg shadow-primary/20
                    group-hover:shadow-xl group-hover:shadow-primary/30
                    group-hover:scale-110
                    transition-all duration-500
                    before:absolute before:inset-0 before:rounded-xl
                    before:bg-linear-to-br before:from-white/10 before:to-transparent
                    before:pointer-events-none
                  `}
                >
                  <IconComponent className="h-6 w-6 text-white relative z-10" />
                </div>

                {/* Stat Value */}
                <div
                  className={`
                    text-4xl md:text-5xl font-bold mb-2
                    text-foreground
                    group-hover:text-primary
                    transition-colors duration-300
                  `}
                >
                  {displayValue}
                </div>

                {/* Stat Label */}
                <div className="text-muted-foreground font-medium text-sm md:text-base group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
