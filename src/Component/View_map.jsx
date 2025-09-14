'use client'

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamic imports with ssr: false
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);
const ZoomControl = dynamic(
  () => import("react-leaflet").then((mod) => mod.ZoomControl),
  { ssr: false }
);

const View_map = () => {
  const rahmatpurSchool = [25.3620, 89.5680];

  return (
    <div className="w-[100%] mx-auto h-[550px]">
      <div className="w-[100%] h-[30px]"></div>
      <MapContainer
        center={rahmatpurSchool}
        zoom={13}
        zoomControl={false}
        className="h-[100%] w-full rounded-md shadow-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={rahmatpurSchool}>
          <Popup>Gaibandha, Bangladesh</Popup>
        </Marker>
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};

export default View_map;
