"use client";
import ThemeToggleButton from "@/components/toggleButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
  // const [isDialogOpen, setIsDialogOpen] = useState(false);

  const skills = [
    { name: "NextJs", icon: "/nextjs.jpg" },
    { name: "TypeScript", icon: "/typescript.png" },
    { name: "Tanstack", icon: "/tanstack.png" },
    { name: "Redux", icon: "/redux.png" },
    { name: "Git", icon: "/git.png" },
    { name: "Angular", icon: "/angular.png" },
    { name: "HTML/CSS", icon: "/html.png" },
    { name: "Tailwind CSS", icon: "/tailwind.png" },
    // { name: "GraphQL", icon: "/graphql.svg" },
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
        "Led development of critical business applications using React JS, Next JS, and TypeScript",
        "Designed scalable architectures and optimized application performance",
        "Implemented innovative solutions like React Query for enhanced user experience",
        "Mentored team members and translated business requirements into technical specifications",
        "Integrated multiple third-party APIs and utilized state management libraries",
        "Applied modern development practices including asynchronous programming and clean code principles",
      ],
    },
  ];

  const sectionHeader = (title: string) => {
    return (
      <motion.h2
        {...fadeIn}
        className="text-3xl font-bold text-center mb-12 font-cursive"
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

        .font-cursive {
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
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-6 mb-3"
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
      </motion.header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pb-20 flex justify-center items-center h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col-reverse md:flex-row items-center gap-12 text-center"
        >
          <div className="flex-1 space-y-6 text-left">
            <motion.h1
              {...fadeIn}
              className="text-5xl font-bold leading-tight font-cursive"
            >
              Hello,
              <br />I Am Ruttvik Khollam.
            </motion.h1>
            <motion.p {...fadeIn} className="text-2xl text-foreground">
              Full Stack Web Developer
            </motion.p>
            <motion.span {...fadeIn}>
              <Button asChild className="mt-3">
                <Link href="#projects">
                  View My Work <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.span>
          </div>
          <motion.div
            className="flex-1"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/profile.jpg"
              alt="Ruttvik Khollam"
              width={350}
              height={350}
              className="rounded-full"
            />
            <motion.p
              {...fadeIn}
              className="text-xl font-bold text-center my-3 font-cursive"
            >
              Just a Memoji holding space until my photo debut!
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

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
          {skills.map((skill, index) => (
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
                  <p className="mb-2 font-cursive text-foreground text-2xl">
                    {experience.period} : {experience.company}
                  </p>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {experience.role}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="text-foreground">
                        {achievement}
                      </li>
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
                  src="/expense-tracker.png"
                  alt="Expense Tracker"
                  width={400}
                  height={300}
                  className="w-full transition-transform group-hover:scale-105"
                />
              </CardContent>
              <CardContent className="p-6">
                <h3 className="text-foreground font-bold text-2xl mb-2 font-cursive">
                  Expense Tracker
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
              <h2 className="text-2xl font-bold font-cursive">
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
                  <DialogTitle className="font-cursive text-2xl">
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
            <h3 className="font-bold mb-4 font-cursive text-2xl">Navigation</h3>
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
            <h3 className="font-bold mb-4 font-cursive text-2xl">Skills</h3>
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
            <h3 className="font-bold mb-4 font-cursive text-2xl" id="contact">
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
          <p>© 2024 Ruttvik Khollam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
