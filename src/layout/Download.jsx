import { Link } from "react-router-dom";

export const Download = () => {
  return (
    <section className="download">
      <div className="download__grid contenedor">
        <div className="download__image">
          <img src="/img/app.png" alt="" />
        </div>

        <div className="download__content">
          <h3 className="download__heading">Descarga la App</h3>
          <span className="download__description">
            Disponible para Android y OS
          </span>
          <div className="download__links">
            <Link to="/">
              <img
                className="download__link"
                src="/img/tienda-apple.svg"
                alt="apple store logo"
              />
            </Link>
            <Link to="/">
              <img
                className="download__link"
                src="/img/tienda-android.svg"
                alt="google play store"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
