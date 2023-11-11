import { useState } from "react";
import restaurants from "../../utils/restaurants.json";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const Body = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="body">
      <input
        type="text"
        max={5}
        min={0}
        onChange={(e) => setRating(e.target.value)}
      />

      <div className="res-container">
        {restaurants
          .filter((restaurant) => +restaurant.data.avgRating > rating)
          .map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default Body;
