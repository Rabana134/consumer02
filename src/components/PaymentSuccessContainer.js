import { useMemo } from "react";
import styles from "./PaymentSuccessContainer.module.css";

const PaymentSuccessContainer = ({
  illustrationSvgUrls,
  iconSvgUrls,
  icon20pxSvgUrls,
  propCursor,
  onIconsCloseClick,
  onLargeButtonsContainer1Click,
}) => {
  const iconsCloseStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className={styles.popupModal}>
      <div className={styles.modalTitle}>
        <div className={styles.jobDetails}>Job Details</div>
        <img
          className={styles.iconsclose}
          alt=""
          src="/iconsclose.svg"
          onClick={onIconsCloseClick}
          style={iconsCloseStyle}
        />
      </div>
      <div className={styles.illustrationsParent}>
        <img
          className={styles.illustrationsIcon}
          alt=""
          src={illustrationSvgUrls}
        />
        <div className={styles.paymentSuccessfulParent}>
          <div className={styles.paymentSuccessful}>Payment successful</div>
          <div className={styles.yourPaymentHas}>
            Your payment has been received
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
        <div className={styles.groupChild4} />
        <div className={styles.groupChild5} />
        <div className={styles.groupChild6} />
        <div className={styles.groupChild7} />
        <div className={styles.groupChild8} />
        <div className={styles.groupChild9} />
        <div className={styles.groupChild10} />
        <div className={styles.groupChild11} />
        <div className={styles.groupChild12} />
        <div className={styles.groupChild13} />
        <div className={styles.groupChild14} />
        <div className={styles.groupChild15} />
        <div className={styles.groupChild16} />
        <div className={styles.groupChild17} />
        <div className={styles.groupChild18} />
        <div className={styles.groupChild19} />
        <div className={styles.groupChild20} />
        <div className={styles.groupChild21} />
        <div className={styles.groupChild22} />
        <div className={styles.groupChild23} />
        <div className={styles.groupChild24} />
      </div>
      <div
        className={styles.largeButtons}
        onClick={onLargeButtonsContainer1Click}
      >
        <img className={styles.icons20pxplaceholder} alt="" src={iconSvgUrls} />
        <b className={styles.label}>Close</b>
        <img
          className={styles.icons20pxplaceholder}
          alt=""
          src={icon20pxSvgUrls}
        />
      </div>
    </div>
  );
};

export default PaymentSuccessContainer;
