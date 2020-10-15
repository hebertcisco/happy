import "../styles/components/sidebar.css";

import { FiArrowLeft } from "react-icons/fi";
import React from "react";
import { useHistory } from "react-router-dom";

interface ISidebar {
  img: string;
}

const Sidebar: React.FC<ISidebar> = ({ img }) => {
  const { goBack } = useHistory();

  return (
    <aside className="app-sidebar">
      <img src={img} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  );
};
export default Sidebar;
