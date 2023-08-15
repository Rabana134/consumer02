import PaymentContainer from "../components/PaymentContainer";
import styles from "./PaymentFormContainer.module.css";

const PaymentFormContainer = () => {
  return (
    <div className={styles.frameParent}>
      <PaymentContainer
        creditCardNumber="**** **** **** 2546"
        creditCardLogoUrl="../mastercard-18.svg"
        paymentMethodImageUrl="../radio-btn.svg"
        propBackgroundColor="#f0ffeb"
        propDisplay="flex"
      />
      <PaymentContainer
        creditCardNumber="**** **** **** 0002"
        creditCardLogoUrl="../mastercard-19.svg"
        paymentMethodImageUrl="radio-btn1.svg"
        propBackgroundColor="#f6f6f6"
        propDisplay="none"
      />
      <div className={styles.largeButtons}>
        <img className={styles.iconsadd} alt="" src="../iconsadd13.svg" />
        <b className={styles.label}>Add another card</b>
        <img className={styles.iconsadd1} alt="" src="../iconsadd14.svg" />
      </div>
    </div>
  );
};

export default PaymentFormContainer;
