// import React, { useEffect, useState } from "react";
// import styles from "./ShoppingCart.module.css";
// import { ProductCard } from "../ProductCard/ProductCard";
// import api from "../../api";
// import { AddProduct } from "../AddProduct/AddProduct";
// export const ShoppingCart = () => {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [cartError, setCartError] = useState(false);
//   const [latestProductAddedToCart, setLatestProductAddedToCart] = useState();
//   useEffect(async () => {
//     const userId = localStorage.getItem("userId");
//     await api
//       .getProductsFromCart(userId)
//       .then((cart) => {
//         const cartProducts = cart?.data?.data;
//         const result = cartProducts?.map(
//           ({ productId }) =>
//             products?.find((product) => productId === product?._id) || false
//         );
//         setCart(result);
//       })
//       .catch((err) => {
//         console.log("cart err", err);
//         setCartError(
//           err?.response?.data?.message ||
//             "The shopping cart Service is under maintenance and it will be back soon!, Thanks for your patience!!"
//         );
//       });
//   }, [products, latestProductAddedToCart]);




//   return (
//     <div className={styles.container}>
//       {cartError && <p className={styles.errorMsg}>{cartError}</p>}
//       {!cartError && cart.length > 0 ? (
//         cart.map(({ _id, name, price, description }) => (
//           <ProductCard
//             isShoppingCart={true}
//             key={_id}
//             details={{ _id, name, price, description }}
//           />
//         ))
//       ) : (
//         <p className={styles.notFound}>No Products found in your cart.</p>
//       )}
//     </div>
//   );
// };
