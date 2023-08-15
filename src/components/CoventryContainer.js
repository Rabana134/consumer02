import styles from "./CoventryContainer.module.css";

const CoventryContainer = ({
  starIconUrls,
  starIconUrls2,
  starIconUrls3,
  starIconUrls32,
  starIconUrls4,
  starIconUrls75,
  starIconUrls5,
  starIconUrls6,
  starIconUrls33,
  starIconUrls78,
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.promotionsParent}>
        <div className={styles.promotions}>Promotions</div>
        <div className={styles.adsWrapper}>
          <div className={styles.ads}>Ads</div>
        </div>
      </div>
      <div className={styles.dealOfTheDayParent}>
        <div className={styles.dealOfTheDay}>
          <img
            className={styles.dealOfTheDayChild}
            alt=""
            src="../frame-6713226@2x.png"
          />
          <div className={styles.dealOfTheDayInner}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.colParent}>
                  <div className={styles.col}>
                    <div className={styles.avatarName}>
                      <img
                        className={styles.avatarIcon}
                        alt=""
                        src="../avatar.svg"
                      />
                      <div className={styles.promotions}>Business Name</div>
                    </div>
                    <div className={styles.ratings}>
                      <div className={styles.starRating}>
                        <img
                          className={styles.icons16pxstar}
                          alt=""
                          src={starIconUrls}
                        />
                        <img
                          className={styles.icons16pxstar}
                          alt=""
                          src={starIconUrls2}
                        />
                        <img
                          className={styles.icons16pxstar}
                          alt=""
                          src={starIconUrls3}
                        />
                        <img
                          className={styles.icons16pxstar3}
                          alt=""
                          src={starIconUrls32}
                        />
                        <img
                          className={styles.icons16pxstar}
                          alt=""
                          src={starIconUrls4}
                        />
                      </div>
                      <div className={styles.ratingNumber}>5.0 (300K)</div>
                    </div>
                  </div>
                  <div className={styles.jobCategoryWrapper}>
                    <div className={styles.ratingNumber}>Job category</div>
                  </div>
                </div>
                <div className={styles.offerParent}>
                  <div className={styles.ratingNumber}>
                    Spend $100 and get 20% off
                  </div>
                  <div className={styles.countdown}>Ends in 0d:0h:0m:0s</div>
                </div>
              </div>
              <div className={styles.smallButtons}>
                <div className={styles.buttonWrapper}>
                  <div className={styles.button}>Request Quote</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dealOfTheDay}>
          <img
            className={styles.dealOfTheDayChild}
            alt=""
            src="../frame-6713227@2x.png"
          />
          <div className={styles.dealOfTheDayInner}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.colParent}>
                  <div className={styles.col}>
                    <div className={styles.avatarName}>
                      <img
                        className={styles.avatarIcon}
                        alt=""
                        src="../avatar.svg"
                      />
                      <div className={styles.promotions}>Business Name</div>
                    </div>
                    <div className={styles.ratings}>
                      <div className={styles.starRating}>
                        <img
                          className={styles.icons16pxstar}
                          alt=""
                          src={starIconUrls75}
                        />
                        <img
                          className={styles.icons16pxstar}
                          alt=""
                          src={starIconUrls5}
                        />
                        <img
                          className={styles.icons16pxstar}
                          alt=""
                          src={starIconUrls6}
                        />
                        <img
                          className={styles.icons16pxstar3}
                          alt=""
                          src={starIconUrls33}
                        />
                        <img
                          className={styles.icons16pxstar}
                          alt=""
                          src={starIconUrls78}
                        />
                      </div>
                      <div className={styles.ratingNumber}>5.0 (300K)</div>
                    </div>
                  </div>
                  <div className={styles.jobCategoryWrapper}>
                    <div className={styles.ratingNumber}>Job category</div>
                  </div>
                </div>
                <div className={styles.offerParent}>
                  <div className={styles.ratingNumber}>
                    Spend $100 and get 20% off
                  </div>
                  <div className={styles.countdown}>Ends in 0d:0h:0m:0s</div>
                </div>
              </div>
              <div className={styles.smallButtons}>
                <div className={styles.buttonWrapper}>
                  <div className={styles.button}>Request Quote</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoventryContainer;
