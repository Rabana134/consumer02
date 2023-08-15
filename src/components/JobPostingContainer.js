import { useMemo } from "react";
import styles from "./JobPostingContainer.module.css";

const JobPostingContainer = ({
  iconImageUrl,
  propCursor,
  propCursor1,
  onIconContainerClick,
  onSmallButtonsContainerClick,
}) => {
  const icon1Style = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const smallButtons1Style = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  return (
    <div className={styles.pageTitle}>
      <div className={styles.merge}>
        <div
          className={styles.icon}
          onClick={onIconContainerClick}
          style={icon1Style}
        >
          <img
            className={styles.iconschevronRight}
            alt=""
            src="../iconschevronright.svg"
          />
        </div>
        <b className={styles.subscriptions}>Post a Job</b>
        <div
          className={styles.smallButtons}
          style={smallButtons1Style}
          onClick={onSmallButtonsContainerClick}
        >
          <div className={styles.icons16pxaddParent}>
            <img className={styles.icons16pxadd} alt="" src={iconImageUrl} />
            <div className={styles.button}>Post a job</div>
          </div>
        </div>
      </div>
      <div className={styles.border} />
    </div>
  );
};

export default JobPostingContainer;
