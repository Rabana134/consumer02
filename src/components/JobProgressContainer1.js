import styles from "./JobProgressContainer1.module.css";

const JobProgressContainer1 = () => {
  return (
    <div className={styles.postAJobProgressTracker}>
      <div className={styles.jobDetails}>Job details</div>
      <div className={styles.location}>Location</div>
      <div className={styles.budget}>Budget</div>
      <div className={styles.uploadImages}>Upload images</div>
      <img
        className={styles.progressBarIcon}
        alt=""
        src="../progress-bar2.svg"
      />
    </div>
  );
};

export default JobProgressContainer1;
