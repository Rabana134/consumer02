import DysonElectricalsContainer from "../components/DysonElectricalsContainer";
import styles from "./PaymentReceivedContainer.module.css";

const PaymentReceivedContainer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.fluentcheckmarkStarburst16Parent}>
          <img
            className={styles.fluentcheckmarkStarburst16Icon}
            alt=""
            src="../fluentcheckmarkstarburst16filled1.svg"
          />
          <div className={styles.yourPaymentHasBeenRecievedParent}>
            <div className={styles.yourPaymentHas}>
              Your payment has been recieved
            </div>
            <div className={styles.yourBookingIs}>
              Your booking is confirmed after total payment is completed.
            </div>
          </div>
        </div>
        <div className={styles.frameChild} />
      </div>
      <DysonElectricalsContainer avatarImageUrl="../avatar35.svg" />
      <div className={styles.orderSummaryParent}>
        <div className={styles.orderSummary}>Order Summary</div>
        <div className={styles.frameContainer}>
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
            <div className={styles.subTotal}>Amount Paid</div>
            <div className={styles.div}>£200</div>
          </div>
          <div className={styles.subTotalParent}>
            <b className={styles.subTotal}>Balance Remaining</b>
            <b className={styles.b}>£400</b>
          </div>
        </div>
      </div>
      <div className={styles.largeButtons}>
        <img
          className={styles.icons20pxplaceholder}
          alt=""
          src="../icons20pxplaceholder268.svg"
        />
        <b className={styles.label}>Go to Bookings</b>
        <img
          className={styles.icons20pxplaceholder}
          alt=""
          src="../icons20pxplaceholder268.svg"
        />
      </div>
    </div>
  );
};

export default PaymentReceivedContainer;
