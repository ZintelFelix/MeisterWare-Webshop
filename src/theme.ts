export type Theme = "light" | "dark" | "system";
const STORAGE_KEY = "theme";

const systemPrefersDark = () =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

export function getStoredTheme(): Theme {
    const t = localStorage.getItem(STORAGE_KEY) as Theme | null;
    return t ?? "system";
}

export function resolveTheme(t: Theme): "light" | "dark" {
    if (t === "system") return systemPrefersDark() ? "dark" : "light";
    return t;
}

export function applyTheme(t: Theme) {
    const resolved = resolveTheme(t);
    document.documentElement.setAttribute("data-theme", resolved);
}

export function setTheme(t: Theme) {
    localStorage.setItem(STORAGE_KEY, t);
    applyTheme(t);
}

export function ensureTheme() {
    applyTheme(getStoredTheme());
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
        if (getStoredTheme() === "system") applyTheme("system");
    };
    mq.addEventListener?.("change", onChange);
}
