import { useMemo } from "react";
import styles from "./MessageBox.module.css";

const MessageBox = ({
  iconImageUrl,
  iconImageUrl20px,
  iconImageUrl20pxPlacehold,
  labelContainerCursor,
  iconsPlaceholderBorder,
  dotDisplay,
  iconsAddCursor,
  onInputContainerClick,
  onLargeButtonsContainerClick,
}) => {
  const input4Style = useMemo(() => {
    return {
      cursor: labelContainerCursor,
    };
  }, [labelContainerCursor]);

  const baseField4Style = useMemo(() => {
    return {
      border: iconsPlaceholderBorder,
    };
  }, [iconsPlaceholderBorder]);

  const userInput12Style = useMemo(() => {
    return {
      display: dotDisplay,
    };
  }, [dotDisplay]);

  const largeButtons13Style = useMemo(() => {
    return {
      cursor: iconsAddCursor,
    };
  }, [iconsAddCursor]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.inputParent}>
        <div
          className={styles.input}
          style={input4Style}
          onClick={onInputContainerClick}
        >
          <div className={styles.labelContainer}>
            <div className={styles.label}>Message</div>
          </div>
          <div className={styles.baseField} style={baseField4Style}>
            <img
              className={styles.iconsplaceholder}
              alt=""
              src={iconImageUrl}
            />
            <div className={styles.userInput} style={userInput12Style}>
              Hey guys please help me make payment for a electrical Job at home.
            </div>
            <div className={styles.dot}>
              <img
                className={styles.dotChild}
                alt=""
                src="../ellipse-251.svg"
              />
              <img
                className={styles.dotChild}
                alt=""
                src="../ellipse-251.svg"
              />
              <img
                className={styles.dotChild}
                alt=""
                src="../ellipse-251.svg"
              />
              <img
                className={styles.dotChild}
                alt=""
                src="../ellipse-251.svg"
              />
              <img
                className={styles.dotChild}
                alt=""
                src="../ellipse-251.svg"
              />
              <img
                className={styles.dotChild}
                alt=""
                src="../ellipse-251.svg"
              />
              <img
                className={styles.dotChild}
                alt=""
                src="../ellipse-251.svg"
              />
              <img
                className={styles.dotChild}
                alt=""
                src="../ellipse-251.svg"
              />
              <img
                className={styles.dotChild}
                alt=""
                src="../ellipse-251.svg"
              />
            </div>
          </div>
          <div className={styles.helperTextContainer}>
            <div className={styles.thisIsA}>This is a helper text</div>
            <div className={styles.div}>1/100</div>
          </div>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.splitPaymentWithParent}>
          <div className={styles.splitPaymentWith}>Split payment with</div>
          <div
            className={styles.largeButtons}
            style={largeButtons13Style}
            onClick={onLargeButtonsContainerClick}
          >
            <img className={styles.iconsadd} alt="" src="../iconsadd61.svg" />
            <b className={styles.label1}>Add Contacts</b>
            <img className={styles.iconsadd} alt="" src="../iconsadd62.svg" />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.totalAmountParent}>
          <div className={styles.totalAmount}>Total Amount</div>
          <b className={styles.b}>£630</b>
        </div>
        <div className={styles.largeButtons1}>
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src={iconImageUrl20px}
          />
          <b className={styles.label1}>Send Split Pay Request</b>
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src={iconImageUrl20pxPlacehold}
          />
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
