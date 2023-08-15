import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TestimonialContainer from "../components/TestimonialContainer";
import OTPContainer from "../components/OTPContainer";
import styles from "./Onboarding1.module.css";

const Onboarding1 = () => {
  const navigate = useNavigate();

  const onFrameContainer6Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.onboarding1}>
      <img
        className={styles.onboarding1Child}
        alt=""
        src="../rectangle-123021@2x.png"
      />
      <div className={styles.onboarding1Item} />
      <TestimonialContainer
        starRatingIconUrl="icons16pxstar930.svg"
        starRatingIconUrls="icons16pxstar930.svg"
        starRatingIconUrlsArray="icons16pxstar930.svg"
        starRatingIconUrlsArray2="icons16pxstar930.svg"
        starRatingIconUrls929and9="icons16pxstar934.svg"
      />
      <img className={styles.logoIcon} alt="" src="../logo1.svg" />
      <div className={styles.verifyPhoneNumberParent}>
        <b className={styles.verifyPhoneNumber}>Verify phone number</b>
        <div className={styles.enterTheVerification}>
          Enter the verification number sent to
        </div>
        <div className={styles.parent}>
          <div className={styles.div}> +44 7911 123456</div>
          <div className={styles.edit}>Edit</div>
        </div>
      </div>
      <div className={styles.didntGetTheOtpParent}>
        <div className={styles.enterTheVerification}>Didn’t get the OTP?</div>
        <div className={styles.resendOtp}>Resend OTP</div>
      </div>
      <div className={styles.largeButtons}>
        <img
          className={styles.icons20pxplaceholder}
          alt=""
          src="../icons20pxplaceholder378.svg"
        />
        <b className={styles.label}>Verify OTP</b>
        <img
          className={styles.icons20pxplaceholder}
          alt=""
          src="../icons20pxplaceholder378.svg"
        />
      </div>
      <OTPContainer
        otpInputImageUrl="../otp-input5.svg"
        otpInputImageUrl1="../otp-input6.svg"
        otpInputImageUrl2="../otp-input7.svg"
        otpInputImageUrl3="../otp-input8.svg"
        otpInputImageUrl4="../otp-input9.svg"
        propCursor="pointer"
        onFrameContainer6Click={onFrameContainer6Click}
      />
    </div>
  );
};

export default Onboarding1;
