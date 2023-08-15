import { useMemo } from "react";
import styles from "./CategorySelector.module.css";

const CategorySelector = ({ propBackgroundColor, propColor }) => {
  const largeButtons10Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const label3Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.largeButtonsWrapper}>
      <div className={styles.largeButtons} style={largeButtons10Style}>
        <img className={styles.iconsadd} alt="" src="../iconsadd57.svg" />
        <b className={styles.label} style={label3Style}>
          Select Category
        </b>
        <img className={styles.iconsadd} alt="" src="../iconsadd58.svg" />
      </div>
    </div>
  );
};

export default CategorySelector;
