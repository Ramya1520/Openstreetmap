import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Tooltip,
  Popup,
} from "react-leaflet";
import L from "leaflet";

function MyMap() {
  const position = [13.0836939, 80.270186];
  const polyline = [
    [35.7251496, 139.7630049],
    [13.0836939, 80.270186],
    [22.500905, -81.1356126],
  ];

  const getIcon = (num) => {
    var num = "" + num;
    return new L.Icon({
      iconUrl: require("../assets/" + num + ".svg"),
      iconRetinaUrl: require("../assets/" + num + ".svg"),
      iconAnchor: null,
      // popupAnchor: null,
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
      iconSize: new L.Point(30, 20),
    });
  };

  return (
    <MapContainer center={position} zoom={2} style={{ height: "100vh" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline
        pathOptions={{ color: "red" }}
        className="st"
        positions={polyline}
      />
      {polyline.map((innerArray, index) => (
        <div key={index}>
          <Marker position={innerArray} icon={getIcon(index + 1)}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            <Tooltip direction="top" opacity={1}>
              Marker {index + 1}
            </Tooltip>
          </Marker>
        </div>
      ))}
    </MapContainer>
  );
}

export default MyMap;
