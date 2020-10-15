import "../styles/pages/orphanages-map.css";

import { FiArrowRight, FiPlus } from "react-icons/fi";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import MapIcon from "../utils/mapIcon";
import { api } from "../services/api";
import mapMarkerImg from "../images/map-marker.svg";

interface IOrphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}
const OrphanagesMap = () => {
  const [orphanages, setOrphanages] = useState<IOrphanage[]>([]);

  useEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita {":)"}</p>
        </header>

        <footer>
          <strong>Aparecida de Goiânia</strong>
          <span>Goiás</span>
        </footer>
      </aside>

      <Map
        center={[-16.8196045, -49.2726912]}
        zoom={10}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {orphanages.map((orphanages) => {
          return (
            <Marker
              icon={MapIcon}
              position={[orphanages.latitude, orphanages.longitude]}
              key={orphanages.id}
            >
              <Popup
                closeButton={false}
                width={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanages.name}
                <Link to={`/orphanages/${orphanages.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
