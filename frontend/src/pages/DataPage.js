import React, { useEffect, useState } from "react";
import { getData } from "../services/api";

function DataPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  return (
    <div>
      <h2>Data from Backend</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataPage;