import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';


export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>My Website</h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-product">Add Product</Link>
          </li>
          <li>
            <Link to="/shopping-cart">Shopping Cart</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.login}>
        <Link to="/Login" className={styles.loginButton}>Login</Link>
      </div>
    </header>
  );
};
