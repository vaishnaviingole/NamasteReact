import React from "react";
import ReactDOM from "react-dom/client";
const Header= () => {
  return( 
    <div className="Header">
      <div className="logi-container" >
        <img  className="logo"src="https://img.pikbest.com/png-images/20210621/creative-and-stylish-vintage-french-fries-with-burger-fast-food-graphic-design_5999120.png!w700wp"></img>
      </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>

        </div>
    </div>

  )
}
const RestaurantCard= () =>{
  return (
    <div className="res-card">
      
      <img 
      className="rest-logo"
      alt="res-logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaahDkIzR92JmhOcnNHcsnR87FsHI8KITbVXGllrnhHd423mT6cAVbEN60tO40JniQ1I" width="200"></img>
     
      <h3>Meghna Foods</h3>
      <h4>Mexican,Thai,Chinese</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  )
}
const Body = () => {
  return(
    <div className="body">
      <div classname="search">Search</div>
      <div className="res-container">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
    </div>
  )
}

const AppLayout= () => {
  return(
    <div className="app">
     
  <Header/>
  <Body/>


    </div>
  )
}

const root =ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>);