"use client";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const Theme = "theme";
enum Modes {
  DARK = "dark",
  LIGHT = "light",
}

const ThemeToggleButton = () => {
  const [activeTheme, setActiveTheme] = useState<Modes | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if window is defined
      const storedTheme = (localStorage.getItem(Theme) as Modes) || Modes.LIGHT;
      setActiveTheme(storedTheme);
      toggleTheme(storedTheme); // Apply the stored theme
    }
  }, []);

  const toggleTheme = (theme: Modes) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(Theme, theme);
      document.documentElement.classList.toggle(
        Modes.DARK,
        theme === Modes.DARK
      );
      document.documentElement.classList.toggle(
        Modes.LIGHT,
        theme === Modes.LIGHT
      );
    }
  };

  return activeTheme === Modes.DARK ? (
    <Sun
      onClick={() => {
        setActiveTheme(Modes.LIGHT);
        toggleTheme(Modes.LIGHT);
      }}
    />
  ) : (
    <Moon
      onClick={() => {
        setActiveTheme(Modes.DARK);
        toggleTheme(Modes.DARK);
      }}
    />
  );
};

export default ThemeToggleButton;
