"use client";
import { Button } from "@/components/ui/button";
import { siteConfig, stats } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, DownloadIcon, Github, Linkedin, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden scroll-mt-24 bg-grid"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />

      <div className="container relative mx-auto flex min-h-[calc(100vh-4rem)] flex-col justify-center px-4 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.12 }}
            className="space-y-6"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-widest text-primary"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {siteConfig.role}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient">{siteConfig.name}</span>
              <span className="block text-muted-foreground">
                {siteConfig.tagline}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              {siteConfig.summary}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg">
                <a
                  href={siteConfig.resumeUrl}
                  download={siteConfig.resumeFileName}
                >
                  Download resume <DownloadIcon className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="#projects">
                  View my work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href={siteConfig.github}
                    target="_blank"
                    aria-label="GitHub profile"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href={siteConfig.linkedin}
                    target="_blank"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <MapPin className="h-4 w-4" /> {siteConfig.location}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto"
          >
            <div
              aria-hidden
              className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary/40 via-violet-500/30 to-fuchsia-500/30 blur-2xl"
            />
            <div className="relative rounded-full border border-primary/30 bg-card/60 p-4 backdrop-blur-sm">
              <Image
                src="/profile.png"
                alt="Portrait of Ruttvik Khollam"
                width={320}
                height={320}
                priority
                className="rounded-full"
              />
            </div>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col rounded-2xl border border-border/60 bg-card/60 px-6 py-5 text-center backdrop-blur-sm"
            >
              <dt className="order-2 text-sm text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="order-1 text-3xl font-bold text-gradient">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
