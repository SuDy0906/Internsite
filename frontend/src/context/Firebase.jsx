// src/context/FirebaseContext.js

import React, { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore"; // Import setDoc and doc

const firebaseConfig = {
    apiKey: "AIzaSyCQE15q8hOXLxg4gJlsKw1_sJmwKPV0smI",
    authDomain: "xcelmins-94748.firebaseapp.com",
    projectId: "xcelmins-94748",
    storageBucket: "xcelmins-94748.appspot.com",
    messagingSenderId: "723746630183",
    appId: "1:723746630183:web:56eef32eac6462887e3c02",
    databaseURL: "https://xcelmins-94748-default-rtdb.firebaseio.com"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
    const signUpWithEmailPassword = async (email, password, name) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // Add user data to Firestore
        await setDoc(doc(db, "users", user.uid), {
            name: name,
            email: email
        });
        return userCredential;
    };

    const logInWithEmailPassword = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password)
            .then((value) => console.log("success", value))
            .catch((err) => console.log(err));
    };

    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) setUser(user);
            else setUser(null);
        });
    }, []);

    const isLoggedIn = user ? true : false;

    const signOutUser = () => {
        return signOut(auth);
    };

    return (
        <FirebaseContext.Provider value={{ signUpWithEmailPassword, logInWithEmailPassword, isLoggedIn, signOutUser }}>
            {props.children}
        </FirebaseContext.Provider>
    );
};
