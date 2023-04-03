import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = () => {
        //  ToDo: handle login state
        setCurrentUser({
            id: 1,
            name: "Ali Herzalla",
            profilePicture: "https://cdn130.picsart.com/317295834221201.jpg?to=crop&type=webp&r=1456x2184&q=85",
        });
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
};