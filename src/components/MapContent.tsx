import React, { useState, useEffect } from "react";
import { LatLngTuple, Icon } from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./MapContent.less";
import { Company } from "../models/company";
import { Geo } from "../models/geo";

interface MapProps {
  geo: Geo<Company>;
}

const MapContent = ({ geo }: MapProps) => {
  const [zoom, setZoom] = useState(3);
  const [center, setCenter] = useState([5, 35] as LatLngTuple);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          console.log([latitude, longitude]);
          setZoom(12);
          setCenter([latitude, longitude]);
        }
      );
    }
  }, []);

  return (
    <div className="map">
      <Map center={center} zoom={zoom} minZoom={3} zoomControl={false}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geo.features.map(
          ({
            geometry: {
              coordinates: [lng, lat],
            },
            properties,
          }) => {
            return (
              <Marker
                key={properties.id}
                position={[lat, lng]}
                icon={
                  new Icon({
                    iconUrl: `${process.env.REACT_APP_SERVER}/marker.png`,
                  })
                }
              >
                <Popup>
                  {properties.name}
                  <br />
                  {[lat, lng]}
                </Popup>
              </Marker>
            );
          }
        )}
      </Map>
    </div>
  );
};

export default MapContent;
