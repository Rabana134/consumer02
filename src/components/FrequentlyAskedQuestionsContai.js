import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CardInput from "../components/CardInput";
import styles from "./FrequentlyAskedQuestionsContai.module.css";

const FrequentlyAskedQuestionsContai = () => {
  const navigate = useNavigate();

  const onLargeButtonsContainerClick = useCallback(() => {
    navigate("/help");
  }, [navigate]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frequentlyAskedQuestionsParent}>
        <div className={styles.frequentlyAskedQuestions}>
          Frequently Asked Questions
        </div>
        <div
          className={styles.largeButtons}
          onClick={onLargeButtonsContainerClick}
        >
          <img
            className={styles.iconsmessage}
            alt=""
            src="../iconsmessage1.svg"
          />
          <b className={styles.label}>Visit FAQ Page</b>
          <img className={styles.iconsadd} alt="" src="../iconsmessage2.svg" />
        </div>
      </div>
      <div className={styles.frequentlyAskedQuestionsParent}>
        <div className={styles.contactUsParent}>
          <div className={styles.frequentlyAskedQuestions}>Contact Us</div>
          <div className={styles.cantFindYour}>
            Can’t find your answers in FAQ’S
          </div>
        </div>
        <div className={styles.largeButtonsParent}>
          <div className={styles.largeButtons1}>
            <img
              className={styles.iconsmessage}
              alt=""
              src="../iconsmessage3.svg"
            />
            <b className={styles.label}>Chat Us</b>
            <img
              className={styles.iconsadd}
              alt=""
              src="../iconsmessage4.svg"
            />
          </div>
          <div className={styles.largeButtons2}>
            <img className={styles.iconsadd} alt="" src="../iconsadd2.svg" />
            <b className={styles.label}>Send a mail</b>
            <img className={styles.iconsadd} alt="" src="../iconsadd3.svg" />
          </div>
          <div className={styles.largeButtons2}>
            <img className={styles.iconsadd} alt="" src="../iconsadd4.svg" />
            <b className={styles.label}>Tweet Us</b>
            <img className={styles.iconsadd} alt="" src="../iconsadd5.svg" />
          </div>
          <div className={styles.largeButtons2}>
            <img className={styles.iconsadd} alt="" src="../iconsadd4.svg" />
            <b className={styles.label}>Call Us</b>
            <img className={styles.iconsadd} alt="" src="../iconsadd5.svg" />
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frequentlyAskedQuestionsParent}>
          <div className={styles.contactUsParent}>
            <div className={styles.frequentlyAskedQuestions}>Suggestions</div>
            <div className={styles.helpUsImprove}>Help us improve our app</div>
          </div>
          <CardInput
            cardNumber="Old password"
            cardName="iconseye24.svg"
            cardNumberText="Enter old password"
            cardIconUrl="../ellipse-251.svg"
            cardSecurityCode="../ellipse-251.svg"
            cardExpiryDate="../ellipse-251.svg"
            cardSecurityIconUrl="../ellipse-251.svg"
            cardSecurityText="../ellipse-251.svg"
            cardSecurityIconUrl2="../ellipse-251.svg"
            cardSecurityIconUrl3="../ellipse-251.svg"
            cardSecurityIconUrl4="../ellipse-251.svg"
            cardSecurityIconUrl5="../ellipse-251.svg"
            propWidth="558px"
            propDisplay="none"
            propHeight="80px"
            propColor="#a6a6a6"
          />
        </div>
        <div className={styles.largeButtons5}>
          <img className={styles.iconsadd} alt="" src="../iconsmessage5.svg" />
          <b className={styles.label}>Send</b>
          <img className={styles.iconsadd} alt="" src="../iconsmessage6.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestionsContai;
