import React, { useState, useEffect } from 'react';
import UserDash from './UserDash';
import Sidebar from './Sidebar';
import Sidebar11 from './Sidebar11';
import Navbar from './DashNav';
import { db, auth } from "../context/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Routes, Route } from 'react-router-dom';

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async (uid) => {
      const userDoc = doc(db, "users", uid);
      const userSnapshot = await getDoc(userDoc);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        setUserDetails(userData);
      } else {
        console.log("No such document!");
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserDetails(user.uid);
      } else {
        setUserDetails(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!userDetails) {
    return <div>Loading...</div>; // or a spinner/loading indicator
  }

  console.log(userDetails["name"])

  return (
    <>

      <div className='flex flex-auto h-screen'>
        <Sidebar />
        <div className='grow'>
        
          <div className='flex-grow px-4 py-6'>
          <Navbar className='px-4 py-6'/>
          <UserDash/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
