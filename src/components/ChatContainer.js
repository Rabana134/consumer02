import { useMemo } from "react";
import styles from "./ChatContainer.module.css";

const ChatContainer = ({ greetingText, propTop, propWidth }) => {
  const chatRightStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const helloCraigImStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.chatRight} style={chatRightStyle}>
      <div className={styles.chatRightInner}>
        <div className={styles.helloCraigImDonaldParent}>
          <div className={styles.helloCraigIm} style={helloCraigImStyle}>
            {greetingText}
          </div>
          <div className={styles.pm}>12:47pm</div>
        </div>
      </div>
      <img className={styles.chatRightChild} alt="" src="../vector-26.svg" />
    </div>
  );
};

export default ChatContainer;
