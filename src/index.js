import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const BreweryList = () => {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries")
      .then(response => response.json())
      .then(data => {
        setBreweries(data); // set breweries in state
      });
  }, []);

  return (
    <div className="section">
      {breweries.map(({ id, name, website_url, city, state }) => (
        <div key={id} className="card">
            <h3><a href={website_url} target="_blank">{name}</a></h3>
          <h3>
            {city}, {state}
          </h3>
        </div>
      ))}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<BreweryList />, rootElement);
