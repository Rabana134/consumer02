import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TestimonialWrapper from "../components/TestimonialWrapper";
import JoinFormContainer from "../components/JoinFormContainer";
import styles from "./SignUp1.module.css";

const SignUp1 = () => {
  const navigate = useNavigate();

  const onLargeButtonsContainerClick = useCallback(() => {
    navigate("/onboarding-1");
  }, [navigate]);

  return (
    <div className={styles.signUp}>
      <TestimonialWrapper />
      <img className={styles.logoIcon} alt="" src="../logo2.svg" />
      <JoinFormContainer
        flagImageUrl="../tobiasflagoftheunitedkingdom-11.svg"
        phoneNumber="+44  7700960288"
        iconImageUrl="icons20pxplaceholder426.svg"
        flagIconImageUrl="icons20pxplaceholder426.svg"
        flagIconImageUrl1="icons20pxplaceholder426.svg"
        flagIconImageUrl2="icons20pxplaceholder426.svg"
        flagIconImageUrl12="icons20pxplaceholder430.svg"
        flagIconImageUrl3="icons20pxplaceholder430.svg"
        thisIsAHelperTextDisplay="inline-block"
        oRDisplay="flex"
        alreadyHaveAnAccountCursor="pointer"
        onLargeButtonsContainerClick={onLargeButtonsContainerClick}
      />
    </div>
  );
};

export default SignUp1;
