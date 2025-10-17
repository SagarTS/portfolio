"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");
    const [mounted, setMounted] = useState(false);

    // const lightSound =
    //     typeof Audio !== "undefined" ? new Audio("/sounds/light-on.wav") : null;
    const darkSound =
        typeof Audio !== "undefined"
            ? new Audio("/sounds/light-off.wav")
            : null;

    useEffect(() => {
        setMounted(true);

        const savedTheme = localStorage.getItem("theme") as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            // Check system preference
            const systemPrefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setTheme(systemPrefersDark ? "dark" : "light");
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const root = document.documentElement;

        // Only update classes if they don't match the current theme
        if (theme === "dark" && !root.classList.contains("dark")) {
            root.classList.remove("light");
            root.classList.add("dark");
        } else if (theme === "light" && !root.classList.contains("light")) {
            root.classList.remove("dark");
            root.classList.add("light");
        }

        localStorage.setItem("theme", theme);

        if (theme === "dark") {
            console.log("🌑 Welcome to the Dark Side");
        } else {
            console.log("☀️ Back to the Bright Side");
        }
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prev) => {
            const next = prev === "dark" ? "light" : "dark";

            if (next === "dark" && darkSound) {
                darkSound.currentTime = 0;
                darkSound.play().catch(() => {});
            } else if (next === "light" && darkSound) {
                // update different sound if found
                darkSound.currentTime = 0;
                darkSound.play().catch(() => {});
            }

            return next;
        });
    };

    const isDark = theme === "dark";

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
