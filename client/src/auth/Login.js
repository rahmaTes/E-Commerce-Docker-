import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../api";
import styles from "./Login.module.css";

export const Login = ({ setIsAuthenticated }) => {
  const history = useHistory();
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const res = await api.userAuthenticate(inputs);
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("userId", res?.data?.id);
      setInputs({});
      setIsAuthenticated(true);
      history.push("/home");
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "The Authentication Service is under maintenance and it will be back soon! Thanks for your patience!"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </label>
          <button className={styles.button} type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};