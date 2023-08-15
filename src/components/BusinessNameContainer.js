import { useMemo } from "react";
import styles from "./BusinessNameContainer.module.css";

const BusinessNameContainer = ({
  starIconUrl,
  starIconUrl2,
  placeholderIconUrl,
  star4IconUrl,
  star4IconUrl2,
  placeholder2IconUrl,
  placeholder2IconUrl2,
  frame67133Top,
  frame67133Display,
}) => {
  const promotionsStyle = useMemo(() => {
    return {
      top: frame67133Top,
      display: frame67133Display,
    };
  }, [frame67133Top, frame67133Display]);

  return (
    <div className={styles.promotions} style={promotionsStyle}>
      <div className={styles.imgWrapper}>
        <div className={styles.img} />
      </div>
      <div className={styles.description}>
        <div className={styles.descriptionInner}>
          <div className={styles.frameParent}>
            <div className={styles.businessNameAndAvatarParent}>
              <div className={styles.businessNameAndAvatar}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="../avatar4.svg"
                />
                <div className={styles.businessName}>Business Name</div>
              </div>
              <div className={styles.ratings}>
                <div className={styles.starRating}>
                  <img
                    className={styles.icons16pxstar}
                    alt=""
                    src={starIconUrl}
                  />
                  <img
                    className={styles.icons16pxstar}
                    alt=""
                    src={starIconUrl2}
                  />
                  <img
                    className={styles.icons16pxstar}
                    alt=""
                    src={placeholderIconUrl}
                  />
                  <img
                    className={styles.icons16pxstar}
                    alt=""
                    src={star4IconUrl}
                  />
                  <img
                    className={styles.icons16pxstar}
                    alt=""
                    src={star4IconUrl2}
                  />
                </div>
                <div className={styles.ratingNumber}>5.0 (300K)</div>
              </div>
            </div>
            <div className={styles.jobCategory}>Job category | Distance</div>
          </div>
        </div>
        <div className={styles.largeButtons}>
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src={placeholder2IconUrl}
          />
          <b className={styles.ratingNumber}>Get quote</b>
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src={placeholder2IconUrl2}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessNameContainer;
