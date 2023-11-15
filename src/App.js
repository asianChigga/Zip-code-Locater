import React, { useState } from "react";
import axios from "axios";

import PostalForm from "./components/PostalCodeForm";
import LocationInfo from "./components/LocationInfo";
import "./App.css";
function App() {
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchLocation = async (postalcode) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.zippopotam.us/in/${postalcode}`
      );
      const data = response.data;
      setLocation({
        country: data.country,
        state: data.places,
        pincode: postalcode,
      });
      setLoading(false);
      console.log(data);
      setError(null);
    } catch {
      setError("Error occured while fetching the location details");
      setLoading(false);
    }
  };

  const handleClear = () => {
    setLocation(null);
    setError(null);
  };
  return (
    <div className="app-cont">
      <PostalForm
        onSubmit={fetchLocation}
        handleClear={handleClear}
        setError={setError}
        setLocation={setLocation}
      />
      {error && (
        <div
          style={{
            border: "1px red solid",
            padding: "1em",
            borderRadius: "5px",
            backgroundColor: "pink",
            opacity: 0.5,
          }}
        >
          {error}
        </div>
      )}
      {!error && <LocationInfo location={location} loading={loading} />}
    </div>
  );
}

export default App;
