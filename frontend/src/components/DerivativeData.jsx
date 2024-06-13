import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import { useState, useEffect } from "react";
import Widget from "./Widget";
import ComplexTable from "./ComplexTable";
import { db, auth } from "../context/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { money, date, profit, code } from "../assets";


const DerivativeData = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [cashColumns, setCashColumns] = useState([]);
  const [cashRows, setCashRows] = useState([]);
  

  useEffect(() => {
    const fetchUserDetails = async (uid) => {
      const userDoc = doc(db, "users", uid);
      const userSnapshot = await getDoc(userDoc);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        setUserDetails(userData);
        setColumnsAndRows(userData.historyDerivatives, setCashColumns, setCashRows);
        
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

  const setColumnsAndRows = (data, setColumns, setRows) => {
    if (data) {
      // Define columns
      const dynamicColumns = Object.keys(data).map((key) => ({
        Header: key.replace('-', ' ').toUpperCase(),
        accessor: key,
      }));

      // Find the maximum length of the arrays
      const maxLength = Math.max(...Object.values(data).map(arr => arr.length));

      // Generate rows
      const dynamicRows = Array.from({ length: maxLength }, (_, index) => {
        const row = {};
        for (let key in data) {
          row[key] = data[key][index];
        }
        return row;
      });

      setColumns(dynamicColumns);
      setRows(dynamicRows);
    }
  };

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-[30px]">
     
      
      <div className="mt-5 grid  gap-5 ">
        <ComplexTable columnsData={cashColumns} tableData={cashRows} title="Derivatives History" />
       
      </div>
      
    </div>
  );
};

export default DerivativeData;
