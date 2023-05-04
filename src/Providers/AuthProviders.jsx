import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../components/Config/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateProfileUser = (userCurrent, name, photo) => {
        setLoading(true);
        return updateProfile(userCurrent, {
            displayName: name,
            photoURL: photo
        })
    }
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }
    const googleSignInUser = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignInUser = () => {
        return signInWithPopup(auth, githubProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const authinfo = { user, loading, createUser, signInUser, signOutUser, googleSignInUser, githubSignInUser, updateProfileUser };
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;