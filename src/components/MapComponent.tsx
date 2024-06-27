import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../App.css';

// Corregir el problema de los íconos en Leaflet con Webpack/Parcel
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41], // Ajusta el anclaje del icono para que esté bien posicionado
});

L.Marker.prototype.options.icon = defaultIcon;

const position: [number, number] = [-34.545486240549245, -58.71803231252258]; // Coordenadas de San Miguel Buenos Aires, Argentina

const MapComponent: React.FC = () => {
  const handleMarkerClick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${position[0]},${position[1]}`, '_blank');
  };

  return (
  
    <div className="map-wrapper">
        
      <MapContainer center={position} zoom={13} style={{ height: '300px', width: '60%'}}>
     
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <Marker position={position} eventHandlers={{ click: handleMarkerClick }}>
          
          <Popup>
            <a href={`https://www.google.com/maps/search/?api=1&query=${position[0]},${position[1]}`} target="_blank" rel="noopener noreferrer">
              Tribulato 1825 San Miguel, Buenos Aires, Argentina. Haz clic para ver en Google Maps.
            </a>
          </Popup>
        </Marker>
        
      </MapContainer>
  
    </div>
  );
};

export default MapComponent;
