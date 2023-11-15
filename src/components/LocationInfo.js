import React from "react";
import "./styles/locationInfo.scss";
import { Loader } from "semantic-ui-react";

const LocationInfo = ({ location, loading }) => {
  return (
    <div className="info-cont">
      {loading ? (
        <Loader active inline="centered" />
      ) : location ? (
        <div className="info-main-cont">
          <div className="info-header-cont">
            <p>{`Information for pincode ${location.pincode}`}</p>
            <p>Country : {location?.country}</p>
          </div>

          {location?.state.map((data, index) => (
            <div className="info-card-cont" key={index}>
              <div>
                <p>Place Name </p>
                <p>State </p>
              </div>

              <div>
                <p>{data["place name"]}</p>
                <p>{data.state}</p>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default LocationInfo;
