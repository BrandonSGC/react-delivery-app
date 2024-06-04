import { FavoriteCard } from "../components";

const favorites = [
  {
    id: 1,
    name: "Green Ensaladas",
    imageURL: "/img/logo_ensaladas.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda vitae pariatur aspernatur distinctio, minus,tempore molestiae ut,libero blanditiis consequuntur nisi harumnemorecusandae.",
  },
  {
    id: 2,
    name: "Rostipollos",
    imageURL: "/img/logo_rostipollos.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda vitae pariatur aspernatur distinctio, minus,tempore molestiae ut,libero blanditiis consequuntur nisi harumnemorecusandae.",
  },
  {
    id: 3,
    name: "La Casona",
    imageURL: "/img/logo_lacasona.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda vitae pariatur aspernatur distinctio, minus,tempore molestiae ut,libero blanditiis consequuntur nisi harumnemorecusandae.",
  },
  {
    id: 4,
    name: "La Jefecita",
    imageURL: "/img/logo_lajefecita.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda vitae pariatur aspernatur distinctio, minus,tempore molestiae ut,libero blanditiis consequuntur nisi harumnemorecusandae.",
  },
];

export const Favorites = () => {
  return (
    <main className="favorites">
      <h2 className="favorites__heading">Restaurantes Favoritos</h2>

      {/* Favorites list */}
      <div className="favorites__grid contenedor">
        {favorites.map((favorite) => (
          <FavoriteCard key={favorite.id} {...favorite} />
        ))}
      </div>
    </main>
  );
};
