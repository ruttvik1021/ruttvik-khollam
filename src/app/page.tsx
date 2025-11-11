"use client";
import ThemeToggleButton from "@/components/toggleButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Database,
  DownloadIcon,
  ExternalLink,
  Eye,
  Github,
  Globe,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Server,
  Shield,
  Wrench,
  Zap,
  Sparkles,
  ArrowUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navigations = [
  { name: "Home", href: "#" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Component() {
  const [showMoreSkills, setShowMoreSkills] = useState(false);

  const highlightedSkills = [
    { name: "NextJs", icon: "/nextjs.jpg" },
    { name: "TypeScript", icon: "/typescript.png" },
    { name: "Tanstack", icon: "/tanstack.png" },
    { name: "Redux", icon: "/redux.png" },
    { name: "Git", icon: "/git.png" },
    { name: "Angular", icon: "/angular.png" },
    { name: "HTML/CSS", icon: "/html.png" },
    { name: "Tailwind CSS", icon: "/tailwind.png" },
    { name: "NestJs", icon: "/nestjs.png" },
    { name: "MongoDB", icon: "/mongo.png" },
  ];

  const footerSkills = [
    "ReactJs / NextJs / Angular",
    "HTML / CSS / Tailwind",
    "NestJs / MongoDB",
    "Tanstack",
  ];

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   toast.success("Thanks for reaching out. I'll get back to you soon.");
  //   setIsDialogOpen(false);
  // };

  const experience = [
    {
      period: "2022 - Present",
      role: "Senior Software Engineer",
      company: "Invimatic Technologies",
      achievements: [
        "<strong>Led front-end development</strong> for various enterprise-grade applications using React, Next.js, and TypeScript, reducing development cycles through modular architecture and reusable components.",
        "<strong>Optimized application performance</strong> by implementing component-level lazy loading and srcSet-based image delivery, improving page speed — Lighthouse score: 96+.",
        "<strong>Reduced bundle size</strong> through dynamic imports and route-based code splitting, resulting in faster first-contentful paint (FCP) and improved user experience on low-end devices.",
        "Ensured <strong>WCAG 2.1 accessibility compliance</strong> using semantic HTML5, ARIA landmarks, and keyboard navigation support — boosted Lighthouse accessibility score from 71 to 95+.",
        "Integrated <strong>multiple third-party APIs</strong> (Stripe, EaseBuzz, analytics providers) to streamline payments, authentication, and event tracking.",
        "Implemented and enforced <strong>clean code practices</strong> using ESLint, Prettier, and Husky for pre-commit checks, reducing merge issues and maintaining team-wide coding standards.",
        "Worked on <strong>secure payment flows</strong> and session handling, adhering to basic security standards like HTTPS, token storage, and XSS protection.",
        "Explored <strong>WebSockets and SSE</strong> in internal tooling and PoCs to enable real-time chat and live data syncing features.",
        "Built a <strong>polling mechanism</strong> to monitor long-running Python-based backend tasks, ensuring seamless UX during async content generation.",
        "<strong>Mentored junior developers</strong>, improving onboarding efficiency and team contribution.",
        "<strong>Collaborated with cross-functional teams</strong> (design, product, backend) to implement high-ROI features.",
      ],
    },
  ];

  const skills = {
    "Languages_&_Frameworks": [
      "TypeScript",
      "JavaScript",
      "React",
      "NextJs",
      "NodeJs",
      "NestJS",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "ExpressJs",
    ],
    "State_&_Data_Management": [
      "Redux",
      "TanStack Query",
      "Context API",
      "GraphQL",
      "Zustand",
    ],
    "Performance_&_Dev_Tools": [
      "Lighthouse",
      "Core Web Vitals",
      "Webpack Analyzer",
      "Vite",
      "React Profiler",
      "Bundle Splitting",
    ],
    "Databases_&_Backend": [
      "MongoDB",
      "PostgreSQL",
      "Mongoose",
      "RESTful APIs",
      "Prisma*",
      "Redis*",
    ],
    "Tools_&_Platforms": [
      "Git",
      "GitHub",
      "Vercel",
      "Docker",
      "Postman",
      "CI/CD (GitHub Actions)",
    ],
    AI: ["Gemini GenKit AI"],
    Security: [
      "HTTPS",
      "JWT",
      "CSP",
      "Helmet.js",
      "XSS/CSRF Protection",
      "OWASP Top 10",
    ],
    Real_Time_Tech: [
      "WebSockets",
      "Socket.IO",
      "Server-Sent Events",
      "Polling Mechanisms",
    ],
    Accessibility_A11Y: [
      "Semantic HTML",
      "ARIA",
      "Keyboard Navigation",
      "Screen Reader Testing",
      "axe-core",
    ],
    Development_Practices: [
      "Performance Optimization",
      "Modular Architecture",
      "Clean Code",
      "Code Review",
      "Testing (Jest/RTL)",
      "CI/CD",
      "Agile Development",
    ],
  };

  const categoryTitle = (key: string) =>
    key
      .replaceAll("_", " ")
      .replace("&", "&")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  const iconForCategory = (category: string) => {
    switch (true) {
      case /Languages/.test(category):
        return <Code2 className="w-5 h-5 text-blue-500" />;
      case /State/.test(category):
        return <Layers className="w-5 h-5 text-purple-500" />;
      case /AI/.test(category):
        return <Sparkles className="w-5 h-5 text-cyan-500" />;
      case /Performance/.test(category):
        return <Zap className="w-5 h-5 text-yellow-500" />;
      case /Databases/.test(category):
        return <Database className="w-5 h-5 text-green-500" />;
      case /Tools/.test(category):
        return <Wrench className="w-5 h-5 text-orange-500" />;
      case /Security/.test(category):
        return <Shield className="w-5 h-5 text-red-500" />;
      case /Real_Time_Tech/.test(category):
        return <Server className="w-5 h-5 text-teal-500" />;
      case /Accessibility/.test(category):
        return <Eye className="w-5 h-5 text-pink-500" />;
      case /Development_Practices/.test(category):
        return <Rocket className="w-5 h-5 text-indigo-500" />;
      default:
        return <Globe className="w-5 h-5 text-gray-400" />;
    }
  };

  const sectionHeader = (title: string) => {
    return (
      <motion.h2
        {...fadeIn}
        className="text-3xl font-bold text-center mb-12 font-devanagari"
      >
        {title}
      </motion.h2>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Hindi:ital@0;1&display=swap");

        .font-devanagari {
          font-family: "Dancing Script", cursive;
          font-weight: 600;
        }
        .font-devanagari {
          font-family: "Tiro Devanagari Hindi", serif;
          font-weight: 400;
          font-style: italic;
          font-size: 1.5rem;
        }
      `}</style>
      {/* Header */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-6"
      >
        <nav className="flex items-center justify-between">
          <Link
            href="#"
            className="flex items-center gap-2 text-2xl font-bold font-devanagari"
          >
            Ruttvik Khollam
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navigations.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <ThemeToggleButton />
        </nav>
      </motion.div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pb-20 flex justify-center items-center h-screen ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col-reverse md:flex-row items-center gap-12 text-center"
        >
          <div className="flex-1 space-y-6 text-left">
            <motion.h1
              {...fadeIn}
              className="text-5xl font-bold leading-tight font-devanagari"
            >
              Hello,
              <br />I Am Ruttvik Khollam.
            </motion.h1>
            <motion.p {...fadeIn} className="text-2xl text-foreground">
              Full Stack Web Developer
            </motion.p>
            <motion.div className="flex flex-wrap gap-2">
              <motion.span {...fadeIn}>
                <Button asChild className="mt-3">
                  <a
                    href="/Ruttvik Khollam - Senior Software Engineer.pdf"
                    download="Ruttvik_Khollam_Resume.pdf"
                  >
                    Download my resume <DownloadIcon className="w-4 h-4" />
                  </a>
                </Button>
              </motion.span>
              <motion.span {...fadeIn}>
                <Button asChild className="mt-3" variant="secondary">
                  <Link href="#projects">
                    View My Work <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.span>
            </motion.div>
          </div>
          <motion.div
            className="flex justify-between"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/profile.png"
              alt="Ruttvik Khollam"
              width={350}
              height={350}
              loading="eager"
            />

            {/* <motion.p
              {...fadeIn}
              className="font-bold text-center my-3 font-devanagari"
            >
              Just a Memoji holding space until my photo debut!
            </motion.p> */}
          </motion.div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <section className="container mx-auto px-4 pb-20" id="skills">
        {sectionHeader("My Skills")}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {highlightedSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="relative group"
            >
              <Card className="bg-muted backdrop-blur-sm hover:bg-muted/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center`}
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={100}
                      height={100}
                      className="rounded-xl"
                    />
                  </div>
                  <h3 className="font-semibold">{skill.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="flex justify-center">
          <motion.span {...fadeIn}>
            <Button
              className="mt-3"
              variant="secondary"
              onClick={() => setShowMoreSkills(!showMoreSkills)}
            >
              <motion.span className="flex gap-2 items-center">
                And lot more
                {!showMoreSkills ? (
                  <ArrowDown className="w-4 h-4" />
                ) : (
                  <ArrowUp className="w-4 h-4" />
                )}
              </motion.span>
            </Button>
          </motion.span>
        </motion.div>
        {showMoreSkills && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                viewport={{ once: true }}
                className="bg-muted rounded-2xl p-5 border border-border"
              >
                <div className="flex items-center gap-2 mb-4">
                  {iconForCategory(category)}
                  <h3 className="text-lg font-semibold">
                    {categoryTitle(category)}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="flex items-center bg-background px-3 py-1 rounded-full border border-border text-sm font-medium text-foreground hover:shadow-md transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* Work Experience */}
      <section className="container mx-auto px-4 pb-20" id="experience">
        {sectionHeader("My Work Experience")}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {experience.map((experience, index) => (
            <motion.div variants={fadeIn} key={index}>
              <Card className="bg-muted transition-colors">
                <CardContent className="pt-6">
                  <p className="mb-2 font-devanagari text-foreground text-2xl">
                    {experience.period} : {experience.company}
                  </p>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {experience.role}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="text-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: achievement }}
                      />
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Portfolio */}
      <section className="container mx-auto px-4 pb-20" id="projects">
        {sectionHeader("Projects")}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex justify-center max-w-lg mx-auto"
        >
          <motion.div variants={fadeIn} className="w-full md:w-auto">
            <Card className="bg-muted overflow-hidden group">
              <CardContent className="p-0">
                <Image
                  src="/akiraFlow.png"
                  alt="Expense Tracker"
                  width={400}
                  height={300}
                  className="w-full transition-transform group-hover:scale-105"
                />
              </CardContent>
              <CardContent className="p-6">
                <h3 className="text-foreground font-bold text-2xl mb-2 font-devanagari">
                  AkiraFlow: Expense Tracker
                </h3>
                <p className="text-foreground mb-4">
                  A full-featured expense tracking app built with Next.js,
                  server actions, and MongoDB. Effortlessly track your spending,
                  set up budgets, and get insightful visualizations of your
                  financial patterns.
                </p>
                <p className="text-foreground mb-4">
                  Try it out for free—at least until my free-tier database
                  reaches its limit! 😉
                </p>
                <div className="flex gap-4">
                  <Button
                    asChild
                    className="bg-background text-foreground hover:bg-background/80"
                  >
                    <Link
                      href="https://expense-tracker-ashy-beta.vercel.app"
                      target="_blank"
                      className="gap-2"
                    >
                      Try it out <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact */}
      {/* <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-muted py-12"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold font-devanagari">
                Let&apos;s work together on your next project!
              </h2>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="default">
                  Contact Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="font-devanagari text-2xl">
                    Contact Me
                  </DialogTitle>
                  <DialogDescription>
                    Fill out the form below and I&apos;ll get back to you as
                    soon as possible.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name-footer">Full Name</Label>
                    <Input id="name-footer" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-footer">Email</Label>
                    <Input
                      id="email-footer"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message-footer">Message</Label>
                    <Textarea
                      id="message-footer"
                      placeholder="Your message here..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </motion.section> */}

      {/* Footer */}
      <footer className="container mx-auto px-4 pt-12 pb-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link
              href="#"
              className="flex items-center gap-2 text-2xl font-bold font-devanagari"
            >
              Ruttvik Khollam
            </Link>
            <p className="text-foreground">
              Full Stack Web Developer specializing in modern web technologies.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.github.com/ruttvik1021" target="_blank">
                  <Github className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/ruttvik1021"
                  target="_blank"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 font-devanagari text-2xl">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigations
                .filter((item) => item.href !== "#contact")
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 font-devanagari text-2xl">Skills</h3>
            <ul className="space-y-2">
              {footerSkills.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href="#skills"
                      className="hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3
              className="font-bold mb-4 font-devanagari text-2xl"
              id="contact"
            >
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+919665307459" className="text-foreground">
                  +919665307459
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:rkhollam21@gmail.com"
                  className="text-foreground"
                >
                  rkhollam21@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-foreground">
                  Pune, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-foreground mt-12 pt-6 text-center text-foreground">
          <p>
            © {new Date().getFullYear()} Ruttvik Khollam. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
