import styles from "./BackContainer.module.css";

const BackContainer = () => {
  return (
    <div className={styles.imgContainer}>
      <div className={styles.imgContainerChild} />
      <img
        className={styles.imgContainerItem}
        alt=""
        src="../frame-671851.svg"
      />
      <img
        className={styles.imgContainerInner}
        alt=""
        src="../frame-671851.svg"
      />
      <div className={styles.content}>
        <img className={styles.contentChild} alt="" src="../ellipse-2534.svg" />
        <img className={styles.contentChild} alt="" src="../ellipse-2544.svg" />
        <img className={styles.contentChild} alt="" src="../ellipse-2544.svg" />
        <img className={styles.contentChild} alt="" src="../ellipse-2544.svg" />
        <img className={styles.contentChild} alt="" src="../ellipse-2544.svg" />
      </div>
    </div>
  );
};

export default BackContainer;
