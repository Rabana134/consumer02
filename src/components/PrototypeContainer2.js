import styles from "./PrototypeContainer2.module.css";

const PrototypeContainer2 = ({
  homeIconUrl,
  onDefaultContainerClick,
  onDefaultContainer1Click,
  onDefaultContainer2Click,
  onDefaultContainer3Click,
}) => {
  return (
    <div className={styles.navPrototype}>
      <div className={styles.nav}>
        <img className={styles.navChild} alt="" src="../frame-66522.svg" />
        <div className={styles.defaultParent}>
          <div className={styles.default} onClick={onDefaultContainerClick}>
            <div className={styles.iconshomeParent}>
              <img className={styles.iconshome} alt="" src={homeIconUrl} />
              <div className={styles.home}>Home</div>
            </div>
          </div>
          <div className={styles.default} onClick={onDefaultContainer1Click}>
            <div className={styles.iconshomeParent}>
              <img
                className={styles.iconshome}
                alt=""
                src="../iconscalendar1.svg"
              />
              <div className={styles.home}>Bookings</div>
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
          <div className={styles.default3} onClick={onDefaultContainer3Click}>
            <div className={styles.iconshomeParent}>
              <img
                className={styles.iconshome}
                alt=""
                src="../iconsactivity32.svg"
              />
              <div className={styles.home3}>Activities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrototypeContainer2;
