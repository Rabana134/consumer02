import { useMemo } from "react";
import styles from "./PaymentCard.module.css";

const PaymentCard = ({ mastercardLogoUrl, propGap }) => {
  const frameDiv3Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className={styles.paymentParent} style={frameDiv3Style}>
      <b className={styles.payment}>Payment</b>
      <div className={styles.frameParent}>
        <div className={styles.savedCardsWrapper}>
          <div className={styles.savedCards}>
            <div className={styles.crosbyOdennehyParent}>
              <div className={styles.crosbyOdennehy}>Crosby O’Dennehy</div>
              <div className={styles.transactionPills}>
                <div className={styles.success}>DEFAULT</div>
              </div>
            </div>
            <img
              className={styles.iconsplaceholder}
              alt=""
              src="../iconsplaceholder12.svg"
            />
            <div className={styles.div}>**** **** **** 2546</div>
            <div className={styles.mastercard1Parent}>
              <img
                className={styles.mastercard1Icon}
                alt=""
                src={mastercardLogoUrl}
              />
              <img
                className={styles.radioBtnIcon}
                alt=""
                src="../radio-btn.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.largeButtons}>
          <img className={styles.iconsadd} alt="" src="../iconsadd13.svg" />
          <b className={styles.label}>Add another card</b>
          <img className={styles.iconsadd1} alt="" src="../iconsadd14.svg" />
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
