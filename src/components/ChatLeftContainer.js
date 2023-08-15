import { useMemo } from "react";
import styles from "./ChatLeftContainer.module.css";

const ChatLeftContainer = ({
  greetingText,
  propTop,
  propWidth,
  propFlexShrink,
}) => {
  const chatLeftStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const frameDiv6Style = useMemo(() => {
    return {
      width: propWidth,
      flexShrink: propFlexShrink,
    };
  }, [propWidth, propFlexShrink]);

  return (
    <div className={styles.chatLeft} style={chatLeftStyle}>
      <img className={styles.chatLeftChild} alt="" src="../vector-263.svg" />
      <div className={styles.chatLeftInner} style={frameDiv6Style}>
        <div className={styles.hiDonaldNiceToMeetYouHParent}>
          <div className={styles.hiDonaldNice}>{greetingText}</div>
          <div className={styles.pm}>12:47pm</div>
        </div>
      </div>
    </div>
  );
};

export default ChatLeftContainer;
