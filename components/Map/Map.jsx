"use client"
import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
const Map = () => {
  const center = [13.084622, 80.248357]; // Center coordinates
  const zoomLevel = 9; // Zoom level

  return (
    <div id='Map'>
      <div className="text-2xl font-medium py-4 underline">Map</div>
      <div>All events here in map</div>
      <div className=' mt-3 h-96 w-full'>
        <MapContainer center={center} zoom={zoomLevel} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=6hQHdjxKLOCvbPfNAr35"
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          />
          <Marker position={center}></Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;

