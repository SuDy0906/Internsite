import React, { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, setDoc, doc, updateDoc, getDoc } from "firebase/firestore"; // Import setDoc and doc
import * as XLSX from 'xlsx';

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
        await setDoc(doc(db, "users", user.uid), {
            name: name,
            email: email,
            netProfit: 0,
            startDate: "0",
            totalContribution: 0,
            clientCode: "0",

            cash: {
                name: ["0"],
                currentPrice: [0],
                entryPrice: [0],
                currentPnl: [0],
                quantity:[0],
                dailyProfit: 0,
                holding:["0"]
            },
            derivatives: {
                name: ["0"],
                currentPrice: [0],
                entryPrice: [0],
                currentPnl: [0],
                quantity:[0],
                dailyProfit: 0,
            },
            historyCash: {
                name: ["0"],
                currentPrice: [0],
                entryPrice: [0],
                currentPnl: [0],
                quantity:[0],
            },
            historyDerivatives: {
                name: ["0"],
                currentPrice: [0],
                entryPrice: [0],
                currentPnl: [0],
                quantity:[0],
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

    const updateFirestoreData = async (file) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        const parseArray = (str) => {
            try {
                return JSON.parse(str);
            } catch (e) {
                console.error(`Error parsing array from string: ${str}`, e);
                return [];
            }
        };

        const convertedData = jsonData.map(item => {
            const cash_name = parseArray(item.cash_name);
            const cash_currentPrice = parseArray(item.cash_currentPrice);
            const cash_entryPrice = parseArray(item.cash_entryPrice);
            const cash_quantity = parseArray(item.cash_quantity);
            const cash_holding = parseArray(item.cash_holding);
            const cash_currentPnl = cash_currentPrice.map((price, index) =>
                (price - cash_entryPrice[index]) * cash_quantity[index]
            );

            const derivatives_name = parseArray(item.derivatives_name);
            const derivatives_currentPrice = parseArray(item.derivatives_currentPrice);
            const derivatives_entryPrice = parseArray(item.derivatives_entryPrice);
            const derivatives_quantity = parseArray(item.derivatives_quantity);
            const derivatives_currentPnl = derivatives_currentPrice.map((price, index) =>
                (price - derivatives_entryPrice[index]) * derivatives_quantity[index]
            );

            return {
                ...item,
                cash_name,
                cash_currentPrice,
                cash_entryPrice,
                cash_currentPnl,
                cash_quantity,
                cash_holding,
                derivatives_name,
                derivatives_currentPrice,
                derivatives_entryPrice,
                derivatives_currentPnl,
                derivatives_quantity,
            };
        });

        const updatePromises = convertedData.map(async (item) => {
            const userId = item["UserId"];
            const userDocRef = doc(db, 'users', userId);
            const userDoc = await getDoc(userDocRef);
            const existingData = userDoc.data();

            let newCashData = { name: [], currentPrice: [], entryPrice: [], currentPnl: [], quantity: [], holding: [] };
            let closedCashData = { name: [], currentPrice: [], entryPrice: [], currentPnl: [], quantity: [] };
            let cashDailyProfit = 0;

            item.cash_name.forEach((_, index) => {
                if (item.cash_holding[index] === "open") {
                    newCashData.name.push(item.cash_name[index]);
                    newCashData.currentPrice.push(item.cash_currentPrice[index]);
                    newCashData.entryPrice.push(item.cash_entryPrice[index]);
                    newCashData.currentPnl.push(item.cash_currentPnl[index]);
                    newCashData.quantity.push(item.cash_quantity[index]);
                    newCashData.holding.push(item.cash_holding[index]);
                } else if (item.cash_holding[index] === "closed") {
                    closedCashData.name.push(item.cash_name[index]);
                    closedCashData.currentPrice.push(item.cash_currentPrice[index]);
                    closedCashData.entryPrice.push(item.cash_entryPrice[index]);
                    closedCashData.currentPnl.push(item.cash_currentPnl[index]);
                    closedCashData.quantity.push(item.cash_quantity[index]);
                }
            });

            cashDailyProfit = newCashData.currentPnl.reduce((sum, pnl) => sum + pnl, 0);
            const cashClosedPnl = closedCashData.currentPnl.reduce((sum, pnl) => sum + pnl, 0);
            const derivativesDailyProfit = item.derivatives_currentPnl.reduce((sum, pnl) => sum + pnl, 0);

            const updatedData = {
                totalContribution: item.totalContribution,
                netProfit: existingData.netProfit + cashClosedPnl + derivativesDailyProfit,
                startDate: item.startDate,
                clientCode: item.clientCode,
                cash: {
                    name: newCashData.name,
                    currentPrice: newCashData.currentPrice,
                    entryPrice: newCashData.entryPrice,
                    currentPnl: newCashData.currentPnl,
                    quantity: newCashData.quantity,
                    holding: newCashData.holding,
                    dailyProfit: cashDailyProfit,
                },
                derivatives: {
                    name: item.derivatives_name,
                    currentPrice: item.derivatives_currentPrice,
                    entryPrice: item.derivatives_entryPrice,
                    currentPnl: item.derivatives_currentPnl,
                    quantity: item.derivatives_quantity,
                    dailyProfit: derivativesDailyProfit,
                },
                historyCash: {
                    name: existingData.historyCash.name.concat(closedCashData.name),
                    currentPrice: existingData.historyCash.currentPrice.concat(closedCashData.currentPrice),
                    entryPrice: existingData.historyCash.entryPrice.concat(closedCashData.entryPrice),
                    currentPnl: existingData.historyCash.currentPnl.concat(closedCashData.currentPnl),
                    quantity: existingData.historyCash.quantity.concat(closedCashData.quantity),
                },
                historyDerivatives: {
                    name: existingData.historyDerivatives.name.concat(existingData.derivatives.name),
                    currentPrice: existingData.historyDerivatives.currentPrice.concat(existingData.derivatives.currentPrice),
                    entryPrice: existingData.historyDerivatives.entryPrice.concat(existingData.derivatives.entryPrice),
                    currentPnl: existingData.historyDerivatives.currentPnl.concat(existingData.derivatives.currentPnl),
                    quantity: existingData.historyDerivatives.quantity.concat(existingData.derivatives.quantity),
                }
            };

            await setDoc(userDocRef, updatedData, { merge: true });
        });

        await Promise.all(updatePromises);
        console.log('Firestore updated successfully');
    };
    reader.readAsArrayBuffer(file);
};


    return (
        <FirebaseContext.Provider value={{ signUpWithEmailPassword, logInWithEmailPassword, isLoggedIn, signOutUser, updateFirestoreData }}>
            {props.children}
        </FirebaseContext.Provider>
    );
};