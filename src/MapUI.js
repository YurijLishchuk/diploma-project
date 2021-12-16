import React from "react";
import { TileLayer, MapContainer } from "react-leaflet";
import "./MapUI.css";
import { showDataOnMap } from "./util";

function MapUI( { countries, casesType, center, zoom } ) {
    return(
        <div className="map">
        <MapContainer center={center} zoom={zoom} maxZoom={18}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
        </div>
    )
}

export default MapUI;