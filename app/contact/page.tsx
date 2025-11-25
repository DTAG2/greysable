import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | GreySable",
  description: "Get in touch with GreySable. Let's discuss how we can help with your automation and AI needs.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-grey-600 block mb-6">
              Contact
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">
              Let&apos;s Build
              <br />
              <span className="text-grey-500">Together</span>
            </h1>
            <p className="mt-10 text-xl text-grey-400 max-w-xl leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it. Reach out
              and let&apos;s explore how we can help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 pb-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-grey-800" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Contact Info */}
            <AnimatedSection className="md:col-span-2">
              <div className="space-y-10">
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-grey-600 block mb-3">
                    Email
                  </span>
                  <a
                    href="mailto:hello@greysable.com"
                    className="text-white hover:text-grey-300 transition-colors text-lg"
                  >
                    hello@greysable.com
                  </a>
                </div>

                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-grey-600 block mb-3">
                    Response Time
                  </span>
                  <p className="text-grey-400">
                    We typically respond within 24-48 hours.
                  </p>
                </div>

                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-grey-600 block mb-4">
                    What to Expect
                  </span>
                  <ul className="space-y-4 text-grey-400">
                    <li className="flex items-start gap-4">
                      <span className="text-xs font-mono text-grey-600 mt-1">01</span>
                      <span>Initial discovery call to understand your needs</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-xs font-mono text-grey-600 mt-1">02</span>
                      <span>Detailed proposal with scope and approach</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-xs font-mono text-grey-600 mt-1">03</span>
                      <span>Transparent pricing with no hidden costs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.1} className="md:col-span-3">
              <div className="bg-grey-950 border border-grey-800 p-8 md:p-10">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
