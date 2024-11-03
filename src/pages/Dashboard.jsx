import { useEffect, useState } from "react";
import Heading from "../component/Heading";
import { addFavorite, getAllFavorites, removeFavorite } from "../component/Utility";
import Cards from "../component/Cards";
import { useLocation } from "react-router-dom";

const Dashboard  = () => {
    const [coffees,setCoffees] = useState([])
    const location = useLocation()
    console.log(location)

    useEffect(() =>{
        const favorites = getAllFavorites();
        setCoffees(favorites);
    },[]);

    const handleremove = id => {
        removeFavorite(id)
         const favorites = getAllFavorites();
         setCoffees(favorites);
    }
    return (
      <>
        <Heading
          title="Welcome to Dashboard"
          subtitle="Manages coffee that you have previously added as favourite.You can view or romove them from here."
        ></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coffees.map((coffee) => (
            <Cards
              handleremove={handleremove }
              key={coffee.id}
              coffee={coffee}
            ></Cards>
          ))}
        </div>
      </>
    );
};

export default Dashboard ;