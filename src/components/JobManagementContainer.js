import styles from "./JobManagementContainer.module.css";

const JobManagementContainer = ({ jobManagementText, quoteText }) => {
  return (
    <div className={styles.subscriptionListWrapper}>
      <div className={styles.subscriptionList}>
        <div className={styles.iconsscrewParent}>
          <img className={styles.iconsscrew} alt="" src="../iconsscrew.svg" />
          <div className={styles.jobManagement}>{jobManagementText}</div>
        </div>
        <div className={styles.automaticallyManageYourJobsWrapper}>
          <div className={styles.automaticallyManageYour}>{quoteText}</div>
        </div>
      </div>
    </div>
  );
};

export default JobManagementContainer;
