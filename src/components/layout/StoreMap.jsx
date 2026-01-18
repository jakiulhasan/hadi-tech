"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin } from "lucide-react";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const StoreMap = () => {
  const position = [23.8103, 90.4125];

  return (
    <section className="py-4 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 flex items-center gap-2">
          <MapPin className="text-orange-600" />
          <h2 className="text-2xl font-bold text-slate-800">
            Our Store Location
          </h2>
        </div>

        <div className="h-100 w-full rounded-2xl overflow-hidden border-4 border-slate-50 shadow-lg z-0">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position} icon={customIcon}>
              <Popup>
                <div className="text-center">
                  <strong className="text-orange-600">Our Gadget Shop</strong>{" "}
                  <br />
                  Dhaka, Bangladesh.
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default StoreMap;
