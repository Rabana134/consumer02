import { useMemo } from "react";
import styles from "./ActivitiesContainer.module.css";

const ActivitiesContainer = ({ frameImageUrl, iconImageUrl, propHeight }) => {
  const navStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.nav} style={navStyle}>
      <img className={styles.navChild} alt="" src={frameImageUrl} />
      <div className={styles.defaultParent}>
        <div className={styles.default}>
          <div className={styles.iconshomeParent}>
            <img className={styles.iconshome} alt="" src={iconImageUrl} />
            <div className={styles.home}>Home</div>
          </div>
        </div>
        <div className={styles.default1}>
          <div className={styles.iconshomeParent}>
            <img
              className={styles.iconshome}
              alt=""
              src="../iconscalendar1.svg"
            />
            <div className={styles.home1}>Bookings</div>
          </div>
        </div>
        <div className={styles.default1}>
          <div className={styles.iconshomeParent}>
            <img
              className={styles.iconshome}
              alt=""
              src="../iconsmessage.svg"
            />
            <div className={styles.home1}>Messages</div>
          </div>
        </div>
        <div className={styles.default1}>
          <div className={styles.iconshomeParent}>
            <img
              className={styles.iconshome}
              alt=""
              src="../iconsactivity.svg"
            />
            <div className={styles.home1}>Activities</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesContainer;
