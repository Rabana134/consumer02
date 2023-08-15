import { useMemo } from "react";
import styles from "./ContainerList.module.css";

const ContainerList = ({
  notificationIconUrl,
  notificationType,
  notificationIconBackgroun,
  propBorderBottom,
}) => {
  const listStyle = useMemo(() => {
    return {
      borderBottom: propBorderBottom,
    };
  }, [propBorderBottom]);

  return (
    <div className={styles.list} style={listStyle}>
      <div className={styles.content}>
        <div className={styles.left}>
          <img className={styles.iconWithBg} alt="" src={notificationIconUrl} />
          <img
            className={styles.iconsplaceholder}
            alt=""
            src="../iconsplaceholder2.svg"
          />
          <div className={styles.list1}>{notificationType}</div>
        </div>
        <div className={styles.right}>
          <img
            className={styles.iconsplaceholder}
            alt=""
            src="../iconsplaceholder2.svg"
          />
          <div className={styles.toggle}>
            <div className={styles.toggleChild} />
            <img
              className={styles.toggleItem}
              alt=""
              src={notificationIconBackgroun}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerList;
