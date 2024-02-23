import "./App.css";
import React, { useState } from "react";
import MenuItem from "./components/MenuItem";
import Header from "./components/Header";
import Subtotal from "./components/Subtotal";

import "bootstrap/dist/css/bootstrap.min.css"; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// ChatGPT was used to import the google font. Link to conversation:
// https://chat.openai.com/c/617eefc1-e74a-4138-994e-3c8213985ecf

// import Google Fonts stylesheet
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://fonts.googleapis.com/css2?family=Playball&display=swap";
document.head.appendChild(link);
const style = document.createElement("style");
style.textContent = `.slogan {font-family: 'Playball', cursive;}`;
document.head.appendChild(style);

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: "Gyoza",
    description: "Japanese dumplings",
    imageName: "gyoza.png",
    price: 5.99,
  },
  {
    id: 2,
    title: "Sushi",
    description: "Japanese rice rolls",
    imageName: "sushi.png",
    price: 6.99,
  },
  {
    id: 3,
    title: "Ramen",
    description: "Japanese noodle soup",
    imageName: "ramen.png",
    price: 7.99,
  },
  {
    id: 4,
    title: "Matcha Cake",
    description: "Japanese green tea cake",
    imageName: "matcha-cake.png",
    price: 4.99,
  },
  {
    id: 5,
    title: "Mochi",
    description: "Japanese rice cake",
    imageName: "mochi.png",
    price: 3.99,
  },
  {
    id: 6,
    title: "Yakitori",
    description: "Japanese skewered chicken",
    imageName: "yakitori.png",
    price: 2.99,
  },
  {
    id: 7,
    title: "Takoyaki",
    description: "Japanese octopus balls",
    imageName: "takoyaki.png",
    price: 5.99,
  },
  {
    id: 8,
    title: "Sashimi",
    description: "Japanese raw fish",
    imageName: "sashimi.png",
    price: 8.99,
  },
  {
    id: 9,
    title: "Okonomiyaki",
    description: "Japanese savory pancake",
    imageName: "okonomiyaki.png",
    price: 6.99,
  },
  {
    id: 10,
    title: "Katsu Curry",
    description: "Japanese curry with fried pork",
    imageName: "katsu-curry.png",
    price: 9.99,
  },
];

function App() {
  const [subtotal, setSubtotal] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  const handleSubtotalChange = (priceChange) => {
    setSubtotal(subtotal + priceChange);
  };

  const handleClearAll = () => {
    setItemCount(0);
    setSubtotal(subtotal * 0);
  };

  return (
    <>
      <div className="container">
        <Header />
        {/* Display menu items dynamically here by iterating over the provided menuItems */}
        {menuItems.map((item) => (
          <div className="row">
            <MenuItem
              className="menu-item"
              key={item.id}
              title={item.title}
              imgSrc={item.imageName}
              description={item.description}
              price={item.price}
              onSubtotalChange={handleSubtotalChange}
              onClearAll={handleClearAll}
            />
          </div>
        ))}
      </div>
      <div className="row sticky-bar">
        <div className="col-5 subtotal">
          {/* Gets in the right position when changed to col-12? */}
          <Subtotal subtotal={subtotal} />
        </div>
        <div className="col-7">
          <button onClick={handleClearAll}>Clear</button>
        </div>
      </div>
    </>
  );
}

export default App;
