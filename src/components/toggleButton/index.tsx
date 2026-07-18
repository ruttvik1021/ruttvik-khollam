"use client";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const THEME_KEY = "theme";
enum Modes {
  DARK = "dark",
  LIGHT = "light",
}

const ThemeToggleButton = () => {
  const [activeTheme, setActiveTheme] = useState<Modes | null>(null);

  useEffect(() => {
    const storedTheme =
      (localStorage.getItem(THEME_KEY) as Modes) ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? Modes.DARK
        : Modes.LIGHT);
    setActiveTheme(storedTheme);
    applyTheme(storedTheme);
  }, []);

  const applyTheme = (theme: Modes) => {
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.classList.toggle(Modes.DARK, theme === Modes.DARK);
  };

  const toggle = () => {
    const next = activeTheme === Modes.DARK ? Modes.LIGHT : Modes.DARK;
    setActiveTheme(next);
    applyTheme(next);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={
        activeTheme === Modes.DARK
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >
      {activeTheme === Modes.DARK ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ThemeToggleButton;
