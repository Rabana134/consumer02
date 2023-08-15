import { useMemo } from "react";
import styles from "./JobCompleteContainer.module.css";

const JobCompleteContainer = ({
  reviewText,
  userInputText,
  propCursor,
  propDisplay,
  propCursor1,
  onFrameContainer22Click,
  onLargeInputsContainerClick,
  onLargeButtonsContainer5Click,
}) => {
  const largeInputsStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const userInput3Style = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const largeButtons6Style = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.iconscheckedParent}>
          <img
            className={styles.iconschecked}
            alt=""
            src="../iconschecked5.svg"
          />
          <div className={styles.jobMarkedComplete}>Job marked complete</div>
        </div>
        <img className={styles.iconsclose} alt="" src="../iconsclose1.svg" />
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.leaveAReviewParent}>
          <div className={styles.jobMarkedComplete}>Leave a Review</div>
          <div className={styles.reviewsHelpService}>
            Reviews help service professionals serve you better
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div
            className={styles.iconsstarParent}
            onClick={onFrameContainer22Click}
          >
            <img className={styles.iconsstar} alt="" src="../iconsstar85.svg" />
            <img className={styles.iconsstar} alt="" src="../iconsstar85.svg" />
            <img className={styles.iconsstar} alt="" src={reviewText} />
            <img className={styles.iconsstar} alt="" src="../iconsstar85.svg" />
            <img className={styles.iconsstar} alt="" src="../iconsstar89.svg" />
          </div>
          <div className={styles.div}>4.0</div>
        </div>
        <div
          className={styles.largeInputs}
          style={largeInputsStyle}
          onClick={onLargeInputsContainerClick}
        >
          <div className={styles.label}>Write a review</div>
          <div className={styles.field}>
            <div className={styles.userInput} style={userInput3Style}>
              {userInputText}
            </div>
            <img
              className={styles.iconsplaceholder}
              alt=""
              src="../iconsplaceholder.svg"
            />
          </div>
          <div className={styles.thisIsA}>This is a helper text</div>
        </div>
        <div
          className={styles.largeButtons}
          onClick={onLargeButtonsContainer5Click}
          style={largeButtons6Style}
        >
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src="../icons20pxplaceholder28.svg"
          />
          <b className={styles.label1}>Submit Review</b>
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src="../icons20pxplaceholder28.svg"
          />
        </div>
        <div className={styles.merge}>
          <div className={styles.uploadImage}>
            <div className={styles.imageFrame}>
              <div className={styles.boundary} />
              <img
                className={styles.imageAreaIcon}
                alt=""
                src="../image-area4@2x.png"
              />
              <img className={styles.iconsadd} alt="" src="../iconsadd37.svg" />
            </div>
            <img
              className={styles.addcancelCircleIcon}
              alt=""
              src="../addcancel-circle14.svg"
            />
          </div>
          <div className={styles.uploadImage}>
            <div className={styles.imageFrame}>
              <div className={styles.boundary} />
              <img
                className={styles.imageAreaIcon}
                alt=""
                src="../image-area5@2x.png"
              />
              <img className={styles.iconsadd} alt="" src="../iconsadd37.svg" />
            </div>
            <img
              className={styles.addcancelCircleIcon}
              alt=""
              src="../addcancel-circle14.svg"
            />
          </div>
          <div className={styles.uploadImage2}>
            <div className={styles.imageFrame}>
              <div className={styles.boundary} />
              <div className={styles.imageArea} />
              <img
                className={styles.iconsadd2}
                alt=""
                src="../iconsadd37.svg"
              />
            </div>
            <img
              className={styles.addcancelCircleIcon2}
              alt=""
              src="../addcancel-circle11.svg"
            />
          </div>
          <div className={styles.uploadImage2}>
            <div className={styles.imageFrame}>
              <div className={styles.boundary} />
              <div className={styles.imageArea} />
              <img
                className={styles.iconsadd2}
                alt=""
                src="../iconsadd37.svg"
              />
            </div>
            <img
              className={styles.addcancelCircleIcon2}
              alt=""
              src="../addcancel-circle11.svg"
            />
          </div>
          <div className={styles.uploadImage2}>
            <div className={styles.imageFrame}>
              <div className={styles.boundary} />
              <div className={styles.imageArea} />
              <img
                className={styles.iconsadd2}
                alt=""
                src="../iconsadd37.svg"
              />
            </div>
            <img
              className={styles.addcancelCircleIcon2}
              alt=""
              src="../addcancel-circle11.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCompleteContainer;
