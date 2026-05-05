import { Reveal } from "@/components/Reveal";
import FAQ from "@/components/home/FAQ";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#EEF4FF] to-white py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <Reveal>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Built on Belief.{" "}
              <span className="text-[#3883F0]">Driven by Possibility.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We are a dedicated team of software developers focused on one
              simple mission: making premium digital solutions accessible and
              understandable for everyday businesses.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            
            <Reveal>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 relative inline-block">
                Our Story
                <span className="absolute left-0 -bottom-2 w-12 h-1 bg-[#3883F0] rounded-full"></span>
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Nexotech IT was started by two passionate developers who saw a
                  massive gap in the digital world. Instead of taking
                  traditional corporate jobs, we decided to build something that
                  directly helps our community.
                </p>
                <p>
                  We noticed that incredible small businesses, local shop
                  owners, and educators were being left behind because
                  technology felt too intimidating, complex, or overpriced. Many
                  agencies focus only on big corporations, ignoring the people
                  who need digital tools the most.
                </p>
                <p>
                  So, we built an agency to change that. Today, our core team
                  focuses on building custom websites, online stores, and
                  management systems that solve actual daily headaches. No
                  confusing tech jargon, just honest work that helps you grow.
                </p>
              </div>
            </Reveal>

            <Reveal
              direction="left"
              className="relative rounded-3xl aspect-[4/3] overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src="/team/founder_about_us.jpg"
                alt="Founders of Nexotech IT"
                fill
                className="object-cover"
              />
              
              {/* subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </Reveal>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-center">
            
            <Reveal
              delay={0}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#3883F0]/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Our Mission
              </h3>
              <div className="w-10 h-1 bg-[#3883F0] mx-auto mb-4 rounded-full"></div>
              <p className="text-slate-600 text-sm leading-relaxed">
                To simplify technology for business owners. We turn your daily
                operational problems into automated, easy-to-use digital systems
                so you can focus on growing your business.
              </p>
            </Reveal>

            <Reveal
              delay={0.1}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#3883F0]/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Our Approach
              </h3>
              <div className="w-10 h-1 bg-[#3883F0] mx-auto mb-4 rounded-full"></div>
              <p className="text-slate-600 text-sm leading-relaxed">
                We speak your language. We prioritize understanding your
                specific business bottlenecks before we write a single line of
                code, ensuring the final product actually works for you.
              </p>
            </Reveal>

            <Reveal
              delay={0.2}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#3883F0]/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Our Promise
              </h3>
              <div className="w-10 h-1 bg-[#3883F0] mx-auto mb-4 rounded-full"></div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Total transparency. We provide realistic timelines,
                straightforward pricing, and long-term support to ensure your
                digital tools run smoothly for years to come.
              </p>
            </Reveal>
          </div>

          <FAQ />
        </div>
      </section>
    </div>
  );
}