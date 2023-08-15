import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ onClose }) => {
  const navigate = useNavigate();

  const onIconsCloseClick = useCallback(() => {
    navigate("/home5");
  }, [navigate]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.shareParent}>
        <div className={styles.share}>Share</div>
        <img
          className={styles.iconsclose}
          alt=""
          src="../iconsclose48.svg"
          onClick={onIconsCloseClick}
        />
      </div>
      <div className={styles.loggworkscomdysonElectricalParent}>
        <div className={styles.loggworkscomdysonElectrical}>
          Loggworks.com/Dyson-Electricals
        </div>
        <div className={styles.copyWrapper}>
          <div className={styles.copy}>Copy</div>
        </div>
      </div>
      <div className={styles.facebook1Parent}>
        <img
          className={styles.facebook1Icon}
          alt=""
          src="../001facebook-11.svg"
        />
        <img
          className={styles.facebook1Icon}
          alt=""
          src="../013twitter-11.svg"
        />
        <img
          className={styles.facebook1Icon}
          alt=""
          src="../011instagram-11.svg"
        />
        <img
          className={styles.facebook1Icon}
          alt=""
          src="../003whatsapp-11.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent5;
