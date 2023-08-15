import styles from "./PrototypeContainer1.module.css";

const PrototypeContainer1 = ({
  frameImageUrl,
  iconImageUrl,
  onDefaultContainerClick,
  onDefaultContainer1Click,
  onDefaultContainer2Click,
  onDefaultContainer3Click,
}) => {
  return (
    <div className={styles.navPrototype}>
      <div className={styles.nav}>
        <img className={styles.navChild} alt="" src={frameImageUrl} />
        <div className={styles.defaultParent}>
          <div className={styles.default} onClick={onDefaultContainerClick}>
            <div className={styles.iconshomeParent}>
              <img className={styles.iconshome} alt="" src={iconImageUrl} />
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

export default PrototypeContainer1;
