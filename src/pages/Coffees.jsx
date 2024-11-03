import { useLoaderData } from "react-router-dom";
import Cards from "../component/Cards";
import { useState } from "react";

const Coffees = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);

  const handleSort = (sortBy) => {
    if (sortBy === "popularity") {
      // Sort by popularity
      const Sorted = [...data].sort((a, b) => a.popularity - b.popularity);
      setCoffees(Sorted);
    } else if (sortBy === "rating") {
      // Sort by rating
      const Sorted = [...data].sort((a, b) => b.rating - a.rating);
      setCoffees(Sorted);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center my-12">
        <div>
          <h1 className="text-3xl font-thin">
            Sort Coffee&apos;s By popularity & Rating-&gt;
          </h1>
        </div>
        <div className="space-x-4">
          <div
            onClick={() => handleSort("popularity")}
            className="btn btn-warning"
          >
            Sort By Popularity
          </div>
          <div onClick={() => handleSort("rating")} className="btn btn-warning">
            Sort By Rating
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffees.map((coffee) => (
          <Cards key={coffee.id} coffee={coffee}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Coffees;
