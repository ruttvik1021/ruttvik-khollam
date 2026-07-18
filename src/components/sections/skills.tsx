"use client";
import SectionHeading from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { highlightedSkills, skillCategories } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Code2,
  Database,
  Eye,
  Globe,
  Layers,
  Rocket,
  Server,
  Shield,
  Sparkles,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const categoryIcons: Record<string, LucideIcon> = {
  code: Code2,
  layers: Layers,
  zap: Zap,
  database: Database,
  wrench: Wrench,
  sparkles: Sparkles,
  shield: Shield,
  server: Server,
  eye: Eye,
  rocket: Rocket,
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Skills() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="The core of my day-to-day toolkit — and the wider stack behind it."
        />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.06 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {highlightedSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
            >
              <Card className="group h-full border-border/60 bg-card/60 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="flex flex-col items-center gap-3 p-6">
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl">
                    <Image
                      src={skill.icon}
                      alt={`${skill.name} logo`}
                      width={56}
                      height={56}
                      className="rounded-xl object-contain transition-transform group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-sm font-semibold">{skill.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
          >
            {showAll ? "Show less" : "And a lot more"}
            {showAll ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        </div>

        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                {skillCategories.map((category) => {
                  const Icon = categoryIcons[category.icon] ?? Globe;
                  return (
                    <div
                      key={category.title}
                      className="rounded-2xl border border-border/60 bg-card/60 p-5"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="font-semibold">{category.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <Badge key={item} variant="secondary">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
