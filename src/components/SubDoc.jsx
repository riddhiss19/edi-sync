import React from 'react';


const DocumentCard = ({ fileName, days }) => {
  const handleOpen = () => {
    // Implement the logic to open the file
    console.log(`Opening ${fileName}`);
  };

  return (
    <div className="document-card">
      <h3>{fileName}</h3>
      <p>{days} Days</p>
      <button className="open-bu" onClick={handleOpen}>
        Open
      </button>      
    </div>
    
  );
};

const SubDoc = () => {
  const documents = [
    { fileName: 'FF180', days: 12 },
    { fileName: 'Literature Review', days: 12 },
    { fileName: 'Project PPT', days: 12 },
  ];

  return (
    <div className="submitted-documents-container">
      {documents.map((doc, index) => (
        <DocumentCard key={index} fileName={doc.fileName} days={doc.days} />
      ))}
    </div>
  );
};

export default SubDoc;