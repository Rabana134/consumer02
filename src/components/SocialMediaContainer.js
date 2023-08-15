import { useMemo } from "react";
import styles from "./SocialMediaContainer.module.css";

const SocialMediaContainer = ({
  socialMediaFrameUrl,
  socialMediaLink,
  facebookLink,
  socialMediaIconUrl,
  propTop,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.frameGroup}>
        <img className={styles.frameChild} alt="" src={socialMediaFrameUrl} />
        <div className={styles.connectFacebook}>{socialMediaLink}</div>
      </div>
      <div className={styles.input}>
        <div className={styles.labelContainer}>
          <div className={styles.label}>{facebookLink}</div>
        </div>
        <div className={styles.baseField}>
          <img
            className={styles.iconsplaceholder}
            alt=""
            src={socialMediaIconUrl}
          />
          <div className={styles.userInput}>User input</div>
          <div className={styles.dot}>
            <img className={styles.dotChild} alt="" src="../ellipse-251.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-251.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-251.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-251.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-251.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-251.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-251.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-251.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-251.svg" />
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

export default SocialMediaContainer;
