import { useMemo } from "react";
import styles from "./TransactionHistoryContainer.module.css";

const TransactionHistoryContainer = ({
  transactionStatus,
  transactionType,
  transactionAmount,
  transactionStatusText,
  propBackgroundColor,
  propColor,
}) => {
  const transactionPills1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const pENDINGStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.transactionHistory}>
      <div className={styles.transactionIconsParent}>
        <img
          className={styles.transactionIcons}
          alt=""
          src={transactionStatus}
        />
        <div className={styles.frameParent}>
          <div className={styles.depositParent}>
            <div className={styles.deposit}>{transactionType}</div>
            <div className={styles.div}>{transactionAmount}</div>
          </div>
          <div className={styles.pmParent}>
            <div className={styles.pm}>26/06/2021 | 3:00pm</div>
            <div className={styles.transactionPillsWrapper}>
              <div
                className={styles.transactionPills}
                style={transactionPills1Style}
              >
                <div className={styles.pending} style={pENDINGStyle}>
                  {transactionStatusText}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistoryContainer;
