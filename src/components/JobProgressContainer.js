import styles from "./JobProgressContainer.module.css";

const JobProgressContainer = () => {
  return (
    <div className={styles.postAJobProgressTracker}>
      <div className={styles.jobDetails}>Job details</div>
      <div className={styles.location}>Location</div>
      <div className={styles.budget}>Budget</div>
      <div className={styles.uploadImages}>Upload images</div>
      <img
        className={styles.progressBarIcon}
        alt=""
        src="../progress-bar3.svg"
      />
    </div>
  );
};

export default JobProgressContainer;
