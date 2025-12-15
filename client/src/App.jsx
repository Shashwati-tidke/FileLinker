import { useState, useRef, useEffect } from 'react'
import './App.css'
import { uploadFile } from './service/api.js';

function App() {

  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  console.log(file);

  const fileInputRef = useRef(null);

  useEffect(() => {
    const getImage = async () => {
      if(file) {
        const formData = new FormData();
        formData.append('name', file.name);
        formData.append('file', file);

        const response = await uploadFile(formData);
        setResult(response.path);
        console.log("response-path", response.path);
    }
   };
    getImage();
  }, [file]);


  const onUploadClick = () => {
    fileInputRef.current.click();

  };

  return (
    <div className="main-wrapper">
      <div className="container">
        <div className="wrapper">
          <h1>FileLinker File Sharing App</h1>
          <p>Share your files easily and securely with FileLinker. Upload your files and get a shareable link in seconds!</p>
          <button className='upload-button' onClick={() => onUploadClick()}>Upload File</button>
          <input type="file" ref={fileInputRef} className='display' style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />

          <a href={result} target="_blank" rel="noreferrer">{result}</a>

        </div>
      </div>
    </div>

  )
}

export default App
