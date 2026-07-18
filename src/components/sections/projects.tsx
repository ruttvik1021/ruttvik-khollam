"use client";
import SectionHeading from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Side projects where I explore new ideas end to end."
        />

        <div className="mx-auto max-w-5xl space-y-8">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group grid overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 md:grid-cols-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  width={640}
                  height={480}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="soft">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <p className="text-sm text-muted-foreground">{project.note}</p>
                <div>
                  <Button asChild>
                    <Link href={project.liveUrl} target="_blank">
                      Try it out <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
