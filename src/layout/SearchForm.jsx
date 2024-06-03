export const SearchForm = () => {
  return (
    <section className="contenedor formulario">
      <div className="formulario__grid">
        <div className="formulario__contenido">
          <h2 className="formulario__heading">
            Encuentra y Pide comida de tu restaurante favorito
          </h2>
          <form className="formulario__buscar">
            <div className="formulario__campo">
              <label htmlFor="restaurant" className="formulario__label">
                Restaurant
              </label>
              <input
                className="formulario__input"
                type="text"
                placeholder="La Olla"
                id="restaurant"
                name="restaurant"
              />
            </div>
            <div className="formulario__campo">
              <label htmlFor="platillo" className="formulario__label">
                Platillo
              </label>
              <input
                className="formulario__input"
                type="text"
                placeholder="Gallo Pinto, Sopa..."
                id="platillo"
                name="platillo"
              />
            </div>

            <input
              className="formulario__submit"
              type="submit"
              value="Buscar"
            />
          </form>
        </div>
        <div className="formulario__imagen-contenedor">
          <img
            className="formulario__imagen"
            src="/img/dibujo_repartidor.svg"
            alt="imagen repartidor"
          />
        </div>
      </div>
    </section>
  );
};
