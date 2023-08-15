import { useMemo } from "react";
import styles from "./JobProgressTrackerContainer.module.css";

const JobProgressTrackerContainer = ({ jobDetailsTop }) => {
  const postAJobProgressTrackerStyle = useMemo(() => {
    return {
      top: jobDetailsTop,
    };
  }, [jobDetailsTop]);

  return (
    <div
      className={styles.postAJobProgressTracker}
      style={postAJobProgressTrackerStyle}
    >
      <div className={styles.jobDetails}>Job details</div>
      <div className={styles.location}>Location</div>
      <div className={styles.budget}>Budget</div>
      <div className={styles.uploadImages}>Upload images</div>
      <img
        className={styles.progressBarIcon}
        alt=""
        src="../progress-bar.svg"
      />
    </div>
  );
};

export default JobProgressTrackerContainer;
