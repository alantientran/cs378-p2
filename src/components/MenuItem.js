import React from "react";

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, imgSrc, description, price }) => {
  return (
    <>
      <div className="col-4">
        <img src={imgSrc} className="img-responsive" alt={title} />
      </div>
      <div className="col-8">
        <div>
          <h2 className="item-name">{title}</h2>
          <p className="description">{description}</p>
        </div>
        <div className="row price-and-bt">
          <div className="col-6">
            <p className="price">Price: ${price}</p>
          </div>
          <div className="col-6">
            <button className="add-button">Add</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
