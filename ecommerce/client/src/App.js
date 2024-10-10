// import React, { useEffect, useState } from "react";
// import { Login } from "./auth/Login.js";
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import { Home } from "./pages/Home/Home.js";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated"));
//   useEffect(() => {
//     setIsAuthenticated(localStorage.getItem("isAuthenticated"));
//   }, [isAuthenticated]);

//   return (
//     <Router>
//         <Switch>
//             {isAuthenticated && <Route path="/products" render={() => <Home  setIsAuthenticated={setIsAuthenticated} /> } />}
//             <Route path='/' exact render={() => isAuthenticated? <Redirect to='/products' /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
//             {isAuthenticated && <Redirect to='/products' />}
//             <Redirect to='/' />
//         </Switch>
//     </Router>
//   )
// }

// export default App;
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
// import { Home } from "./pages/Home/Home";
// import { Login } from "./auth/Login";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated"));

//   useEffect(() => {
//     setIsAuthenticated(localStorage.getItem("isAuthenticated"));
//   }, []);

//   if (isAuthenticated === null) {
//     return null; // Loading state, you can render a loader here
//   }

//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact>
//           {isAuthenticated ? <Home setIsAuthenticated={setIsAuthenticated} /> : <Login setIsAuthenticated={setIsAuthenticated} />}
//         </Route>
//         <Redirect to="/" />
//       </Switch>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./auth/Login";
import { AddProduct } from "./pages/AddProduct/AddProduct";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated"));

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated"));
  }, []);

  if (isAuthenticated === null) {
    return null; // Loading state, you can render a loader here
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {isAuthenticated ? <Home setIsAuthenticated={setIsAuthenticated} /> : <Login setIsAuthenticated={setIsAuthenticated} />}
        </Route>
        <Route path="/add-product" component={AddProduct} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
