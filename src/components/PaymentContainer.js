import { useMemo } from "react";
import styles from "./PaymentContainer.module.css";

const PaymentContainer = ({
  creditCardNumber,
  creditCardLogoUrl,
  paymentMethodImageUrl,
  propBackgroundColor,
  propDisplay,
}) => {
  const savedCardsStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const transactionPillsStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={styles.savedCardsWrapper}>
      <div className={styles.savedCards} style={savedCardsStyle}>
        <div className={styles.crosbyOdennehyParent}>
          <div className={styles.crosbyOdennehy}>Devon Lane</div>
          <div
            className={styles.transactionPills}
            style={transactionPillsStyle}
          >
            <div className={styles.success}>DEFAULT</div>
          </div>
        </div>
        <img
          className={styles.iconsplaceholder}
          alt=""
          src="../iconsplaceholder12.svg"
        />
        <div className={styles.div}>{creditCardNumber}</div>
        <div className={styles.mastercard1Parent}>
          <img
            className={styles.mastercard1Icon}
            alt=""
            src={creditCardLogoUrl}
          />
          <img
            className={styles.radioBtnIcon}
            alt=""
            src={paymentMethodImageUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentContainer;
