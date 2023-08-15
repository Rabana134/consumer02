import { useMemo } from "react";
import styles from "./DysonFormContainer.module.css";

const DysonFormContainer = ({
  paymentImageUrl,
  creditCardImageUrl,
  iconImageUrl,
  placeholderImageUrl,
  paypalImageUrl,
  icons20pxPlaceholderCursor,
  onLargeButtonsContainerClick,
}) => {
  const largeButtons11Style = useMemo(() => {
    return {
      cursor: icons20pxPlaceholderCursor,
    };
  }, [icons20pxPlaceholderCursor]);

  return (
    <div className={styles.homeInner}>
      <div className={styles.frameParent}>
        <div className={styles.bookingsCardWrapper}>
          <div className={styles.bookingsCard}>
            <div className={styles.avatarParent}>
              <img className={styles.avatarIcon} alt="" src={paymentImageUrl} />
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
              Electrician required to fix a spoilt vaccum cleaner. Please treat
              as urgent.
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
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
          <div className={styles.frameGroup}>
            <div className={styles.frameParent1}>
              <div className={styles.radioBtnParent}>
                <img
                  className={styles.radioBtnIcon}
                  alt=""
                  src="../radio-btn.svg"
                />
                <div className={styles.date}>Credit or debit card</div>
              </div>
              <div className={styles.savedCardsParent}>
                <div className={styles.savedCards}>
                  <div className={styles.frameParent2}>
                    <div className={styles.crosbyOdennehyParent}>
                      <div className={styles.crosbyOdennehy}>
                        Crosby O’Dennehy
                      </div>
                      <div className={styles.transactionPills}>
                        <div className={styles.success}>DEFAULT</div>
                      </div>
                    </div>
                    <div className={styles.parent}>
                      <div className={styles.div}>**** **** **** 2546</div>
                      <img
                        className={styles.mastercard1Icon}
                        alt=""
                        src={creditCardImageUrl}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.switchCard}>Switch card</div>
              </div>
            </div>
            <div className={styles.orderSummaryParent}>
              <div className={styles.radioBtnParent}>
                <img
                  className={styles.radioBtnIcon}
                  alt=""
                  src="../radio-btn2.svg"
                />
                <div className={styles.date}>Pay from Wallet</div>
              </div>
              <div className={styles.radioBtnParent}>
                <img
                  className={styles.radioBtnIcon}
                  alt=""
                  src="../radio-btn2.svg"
                />
                <div className={styles.date}>Split pay</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameItem} />
        <div className={styles.orderSummaryParent}>
          <div className={styles.selectAPayment}>Order Summary</div>
          <div className={styles.frameParent4}>
            <div className={styles.subTotalParent}>
              <div className={styles.subTotal}>Sub Total</div>
              <div className={styles.div1}>£650</div>
            </div>
            <div className={styles.subTotalParent}>
              <div className={styles.subTotal}>Sale Tax Rate</div>
              <div className={styles.div1}>18%</div>
            </div>
            <div className={styles.subTotalParent}>
              <div className={styles.subTotal}>Sales Tax</div>
              <div className={styles.div1}>£36</div>
            </div>
            <div className={styles.subTotalParent}>
              <div className={styles.subTotal}>Discount</div>
              <div className={styles.div1}>-£20</div>
            </div>
            <div className={styles.subTotalParent}>
              <b className={styles.subTotal}>Total Amount</b>
              <b className={styles.b}>£630</b>
            </div>
          </div>
        </div>
        <div className={styles.largeButtonsParent}>
          <div
            className={styles.largeButtons}
            style={largeButtons11Style}
            onClick={onLargeButtonsContainerClick}
          >
            <img
              className={styles.icons20pxplaceholder}
              alt=""
              src={iconImageUrl}
            />
            <b className={styles.date}>Pay Now</b>
            <img
              className={styles.icons20pxplaceholder}
              alt=""
              src={placeholderImageUrl}
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

export default DysonFormContainer;
