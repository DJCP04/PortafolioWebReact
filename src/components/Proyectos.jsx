export default function Proyectos() {
  return (
    <section id="proyectos">
      <h2>Proyectos Destacados</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="cardDataBase">
            <i className="fas fa-database"></i>
          </div>
          <div style={{ padding: "30px" }}>
            <h3 className="tituloDB">Sistema de Gestión de Base de Datos</h3>
            <p>
              Aplicación CRUD completa con login seguro, filtros avanzados y
              exportación en tiempo real.
            </p>
            <div className="herramientas">
              <span className="php ">PHP</span>
              <span className="mysql">MySQL</span>
              <span className="js">JS</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="herramientasDB">
            <i className="fas fa-laptop-code"></i>
          </div>
          <div style={{ padding: "30px" }}>
            <h3 className="tituloCV">Currículum Web Interactivo</h3>
            <p>
              Portafolio personal futurista con animaciones, responsive design y
              experiencia premium.
            </p>
            <div className="herramientas">
              <span className="html5">HTML5</span>
              <span className="css3">CSS3</span>
              <span className="bootstrap">Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
