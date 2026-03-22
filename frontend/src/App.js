import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    temperature: '',
    moisture: '',
    nitrogen: '',
    phosphorus: '',
    potassium: ''
  });

  const fetchData = async () => {
    const res = await axios.get('http://localhost:5000/api/data');
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/data/add', form);
    fetchData();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Smart Agriculture Dashboard</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Temperature" onChange={e => setForm({...form, temperature: e.target.value})} />
        <input placeholder="Moisture" onChange={e => setForm({...form, moisture: e.target.value})} />
        <input placeholder="Nitrogen" onChange={e => setForm({...form, nitrogen: e.target.value})} />
        <input placeholder="Phosphorus" onChange={e => setForm({...form, phosphorus: e.target.value})} />
        <input placeholder="Potassium" onChange={e => setForm({...form, potassium: e.target.value})} />
        <button type="submit">Add Data</button>
      </form>

      <h3>Sensor Data</h3>
      {data.map((d, i) => (
        <div key={i} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <p>Temp: {d.temperature}</p>
          <p>Moisture: {d.moisture}</p>
          <p>NPK: {d.nitrogen}-{d.phosphorus}-{d.potassium}</p>
        </div>
      ))}
    </div>
  );
}

export default App;