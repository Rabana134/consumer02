import { useMemo } from "react";
import styles from "./SavedCardsContainer.module.css";

const SavedCardsContainer = ({
  creditCardNumber,
  creditCardImageUrl,
  paymentMethodImageUrl,
  propBackgroundColor,
}) => {
  const savedCards1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={styles.savedCards} style={savedCards1Style}>
      <div className={styles.crosbyOdennehyParent}>
        <div className={styles.crosbyOdennehy}>Crosby O’Dennehy</div>
        <div className={styles.transactionPills}>
          <div className={styles.success}>DEFAULT</div>
        </div>
      </div>
      <img
        className={styles.iconsplaceholder}
        alt=""
        src="../iconsplaceholder14.svg"
      />
      <div className={styles.div}>{creditCardNumber}</div>
      <div className={styles.mastercard1Parent}>
        <img
          className={styles.mastercard1Icon}
          alt=""
          src={creditCardImageUrl}
        />
        <img
          className={styles.radioBtnIcon}
          alt=""
          src={paymentMethodImageUrl}
        />
      </div>
    </div>
  );
};

export default SavedCardsContainer;
