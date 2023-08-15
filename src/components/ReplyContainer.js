import styles from "./ReplyContainer.module.css";

const ReplyContainer = () => {
  return (
    <div className={styles.commentsParent}>
      <div className={styles.comments}>
        <div className={styles.qa}>
          <div className={styles.top}>
            <div className={styles.avatarParent}>
              <div className={styles.avatar}>
                <img
                  className={styles.avatarChild}
                  alt=""
                  src="../ellipse-2471.svg"
                />
                <div className={styles.ac}>JB</div>
              </div>
              <div className={styles.peoplename}>
                <span>Replying</span>
                <span className={styles.jamesBowen}>
                  <span className={styles.span}>{` `}</span>
                  <span>James Bowen</span>
                </span>
              </div>
            </div>
            <div className={styles.minsAgo}>3 mins ago</div>
          </div>
          <div className={styles.howDoYou}>
            You either provide the money or you get it your self. Either way
            works
          </div>
        </div>
      </div>
      <div className={styles.comments1}>
        <div className={styles.qa}>
          <div className={styles.top}>
            <div className={styles.avatarParent}>
              <img className={styles.avatar} alt="" src="../avatar101.svg" />
              <div className={styles.peoplename1}>
                <span>Replying</span>
                <span className={styles.jamesBowen}>
                  <span className={styles.span}>{` `}</span>
                  <span>Devon Lane</span>
                </span>
              </div>
            </div>
            <div className={styles.minsAgo1}>3 mins ago</div>
          </div>
          <div
            className={styles.howDoYou1}
          >{`I am enjoying these “computer” speakers. They are sinced with my phone. I had Bose speakers and bought these as a replacement. It took me awhile to get the Bluetooth to work with my phone. `}</div>
        </div>
      </div>
      <div className={styles.comments2}>
        <div className={styles.qa}>
          <div className={styles.top}>
            <div className={styles.avatarParent}>
              <div className={styles.avatar}>
                <img
                  className={styles.avatarItem}
                  alt=""
                  src="../ellipse-247.svg"
                />
                <div className={styles.ac1}>BC</div>
              </div>
              <div className={styles.peoplename}>
                <span>Replying</span>
                <span className={styles.jamesBowen}>
                  <span className={styles.span}>{` `}</span>
                  <span>Bessie Cooper</span>
                </span>
              </div>
            </div>
            <div className={styles.minsAgo}>3 mins ago</div>
          </div>
          <div
            className={styles.howDoYou}
          >{`I am enjoying these “computer” speakers. They are sinced with my phone. I had Bose speakers and bought these as a replacement. It took me awhile to get the Bluetooth to work with my phone. `}</div>
        </div>
      </div>
    </div>
  );
};

export default ReplyContainer;
