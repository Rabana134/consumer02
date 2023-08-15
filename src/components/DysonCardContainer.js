import { useMemo } from "react";
import styles from "./DysonCardContainer.module.css";

const DysonCardContainer = ({
  avatarImageUrl,
  radioButtonImageUrl,
  paypalImageUrl,
  radioBTNCursor,
  icons20pxPlaceholderCursor,
  onFrameContainer11Click,
  onLargeButtonsContainerClick,
}) => {
  const frameDiv9Style = useMemo(() => {
    return {
      cursor: radioBTNCursor,
    };
  }, [radioBTNCursor]);

  const largeButtons15Style = useMemo(() => {
    return {
      cursor: icons20pxPlaceholderCursor,
    };
  }, [icons20pxPlaceholderCursor]);

  return (
    <div className={styles.homeInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.bookingsCardWrapper}>
            <div className={styles.bookingsCard}>
              <div className={styles.avatarParent}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src={avatarImageUrl}
                />
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
                Electrician required to fix a spoilt vaccum cleaner. Please
                treat as urgent.
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
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
          <div className={styles.bookingsCard}>
            <div className={styles.selectAPayment}>Select a payment method</div>
            <div className={styles.frameParent1}>
              <div className={styles.radioBtnParent}>
                <img
                  className={styles.radioBtnIcon}
                  alt=""
                  src="../radio-btn2.svg"
                />
                <div className={styles.date}>Credit or debit card</div>
              </div>
              <div
                className={styles.radioBtnParent}
                style={frameDiv9Style}
                onClick={onFrameContainer11Click}
              >
                <img
                  className={styles.radioBtnIcon}
                  alt=""
                  src={radioButtonImageUrl}
                />
                <div className={styles.date}>Pay from Wallet</div>
              </div>
              <div className={styles.radioBtnContainer}>
                <img
                  className={styles.radioBtnIcon}
                  alt=""
                  src="../radio-btn.svg"
                />
                <div className={styles.date}>Split pay</div>
              </div>
            </div>
          </div>
          <div className={styles.frameItem} />
          <div className={styles.orderSummaryParent}>
            <div className={styles.selectAPayment}>Order Summary</div>
            <div className={styles.frameParent2}>
              <div className={styles.subTotalParent}>
                <div className={styles.subTotal}>Sub Total</div>
                <div className={styles.div}>£650</div>
              </div>
              <div className={styles.subTotalParent}>
                <div className={styles.subTotal}>Sale Tax Rate</div>
                <div className={styles.div}>18%</div>
              </div>
              <div className={styles.subTotalParent}>
                <div className={styles.subTotal}>Sales Tax</div>
                <div className={styles.div}>£36</div>
              </div>
              <div className={styles.subTotalParent}>
                <div className={styles.subTotal}>Discount</div>
                <div className={styles.div}>-£20</div>
              </div>
              <div className={styles.subTotalParent}>
                <div className={styles.subTotal}>Balance remaining</div>
                <div className={styles.div}>£400</div>
              </div>
              <div className={styles.subTotalParent}>
                <b className={styles.subTotal}>Your Payment Split</b>
                <b className={styles.b}>£200</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.largeButtonsParent}>
          <div
            className={styles.largeButtons}
            onClick={onLargeButtonsContainerClick}
            style={largeButtons15Style}
          >
            <img
              className={styles.icons20pxplaceholder}
              alt=""
              src="../icons20pxplaceholder28.svg"
            />
            <b className={styles.date}>Pay Now</b>
            <img
              className={styles.icons20pxplaceholder}
              alt=""
              src="../icons20pxplaceholder28.svg"
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
              <img className={styles.paypal2Icon} alt="" src={paypalImageUrl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DysonCardContainer;
