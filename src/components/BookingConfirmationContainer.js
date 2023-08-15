import DysonElectricalsContainer from "../components/DysonElectricalsContainer";
import styles from "./BookingConfirmationContainer.module.css";

const BookingConfirmationContainer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.fluentcheckmarkStarburst16Parent}>
          <img
            className={styles.fluentcheckmarkStarburst16Icon}
            alt=""
            src="../fluentcheckmarkstarburst16filled1.svg"
          />
          <div className={styles.yourBookingHasBeenConfirmeParent}>
            <div className={styles.yourBookingHas}>
              Your booking has been confirmed
            </div>
            <div
              className={styles.aConfirmationMail}
            >{`A confirmation mail has been sent to your email `}</div>
          </div>
        </div>
        <div className={styles.frameChild} />
      </div>
      <DysonElectricalsContainer avatarImageUrl="../avatar65.svg" />
      <div className={styles.orderSummaryParent}>
        <div className={styles.yourBookingHas}>Order Summary</div>
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
            <b className={styles.subTotal}>Total Amount</b>
            <b className={styles.b}>£630</b>
          </div>
        </div>
      </div>
      <div className={styles.largeButtons}>
        <img
          className={styles.icons20pxplaceholder}
          alt=""
          src="../icons20pxplaceholder304.svg"
        />
        <b className={styles.label}>Go to Bookings</b>
        <img
          className={styles.icons20pxplaceholder}
          alt=""
          src="../icons20pxplaceholder304.svg"
        />
      </div>
    </div>
  );
};

export default BookingConfirmationContainer;
