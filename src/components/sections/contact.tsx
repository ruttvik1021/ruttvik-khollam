"use client";
import SectionHeading from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    href: undefined,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-secondary/40 py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have a project in mind, or just want to say hi? My inbox is always open."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-card p-8 shadow-sm sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-3">
            {contactItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium text-muted-foreground">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm font-semibold transition-colors hover:text-primary"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <a href={`mailto:${siteConfig.email}`}>
                Say hello <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
