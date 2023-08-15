import styles from "./ActivitiesNavContainer.module.css";

const ActivitiesNavContainer = ({
  onDefaultContainerClick,
  onDefaultContainer1Click,
  onDefaultContainer2Click,
  onDefaultContainer3Click,
}) => {
  return (
    <div className={styles.navPrototype}>
      <div className={styles.nav}>
        <img className={styles.navChild} alt="" src="../frame-6652211.svg" />
        <div className={styles.defaultParent}>
          <div className={styles.default} onClick={onDefaultContainerClick}>
            <div className={styles.iconshomeParent}>
              <img
                className={styles.iconshome}
                alt=""
                src="../iconshome10.svg"
              />
              <div className={styles.home}>Home</div>
            </div>
          </div>
          <div className={styles.default1} onClick={onDefaultContainer1Click}>
            <div className={styles.iconshomeParent}>
              <img
                className={styles.iconshome}
                alt=""
                src="../iconscalendar23.svg"
              />
              <div className={styles.home1}>Bookings</div>
            </div>
          </div>
          <div className={styles.default} onClick={onDefaultContainer2Click}>
            <div className={styles.iconshomeParent}>
              <img
                className={styles.iconshome}
                alt=""
                src="../iconsmessage.svg"
              />
              <div className={styles.home}>Messages</div>
            </div>
          </div>
          <div className={styles.default} onClick={onDefaultContainer3Click}>
            <div className={styles.iconshomeParent}>
              <img
                className={styles.iconshome}
                alt=""
                src="../iconsactivity.svg"
              />
              <div className={styles.home}>Activities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesNavContainer;
