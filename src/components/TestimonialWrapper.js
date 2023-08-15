import styles from "./TestimonialWrapper.module.css";

const TestimonialWrapper = () => {
  return (
    <div className={styles.testimonial}>
      <img
        className={styles.testimonialChild}
        alt=""
        src="../rectangle-12302@2x.png"
      />
      <div className={styles.testimonialItem} />
      <div className={styles.testimonial1}>
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
                src="../icons16pxstar715.svg"
              />
              <img
                className={styles.icons16pxstar}
                alt=""
                src="../icons16pxstar715.svg"
              />
              <img
                className={styles.icons16pxstar}
                alt=""
                src="../icons16pxstar715.svg"
              />
              <img
                className={styles.icons16pxstar}
                alt=""
                src="../icons16pxstar715.svg"
              />
              <img
                className={styles.icons16pxstar}
                alt=""
                src="../icons16pxstar719.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialWrapper;
