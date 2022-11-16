import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHelloWorld = async () => {
      const url = "http://localhost:8000/api/hello_world/";
      const options = {
        method: "GET",
        Accept: "application/json",
        "Content-Type": "application/json",
        mode:'cors'
      };
      const response = await fetch(url, options);
      // Try catch because .json will throw if no data
      try {
        // This will extract the data and convert from a json string to an object
        const responseData = await response.json();
        if (response.ok) {
          setData(responseData.message);
        } else {
          setError(responseData);
        }
      } catch (e) {
        setError(e);
      }
    };
    fetchHelloWorld();
  }, []);

  // If there is an error show that otherwise the data
  const displayResults = () => (
    <div>{error ? `Error: ${error}` : `${data}`}</div>
  );

  return (
    <div>
      {displayResults()}
    </div>
  );
};

export default Dashboard;