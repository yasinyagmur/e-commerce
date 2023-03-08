import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const id = useParams().id;
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log({ data });
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.img?.data?.attributes?.url
            }
            alt=""
            srcset=""
            onClick={(e) => setSelectedImg("img")}
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            srcset=""
            onClick={(e) => setSelectedImg("img2")}
          />
        </div>
        <div className="mainImg">
          {data?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes[selectedImg].data?.attributes?.url
            }
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className="price">${data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
        <div className="quantity">
          <button
            onClick={(e) => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={(e) => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />
          ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon />
            ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>
            Product Category:
            {data?.attributes?.sub_categories?.data?.map((item) => (
              <>{item.attributes.title}</>
            ))}
          </span>
          <span>Tag: {data?.attributes?.type}</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <span>ADDITIONAL INFORMATION</span>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
