import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
const Body = () => {

  
    return(
      <div className="body">
        <div classname="filter">
           <button className="filter-btn" onClick={()=>{
            console.log("btn working");}}>
                Top Rated Restaurants
                </button>
            </div>
        <div className="res-container">
        {resObj.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
      })}
          
          
        </div>
      </div>
    )
  }
  export default Body;