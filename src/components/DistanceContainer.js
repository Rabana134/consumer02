import styles from "./DistanceContainer.module.css";

const DistanceContainer = ({ frameSvgUrl }) => {
  return (
    <div className={styles.frameParent}>
      <img className={styles.frameChild} alt="" src={frameSvgUrl} />
      <div className={styles.frameGroup}>
        <div className={styles.iconslocationParent}>
          <img
            className={styles.iconslocation}
            alt=""
            src="../iconslocation.svg"
          />
          <div className={styles.gibsonCloseWaterbeach}>
            12 Gibson Close, Waterbeach, CB25 9HY
          </div>
        </div>
        <div className={styles.miles}>8 miles</div>
      </div>
    </div>
  );
};

export default DistanceContainer;
