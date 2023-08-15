import styles from "./DysonElectricalsContainer.module.css";

const DysonElectricalsContainer = ({ avatarImageUrl }) => {
  return (
    <div className={styles.bookingsCardWrapper}>
      <div className={styles.bookingsCard}>
        <div className={styles.avatarParent}>
          <img className={styles.avatarIcon} alt="" src={avatarImageUrl} />
          <div className={styles.peoplenameParent}>
            <div className={styles.peoplename}>Dyson Electricals</div>
            <div className={styles.dateParent}>
              <div className={styles.date}>26/06/2021</div>
              <div className={styles.frameChild} />
              <div className={styles.date}>{`6:32AM `}</div>
            </div>
          </div>
        </div>
        <div className={styles.electricianRequiredTo}>
          Electrician required to fix a spoilt vaccum cleaner. Please treat as
          urgent.
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.iconscalendarParent}>
              <img
                className={styles.iconscalendar}
                alt=""
                src="../iconscalendar21.svg"
              />
              <div className={styles.date}>{`09/06/2021 `}</div>
            </div>
            <div className={styles.iconscalendarParent}>
              <img
                className={styles.iconscalendar}
                alt=""
                src="../iconsclock.svg"
              />
              <div className={styles.date}>9:00AM</div>
            </div>
            <div className={styles.iconscalendarParent}>
              <img
                className={styles.iconscalendar}
                alt=""
                src="../iconsduration.svg"
              />
              <div className={styles.date}>5 days</div>
            </div>
          </div>
          <div className={styles.iconscalendarParent}>
            <img
              className={styles.iconscalendar}
              alt=""
              src="../iconslocation.svg"
            />
            <div className={styles.citiessummary3}>
              8 High Street, Chase Terrace, WS7 1LP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DysonElectricalsContainer;
