import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../components/Config/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {
    // const [user,setUser] = useState('');
    const user = {name: 'moh'};
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = () => {
        return signOut(auth)
    }
    const authinfo = {user,createUser,signInUser,signOutUser};
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;