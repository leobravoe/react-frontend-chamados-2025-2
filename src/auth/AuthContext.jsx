// src/auth/AuthContext.jsx
import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext({
    user: null,
    setUser: () => { },
    authLoading: true,
});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        const token = sessionStorage.getItem("at");

        if (!token) {
            setUser(null);
            setAuthLoading(false);
            return;
        }

        try {
            const decoded = jwtDecode(token);

            if (decoded.exp && decoded.exp * 1000 < Date.now()) {
                setUser(null);
            } else {
                setUser(decoded);
            }
        } catch (err) {
            console.error("Token inválido:", err);
            setUser(null);
        } finally {
            setAuthLoading(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, authLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
