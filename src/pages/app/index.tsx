import "leaflet/dist/leaflet.css";

import { Map, TileLayer } from "react-leaflet-universal";

import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import style from "../../styles/OrphanagesMap.module.css";

export default function OrphanagesMap() {
  return (
    <div id={style.pageMap}>
      <aside>
        <header>
          <img src="static/images/map-marker.svg" alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita ":)"</p>
        </header>
        <footer>
          <strong>Aparecida de Goiânia</strong>
          <span>Goiás</span>
        </footer>
      </aside>

      <Map
        center={[-16.8196045, -49.2726912]}
        zoom={15}
        style={{ width: "100%", height: "100%", zIndex: 5 }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPOBOX_TOKEN}`}
        />
      </Map>

      <Link href="">
        <a className={style.createOrphanage}>
          <FiPlus size={32} color="#fff" />
        </a>
      </Link>
    </div>
  );
}
