import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Home } from "./pages/Home/Home";
import { AddProduct } from "./pages/AddProduct/AddProduct";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import api from "./api";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated"));

  const logoutHandler = () => {
    // Add logic here to clear authentication state and redirect to login page
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userId");
  };

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login setIsAuthenticated={setIsAuthenticated} />
        </Route>
        <Route path="/home">
          {isAuthenticated ? <Home setIsAuthenticated={setIsAuthenticated} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/add-product">
          {isAuthenticated ? <AddProduct setIsAuthenticated={setIsAuthenticated} /> : <Redirect to="/login" />}
        </Route>
        {/* <Route path="/shopping-cart">
          {isAuthenticated ? <ShoppingCart setIsAuthenticated={setIsAuthenticated} /> : <Redirect to="/login" />}
        </Route> */}
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;