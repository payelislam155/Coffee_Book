import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addFavorite, getAllFavorites } from "../component/Utility";

const CoffeeDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [coffee, setCoffee] = useState({});
   const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    const singleData = data.find((coffee) => coffee.id === parseInt(id));
    setCoffee(singleData);
    const favorites = getAllFavorites()
    const isExist = favorites.find(item => item.id === singleData.id);
    if(isExist) {
      setFavorite(true)
    }
  }, [data, id]);

  const {
    name,
    image,
    ingredients,
    nutrition_info,
    description,
    making_process,
    rating,
    popularity,
  } = coffee;

  // hadle favorite btn click 
  const handleFavourite = (coffee) => {
     addFavorite(coffee)
     setFavorite(true);
  };


  return (
    <div>
      <div className="my-12">
        {/* Description */}
        <h1 className="text-2xl md:text-4xl font-thin mb-6">{description}</h1>

        {/* Image */}
        <div className="w-full h-full md:h-[500px] overflow-hidden rounded-xl shadow">
          <img className="w-full h-full object-cover" src={image} alt={name} />
        </div>

        {/* Title and Favorite Button */}
        <div className="flex justify-between items-center my-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-thin">{name}</h1>
            <p className="text-base">Popularity: {popularity}</p>
            <p className="text-base">Rating: {rating}</p>
          </div>
          <div>
            <button
              disabled={isFavorite}
              onClick={() => handleFavourite(coffee)}
              className="btn btn-warning"
            >
              Add Favorite
            </button>
          </div>
        </div>

        {/* Making Process */}
        <div className="my-6">
          <h2 className="text-2xl font-thin">Making Process:</h2>
          <p className="text-base">{making_process}</p>
        </div>

        {/* Ingredients & Nutrition Info */}
        <h1 className="text-2xl font-thin">Ingredients:</h1>
        <div className="my-6 flex justify-between items-center">
          <div className="flex-1">
            <div className="flex flex-col justify-start items-start relative lg:left-10">
              <ul className="text-xl">
                {ingredients &&
                  ingredients.map((ingredient, index) => (
                    <li className="list-disc" key={index}>
                      {ingredient}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="flex-1">
            {/* Assuming nutritionImg is defined somewhere */}
            <img
              src={nutrition_info ? nutrition_info.image : ""}
              alt={nutrition_info ? nutrition_info.alt : ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
