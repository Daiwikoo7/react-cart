import React from "react";

function Home(props) {
  console.warn("Home", props.data);
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://www.transparentpng.com/thumb/apple-iphone/fORwQR-smartphone-apple-iphone-x-transparent-background.png"
            alt="smartphone, apple Iphone x transparent background @transparentpng.com"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "iphone 11" })
            }
          >
            Add To Cart
          </button>
          <button className="remove-cart-btn"
            onClick={() => {
              props.removeToCartHandler();
            }}
          >
            remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
