import { Button } from "@/components/ui/button";
import { navigation, siteConfig } from "@/lib/data";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <Link href="#home" className="text-lg font-bold">
              <span className="text-gradient">{siteConfig.name}</span>
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Full Stack Web Developer specializing in modern web technologies.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-1">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={siteConfig.github}
                target="_blank"
                aria-label="GitHub profile"
              >
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={siteConfig.linkedin}
                target="_blank"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <p className="mt-8 border-t border-border/60 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
