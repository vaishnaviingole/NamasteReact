import React from "react";
import ReactDOM from "react-dom/client";
const elem =  (
    <h1 className="head">Namste React using elem</h1>
  );
  const Title =() =>  (
    <h1 className="head">
        {elem}Namste React using JSX
        
        </h1>
  );
//functional component
const HeadingComponent = () =>{
    return(
    <div id="container">
       {Title()}
 <h1 className="heading">
    Namaste React functional Component</h1>
    </div>
    );
}


const root =ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>);