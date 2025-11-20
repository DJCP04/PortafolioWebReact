import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import NewLetter from "./components/NewLetter.jsx";
import Proyectos from "./components/Proyectos.jsx";
import Tecnologias from "./components/Tecnologias.jsx";
import MatrixRain from "./components/matrix.jsx";

import "./App.css";

export default function App() {
  return (
    <main>
      <MatrixRain />
      <Header />
      <Tecnologias />
      <Proyectos />
      <NewLetter />
      <Contacto />
      <Footer />
    </main>
  );
}
