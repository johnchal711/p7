import React from "react";

export const GMapContainer = ({ children }) => {
  return (
    <div style={{ position: "relative", width: "50%", height: "100%" }}>
      {children}
    </div>
  );
};
