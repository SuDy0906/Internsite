import React, { useState } from 'react';
import { useFirebase } from '../context/Firebase';
import * as XLSX from 'xlsx';

const Upload = () => {
  const [file, setFile] = useState(null);
  const { updateFirestoreData } = useFirebase();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      try {
        await updateFirestoreData(file);
        alert('File uploaded successfully!');
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('Failed to upload file.');
      }
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div className="flex flex-col items-center p-8 border-2 border-dashed border-blue-500 rounded-lg bg-blue-50 max-w-md mx-auto my-12 shadow-lg">
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 p-2 text-lg border border-gray-300 rounded w-full max-w-xs"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white py-2 px-4 text-lg rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Upload
      </button>
    </div>
  );
};

export default Upload;

