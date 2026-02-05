import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../Home/Home.jsx";
import Projetos from "../Projetos/Projetos.jsx";
import Sobre from "../Sobre/Sobre.jsx";
import Logo from "../../assets/logobedev.png";
import fotoperfil from "../../assets/fotoperfil.png"
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <BrowserRouter>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    </style>
    <nav className={styles.navBarHeader}>
        <img src={Logo} alt="Logo" />
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <img src={fotoperfil} alt="Foto de Perfil" className={styles.fotoperfil} />
      </ul>
    </nav>

<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projetos" element={<Projetos />} />
    <Route path="/sobre" element={<Sobre />} />
</Routes>
    </BrowserRouter>
  )
}

export default NavBar;