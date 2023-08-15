import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./JobPostingSuccessModalContaine.module.css";

const JobPostingSuccessModalContaine = () => {
  const navigate = useNavigate();

  const onIconsCloseClick = useCallback(() => {
    navigate("/messages3");
  }, [navigate]);

  const onLargeButtonsContainer1Click = useCallback(() => {
    navigate("/messages3");
  }, [navigate]);

  return (
    <div className={styles.popupModal}>
      <div className={styles.modalTitle}>
        <div className={styles.jobDetails}>Saved Cards</div>
        <img
          className={styles.iconsclose}
          alt=""
          src="../iconsclose1.svg"
          onClick={onIconsCloseClick}
        />
      </div>
      <div className={styles.fluentcheckmarkStarburst16Parent}>
        <img
          className={styles.fluentcheckmarkStarburst16Icon}
          alt=""
          src="../fluentcheckmarkstarburst16filled.svg"
        />
        <div className={styles.jobPostingSuccessful}>
          Job posting successful
        </div>
      </div>
      <div
        className={styles.largeButtons}
        onClick={onLargeButtonsContainer1Click}
      >
        <img
          className={styles.icons20pxplaceholder}
          alt=""
          src="../icons20pxplaceholder28.svg"
        />
        <b className={styles.label}>Close</b>
        <img
          className={styles.icons20pxplaceholder}
          alt=""
          src="../icons20pxplaceholder28.svg"
        />
      </div>
    </div>
  );
};

export default JobPostingSuccessModalContaine;
