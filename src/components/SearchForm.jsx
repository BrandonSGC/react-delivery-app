export const SearchForm = () => {
  return (
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

      <input className="formulario__submit" type="submit" value="Buscar" />
    </form>
  );
};
