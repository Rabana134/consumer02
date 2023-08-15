import QAContainer from "../components/QAContainer";
import styles from "./TheresaWebbContainer.module.css";

const TheresaWebbContainer = () => {
  return (
    <div className={styles.qaParent}>
      <QAContainer avatarImageUrl="avatar170.svg" userName="Theresa Webb" />
      <div className={styles.qa}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.name}>
              <div className={styles.avatar}>
                <img
                  className={styles.avatarChild}
                  alt=""
                  src="../ellipse-247.svg"
                />
                <div className={styles.ac}>AC</div>
              </div>
              <div className={styles.peoplename}>Bessie Cooper</div>
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
      <QAContainer avatarImageUrl="avatar171.svg" userName="Devon Lane" />
    </div>
  );
};

export default TheresaWebbContainer;
