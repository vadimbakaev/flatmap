import React from "react";
import { LatLngTuple, Icon } from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./MapContent.less";
import { Company } from "../models/company";
import { Geo } from "../models/geo";

const center: LatLngTuple = [5, 35];

interface MapProps {
  geo: Geo<Company>;
}

const MapContent = ({ geo }: MapProps) => {
  return (
    <div className="map">
      <Map center={center} zoom={2} zoomControl={false}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geo.features.map(({ geometry, properties }) => (
          <Marker
            key={properties.id}
            position={geometry.coordinates.reverse() as LatLngTuple}
            icon={
              new Icon({
                iconUrl: `${process.env.REACT_APP_SERVER}/marker.png`,
              })
            }
          >
            <Popup>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </Popup>
          </Marker>
        ))}
      </Map>
    </div>
  );
};

export default MapContent;
