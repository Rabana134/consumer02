import { useMemo } from "react";
import styles from "./ImageUploadContainer.module.css";

const ImageUploadContainer = ({
  avatarImageUrl,
  uploadImageText,
  propCursor,
  onLargeButtonsContainerClick,
}) => {
  const largeButtonsStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.avatarParent}>
          <img className={styles.avatarIcon} alt="" src={avatarImageUrl} />
          <div className={styles.devonLane}>Devon Lane</div>
        </div>
      </div>
      <div className={styles.uploadAnImageParent}>
        <div className={styles.uploadAnImage}>{uploadImageText}</div>
        <div className={styles.frameGroup}>
          <div className={styles.uploadImageParent}>
            <div className={styles.uploadImage}>
              <div className={styles.imageFrame}>
                <div className={styles.boundary} />
                <img
                  className={styles.imageAreaIcon}
                  alt=""
                  src="../image-area@2x.png"
                />
                <img
                  className={styles.iconsadd}
                  alt=""
                  src="../iconsadd8.svg"
                />
              </div>
              <img
                className={styles.addcancelCircleIcon}
                alt=""
                src="../addcancel-circle.svg"
              />
            </div>
            <div className={styles.uploadImage}>
              <div className={styles.imageFrame}>
                <div className={styles.boundary} />
                <img
                  className={styles.imageAreaIcon}
                  alt=""
                  src="../image-area1@2x.png"
                />
                <img
                  className={styles.iconsadd}
                  alt=""
                  src="../iconsadd8.svg"
                />
              </div>
              <img
                className={styles.addcancelCircleIcon}
                alt=""
                src="../addcancel-circle.svg"
              />
            </div>
            <div className={styles.uploadImage}>
              <div className={styles.imageFrame}>
                <div className={styles.boundary} />
                <img
                  className={styles.imageAreaIcon}
                  alt=""
                  src="../image-area2@2x.png"
                />
                <img
                  className={styles.iconsadd}
                  alt=""
                  src="../iconsadd8.svg"
                />
              </div>
              <img
                className={styles.addcancelCircleIcon}
                alt=""
                src="../addcancel-circle.svg"
              />
            </div>
            <div className={styles.uploadImage}>
              <div className={styles.imageFrame}>
                <div className={styles.boundary} />
                <img
                  className={styles.imageAreaIcon}
                  alt=""
                  src="../image-area3@2x.png"
                />
                <img
                  className={styles.iconsadd}
                  alt=""
                  src="../iconsadd8.svg"
                />
              </div>
              <img
                className={styles.addcancelCircleIcon}
                alt=""
                src="../addcancel-circle.svg"
              />
            </div>
          </div>
          <div className={styles.addSupportingImages}>
            Add supporting images to best showcase your job request
          </div>
        </div>
      </div>
      <div
        className={styles.largeButtons}
        style={largeButtonsStyle}
        onClick={onLargeButtonsContainerClick}
      >
        <img
          className={styles.icons20pxplaceholder}
          alt=""
          src="../icons20pxplaceholder28.svg"
        />
        <b className={styles.addSupportingImages}>Post Job</b>
        <img
          className={styles.icons20pxplaceholder}
          alt=""
          src="../icons20pxplaceholder28.svg"
        />
      </div>
    </div>
  );
};

export default ImageUploadContainer;
