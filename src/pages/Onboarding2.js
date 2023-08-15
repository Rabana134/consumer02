
import { useMemo, useState } from "react";
import styles from "./Onboarding2.module.css";
import PinInput from 'react-pin-input';
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import TestimonialContainer from "../components/TestimonialContainer";

const Onboarding2 = (
  {phone, final}
) => {
  const [otp, setOtp] = useState('')
  const navigate = useNavigate()
 // Validate OTP
    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
          if(auth.currentUser.uid)
          {
          db.collection('customers').doc(auth.currentUser.uid).get().then(function(snapshot) {
            if(snapshot.data())
            {
              navigate('/home1')
            }
            else
            {
              navigate('/onboarding-4')
            }
          });
          }
        }).catch((err) => {
          console.log(otp)
            alert("Wrong code");
        })
    }

  return (
    <div className={styles.onboarding2}>
      <img
        className={styles.onboarding2Child}
        alt=""
        src="../rectangle-123021@2x.png"
      />
      <div className={styles.onboarding2Item} />
      <TestimonialContainer
        starRatingIconUrl="icons16pxstar930.svg"
        starRatingIconUrls="icons16pxstar930.svg"
        starRatingIconUrlsArray="icons16pxstar930.svg"
        starRatingIconUrlsArray2="icons16pxstar930.svg"
        starRatingIconUrls929and9="icons16pxstar934.svg"
      />
      <img className={styles.logoIcon} alt="" src="../logo3.svg" />
      <div className={styles.verifyPhoneNumberParent}>
        <b className={styles.verifyPhoneNumber}>Verify phone number</b>
        <div className={styles.enterTheVerification}>
          Enter the verification number sent to ...
        </div>
        <div className={styles.parent}>
          <div className={styles.div}> +{phone}</div>
          <div className={styles.edit} style={{cursor:'pointer'}} 
          onClick={()=>window.location.reload()}>Edit</div>
        </div>
         <div className={styles.frameGroup}>
        <div
          className={styles.otpInputParent}
        >
      <PinInput 
  length={6} 
  initialValue="" 
  onChange={(value, index) => {setOtp(value)}} 
  style={{padding: '10px'}}  
  inputStyle={{borderColor: 'red'}}
  inputFocusStyle={{borderColor: 'blue'}}
  autoSelect={true}
/>
        </div>
        <div className={styles.div}> </div>
      </div>
      </div>
      <div className={styles.didntGetTheOtpParent}>
        <div className={styles.enterTheVerification}>Didn’t get the OTP?</div>
        <div className={styles.resendOtp}>Resend OTP</div>
      </div>
      <div
        className={styles.largeButtons}
        onClick={ValidateOtp}
      >
        <img
          className={styles.icons20pxplaceholder}
          alt=""
          src="../icons20pxplaceholder386.svg"
        />
        <b className={styles.label}>Verify OTP</b>
        <img
          className={styles.icons20pxplaceholder}
          alt=""
          src="../icons20pxplaceholder386.svg"
        />
      </div>
     
    </div>
  );
};

export default Onboarding2;
