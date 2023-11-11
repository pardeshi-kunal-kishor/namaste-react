import { useState, useEffect } from "react";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const restaurant = await data.json();
    setResInfo(restaurant);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, menuItems } = resInfo;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {menuItems.map(({ id, name, price }) => (
          <li key={id}>
            {name} -{" Rs."}
            {price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
