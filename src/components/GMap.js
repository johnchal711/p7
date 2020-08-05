import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const apiKey = process.env.REACT_APP_GMAP_API_KEY;

export const GMap = GoogleApiWrapper({ apiKey })(({ children, ...props }) => {
  return <Map {...props}>{children}</Map>;
});
