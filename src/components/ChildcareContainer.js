import { useMemo } from "react";
import styles from "./ChildcareContainer.module.css";

const ChildcareContainer = ({
  iconImageUrl,
  iconSvgUrl,
  cleaningIconSvgUrl,
  entertainmentIconSvgUrl,
  healthIconSvgUrl,
  propBackgroundColor,
  propBorder,
  propCursor,
  propColor,
  propBackgroundColor1,
  propBorder1,
  propOverflow,
  propColor1,
  onProfessionalPillContainerClick,
}) => {
  const professionalPillStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
      cursor: propCursor,
    };
  }, [propBackgroundColor, propBorder, propCursor]);

  const childcareStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const professionalPill1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
      border: propBorder1,
    };
  }, [propBackgroundColor1, propBorder1]);

  const iconsPlaceholderStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const serviceStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className={styles.homeInner}>
      <div className={styles.professionalPillParent}>
        <div
          className={styles.professionalPill}
          onClick={onProfessionalPillContainerClick}
          style={professionalPillStyle}
        >
          <div className={styles.icons16pxplaceholderParent}>
            <img
              className={styles.icons16pxplaceholder}
              alt=""
              src={iconImageUrl}
            />
            <div className={styles.childcare} style={childcareStyle}>
              Explore
            </div>
          </div>
        </div>
        <div
          className={styles.professionalPill1}
          style={professionalPill1Style}
        >
          <div className={styles.icons16pxplaceholderParent}>
            <img
              className={styles.iconsplaceholder}
              alt=""
              src={iconSvgUrl}
              style={iconsPlaceholderStyle}
            />
            <div className={styles.childcare} style={serviceStyle}>
              Childcare
            </div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.icons16pxplaceholderParent}>
            <img
              className={styles.iconscleaning}
              alt=""
              src={cleaningIconSvgUrl}
            />
            <div className={styles.childcare}>Cleaning</div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.icons16pxplaceholderParent}>
            <img
              className={styles.iconscleaning}
              alt=""
              src={entertainmentIconSvgUrl}
            />
            <div className={styles.childcare}>Entertainment</div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.icons16pxplaceholderParent}>
            <img
              className={styles.iconscleaning}
              alt=""
              src={healthIconSvgUrl}
            />
            <div
              className={styles.childcare}
            >{`Health, wellness & beauty`}</div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.icons16pxplaceholderParent}>
            <img className={styles.iconscleaning} alt="" />
            <div className={styles.childcare}>{`Dry Cleaning & Laundry`}</div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.icons16pxplaceholderParent}>
            <img className={styles.iconscleaning} alt="" />
            <div className={styles.childcare}>Transport Services</div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.icons16pxplaceholderParent}>
            <img className={styles.iconscleaning} alt="" />
            <div className={styles.childcare}>Tuition and Classes</div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.icons16pxplaceholderParent}>
            <img className={styles.iconsplaceholder} alt="" />
            <div className={styles.childcare}>Childcare</div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.icons16pxplaceholderParent}>
            <img className={styles.iconsplaceholder} alt="" />
            <div className={styles.childcare}>Childcare</div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.icons16pxplaceholderParent}>
            <img className={styles.iconsplaceholder} alt="" />
            <div className={styles.childcare}>Childcare</div>
          </div>
        </div>
        <div className={styles.professionalPill2}>
          <div className={styles.icons16pxplaceholderParent}>
            <img className={styles.iconsplaceholder} alt="" />
            <div className={styles.childcare}>Childcare</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildcareContainer;
