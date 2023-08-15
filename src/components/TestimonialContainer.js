import styles from "./TestimonialContainer.module.css";

const TestimonialContainer = ({
  starRatingIconUrl,
  starRatingIconUrls,
  starRatingIconUrlsArray,
  starRatingIconUrlsArray2,
  starRatingIconUrls929and9,
}) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.greatSessionDaniWasSuperParent}>
        <div className={styles.greatSessionDani}>
          "Great session! Dani was super helpful. She shared some practical
          advice on how can we go about refining our service offerings."
        </div>
        <div className={styles.frameParent}>
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="../ellipse-249@2x.png"
            />
            <div className={styles.cameronWilliamson}>Cameron Williamson</div>
          </div>
          <div className={styles.starRating}>
            <img
              className={styles.icons16pxstar}
              alt=""
              src={starRatingIconUrl}
            />
            <img
              className={styles.icons16pxstar}
              alt=""
              src={starRatingIconUrls}
            />
            <img
              className={styles.icons16pxstar}
              alt=""
              src={starRatingIconUrlsArray}
            />
            <img
              className={styles.icons16pxstar}
              alt=""
              src={starRatingIconUrlsArray2}
            />
            <img
              className={styles.icons16pxstar}
              alt=""
              src={starRatingIconUrls929and9}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialContainer;
