import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar11";
import UserDash from "./UserDash";
import Navbar from "./DashNav";
import { db, auth } from "../context/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Upload } from "./Upload";

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

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar className="z-50" />
      <div className="flex-grow flex flex-col overflow-y-auto px-4">
        <Navbar name={userDetails["name"]} className="px-6 py-6" />
        <div className="flex-grow  py-6">
          <Routes>
            <Route path="/userdash" element={<UserDash />} />
            <Route path="/cash" element={<div>User Page</div>} />
            <Route path="/derivative" element={<div>Messages Page</div>} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
