import React, { useState } from 'react';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import { useFirebase } from '../context/Firebase'; // Import the context function

export const Upload = () => {
  const {updateFirestoreData} = useFirebase();
  const [fileUserDetails, setFileUserDetails] = useState(null);
  const [parsedDataUserDetails, setParsedDataUserDetails] = useState(null);

  const [fileCash, setFileCash] = useState(null);
  const [parsedDataCash, setParsedDataCash] = useState(null);

  const [fileDerivatives, setFileDerivatives] = useState(null);
  const [parsedDataDerivatives, setParsedDataDerivatives] = useState(null);

  const handleFileChangeUserDetails = (e) => {
    setFileUserDetails(e.target.files[0]);
  };

  const handleFileChangeCash = (e) => {
    setFileCash(e.target.files[0]);
  };

  const handleFileChangeDerivatives = (e) => {
    setFileDerivatives(e.target.files[0]);
  };

  const handleFileParse = async (file, setParsedData, collectionName, docId) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const csv = XLSX.utils.sheet_to_csv(worksheet);

        Papa.parse(csv, {
          header: true,
          complete: async (results) => {
            const data = results.data.map(row => {
              const newRow = {};
              for (const key in row) {
                if (row.hasOwnProperty(key)) {
                  if (row[key].includes(',')) {
                    newRow[key] = row[key].split(',').map(item => item.trim());
                  } else {
                    newRow[key] = row[key];
                  }
                }
              }
              return newRow;
            });

            setParsedData(data);

            

            // Call the Firebase context function to update Firestore
            await updateFirestoreData("fgUWLhFemXhJV0e1WdXlObRqEGq1", data);
          },
        });
      };
      reader.readAsArrayBuffer(file);
    } else {
      alert('Please upload a file first.');
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen mt-7 bg-gray-100 p-4">
        {/* User Details Section */}
        <h1 className="text-2xl font-bold mb-4">User Details</h1>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileChangeUserDetails}
          className="mb-4 p-2 border border-gray-300"
        />
        <button
          onClick={() => handleFileParse(fileUserDetails, setParsedDataUserDetails, 'users', 'userId')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Parse File
        </button>
        {parsedDataUserDetails && (
          <div className="mt-6 w-full max-w-4xl bg-white p-4 border border-gray-300 rounded shadow-sm overflow-x-auto">
            <pre className="text-sm text-gray-700">
              {JSON.stringify(parsedDataUserDetails, null, 2)}
            </pre>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen mt-7 bg-gray-100 p-4">
        {/* Cash Section */}
        <h1 className="text-2xl font-bold mb-4">Cash</h1>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileChangeCash}
          className="mb-4 p-2 border border-gray-300"
        />
        <button
          onClick={() => handleFileParse(fileCash, setParsedDataCash, 'cash', 'cashId')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Parse File
        </button>
        {parsedDataCash && (
          <div className="mt-6 w-full max-w-4xl bg-white p-4 border border-gray-300 rounded shadow-sm overflow-x-auto">
            <pre className="text-sm text-gray-700">
              {JSON.stringify(parsedDataCash, null, 2)}
            </pre>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen mt-7 bg-gray-100 p-4">
        {/* Derivatives Section */}
        <h1 className="text-2xl font-bold mb-4">Derivatives</h1>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileChangeDerivatives}
          className="mb-4 p-2 border border-gray-300"
        />
        <button
          onClick={() => handleFileParse(fileDerivatives, setParsedDataDerivatives, 'derivatives', 'derivativeId')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Parse File
        </button>
        {parsedDataDerivatives && (
          <div className="mt-6 w-full max-w-4xl bg-white p-4 border border-gray-300 rounded shadow-sm overflow-x-auto">
            <pre className="text-sm text-gray-700">
              {JSON.stringify(parsedDataDerivatives, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </>
  );
};
