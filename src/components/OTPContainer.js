import { useMemo } from "react";
import styles from "./OTPContainer.module.css";

const OTPContainer = ({
  otpInputImageUrl,
  otpInputImageUrl1,
  otpInputImageUrl2,
  otpInputImageUrl3,
  otpInputImageUrl4,
  propCursor,
  onFrameContainer6Click,
}) => {
  const frameDiv10Style = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className={styles.frameParent}>
      <div
        className={styles.otpInputParent}
        style={frameDiv10Style}
        onClick={onFrameContainer6Click}
      >
        <img className={styles.otpInputIcon} alt="" src={otpInputImageUrl} />
        <img className={styles.otpInputIcon} alt="" src={otpInputImageUrl1} />
        <img className={styles.otpInputIcon} alt="" src={otpInputImageUrl2} />
        <img className={styles.otpInputIcon} alt="" src={otpInputImageUrl3} />
        <img className={styles.otpInputIcon} alt="" src={otpInputImageUrl4} />
      </div>
      <div className={styles.s}>58s</div>
    </div>
  );
};

export default OTPContainer;
