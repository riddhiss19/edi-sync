import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const DocumentCard = ({ fileName, days, docLink }) => {


  return (
    <div className="document-card">
      <Link to={docLink} about={<h3>{fileName}</h3>} target='_blank' />

      <p>Upload : {days}</p>

    </div>

  );
};

const SubDoc = ({ projectId }) => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    loadData();
  }, []);


  const loadData = async () => {
    const result = await axios.get(`http://localhost:8080/getAllDocs?id=${projectId}`)
    setDocuments(result.data)
  }


  return (
    <div className="submitted-documents-container">
      {documents.map((doc) => (
        <DocumentCard key={doc.id} fileName={doc.docName} days={doc.upladDate} fileLink={doc.docLink} />
      ))}
    </div>
  );
};

export default SubDoc;