import { createContext, useContext, useEffect, useState } from "react";
import { ParentProps } from "@/types/parent-component";
import { User } from "../(common)";
import { alon } from "../(mock)";

interface AuthContextProps {
	user: User | null
};

const AuthContext = createContext<AuthContextProps>({user: null});

//TODO: remove mock
export const AuthProvider = ({children}: ParentProps) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		setUser(alon);
	}, []);

	return (
		<AuthContext.Provider value={{user}}>
			{children}
		</AuthContext.Provider>
	)
};

export const useAuth = () => useContext(AuthContext);