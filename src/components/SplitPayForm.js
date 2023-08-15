import styles from "./SplitPayForm.module.css";

const SplitPayForm = ({
  avatarImageUrl,
  avatarImageUrls,
  avatarImageUrlsBySize,
  avatarImageUrlsByNumber,
  iconImageUrls,
  iconImageUrlsBySize,
  iconImageUrlsByNumber,
  iconImageUrls20px,
  iconImageUrls20pxPlacehol,
  iconImageUrls20pxPlacehol2,
  paypalImageUrls,
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.splitPayParent}>
        <b className={styles.splitPay}>Split Pay</b>
        <div className={styles.splitPay1}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.avatarParent}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src={avatarImageUrl}
                />
                <div className={styles.frameDiv}>
                  <div className={styles.citiessummaryParent}>
                    <div className={styles.citiessummary}>Request from</div>
                    <div className={styles.citiessummary1}>5 mins ago</div>
                  </div>
                  <div className={styles.peoplename}>Annette Black</div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.viewJobDetailsParent}>
                  <div className={styles.viewJobDetails}>View Job details</div>
                  <div className={styles.heyDontHave}>
                    Hey, dont have enough cash on me, can you guys help me out
                    to pay?
                  </div>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.citiessummaryGroup}>
                    <div className={styles.label}>Total amount</div>
                    <b className={styles.peoplename1}>$560</b>
                  </div>
                  <div className={styles.citiessummaryContainer}>
                    <div className={styles.citiessummary3}>
                      Requested amount
                    </div>
                    <b className={styles.peoplename2}>$200</b>
                  </div>
                </div>
                <div className={styles.citiessummaryParent1}>
                  <div className={styles.creditOrDebit}>Split amount with</div>
                  <div className={styles.avatarParent}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src={avatarImageUrls}
                    />
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src={avatarImageUrlsBySize}
                    />
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src={avatarImageUrlsByNumber}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.largeButtonsParent}>
              <div className={styles.largeButtons}>
                <img
                  className={styles.icons20pxplaceholder}
                  alt=""
                  src={iconImageUrls}
                />
                <b className={styles.label}>Decline</b>
                <img
                  className={styles.icons20pxplaceholder}
                  alt=""
                  src={iconImageUrlsBySize}
                />
              </div>
              <div className={styles.largeButtons1}>
                <img
                  className={styles.icons20pxplaceholder}
                  alt=""
                  src={iconImageUrlsByNumber}
                />
                <b className={styles.label}>Pay Now</b>
                <img
                  className={styles.icons20pxplaceholder}
                  alt=""
                  src={iconImageUrls20px}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent3}>
        <div className={styles.paymentMethodsParent}>
          <div className={styles.paymentMethods}>Payment methods</div>
          <div className={styles.frameParent4}>
            <div className={styles.radioBtnParent}>
              <img
                className={styles.radioBtnIcon}
                alt=""
                src="../radio-btn2.svg"
              />
              <div className={styles.creditOrDebit}>Credit or debit card</div>
            </div>
            <div className={styles.radioBtnParent}>
              <img
                className={styles.radioBtnIcon}
                alt=""
                src="../radio-btn2.svg"
              />
              <div className={styles.creditOrDebit}>Pay from Wallet</div>
            </div>
          </div>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.citiessummaryParent2}>
          <div className={styles.label}>Amount payable</div>
          <b className={styles.peoplename1}>$560</b>
        </div>
        <div className={styles.largeButtonsGroup}>
          <div className={styles.largeButtons2}>
            <img
              className={styles.icons20pxplaceholder}
              alt=""
              src={iconImageUrls20pxPlacehol}
            />
            <b className={styles.label}>Pay Now</b>
            <img
              className={styles.icons20pxplaceholder}
              alt=""
              src={iconImageUrls20pxPlacehol2}
            />
          </div>
          <div className={styles.demarcation}>
            <div className={styles.demarcationChild} />
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.or}>OR</div>
            </div>
          </div>
          <div className={styles.groupWrapper}>
            <div className={styles.payWithParent}>
              <div className={styles.payWith}>Pay with</div>
              <img
                className={styles.paypal2Icon}
                alt=""
                src={paypalImageUrls}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitPayForm;
