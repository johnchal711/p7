import React, { useState, useEffect } from "react";
import { Marker } from "google-maps-react";
import "./styles.css";

import { GMap } from "./components/GMap";
import { GMapContainer } from "./components/GMapContainer";
import { RightContainer } from "./components/RightContainer";

import { getCurrentPosition } from "./components/get-current-position";
import Appa  from "./components/getdatajson";



const useCurrentPosition = () => {
  const [currentPosition, setCurrentPosition] = useState();

  useEffect(() => {
    const getCurrentPositionAsync = async () => {
      try {
        const position = await getCurrentPosition();

        setCurrentPosition(position);
      } catch (e) {}
    };

    getCurrentPositionAsync();
  }, []);

  return currentPosition;
};



  




export default function App() {
  const [clickedPosition, setClickedPosition] = useState();
  const currentPosition = useCurrentPosition();
  const showCurrentPositionMarker = Boolean(currentPosition);




  return (
    <div className="App">
      <GMapContainer>
        <GMap
          initialCenter={currentPosition}
          onClick={(_mapProps, _map, e) =>
            setClickedPosition(e.latLng.toJSON())
          }
        >
          {showCurrentPositionMarker ? (
            <Marker title="Me" position={currentPosition} />
          ) : null}
          
        </GMap>
      </GMapContainer>
      <RightContainer>
        <h1>Your current position</h1>
        {currentPosition ? JSON.stringify(currentPosition) : null}
        <h2>Clicked Position</h2>
        {clickedPosition ? JSON.stringify(clickedPosition) : "Not clicked yet"}

        <Appa/>
      </RightContainer>
    </div>
  );
}
