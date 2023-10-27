import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import resObj from "../utils/mockData";
const Body = () => {

  const [listOfRestaurants, setListOfRestaurant] = useState(resObj);
  useEffect(() => { fetchData(); }, []);
  const fetchData = () => {
    const data = fetch()
  };
  return (
    <div className="body">


      <div class="search">
        <form action="#">
          <input type="search" placeholder="search Restaurant" name="search"></input>
          <button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>


      <div classname="filter">
        <button className="filter-btn" onClick={() => {
          console.log("btn working");
          const filteredList = listOfRestaurants.filter((res) => res.data.avgRating > 4
          );
          setListOfRestaurant(filteredList);
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
        })}


      </div>

    </div>
  )
}
export default Body;