import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import "./styles/form.scss";
const PostalCodeForm = ({ onSubmit, setLocation, setError }) => {
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(postalCode);
  };
  const handleClear = () => {
    setLocation(null);
    setError(null);
    setPostalCode("");
  };
  return (
    <div className="form-cont">
      <form onSubmit={handleSubmit}>
        <label>Enter Postal Code</label>
        <input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder="Enter the pincode"
          style={{ padding: "0.7em", borderRadius: "3px" }}
        />

        <Button content="Submit" color="blue" />
      </form>
      <Button content="Clear" color="red" onClick={handleClear} />
    </div>
  );
};

export default PostalCodeForm;
