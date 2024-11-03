import { Link, useLocation} from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

const Cards = ({ coffee, handleremove }) => {
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};
  const { pathname } = useLocation();
  return (
    <div className="relative py-6">
      <Link
        to={`/coffee/${id}`}
        className="transition hover:scale-105 shadow-xl rounded-xl my-12"
      >
        <figure className="w-full h-48">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={image}
            alt={name}
          />
        </figure>

        <div className="p-4">
          <h1 className="text-xl">Name: {name}</h1>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popular: {popularity}</p>
        </div>
      </Link>
      {pathname === "/dashboard" && (
        <div
          onClick={() => handleremove(coffee.id)}
          className="absolute top-2 -right-5 bg-yellow-500 p-3  rounded-full "
        >
          <FaRegTrashAlt size={20} />
        </div>
      )}
    </div>
  );
};

export default Cards;