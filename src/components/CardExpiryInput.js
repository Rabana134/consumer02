import { useMemo } from "react";
import styles from "./CardExpiryInput.module.css";

const CardExpiryInput = ({
  expirationDate,
  securityCode,
  propColor,
  propColor1,
}) => {
  const userInput1Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const userInput2Style = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className={styles.inputParent}>
      <div className={styles.input}>
        <div className={styles.labelContainer}>
          <div className={styles.label}>Expiry date</div>
        </div>
        <div className={styles.baseField}>
          <img
            className={styles.iconsplaceholder}
            alt=""
            src="../iconsplaceholder14.svg"
          />
          <div className={styles.userInput} style={userInput1Style}>
            {expirationDate}
          </div>
          <div className={styles.dot}>
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
          </div>
        </div>
        <div className={styles.helperTextContainer}>
          <div className={styles.thisIsA}>This is a helper text</div>
          <div className={styles.div}>1/100</div>
        </div>
      </div>
      <div className={styles.input1}>
        <div className={styles.labelContainer}>
          <div className={styles.label}>CVV</div>
        </div>
        <div className={styles.baseField}>
          <img
            className={styles.iconsplaceholder}
            alt=""
            src="../iconsplaceholder14.svg"
          />
          <div className={styles.userInput} style={userInput2Style}>
            {securityCode}
          </div>
          <div className={styles.dot}>
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
          </div>
        </div>
        <div className={styles.helperTextContainer}>
          <div className={styles.thisIsA}>This is a helper text</div>
          <div className={styles.div}>1/100</div>
        </div>
      </div>
    </div>
  );
};

export default CardExpiryInput;
