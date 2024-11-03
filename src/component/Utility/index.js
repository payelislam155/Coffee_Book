import toast from "react-hot-toast";

// get all favorites from local storage
const getAllFavorites = () => {
    const all = localStorage.getItem('favorites');
    return all ? JSON.parse(all) : []; 
}

// add a coffee to local storage
const addFavorite = coffee => {
    // get all previous coffee data
    const favorites = getAllFavorites();
    const exists = favorites.find(item => item.id === coffee.id); 

    if (exists) {
        return toast.error('Coffee already exists in favorites');
    }

    // Add the new coffee to favorites
    favorites.push(coffee);
    localStorage.setItem('favorites', JSON.stringify(favorites)); 
    toast.success('Coffee added to favorites!'); 
}

// remove a coffee from local storage
const removeFavorite = id => {
    const favorites = getAllFavorites(); 
    const updatedFavorites = favorites.filter(coffee => coffee.id != id); 
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); 
    toast.success('Coffee successfully removed from favorites'); 
}

// To get a specific coffee by ID for demonstration
const getFavoriteById = (coffeeId) => {
    const favorites = getAllFavorites();
    return favorites.find(item => item.id === coffeeId); 
}


export { addFavorite, getAllFavorites, removeFavorite, getFavoriteById };