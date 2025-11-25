import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import TeamMember from "@/components/TeamMember";

export const metadata: Metadata = {
  title: "About | GreySable",
  description: "Meet the team behind GreySable. We build intelligent automation systems and AI solutions.",
};

const teamMembers = [
  {
    name: "Team Member 1",
    role: "Co-Founder",
    bio: "Passionate about building systems that scale. Brings deep expertise in automation and system architecture to every project.",
    initials: "TM",
  },
  {
    name: "Team Member 2",
    role: "Co-Founder",
    bio: "Focused on the intersection of AI and practical business applications. Believes in building technology that delivers real results.",
    initials: "TM",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-grey-600 block mb-6">
              About
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">
              Building
              <br />
              The Future
              <br />
              <span className="text-grey-500">Thoughtfully</span>
            </h1>
            <p className="mt-10 text-xl text-grey-400 max-w-xl leading-relaxed">
              We&apos;re a small team with big ambitions. Our focus is simple:
              build technology that works, scales, and delivers measurable
              outcomes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-grey-950 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-grey-800" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-px bg-grey-800">
            <AnimatedSection className="bg-black p-12">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-grey-600 block mb-4">
                01
              </span>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-6">Our Mission</h2>
              <p className="text-grey-400 leading-relaxed">
                Ship systems that work. No bloat, no feature creep. We build
                automation that accelerates your mission—fast deployment,
                reliable operation, measurable results.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="bg-black p-12">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-grey-600 block mb-4">
                02
              </span>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-6">Our Approach</h2>
              <p className="text-grey-400 leading-relaxed">
                Understand the objective. Design the system. Execute. We cut
                through complexity to deliver solutions that solve the actual
                problem—not the one that&apos;s easiest to build.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-grey-800" />

        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-grey-600 block mb-4">
              Values
            </span>
            <h2 className="text-4xl font-bold tracking-tighter uppercase">
              What Drives Us
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                number: "01",
                title: "Precision",
                description:
                  "Every line of code, every system design, every decision is made with intention and care.",
              },
              {
                number: "02",
                title: "Transparency",
                description:
                  "No black boxes. We believe in clear communication and demystifying technology for our clients.",
              },
              {
                number: "03",
                title: "Outcomes",
                description:
                  "Technology is only valuable if it delivers results. We measure success by your success.",
              },
            ].map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div>
                  <span className="text-xs font-mono text-grey-600 block mb-4">
                    {value.number}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-3">
                    {value.title}
                  </h3>
                  <p className="text-grey-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-grey-950 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-grey-800" />

        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-grey-600 block mb-4">
              Team
            </span>
            <h2 className="text-4xl font-bold tracking-tighter uppercase">The Team</h2>
            <p className="mt-4 text-grey-500">
              The people behind the precision
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <TeamMember {...member} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
