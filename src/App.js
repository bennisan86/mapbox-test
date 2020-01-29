import React, {useState} from 'react';
import './App.css';
import ReactMapGL, { Marker, Popup, LinearInterpolator } from 'react-map-gl';
import * as parkData from './data/skateparks.json'
import { easeCubic } from 'd3-ease';

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.5211,
    longitude: -75.6903,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })
  
  const [selectedPark, setSelectedPark] = useState(null);
  console.log(viewport);

  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/bennisan86/ck5z4fzh61v6v1ilhbx39414i"
        onViewportChange={viewport => {setViewport(viewport);}}>
        {parkData.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}>
              <button className="marker-btn" onClick={(e) => {
                e.preventDefault();
                setSelectedPark(park);
                setViewport({
                  latitude: park.geometry.coordinates[1],
                  longitude: park.geometry.coordinates[0],
                  width: viewport.width,
                  height: viewport.height,
                  zoom: 11,
                  transitionDuration: 1000,
                  transitionInterpolator: new LinearInterpolator(),
                  transitionEasing: easeCubic
                });
                }}>
                <img src="/skateboard.svg" alt="skateboard" />
              </button>
          </Marker>
        ))}
        {selectedPark && (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}>
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
}

