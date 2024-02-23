import "./App.css";
import React, { useState } from "react";
import MenuItem from "./components/MenuItem";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";

import "bootstrap/dist/css/bootstrap.min.css"; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

/* ChatGPT was used to:
 * Import the google font. Link to conversation:
 *   https://chat.openai.com/c/617eefc1-e74a-4138-994e-3c8213985ecf
 * Customize the modal alert and integrate modal code from
 *    https://getbootstrap.com/docs/4.0/components/modal/
 *    Link to conversation:
 *      https://chat.openai.com/c/2e49faa2-d0a8-4062-adc9-66e7f7739961
 */

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
  const [cart, setCart] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const updateSubtotal = (priceChange) => {
    setSubtotal(Math.max(subtotal + priceChange, 0));
  };

  const handleClearAll = () => {
    setSubtotal(0);
    setCart({});
  };

  function updateCart(title, itemCount) {
    cart[title] = itemCount;
    setCart(cart);
  }

  const handleOrder = () => {
    if (subtotal === 0) {
      setModalContent("No items in cart");
    } else {
      let cartOverview = Object.keys(cart)
        .map((title) => cart[title] + " " + title)
        .join("\n");
      setModalContent("Order Placed!\n" + cartOverview);
    }
    setIsModalOpen(true);
  };

  const extraMarginsForNavBar = (
    <>
      <br />
      <br />
    </>
  );

  return (
    <>
      <div className="container">
        <Header />
        {menuItems.map((item) => (
          <div className="row">
            <MenuItem
              className="menu-item"
              key={item.id}
              title={item.title}
              imgSrc={item.imageName}
              description={item.description}
              price={item.price}
              subtotal={subtotal}
              updateSubtotal={updateSubtotal}
              updateCart={updateCart}
            />
          </div>
        ))}
      </div>
      <NavBar
        subtotal={subtotal}
        handleClearAll={handleClearAll}
        handleOrder={handleOrder}
      />
      {extraMarginsForNavBar}
      <Modal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        title={modalTitle}
        content={modalContent}
      />
    </>
  );
}

export default App;
