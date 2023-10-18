import {CDN_URL}from "../utils/constants";
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
   

    avgRating,
  }) => {
    return (
      <div className="res-container">
        <div className="res-card">
          <img
            className="rest-logo"
            alt="res-logo"
            src={CDN_URL + cloudinaryImageId}
            width="200"
          />
          <h3>{name}</h3>
          <h4>{cuisines.join(', ')}</h4>
          <h4>{area}</h4>
          <h4>{avgRating}</h4>
          
         
        </div>
      </div>
    );
  };
  export default RestaurantCard;