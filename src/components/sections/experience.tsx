"use client";
import SectionHeading from "@/components/sections/section-heading";
import { experience } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-secondary/40 py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Building and shipping production software for enterprise clients."
        />

        <div className="mx-auto max-w-3xl">
          {experience.map((job) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative border-l-2 border-primary/30 pb-4 pl-8 sm:pl-10"
            >
              <span className="absolute -left-[1.05rem] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-background text-primary">
                <Briefcase className="h-4 w-4" />
              </span>

              <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
                <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
                  {job.period}
                </p>
                <h3 className="mt-2 text-2xl font-bold">{job.role}</h3>
                <p className="mt-1 text-muted-foreground">{job.company}</p>

                <ul className="mt-6 space-y-3">
                  {job.achievements.map((achievement, index) => (
                    <li key={index} className="flex gap-3 leading-relaxed">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="font-semibold text-foreground">
                          {achievement.highlight}
                        </strong>
                        {achievement.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
