import { useState } from "react";
import Card from "../../components/Card/Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navigation from "../../components/Navigation/Nav";
import Recommended from "../../components/Recommended/Recommended";
import Products from "../../components/Products/Products";
import data from "../../db/data";

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = data.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({
        id,
        img,
        title,
        star,
        reviews,
        prevPrice,
        newPrice,
        company,
        color,
        category,
      }) => (
        <Card
          id={id}
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          company={company}
          color={color}
          category={category}
        />
      )
    );
  }

  const result = filteredData(data, selectedCategory, query);

  return (
    <>
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Sidebar handleChange={handleChange} />
      <Recommended
        handleClick={handleClick}
        query={query}
        selectedCategory={selectedCategory}
        handleInputChange={handleInputChange}
      />
      <Products result={result} />
    </>
  );
};

export default ProductList;
