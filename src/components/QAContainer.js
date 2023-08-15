import styles from "./QAContainer.module.css";

const QAContainer = ({ avatarImageUrl, userName }) => {
  return (
    <div className={styles.qa}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.name}>
            <img className={styles.avatarIcon} alt="" src={avatarImageUrl} />
            <div className={styles.peoplename}>{userName}</div>
          </div>
          <div className={styles.minsAgo}>3 mins ago</div>
        </div>
        <div className={styles.question}>
          How do you handle the buying of spare electrical parts for work?
        </div>
        <div className={styles.answer}>
          <div className={styles.answer1}>
            You either provide the money or you get it your self. Either way
            works
          </div>
        </div>
      </div>
    </div>
  );
};

export default QAContainer;
