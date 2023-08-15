import { useMemo } from "react";
import styles from "./JobMarkedContainer.module.css";

const JobMarkedContainer = ({
  submitButtonText,
  propCursor,
  propBackgroundColor,
  propBorder,
  propColor,
  onLargeButtonsContainer5Click,
}) => {
  const largeButtons4Style = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propBackgroundColor, propBorder]);

  const divStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.iconscheckedParent}>
          <img
            className={styles.iconschecked}
            alt=""
            src="../iconschecked2.svg"
          />
          <div className={styles.jobMarkedComplete}>Job marked complete</div>
        </div>
        <img className={styles.iconsclose} alt="" src="../iconsclose.svg" />
      </div>
      <div className={styles.howLikelyWouldYouRecommendParent}>
        <div className={styles.howLikelyWould}>
          How likely would you recommend me?
        </div>
        <div
          className={styles.largeButtons}
          onClick={onLargeButtonsContainer5Click}
          style={largeButtons4Style}
        >
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src="../icons20pxplaceholder28.svg"
          />
          <b className={styles.label}>{submitButtonText}</b>
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src="../icons20pxplaceholder28.svg"
          />
        </div>
        <div className={styles.extremelyLikelyParent}>
          <div className={styles.extremelyLikely}>Extremely likely</div>
          <div className={styles.leastLikely}>Least likely</div>
          <div className={styles.component14}>
            <div className={styles.component14Child} />
            <div className={styles.div}>10</div>
          </div>
          <div className={styles.component15}>
            <div className={styles.component15Child} />
            <div className={styles.div1}>9</div>
          </div>
          <div className={styles.component17}>
            <div
              className={styles.component17Child}
              style={rectangleDivStyle}
            />
            <div className={styles.div1} style={divStyle}>
              8
            </div>
          </div>
          <div className={styles.component18}>
            <div className={styles.component15Child} />
            <div className={styles.div1}>7</div>
          </div>
          <div className={styles.component19}>
            <div className={styles.component15Child} />
            <div className={styles.div1}>6</div>
          </div>
          <div className={styles.component20}>
            <div className={styles.component15Child} />
            <div className={styles.div1}>5</div>
          </div>
          <div className={styles.component21}>
            <div className={styles.component15Child} />
            <div className={styles.div6}>4</div>
          </div>
          <div className={styles.component22}>
            <div className={styles.component15Child} />
            <div className={styles.div6}>3</div>
          </div>
          <div className={styles.component23}>
            <div className={styles.component15Child} />
            <div className={styles.div1}>2</div>
          </div>
          <div className={styles.component24}>
            <div className={styles.component15Child} />
            <div className={styles.div9}>1</div>
          </div>
          <div className={styles.component25}>
            <div className={styles.component25Child} />
            <div className={styles.div6}>0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobMarkedContainer;
