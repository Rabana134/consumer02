import { useMemo } from "react";
import styles from "./JobStatusContainer.module.css";

const JobStatusContainer = ({
  starIconUrls,
  starRatingIconUrls,
  placeholderIconUrls,
  addCancelIconUrl,
  ratingValues,
  placeholderIconUrls20px,
  addCancelIconUrls,
  addIconUrls,
  addCancelIconUrls14px,
  addIconUrls31and41,
  addCancelIconUrls14px2,
  propCursor,
  onFrameContainer22Click,
  onUploadImageContainerClick,
}) => {
  const uploadImageStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.iconscheckedParent}>
          <img
            className={styles.iconschecked}
            alt=""
            src="../iconschecked.svg"
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
            <img className={styles.iconsstar} alt="" src={starIconUrls} />
            <img className={styles.iconsstar} alt="" src={starRatingIconUrls} />
            <img
              className={styles.iconsstar}
              alt=""
              src={placeholderIconUrls}
            />
            <img className={styles.iconsstar} alt="" src={addCancelIconUrl} />
            <img className={styles.iconsstar} alt="" src="../iconsstar75.svg" />
          </div>
          <div className={styles.div}>{ratingValues}</div>
        </div>
        <div className={styles.largeInputs}>
          <div className={styles.label}>Write a review</div>
          <div className={styles.field}>
            <div className={styles.userInput}>User input</div>
            <img
              className={styles.iconsplaceholder}
              alt=""
              src="../iconsplaceholder.svg"
            />
          </div>
          <div className={styles.thisIsA}>This is a helper text</div>
        </div>
        <div className={styles.largeButtons}>
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src="../icons20pxplaceholder220.svg"
          />
          <b className={styles.label1}>Submit Review</b>
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src={placeholderIconUrls20px}
          />
        </div>
        <div className={styles.merge}>
          <div
            className={styles.uploadImage}
            onClick={onUploadImageContainerClick}
            style={uploadImageStyle}
          >
            <div className={styles.imageFrame}>
              <div className={styles.boundary} />
              <div className={styles.imageArea} />
              <img className={styles.iconsadd} alt="" src="../iconsadd29.svg" />
            </div>
            <img
              className={styles.addcancelCircleIcon}
              alt=""
              src="../addcancel-circle4.svg"
            />
          </div>
          <div className={styles.uploadImage1}>
            <div className={styles.imageFrame}>
              <div className={styles.boundary} />
              <div className={styles.imageArea} />
              <img className={styles.iconsadd} alt="" src="../iconsadd29.svg" />
            </div>
            <img
              className={styles.addcancelCircleIcon}
              alt=""
              src="../addcancel-circle4.svg"
            />
          </div>
          <div className={styles.uploadImage1}>
            <div className={styles.imageFrame}>
              <div className={styles.boundary} />
              <div className={styles.imageArea} />
              <img className={styles.iconsadd} alt="" src="../iconsadd29.svg" />
            </div>
            <img
              className={styles.addcancelCircleIcon}
              alt=""
              src={addCancelIconUrls}
            />
          </div>
          <div className={styles.uploadImage1}>
            <div className={styles.imageFrame}>
              <div className={styles.boundary} />
              <div className={styles.imageArea} />
              <img className={styles.iconsadd} alt="" src={addIconUrls} />
            </div>
            <img
              className={styles.addcancelCircleIcon}
              alt=""
              src={addCancelIconUrls14px}
            />
          </div>
          <div className={styles.uploadImage1}>
            <div className={styles.imageFrame}>
              <div className={styles.boundary} />
              <div className={styles.imageArea} />
              <img
                className={styles.iconsadd}
                alt=""
                src={addIconUrls31and41}
              />
            </div>
            <img
              className={styles.addcancelCircleIcon}
              alt=""
              src={addCancelIconUrls14px2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobStatusContainer;
