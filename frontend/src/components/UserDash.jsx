import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Widget from "./Widget";
import Widget1 from "./Widget1";
import ComplexTable from "./ComplexTable";
import { db, auth } from "../context/Firebase";
import { money, date, profit, code } from "../assets";

const UserDash = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [cashColumns, setCashColumns] = useState([]);
  const [cashRows, setCashRows] = useState([]);
  const [derivativeColumns, setDerivativeColumns] = useState([]);
  const [derivativeRows, setDerivativeRows] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async (uid) => {
      const userDoc = doc(db, "users", uid);
      const userSnapshot = await getDoc(userDoc);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        console.log("User Data:", userData); // Log user data
        setUserDetails(userData);
        setColumnsAndRows(userData.cash, setCashColumns, setCashRows, "dailyProfit");
        setColumnsAndRows(userData.derivatives, setDerivativeColumns, setDerivativeRows, "dailyProfit");
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

  const setColumnsAndRows = (data, setColumns, setRows, excludeField) => {
    if (data) {
      console.log("Data received for setting columns and rows:", data); // Log received data
  
      // Define the desired order of columns
      const desiredColumnOrder = [
        "name",
        "currentPrice",
        "entryPrice",
        "quantity",
        "currentPnl",
        
      ];
  
      // Define columns based on the desired order
      const dynamicColumns = desiredColumnOrder
        .filter((key) => key !== excludeField && data[key]) // Filter out excluded field and non-existent data keys
        .map((key) => ({
          Header: key.replace('_', ' ').toUpperCase(), // Use underscore for replace
          accessor: key,
        }));
  
      console.log("Columns:", dynamicColumns); // Log columns
  
      setColumns(dynamicColumns);
      setRows(data[desiredColumnOrder[0]].map((_, index) => {
        const row = {};
        desiredColumnOrder.forEach((key) => {
          if (key !== excludeField && data[key]) {
            row[key] = data[key][index];
          }
        });
        return row;
      }));
    }
  };

      

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-[30px]">
      {/* Card widget */}
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4">
        <Widget
          icon={code}
          title={"Client Code"}
          subtitle={userDetails["clientCode"]}
        />
        <Widget
          icon={date}
          title={"Starting Date"}
          subtitle={userDetails["startDate"]}
        />
        <Widget1
          icon={profit}
          title={"Net Profit"}
          subtitle={userDetails["netProfit"]}
          title1={"RoI"}
          subtitle1={userDetails["netProfit"]/userDetails["totalContribution"]}
        />
        <Widget
          icon={money}
          title={"Total Contribution"}
          subtitle={userDetails["totalContribution"]}
        />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-5 xl:grid-cols-2">
        <ComplexTable columnsData={cashColumns} tableData={cashRows} title="Cash" pnl={userDetails.cash.dailyProfit} />
        <ComplexTable columnsData={derivativeColumns} tableData={derivativeRows} title="Derivatives" pnl={userDetails.derivatives.dailyProfit} />
      </div>
    </div>
  );
};

export default UserDash;
