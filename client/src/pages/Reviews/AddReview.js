import React, { useEffect, useState } from "react";
import api from "../../api";
import styles from "./reviews.module.css"; 
import { ReviewCard } from "../ReviewCrd/ReviewCard";

a
export const AddReview = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewError, setReviewError] = useState(false);
  const [latestReview, setLatestReview] = useState();
  useEffect(async () => {
    await api
      .getReviews()
      .then((reviews) => {
        setReviews(reviews?.data?.data);
      })
      .catch((err) => {
        console.log("Reviews err", err);
        setReviewError(
          err?.response?.data?.message ||
            "The review Service is under maintenance and it will be back soon!, Thanks for your patience!!"
        );
      });
  }, []);




  return (
    <>
    
      <div className={styles.container}>
        {reviewError && <p className={styles.errorMsg}>{reviewError}</p>}
        {!reviewError &&
          (reviews?.length > 0 ? (
            reviews.map(({ _id, userId, review}, index) => (
              <ReviewCard
                key={index}
                details={{ _id, userId, review }}
                setLatestReview={setLatestReview}
              />
            ))
          ) : (
            <p className={styles.notFound}>No Reviews yet.</p>
          ))}
      </div>
      </>


  );
};
