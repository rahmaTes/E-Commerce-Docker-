
import React from "react";
import { Link } from "react-router-dom";

export const Home = ({ setIsAuthenticated }) => {
  return (
    <>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/add-product">Add Product</Link>
          </li>
          <li>
            <Link to="/shopping-cart">Shopping Cart</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
