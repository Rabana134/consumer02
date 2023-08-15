import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TestimonialContainer from "../components/TestimonialContainer";
import PersonalInformationContainer from "../components/PersonalInformationContainer";
import styles from "./Onboarding3.module.css";

const Onboarding3 = () => {
  const navigate = useNavigate();

  const onLargeInputsContainerClick = useCallback(() => {
    navigate("/onboarding-4");
  }, [navigate]);

  return (
    <div className={styles.onboarding3}>
      <img
        className={styles.onboarding3Child}
        alt=""
        src="../rectangle-123021@2x.png"
      />
      <div className={styles.onboarding3Item} />
      <TestimonialContainer
        starRatingIconUrl="icons16pxstar930.svg"
        starRatingIconUrls="icons16pxstar930.svg"
        starRatingIconUrlsArray="icons16pxstar930.svg"
        starRatingIconUrlsArray2="icons16pxstar930.svg"
        starRatingIconUrls929and9="icons16pxstar934.svg"
      />
      <img className={styles.logoIcon} alt="" src="../logo3.svg" />
      <PersonalInformationContainer
        avatarImageUrl="../avatar294.svg"
        userName="User input"
        iconsImageUrl="iconsplaceholder81.svg"
        userInputText="User input"
        iconsPlaceholderImageUrl="iconsplaceholder81.svg"
        emailAddress="User input"
        iconsPlaceholderImageUrl2="iconsplaceholder81.svg"
        icons20pxImageUrl="icons20pxplaceholder422.svg"
        icons20pxPlaceholderImage="icons20pxplaceholder422.svg"
        labelCursor="pointer"
        iconsPlaceholderDisplay="none"
        iconsPlaceholderDisplay1="none"
        propDisplay="none"
        propBackgroundColor="1px solid #ccc"
        propCursor="unset"
        propColor="#5e5e5e"
        onLargeInputsContainerClick={onLargeInputsContainerClick}
      />
    </div>
  );
};

export default Onboarding3;
