"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import { ArrowRight, Download } from "lucide-react";
import { toast } from "sonner";
import { CustomToast } from "@/components/ui/toast";
import { FileText } from "lucide-react";
import { TypingText } from "../animate-ui/text/typing";
import Image from "next/image";
import { heroStats } from "@/data/hero-stats";
import { siteConfig } from "@/data/site-config";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative pt-16 md:pt-28 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left animate-on-scroll opacity-0 transform translate-y-6 transition-all duration-1000 delay-200">
          <p className="text-sm uppercase font-medium tracking-wide text-accent">Welcome to my portfolio</p>

          <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text animate-gradient">
              <TypingText text={siteConfig.name} />
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-muted-foreground font-semibold">
            {siteConfig.roleLong}
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            I build scalable, reliable, and user-focused software with a strong focus on clean architecture, performance, and thoughtful engineering.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-8 pt-4">
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={() =>
                toast.custom((id) => (
                  <CustomToast
                    title="Resume Coming Soon"
                    description="Resume currently unavailable. Check back soon!"
                    icon={<FileText className="h-5 w-5 text-primary" />}
                    close={() => toast.dismiss(id)}
                  />
                ))
              }
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              View Resume
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative animate-on-scroll opacity-0 transform translate-y-6 transition-all duration-1000 delay-400">
          <div className="relative mx-auto w-72 sm:w-96 md:w-[420px]">
            {/* Ambient bleed — soft, wide, gives the dark hair/shirt something to separate from */}
            <div
              aria-hidden
              className="absolute inset-[6%] -z-20 translate-y-[5%] rounded-full bg-foreground/[0.14] blur-2xl"
            />

            {/* The stage the subject stands in front of */}
            <div
              aria-hidden
              className="absolute inset-[10%] -z-10 translate-y-[5%] rounded-full bg-gradient-to-b from-foreground/[0.16] to-transparent ring-1 ring-foreground/[0.25]"
            />

            {/* Grounding shadow — a contact shadow so the cutout feels planted, not floating */}
            <div
              aria-hidden
              className="absolute bottom-[2%] left-1/2 -z-10 h-5 w-1/2 -translate-x-1/2 rounded-full bg-foreground/25 blur-lg"
            />

            <Image
              src="/image_light.png"
              alt={siteConfig.name}
              width={1230}
              height={1278}
              priority
              sizes="(min-width: 768px) 420px, (min-width: 640px) 384px, 288px"
              className="relative z-10 h-auto w-full object-contain"
              style={{
                maskImage: "linear-gradient(to bottom, black 97%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 97%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 sm:mt-10 animate-on-scroll opacity-0 transform translate-y-6 transition-all duration-1000 delay-600">
        <div className="mx-auto sm:px-12">
          <div className="relative">
            <div className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-proximity pt-4 pb-5">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden snap-start shrink-0 flex items-center gap-4 p-5 w-[170px] h-[75px] bg-black/2 dark:bg-white/7 backdrop-blur-3xl border border-white/10 dark:border-white/10 rounded-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),inset_0_-10px_14px_-10px_rgba(0,0,0,0.16)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.32),inset_0_-10px_14px_-10px_rgba(0,0,0,0.85)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),inset_0_-10px_14px_-10px_rgba(0,0,0,0.2)] dark:hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),inset_0_-10px_14px_-10px_rgba(0,0,0,0.95)] hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500 ease-out group-hover:w-full" />
                  <div className="flex-shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3">
                    <stat.icon className={`h-6 w-6 ${stat.colorClass}`} />
                  </div>
                  <div>
                    <div className="font-bold text-primary text-xl sm:text-2xl origin-left transition-transform duration-300 group-hover:scale-105">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
