import styles from "./SectionForm.module.css";

const SectionForm = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.groupParent}>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.submit}>submit</div>
          <div className={styles.enterYourEmail}>Enter your email address</div>
        </div>
        <div className={styles.joinOurNewsletter}>Join our newsletter</div>
      </div>
    </div>
  );
};

export default SectionForm;
