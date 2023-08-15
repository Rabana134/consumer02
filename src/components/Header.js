import { useMemo } from "react";
import styles from "./Header.module.css";

const Header = ({
  iconImageUrl,
  searchIconImageUrl,
  searchText,
  locationText,
  propDisplay,
  propDisplay1,
  propBorder,
  propDisplay2,
  propColor,
  propColor1,
}) => {
  const smallButtonsStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const searchBarStyle = useMemo(() => {
    return {
      display: propDisplay1,
      border: propBorder,
    };
  }, [propDisplay1, propBorder]);

  const icons20pxSearchStyle = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  const trySearchingCarpenterStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const locationStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className={styles.navBar}>
      <div className={styles.smallButtons} style={smallButtonsStyle}>
        <div className={styles.icons16pxaddParent}>
          <img className={styles.icons16pxadd} alt="" src={iconImageUrl} />
          <div className={styles.button}>Post a job</div>
        </div>
      </div>
      <img className={styles.navBarChild} alt="" src="../ellipse-252@2x.png" />
      <div className={styles.component98}>
        <img
          className={styles.iconscalendar}
          alt=""
          src="../iconscalendar.svg"
        />
        <div className={styles.home}>Bookmarks</div>
      </div>
      <div className={styles.searchBar} style={searchBarStyle}>
        <div className={styles.icons20pxsearchParent}>
          <img
            className={styles.icons20pxsearch}
            alt=""
            src={searchIconImageUrl}
            style={icons20pxSearchStyle}
          />
          <div
            className={styles.trySearchingCarpenter}
            style={trySearchingCarpenterStyle}
          >
            {searchText}
          </div>
        </div>
        <div className={styles.searchBarChild} />
        <div className={styles.iconslocationParent}>
          <img
            className={styles.iconscalendar}
            alt=""
            src="../iconslocation.svg"
          />
          <div className={styles.trySearchingCarpenter} style={locationStyle}>
            {locationText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
