import React, { useState } from "react";
import "./Product.scss";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const images = [
    "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgbw=1600",
    "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgbw=1600",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={images[0]}
            alt=""
            srcset=""
            onClick={(e) => setSelectedImg(0)}
          />
          <img
            src={images[1]}
            alt=""
            srcset=""
            onClick={(e) => setSelectedImg(1)}
          />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>$199</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          iusto, recusandae veniam numquam quos sed perspiciatis illum facilis
          ipsum suscipit?
        </p>
        <div className="quantity">
          <button
            onClick={(e) => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={(e) => setQuantity((prev) => prev + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
