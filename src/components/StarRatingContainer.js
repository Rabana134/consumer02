import { useMemo } from "react";
import styles from "./StarRatingContainer.module.css";

const StarRatingContainer = ({
  ratingText,
  distanceText,
  ratingIconUrl,
  ratingIconUrl2,
  ratingIconUrl3,
  ratingIconUrl4,
  ratingIconUrl5,
  ratingValue,
  ratingIconUrl1,
  distanceIconUrl,
  ratingIconUrl6,
  ratingIconUrl7,
  ratingIconUrl8,
  ratingText1,
  ratingIconUrl9,
  ratingIconUrl10,
  ratingIconUrl11,
  ratingIconUrl12,
  ratingIconUrl13,
  ratingText2,
  ratingIconUrl14,
  ratingIconUrl15,
  ratingIconUrl16,
  ratingIconUrl17,
  ratingIconUrl18,
  starRatingText,
  starRatingIconUrl,
  starRatingIconUrl1,
  starRatingIconUrl2,
  starRatingIconUrl3,
  starRatingIconUrl4,
  propWidth,
  propFlexShrink,
  propDisplay,
  propWidth1,
  propFlexShrink1,
  propDisplay1,
  propWidth2,
  propFlexShrink2,
  propDisplay2,
  propWidth3,
  propFlexShrink3,
  propDisplay3,
  propWidth4,
  propFlexShrink4,
  propDisplay4,
}) => {
  const starsStyle = useMemo(() => {
    return {
      width: propWidth,
      flexShrink: propFlexShrink,
    };
  }, [propWidth, propFlexShrink]);

  const stars1Style = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const stars2Style = useMemo(() => {
    return {
      width: propWidth1,
      flexShrink: propFlexShrink1,
    };
  }, [propWidth1, propFlexShrink1]);

  const stars3Style = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const stars4Style = useMemo(() => {
    return {
      width: propWidth2,
      flexShrink: propFlexShrink2,
    };
  }, [propWidth2, propFlexShrink2]);

  const stars5Style = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  const stars6Style = useMemo(() => {
    return {
      width: propWidth3,
      flexShrink: propFlexShrink3,
    };
  }, [propWidth3, propFlexShrink3]);

  const stars7Style = useMemo(() => {
    return {
      display: propDisplay3,
    };
  }, [propDisplay3]);

  const stars8Style = useMemo(() => {
    return {
      width: propWidth4,
      flexShrink: propFlexShrink4,
    };
  }, [propWidth4, propFlexShrink4]);

  const stars9Style = useMemo(() => {
    return {
      display: propDisplay4,
    };
  }, [propDisplay4]);

  return (
    <div className={styles.titlesParent}>
      <div className={styles.titles}>
        <div className={styles.starRating}>{ratingText}</div>
        <img
          className={styles.iconschevronDown}
          alt=""
          src="../iconschevrondown.svg"
        />
      </div>
      <div className={styles.ratingsFilterParent}>
        <div className={styles.ratingsFilter}>
          <div className={styles.checkboxParent}>
            <div className={styles.checkbox} />
            <div className={styles.stars} style={starsStyle}>
              {distanceText}
            </div>
          </div>
          <div className={styles.stars1} style={stars1Style}>
            <img className={styles.iconsstar} alt="" src={ratingIconUrl} />
            <img className={styles.iconsstar} alt="" src={ratingIconUrl2} />
            <img className={styles.iconsstar} alt="" src={ratingIconUrl3} />
            <img className={styles.iconsstar} alt="" src={ratingIconUrl4} />
            <img className={styles.iconsstar} alt="" src={ratingIconUrl5} />
          </div>
        </div>
        <div className={styles.ratingsFilter}>
          <div className={styles.checkboxParent}>
            <div className={styles.checkbox} />
            <div className={styles.stars} style={stars2Style}>
              {ratingValue}
            </div>
          </div>
          <div className={styles.stars1} style={stars3Style}>
            <img className={styles.iconsstar} alt="" src={ratingIconUrl1} />
            <img className={styles.iconsstar} alt="" src={distanceIconUrl} />
            <img className={styles.iconsstar} alt="" src={ratingIconUrl6} />
            <img className={styles.iconsstar} alt="" src={ratingIconUrl7} />
            <img className={styles.iconsstar} alt="" src={ratingIconUrl8} />
          </div>
        </div>
        <div className={styles.ratingsFilter}>
          <div className={styles.checkboxParent}>
            <div className={styles.checkbox} />
            <div className={styles.stars} style={stars4Style}>
              {ratingText1}
            </div>
          </div>
          <div className={styles.stars1} style={stars5Style}>
            <img className={styles.iconsstar} alt="" src={ratingIconUrl9} />
            <img className={styles.iconsstar} alt="" src={ratingIconUrl10} />
            <img className={styles.iconsstar} alt="" src={ratingIconUrl11} />
            <img className={styles.iconsstar} alt="" src={ratingIconUrl12} />
            <img className={styles.iconsstar} alt="" src={ratingIconUrl13} />
          </div>
        </div>
        <div className={styles.ratingsFilter}>
          <div className={styles.checkboxParent}>
            <div className={styles.checkbox} />
            <div className={styles.stars} style={stars6Style}>
              {ratingText2}
            </div>
          </div>
          <div className={styles.stars1} style={stars7Style}>
            <img className={styles.iconsstar} alt="" src={ratingIconUrl14} />
            <img className={styles.iconsstar} alt="" src={ratingIconUrl15} />
            <img className={styles.iconsstar} alt="" src={ratingIconUrl16} />
            <img className={styles.iconsstar} alt="" src={ratingIconUrl17} />
            <img className={styles.iconsstar} alt="" src={ratingIconUrl18} />
          </div>
        </div>
        <div className={styles.ratingsFilter}>
          <div className={styles.checkboxParent}>
            <div className={styles.checkbox} />
            <div className={styles.stars} style={stars8Style}>
              {starRatingText}
            </div>
          </div>
          <div className={styles.stars1} style={stars9Style}>
            <img className={styles.iconsstar} alt="" src={starRatingIconUrl} />
            <img className={styles.iconsstar} alt="" src={starRatingIconUrl1} />
            <img className={styles.iconsstar} alt="" src={starRatingIconUrl2} />
            <img className={styles.iconsstar} alt="" src={starRatingIconUrl3} />
            <img className={styles.iconsstar} alt="" src={starRatingIconUrl4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarRatingContainer;
