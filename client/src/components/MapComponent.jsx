import React from "react";

const MapComponent = () => {
  return (
    <div>
      <iframe
        allow="geolocation"
        src="https://data.calgary.ca/dataset/Calgary-Eats-Farm-Stand-Program-Locations/mhqb-ca5d/embed?width=800&height=600"
        width="800"
        height="600"
        style={{ border: 0, padding: 0, margin: 0 }}
      ></iframe>
    </div>
  );
};

export default MapComponent;
