import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <div class="box">
          <div className="beansNTitle">
            <img
              src="https://ictcoffee.com/wp-content/uploads/2020/03/great-coffee-bean.jpeg"
              alt="coffee beans"
              width="250px"
            />
            <h1>Its all about the beans Larry!</h1>
          </div>
          <p className="beanBoxText">Happy New Year Mocha Joe!</p>
          <div className="favBean">
            <label>Favorite bean:</label>
            <a href="https://www.google.com/search?q=black+beans&source=lnms&tbm=isch&sa=X&ved=2ahUKEwicn-78yvrrAhVQEawKHZvEA0MQ_AUoAnoECBsQBA&biw=500&bih=789">
              Black beans?
            </a>
          </div>
          {/* //title
          //img
          //text
          //favorite bean */}
        </div>
      </div>
    </div>
  );
}

export default App;
