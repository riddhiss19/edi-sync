import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const DocumentCard = ({ fileName, days, docLink }) => {

  console.log(docLink);

  return (
    <div className="document-card">
      <Link to={docLink} target='_blank' >
        <h3>{fileName}</h3>
      </Link>

      <h5>Upload Date : {days}</h5>


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
    console.log(result.data);
  }


  return (
    <div className="submitted-documents-container">
      {documents.map((doc) => (
          < DocumentCard key={doc.id} fileName={doc.docName} days={doc.uploadDate} docLink={doc.docLink} />
      ))}
    </div>
  );
};

export default SubDoc;