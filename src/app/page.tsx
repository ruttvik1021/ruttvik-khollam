"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "../hooks/use-toast";

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

export default function Component() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const skills = [
    { name: "Angular", icon: "/angular.svg", color: "bg-red-500" },
    { name: "React", icon: "/react.svg", color: "bg-blue-300" },
    { name: "JavaScript", icon: "/javascript.svg", color: "bg-yellow-400" },
    { name: "TypeScript", icon: "/typescript.svg", color: "bg-blue-500" },
    { name: "Redux", icon: "/redux.svg", color: "bg-purple-500" },
    { name: "Git", icon: "/git.svg", color: "bg-orange-500" },
    { name: "HTML", icon: "/html.svg", color: "bg-orange-600" },
    { name: "CSS", icon: "/css.svg", color: "bg-blue-600" },
    { name: "Tailwind CSS", icon: "/tailwind.svg", color: "bg-teal-500" },
    { name: "MongoDB", icon: "/mongodb.svg", color: "bg-green-500" },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap");

        .font-cursive {
          font-family: "Dancing Script", cursive;
        }
      `}</style>
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-6"
      >
        <nav className="flex items-center justify-between">
          <Link
            href="#"
            className="flex items-center gap-2 text-xl font-bold font-cursive"
          >
            <div className="h-8 w-8 rounded-full bg-primary"></div>
            Portfolio
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#home" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="hover:text-primary transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#portfolio"
              className="hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
            <Link href="#news" className="hover:text-primary transition-colors">
              Blog
            </Link>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1 space-y-6">
            <motion.h1
              {...fadeIn}
              className="text-5xl font-bold leading-tight font-cursive"
            >
              Hello,
              <br />I Am Ruttvik Khollam.
            </motion.h1>
            <motion.p {...fadeIn} className="text-xl text-gray-400">
              Full Stack Web Developer
            </motion.p>
            <motion.div {...fadeIn}>
              <Button size="lg" className="gap-2">
                View My Work <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="flex-1"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/placeholder.svg"
              alt="Hero image"
              width={500}
              height={600}
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20" id="skills">
        <motion.h2
          {...fadeIn}
          className="text-3xl font-bold text-center mb-12 font-cursive"
        >
          My Skills
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeIn}
              className="relative group"
            >
              <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-800/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl ${skill.color} flex items-center justify-center`}
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="w-8 h-8"
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
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          {...fadeIn}
          className="text-3xl font-bold text-center mb-12 font-cursive"
        >
          My Work Experience
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              period: "2021 - Present",
              role: "Senior Full Stack Developer",
              company: "Tech Solutions Inc.",
            },
            {
              period: "2019 - 2021",
              role: "Frontend Developer",
              company: "Digital Innovations",
            },
            {
              period: "2018 - 2019",
              role: "Junior Web Developer",
              company: "StartUp Hub",
            },
          ].map((experience, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <CardContent className="pt-6">
                  <p className="text-primary mb-2 font-cursive">
                    {experience.period}
                  </p>
                  <h3 className="text-xl font-bold mb-2">{experience.role}</h3>
                  <p className="text-gray-400">{experience.company}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Portfolio */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          {...fadeIn}
          className="text-3xl font-bold text-center mb-12 font-cursive"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div variants={fadeIn}>
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden group">
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg"
                  alt="Expense Tracker"
                  width={400}
                  height={300}
                  className="w-full transition-transform group-hover:scale-105"
                />
              </CardContent>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2 font-cursive">
                  Expense Tracker
                </h3>
                <p className="text-gray-400 mb-4">
                  A full-stack expense tracking application built with React,
                  Node.js, and MongoDB. Track your expenses, create budgets, and
                  visualize your spending patterns.
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link
                      href="https://expense-tracker-ashy-beta.vercel.app/"
                      target="_blank"
                      className="gap-2"
                    >
                      Try it out <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#feedback" className="gap-2">
                      Give Feedback <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          {/* Additional portfolio items */}
        </motion.div>
      </section>

      {/* Contact */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-primary py-12"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold font-cursive">
                Let's work together on your next project!
              </h2>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="secondary">
                  Contact Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="font-cursive text-2xl">
                    Contact Me
                  </DialogTitle>
                  <DialogDescription>
                    Fill out the form below and I'll get back to you as soon as
                    possible.
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
      </motion.section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link
              href="#"
              className="flex items-center gap-2 text-xl font-bold font-cursive"
            >
              <div className="h-8 w-8 rounded-full bg-primary"></div>
              Portfolio
            </Link>
            <p className="text-gray-400">
              Full Stack Web Developer specializing in modern web technologies.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.github.com/ruttvik1021" target="_blank">
                  <Github className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/ruttvik1021" target="_blank">
                  <Linkedin className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 font-cursive">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 font-cursive">Skills</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Backend Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Database Design
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  API Development
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 font-cursive">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-gray-400">+919665307459</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-gray-400">rkhollam21@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-gray-400">Pune, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-12 pt-6 text-center text-gray-400">
          <p>© 2024 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
