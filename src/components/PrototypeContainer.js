import styles from "./PrototypeContainer.module.css";

const PrototypeContainer = ({
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
        <img className={styles.navChild} alt="" src={'../../frame-66522.svg'} />
        <div className={styles.defaultParent}>
          <div className={styles.default} onClick={onDefaultContainerClick}>
            <div className={styles.iconshomeParent}>
              <img className={styles.iconshome} alt="" src={'../../iconshome67.svg'} />
              <div className={styles.home}>Home</div>
            </div>
          </div>
          <div className={styles.default} onClick={onDefaultContainer1Click}>
            <div className={styles.iconshomeParent}>
              <img
                className={styles.iconshome}
                alt=""
                src="../../iconscalendar1.svg"
              />
              <div className={styles.home}>Bookings</div>
            </div>
          </div>
          <div className={styles.default2} onClick={onDefaultContainer2Click}>
            <div className={styles.iconshomeParent}>
              <img
                className={styles.iconshome}
                alt=""
                src="../../iconsmessage69.svg"
              />
              <div className={styles.home2}>Messages</div>
            </div>
          </div>
          <div className={styles.default} onClick={onDefaultContainer3Click}>
            <div className={styles.iconshomeParent}>
              <img
                className={styles.iconshome}
                alt=""
                src="../../iconsactivity.svg"
              />
              <div className={styles.home}>Activities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrototypeContainer;
