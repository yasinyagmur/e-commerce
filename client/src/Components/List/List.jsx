import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./List.scss";
const List = ({ subCats, sort, maxPrice, catId }) => {
  const Filter = subCats
    .map((item) => `&[filters][sub_categories][id][$eq]=${item}`)
    .join("");
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${Filter}&[filters][price][$lte]=${maxPrice}${
      sort ? "&sort=price" : ""
    }`
  );

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
