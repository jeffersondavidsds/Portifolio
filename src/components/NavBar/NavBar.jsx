import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../Home/Home.jsx";
import Projetos from "../Projetos/Projetos.jsx";
import Sobre from "../Sobre/Sobre.jsx";
import Logo from "../../assets/logobedev.png"
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <BrowserRouter>
    <nav className={styles.navBarHeader}>
        <img src={Logo} alt="Logo" />
      <h1>Jefferson David</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
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