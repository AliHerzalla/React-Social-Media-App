import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    const changeDarkMode = () => {
        setDarkMode((pre) => !pre);
    };

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
        const htmlID = document.getElementById("htmlID");
        htmlID.classList.remove("light", "dark");
        if (darkMode === false) {
            htmlID.classList.add("light");
        } else {
            htmlID.classList.add("dark");
        }
    }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{ darkMode, changeDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};