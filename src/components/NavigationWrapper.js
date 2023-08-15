import styles from "./NavigationWrapper.module.css";

const NavigationWrapper = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.homeParent}>
        <div className={styles.home}>Home</div>
        <div className={styles.home}>How it works</div>
        <div className={styles.services}>
          <div className={styles.home}>Services</div>
          <img
            className={styles.iconschevronDown}
            alt=""
            src="../iconschevrondown3.svg"
          />
        </div>
        <div className={styles.services}>
          <div className={styles.home}>Resources</div>
          <img
            className={styles.iconschevronDown}
            alt=""
            src="../iconschevrondown3.svg"
          />
        </div>
        <div className={styles.pricing}>Pricing</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.iconshelpParent}>
            <img
              className={styles.iconschevronDown}
              alt=""
              src="../iconshelp.svg"
            />
            <div className={styles.help}>Help</div>
          </div>
          <div className={styles.iconshelpParent}>
            <img
              className={styles.iconschevronDown}
              alt=""
              src="../iconsaccount.svg"
            />
            <div className={styles.help}>Account</div>
          </div>
        </div>
        <div className={styles.smallButtons}>
          <div className={styles.iconsaddParent}>
            <img className={styles.iconsadd} alt="" src="../iconsadd12.svg" />
            <div className={styles.button}>Post a job</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationWrapper;
