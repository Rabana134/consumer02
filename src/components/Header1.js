import styles from "./Header1.module.css";

const Header1 = () => {
  return (
    <div className={styles.navigation}>
      <img
        className={styles.navigationChild}
        alt=""
        src="../frame-665225.svg"
      />
      <div className={styles.navigationItem} />
      <div className={styles.tabSwitch}>
        <div className={styles.pageSelector}>
          <div className={styles.descriptionParent}>
            <div className={styles.description}>Professional</div>
            <div className={styles.selector} />
          </div>
        </div>
        <div className={styles.pageSelector1}>
          <div className={styles.descriptionParent}>
            <b className={styles.description1}>Consumer</b>
            <div className={styles.selector1} />
          </div>
        </div>
      </div>
      <div className={styles.searchBar}>
        <div className={styles.iconssearchWrapper}>
          <img className={styles.iconssearch} alt="" src="../iconssearch.svg" />
        </div>
        <div className={styles.electrician}>Electrician</div>
        <div className={styles.dividerParent}>
          <div className={styles.divider} />
          <div className={styles.location}>
            <img
              className={styles.iconslocation}
              alt=""
              src="../iconslocation6.svg"
            />
            <div className={styles.locationOrPostcode}>
              Location or postcode
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
