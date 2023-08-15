import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TestimonialContainer from "../components/TestimonialContainer";
import PersonalInformationContainer from "../components/PersonalInformationContainer";
import styles from "./Onboarding4.module.css";

const Onboarding4 = () => {
  const navigate = useNavigate();

  const onLargeButtonsContainerClick = useCallback(() => {
    navigate("/home1");
  }, [navigate]);

  return (
    <div className={styles.onboarding4}>
      <img
        className={styles.onboarding4Child}
        alt=""
        src="../rectangle-123021@2x.png"
      />
      <div className={styles.onboarding4Item} />
      <TestimonialContainer
        starRatingIconUrl="icons16pxstar925.svg"
        starRatingIconUrls="icons16pxstar925.svg"
        starRatingIconUrlsArray="icons16pxstar925.svg"
        starRatingIconUrlsArray2="icons16pxstar925.svg"
        starRatingIconUrls929and9="icons16pxstar929.svg"
      />
      <img className={styles.logoIcon} alt="" src="../logo5.svg" />
      <PersonalInformationContainer
        avatarImageUrl="../avatar293.svg"
        userName="Devon"
        iconsImageUrl="iconsplaceholder61.svg"
        userInputText="Lane"
        iconsPlaceholderImageUrl="iconsplaceholder61.svg"
        emailAddress="Devonlane@gmail.com"
        iconsPlaceholderImageUrl2="iconsplaceholder61.svg"
        icons20pxImageUrl="icons20pxplaceholder420.svg"
        icons20pxPlaceholderImage="icons20pxplaceholder420.svg"
        iconsPlaceholderDisplay="inline-block"
        iconsPlaceholderDisplay1="inline-block"
        propDisplay="inline-block"
        propBackgroundColor="1.5px solid #2fa500"
        propCursor="pointer"
        propColor="#fff"
        onLargeButtonsContainerClick={onLargeButtonsContainerClick}
      />
    </div>
  );
};

export default Onboarding4;
