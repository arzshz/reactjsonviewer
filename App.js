import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import './App.css';

function App() {
  const [jsonInput, setJsonInput] = useState('');
  const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState('');

  const handleJsonInput = (event) => {
    setJsonInput(event.target.value);
    try {
      const parsedJson = JSON.parse(event.target.value);
      setJsonData(parsedJson);
      setError('');
    } catch (e) {
      setJsonData(null);
      setError('JSON نامعتبر است');
    }
  };

  return (
    <div className="App">
      <h1>جیسان بچسبانید</h1>
      <textarea
        rows="10"
        cols="50"
        value={jsonInput}
        onChange={handleJsonInput}
        placeholder="JSON خود را اینجا بچسبانید"
      />
      {error && <div className="error">{error}</div>}
      {jsonData && <ReactJson src={jsonData} />}
    </div>
  );
}

export default App;
