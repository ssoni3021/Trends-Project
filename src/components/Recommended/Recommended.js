import "./Recommended.css";

const Recommended = ({
  selectedCategory,
  handleClick,
  query,
  handleInputChange,
}) => {
  return (
    <>
      <div className="recommended-container">
        <div>
          <h2 className="recommended-title">Recommended</h2>
          <input
            className="search"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Enter your search shoes."
          />
        </div>
        <div className="recommended-flex">
          <button
            className={
              selectedCategory === ""
                ? "navbar-button-selected"
                : "navbar-button"
            }
            onClick={handleClick}
            value=""
            title="All Products"
          >
            All Products
          </button>
          <button
            className={
              selectedCategory === "Nike"
                ? "navbar-button-selected"
                : "navbar-button"
            }
            onClick={handleClick}
            value="Nike"
            title="Nike"
          >
            Nike
          </button>
          <button
            className={
              selectedCategory === "Adidas"
                ? "navbar-button-selected"
                : "navbar-button"
            }
            onClick={handleClick}
            value="Adidas"
            title="Adidas"
          >
            {" "}
            Adidas
          </button>
          <button
            className={
              selectedCategory === "Puma"
                ? "navbar-button-selected"
                : "navbar-button"
            }
            onClick={handleClick}
            value="Puma"
            title="Puma"
          >
            Puma
          </button>
          <button
            className={
              selectedCategory === "Vans"
                ? "navbar-button-selected"
                : "navbar-button"
            }
            onClick={handleClick}
            value="Vans"
            title="Vans"
          >
            Vans
          </button>
        </div>
      </div>
    </>
  );
};

export default Recommended;
