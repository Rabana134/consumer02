import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SplitPayRequestContainer.module.css";

const SplitPayRequestContainer = () => {
  const navigate = useNavigate();

  const onIconsCloseClick = useCallback(() => {
    navigate("/home21");
  }, [navigate]);

  const onLargeButtonsContainer2Click = useCallback(() => {
    navigate("/home22");
  }, [navigate]);

  return (
    <div className={styles.categories}>
      <div className={styles.modalTitle}>
        <div className={styles.jobDetails}>Split pay</div>
        <img
          className={styles.iconsclose}
          alt=""
          src="../iconsclose64.svg"
          onClick={onIconsCloseClick}
        />
      </div>
      <div className={styles.illustrationsParent}>
        <img
          className={styles.illustrationsIcon}
          alt=""
          src="../illustrations2.svg"
        />
        <div className={styles.splitPayRequestSentParent}>
          <div className={styles.splitPayRequest}>Split Pay Request Sent</div>
          <div className={styles.makeYourOwn}>Make your own payment now</div>
        </div>
      </div>
      <div
        className={styles.largeButtons}
        onClick={onLargeButtonsContainer2Click}
      >
        <img
          className={styles.icons20pxplaceholder}
          alt=""
          src="../icons20pxplaceholder354.svg"
        />
        <b className={styles.label}>Make My Own Payment</b>
        <img
          className={styles.icons20pxplaceholder}
          alt=""
          src="../icons20pxplaceholder354.svg"
        />
      </div>
    </div>
  );
};

export default SplitPayRequestContainer;
