import React, { FC, useState } from "react";
import { Theme, THEME } from '../components/Theme';

export const WithTheme: FC = ({ children }) => {
    const currentTheme = localStorage.getItem('theme') as THEME || THEME.DARK;
    const [theme, setTheme] = useState(currentTheme);

    const toggleTheme = (newTheme?: THEME) => {
        const nextTheme = newTheme ? newTheme : (theme === THEME.WHITE ? THEME.DARK : THEME.WHITE);

        localStorage.setItem('theme', nextTheme);
        setTheme(nextTheme);
    }

    return (
        <Theme.Provider
            value={{ theme, toggleTheme }}
        >
            {children}
        </Theme.Provider>
    );
}
