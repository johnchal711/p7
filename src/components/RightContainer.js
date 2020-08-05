import React from "react";

export const RightContainer = ({ children }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "50%",
        height: "100%"
      }}
    >
      {children}
    </div>
  );
};
