import { useMemo } from "react";
import styles from "./CarpenterContainer.module.css";

const CarpenterContainer = ({
  iconImageUrl,
  categoryIconImageUrl,
  cleaningIconImageUrl,
  entertainmentIconImageUrl,
  healthIconImageUrl,
  propWidth,
  propCursor,
  onProfessionalPillContainer1Click,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const professionalPill2Style = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className={styles.homeInner} style={frameDiv1Style}>
      <div className={styles.professionalPillParent}>
        <div className={styles.professionalPill}>
          <div className={styles.iconsplaceholderParent}>
            <img
              className={styles.iconsplaceholder}
              alt=""
              src={iconImageUrl}
            />
            <div className={styles.service}>Explore</div>
          </div>
        </div>
        <div
          className={styles.professionalPill1}
          onClick={onProfessionalPillContainer1Click}
          style={professionalPill2Style}
        >
          <div className={styles.iconsplaceholderParent}>
            <img
              className={styles.iconscategories}
              alt=""
              src={categoryIconImageUrl}
            />
            <div className={styles.service}>Childcare</div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.iconsplaceholderParent}>
            <img
              className={styles.iconscategories}
              alt=""
              src={cleaningIconImageUrl}
            />
            <div className={styles.service}>Cleaning</div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.iconsplaceholderParent}>
            <img
              className={styles.iconscategories}
              alt=""
              src={entertainmentIconImageUrl}
            />
            <div className={styles.service}>Entertainment</div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.iconsplaceholderParent} style={{width:'200px'}}>
            <img
              className={styles.iconscategories}
              alt=""
              src={healthIconImageUrl}
            />
            <div className={styles.service}>Health, wellness & beauty</div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.iconsplaceholderParent} style={{width:'200px'}}>
            <img className={styles.iconscategories} alt="" />
            <div className={styles.service}>{`Dry Cleaning & Laundry`}</div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.iconsplaceholderParent} style={{width:'200px'}}>
            <img className={styles.iconscategories} alt="" />
            <div className={styles.service}>Transport Services</div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.iconsplaceholderParent} style={{width:'200px'}}>
            <img className={styles.iconscategories} alt="" />
            <div className={styles.service}>Tuition and Classes</div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.iconsplaceholderParent}>
            <img className={styles.icons16pxplaceholder} alt="" />
            <div className={styles.service}>Childcare</div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.iconsplaceholderParent}>
            <img className={styles.icons16pxplaceholder} alt="" />
            <div className={styles.service}>Childcare</div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.iconsplaceholderParent}>
            <img className={styles.icons16pxplaceholder} alt="" />
            <div className={styles.service}>Childcare</div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.iconsplaceholderParent}>
            <img className={styles.icons16pxplaceholder} alt="" />
            <div className={styles.service}>Childcare</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarpenterContainer;
