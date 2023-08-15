import { useMemo } from "react";
import styles from "./CardInput.module.css";

const CardInput = ({
  cardNumber,
  cardName,
  cardNumberText,
  cardIconUrl,
  cardSecurityCode,
  cardExpiryDate,
  cardSecurityIconUrl,
  cardSecurityText,
  cardSecurityIconUrl2,
  cardSecurityIconUrl3,
  cardSecurityIconUrl4,
  cardSecurityIconUrl5,
  propWidth,
  propDisplay,
  propHeight,
  propColor,
}) => {
  const inputStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const labelContainerStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const baseFieldStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const userInputStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.input} style={inputStyle}>
      <div className={styles.labelContainer} style={labelContainerStyle}>
        <div className={styles.label}>{cardNumber}</div>
      </div>
      <div className={styles.baseField} style={baseFieldStyle}>
        <img className={styles.iconsplaceholder} alt="" src={cardName} />
        <div className={styles.userInput} style={userInputStyle}>
          {cardNumberText}
        </div>
        <div className={styles.dot}>
          <img className={styles.dotChild} alt="" src={cardIconUrl} />
          <img className={styles.dotChild} alt="" src={cardSecurityCode} />
          <img className={styles.dotChild} alt="" src={cardExpiryDate} />
          <img className={styles.dotChild} alt="" src={cardSecurityIconUrl} />
          <img className={styles.dotChild} alt="" src={cardSecurityText} />
          <img className={styles.dotChild} alt="" src={cardSecurityIconUrl2} />
          <img className={styles.dotChild} alt="" src={cardSecurityIconUrl3} />
          <img className={styles.dotChild} alt="" src={cardSecurityIconUrl4} />
          <img className={styles.dotChild} alt="" src={cardSecurityIconUrl5} />
        </div>
      </div>
      <div className={styles.helperTextContainer}>
        <div className={styles.thisIsA}>This is a helper text</div>
        <div className={styles.div}>1/100</div>
      </div>
    </div>
  );
};

export default CardInput;
