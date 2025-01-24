import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, setIsAuthenticated, setUser }}>
            {children}
        </AuthContext.Provider>
    );};

export { AuthProvider, AuthContext };