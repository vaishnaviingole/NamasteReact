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
      <img alt="res-logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxHmXOo0D7yv6G6F8FfA8cjLFpO-JBbRWhytUaWast2QUiHyz-GvbnCgo6rNbswi8HQqQ&usqp=CAU"></img>
      <h3>Meghna Foods</h3>
    </div>
  )
}
const Body = () => {
  return(
    <div className="body">
      <div classname="Search">Search</div>
      <div className="res-container">
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