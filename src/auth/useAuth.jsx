// src/auth/useAuth.js
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context; // { user, setUser, authLoading }
};

const useCurrentUser = () => {
    const { user } = useAuth();
    return user;
};

export { useAuth, useCurrentUser };
