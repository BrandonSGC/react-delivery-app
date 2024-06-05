import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    path: "/",
    text: "Enlace 1",
  },
  {
    id: 2,
    path: "/",
    text: "Enlace 2",
  },
  {
    id: 3,
    path: "/",
    text: "Enlace 3",
  },
  {
    id: 4,
    path: "/",
    text: "Enlace 4",
  },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid contenedor">
        <div className="footer__widget">
          <h3 className="footer__heading">Nosotros</h3>
          <p className="footer__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus praesentium quam porro natus ad, qui libero dolor
          </p>
        </div>

        <div className="footer__widget">
          <h3 className="footer__heading">Navegación</h3>
          <nav className="footer__nav">
            {links.map((link) => (
              <Link key={link.id} to={link.path} className="footer__link">
                {link.text}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer__widget">
          <h3 className="footer__heading">Contacto</h3>
          <p className="footer__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus praesentium quam porro natus ad, qui libero dolor
          </p>
        </div>
      </div>

      <p className="footer__copyright">Todos los derechos reservados.</p>
    </footer>
  );
};
