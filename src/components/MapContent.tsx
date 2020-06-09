import React, { FC } from "react";
import { LatLngTuple } from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./MapContent.less";

const position: LatLngTuple = [5, 35];

const MapContent: FC = () => {
  return (
    <div className="map">
      <Map center={position} zoom={2} zoomControl={false}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default MapContent;
