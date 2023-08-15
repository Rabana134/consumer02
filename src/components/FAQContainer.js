import { useMemo } from "react";
import styles from "./FAQContainer.module.css";

const FAQContainer = ({
  descriptionText,
  iconschevronDownBorderBottom,
  propDisplay,
}) => {
  const questionStyle = useMemo(() => {
    return {
      borderBottom: iconschevronDownBorderBottom,
    };
  }, [iconschevronDownBorderBottom]);

  const answerStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={styles.faq}>
      <div className={styles.question} style={questionStyle}>
        <div className={styles.whatIsLoggworksParent}>
          <div className={styles.whatIsLoggworks}>{descriptionText}</div>
          <img
            className={styles.iconschevronDown}
            alt=""
            src="../iconschevrondown3.svg"
          />
        </div>
      </div>
      <div className={styles.answer} style={answerStyle}>
        <div className={styles.sushiMostWesterners}>
          Sushi!! Most Westerners immediately hear that word and think of raw
          fish (what you are really talking about is sashimi), but actually the
          term sushi just refers to the type of vinegar rice used in the
          traditional Japanese cuisine. The great thing about sushi is that I
          can easily fill up and satiate my hunger, but I never feel
          overstuffed.
        </div>
      </div>
    </div>
  );
};

export default FAQContainer;
