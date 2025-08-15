import { useEffect, useState } from "react";
import { Theme, getStoredTheme, setTheme as persistTheme, applyTheme } from "./theme";

export function useTheme() {
    const [theme, setThemeState] = useState<Theme>(() => getStoredTheme());

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const setTheme = (t: Theme) => {
        setThemeState(t);
        persistTheme(t);
    };

    const toggle = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next as Theme);
    };

    return { theme, setTheme, toggle };
}
