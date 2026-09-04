import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import FAQ from "@/components/home/FAQ";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us — Our Story, Mission & Team",
  description:
    "Learn about Nexo Tech IT — a software development company helping businesses worldwide build custom software and deploy ready-made SaaS products. Meet our founders and team.",
  keywords: [
    "Nexo Tech IT about",
    "software development company story",
    "IT company team",
    "custom software company founders",
  ],
  alternates: {
    canonical: "https://nexotechit.com/about",
  },
  openGraph: {
    title: "About Nexo Tech IT — Our Story, Mission & Team",
    description:
      "We are a software development company that helps businesses globally build better digital products. Learn our story.",
    url: "https://nexotechit.com/about",
  },
};


const founders = [
  {
    name: "Md Raihan Islam",
    role: "Co-Founder & CEO",
    image: "/team/founder_about_us_1.jpg",
    quote: "Technology should work for people — not the other way around.",
    story: [
      "Rasel is the driving force behind Nexotech IT's vision and strategy. With a deep passion for making digital tools accessible to every business, he leads the company with a hands-on, client-first mindset.",
      "Before founding Nexotech IT, Rasel saw firsthand how small business owners were struggling to compete digitally — not due to lack of ambition, but lack of access to the right tools. That observation became the foundation of everything Nexotech IT stands for.",
    ],
    tags: ["Product Strategy", "Client Relations", "Business Development"],
  },
  {
    name: "Layek Miah",
    role: "Co-Founder & CTO",
    image: "/team/founder_about_us_2.jpeg",
    quote: "Clean code is not written for machines — it is written for people.",
    story: [
      "Tmi is the technical backbone of Nexotech IT. With an obsession for clean architecture and elegant solutions, he ensures that every product we ship is not just functional — but built to last.",
      "His philosophy is simple: understand the problem deeply before touching a keyboard. This discipline has allowed Nexotech IT to deliver projects that clients can maintain and grow long after launch.",
    ],
    tags: ["Software Architecture", "Full-Stack Development", "System Design"],
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">

      {/* ─── HERO ─── */}
      <section className="relative bg-gradient-to-b from-[#EEF4FF] to-white py-24 border-b border-slate-200 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#3883F0]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#3883F0]/10 blur-3xl" />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center relative z-10">
          <Reveal>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#3883F0]/10 text-[#3883F0] text-sm font-semibold tracking-wide uppercase">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Built on Belief.{" "}
              <span className="text-[#3883F0]">Driven by Possibility.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We are a dedicated team of software developers focused on one
              simple mission: making premium digital solutions accessible and
              understandable for everyday businesses.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">

          {/* ─── OUR STORY ─── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-28">
            <Reveal>
              <span className="inline-block mb-3 px-3 py-1 rounded-full bg-[#3883F0]/10 text-[#3883F0] text-xs font-semibold tracking-widest uppercase">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Two Developers.{" "}
                <span className="text-[#3883F0]">One Big Mission.</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Nexotech IT was started by two passionate developers who saw a
                  massive gap in the digital world. Instead of taking traditional
                  corporate jobs, we decided to build something that directly
                  helps our community.
                </p>
                <p>
                  We noticed that incredible small businesses, local shop owners,
                  and educators were being left behind because technology felt too
                  intimidating, complex, or overpriced. Many agencies focus only
                  on big corporations, ignoring the people who need digital tools
                  the most.
                </p>
                <p>
                  So, we built an agency to change that. Today, our core team
                  focuses on building custom websites, online stores, and
                  management systems that solve actual daily headaches — no
                  confusing tech jargon, just honest work that helps you grow.
                </p>
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal direction="left" className="grid grid-cols-2 gap-6">
              {[
                { value: "2+", label: "Years of Experience" },
                { value: "50+", label: "Projects Delivered" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "24/7", label: "Ongoing Support" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center p-8 rounded-2xl border border-slate-200 hover:border-[#3883F0]/40 hover:shadow-lg transition-all duration-300 bg-white text-center"
                >
                  <span className="text-4xl font-extrabold text-[#3883F0] mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm text-slate-500 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </Reveal>
          </div>

          {/* ─── THE PEOPLE BEHIND NEXOTECH ─── */}
          <div className="mb-28">
            <Reveal className="text-center mb-16">
              <span className="inline-block mb-3 px-3 py-1 rounded-full bg-[#3883F0]/10 text-[#3883F0] text-xs font-semibold tracking-widest uppercase">
                The Founders
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                The People Behind Nexotech
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                A deeper look at the two individuals who left comfortable paths
                to build something they truly believe in.
              </p>
            </Reveal>

            <div className="space-y-20">
              {founders.map((founder, i) => (
                <Reveal key={founder.name} delay={0.1}>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                      i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    {/* Photo side */}
                    <div className="relative group">
                      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#3883F0]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg aspect-[4/5]">
                        <Image
                          src={founder.image}
                          alt={`${founder.name} — ${founder.role}`}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                        {/* Quote badge */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-white/90 text-sm italic leading-relaxed">
                            &ldquo;{founder.quote}&rdquo;
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Story side */}
                    <div>
                      <span className="inline-block mb-2 px-3 py-0.5 rounded-full bg-[#3883F0] text-white text-xs font-semibold">
                        {founder.role}
                      </span>
                      <h3 className="text-3xl font-bold text-slate-900 mb-6 mt-2">
                        {founder.name}
                      </h3>
                      <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
                        {founder.story.map((para, j) => (
                          <p key={j}>{para}</p>
                        ))}
                      </div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {founder.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 hover:bg-[#3883F0]/10 hover:text-[#3883F0] transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ─── VALUES CARDS ─── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
            {[
              {
                title: "Our Mission",
                icon: "🎯",
                delay: 0,
                text: "To simplify technology for business owners. We turn your daily operational problems into automated, easy-to-use digital systems so you can focus on growing your business.",
              },
              {
                title: "Our Approach",
                icon: "🤝",
                delay: 0.1,
                text: "We speak your language. We prioritize understanding your specific business bottlenecks before we write a single line of code, ensuring the final product actually works for you.",
              },
              {
                title: "Our Promise",
                icon: "⭐",
                delay: 0.2,
                text: "Total transparency. We provide realistic timelines, straightforward pricing, and long-term support to ensure your digital tools run smoothly for years to come.",
              },
            ].map((card) => (
              <Reveal
                key={card.title}
                delay={card.delay}
                className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#3883F0]/40 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#3883F0]/10 flex items-center justify-center text-2xl mx-auto mb-5 group-hover:bg-[#3883F0]/20 transition-colors duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {card.title}
                </h3>
                <div className="w-10 h-0.5 bg-[#3883F0] mx-auto mb-4 rounded-full" />
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.text}
                </p>
              </Reveal>
            ))}
          </div>

          <FAQ />
        </div>
      </section>
    </div>
  );
}