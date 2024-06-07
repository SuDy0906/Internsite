// src/context/FirebaseContext.js

import React, { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, setDoc, doc, updateDoc, getDoc } from "firebase/firestore"; // Import setDoc and doc

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
            email: email,
            netProfit: "0",
            startDate: "0",
            totalContribution: "0",
            clientCode: "0",
            cash: {
                cashName: ["0"],
                currentProfit: ["0"],
                entryPrice: ["0"],
                currentPnl: ["0"],
            },
            derivatives: {
                derivativeName: ["0"],
                quantity: ["0"],
                pnl: ["0"],
            },
            historyCash: {
                hCashName: ["0"],
                hCurrentProfit: ["0"],
                hEntryPrice: ["0"],
                hCurrentPnl: ["0"],
            },
            historyDerivative: {
                hDerivativeName: ["0"],
                hQuantity: ["0"],
                hPnl: ["0"],
            },
        
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

    const updateFirestoreData = async (userId, parsedData) => {
        try {
          const userDocRef = doc(db, 'users', userId);
      
          // Convert the nested arrays into objects
          const cashObj = {};
          parsedData.cashName.forEach((item, index) => {
            cashObj[index] = {
              cashName: item,
              currentProfit: parsedData.currentProfit[index],
              entryPrice: parsedData.entryPrice[index],
              currentPnl: parsedData.currentPnl[index],
            };
          });
      
          // Construct the data object to update, including the converted nested arrays
          const dataToUpdate = {
            cash: cashObj,
            // Add more fields or nested arrays as needed
          };
      
          // Update the document using setDoc with merge: true to only update specified fields
          await setDoc(userDocRef, dataToUpdate, { merge: true });
      
          console.log('Firestore data updated successfully!');
        } catch (error) {
          console.error('Error updating Firestore:', error);
        }
      };
    return (
        <FirebaseContext.Provider value={{ signUpWithEmailPassword, logInWithEmailPassword, isLoggedIn, signOutUser, updateFirestoreData }}>
            {props.children}
        </FirebaseContext.Provider>
    );
};
