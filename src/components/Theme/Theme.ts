import {createContext} from "react";
import {THEME} from "./Theme.enums";

type ThemeContext = {
    theme: THEME;
    toggleTheme: (theme?: THEME) => void;
}

export const Theme = createContext<ThemeContext>({
    theme: THEME.DARK,
    toggleTheme: () => {},
})
