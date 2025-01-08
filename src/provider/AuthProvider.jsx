import { useState } from "react";
import { AuthContext } from "../context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";


export default function AuthProvider({ children }){
 
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading] = useState(true);

    const createUser = ( email, password ) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const UserInfo = { user, loading, createUser };

    return (
        <AuthContext.Provider value={UserInfo}>
            {children}
        </AuthContext.Provider>
    )

};