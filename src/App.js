import React, {useState} from 'react';
import './App.css';
import ReactMapGL from 'react-map-gl';

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.5211,
    longitude: -75.6903,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })

  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => {setViewport(viewport);}}>
        markers here
      </ReactMapGL>
    </div>
  );
}

