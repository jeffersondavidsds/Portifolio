import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../Home/Home.jsx";
import Projetos from "../Projetos/Projetos.jsx";
import Sobre from "../Sobre/Sobre.jsx";

function NavBar() {
  return (
    <BrowserRouter>
    <nav>
        <img src="https://imgs.search.brave.com/Zac_zcVoX8QgmzkI2RRaE56HE67h-Vg3PLgAqY5x0jo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzYxLzIvdXgtaW5u/b3ZhdGlvbi1sb2dv/LXBuZ19zZWVrbG9n/by02MTIwMjIucG5n" alt="Logo" />
      <h1>My Application</h1>
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