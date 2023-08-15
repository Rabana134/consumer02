import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TestimonialWrapper from "../components/TestimonialWrapper";
import JoinFormContainer from "../components/JoinFormContainer";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();

  const onLargeInputsContainerClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <div className={styles.signUp}>
      <TestimonialWrapper />
      <img className={styles.logoIcon} alt="" src="../logo.svg" />
      <JoinFormContainer
        flagImageUrl="../tobiasflagoftheunitedkingdom-12.svg"
        phoneNumber="+44"
        iconImageUrl="icons20pxplaceholder434.svg"
        flagIconImageUrl="icons20pxplaceholder434.svg"
        flagIconImageUrl1="icons20pxplaceholder434.svg"
        flagIconImageUrl2="icons20pxplaceholder434.svg"
        flagIconImageUrl12="../icons20pxplaceholder438.svg"
        flagIconImageUrl3="../icons20pxplaceholder438.svg"
        ellipse252Cursor="pointer"
        thisIsAHelperTextDisplay="none"
        oRDisplay="none"
        alreadyHaveAnAccountCursor="unset"
        onLargeInputsContainerClick={onLargeInputsContainerClick}
      />
    </div>
  );
};

export default SignUp;
