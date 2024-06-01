import { createContext,useContext,useEffect,useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { getDatabase,set, ref } from "firebase/database";

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
const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp)

const FirebaseContext = createContext(null);
export const useFirebase =()=> useContext(FirebaseContext);

export const FirebaseProvider = (props)=> {
    const signUpWithEmailPassword = async (email, password, name) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInWithEmailPassword = async (email,password)=>{
        return  await signInWithEmailAndPassword(auth,email,password).then((value)=> console.log("success"))
        .catch((err)=> console.log(err));
    };
     
    const [user,setUser] = useState(null);

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user) setUser(user);
            else setUser(null);
        })
    }, [])

    const isLoggedIn = user? true:false;

    const signOutUser = () =>{
         return signOut(auth);
    }
   

    const putData = (key, data)=> set(ref(db, key) , data ); 

    return(
        <FirebaseContext.Provider value = {{signUpWithEmailPassword, putData, logInWithEmailPassword, isLoggedIn, signOutUser }} >
            {props.children}
        </FirebaseContext.Provider>
    );
};
