import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header contenedor">
      <div className="header__logo">
        <img src="/img/logo.svg" alt="Delivery App logo" />
      </div>

      <nav className="navegacion">
        <Link to="/" className="navegacion__link">
          Iniciar Sesion
        </Link>
        <Link to="/" className="navegacion__link">
          Crear Cuenta
        </Link>
        <Link to="/" className="navegacion__link navegacion__link--registrar">
          Registrar Restaurante
        </Link>
      </nav>
    </header>
  );
};
