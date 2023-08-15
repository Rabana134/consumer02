import styles from "./JobDetailsContainer.module.css";

const JobDetailsContainer = () => {
  return (
    <div className={styles.postAJobProgressTracker}>
      <div className={styles.jobDetails}>Job details</div>
      <div className={styles.location}>Location</div>
      <div className={styles.budget}>Budget</div>
      <div className={styles.uploadImages}>Upload images</div>
      <img
        className={styles.progressBarIcon}
        alt=""
        src="../progress-bar1.svg"
      />
    </div>
  );
};

export default JobDetailsContainer;
