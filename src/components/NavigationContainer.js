import { useMemo } from "react";
import styles from "./NavigationContainer.module.css";

const NavigationContainer = ({
  iconImageUrl,
  searchIconImageUrl,
  paymentText,
  addIconImageUrl,
  propCursor,
  propLeft,
  onIconContainerClick,
}) => {
  const iconStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const subscriptionsStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.topNavigation}>
      <div className={styles.navBar}>
        <div className={styles.smallButtons}>
          <div className={styles.icons16pxaddParent}>
            <img className={styles.icons16pxadd} alt="" src={iconImageUrl} />
            <div className={styles.button}>Post a job</div>
          </div>
        </div>
        <img
          className={styles.navBarChild}
          alt=""
          src="../ellipse-252@2x.png"
        />
        <div className={styles.component98}>
          <img
            className={styles.iconscalendar}
            alt=""
            src="../iconscalendar.svg"
          />
          <div className={styles.home}>Bookmarks</div>
        </div>
        <div className={styles.searchBar}>
          <div className={styles.icons20pxsearchParent}>
            <img
              className={styles.icons20pxsearch}
              alt=""
              src={searchIconImageUrl}
            />
            <div className={styles.trySearchingCarpenter}>
              Try searching carpenter...
            </div>
          </div>
          <div className={styles.searchBarChild} />
          <div className={styles.iconslocationParent}>
            <img
              className={styles.iconscalendar}
              alt=""
              src="../iconslocation.svg"
            />
            <div className={styles.trySearchingCarpenter}>Location</div>
          </div>
        </div>
      </div>
      <div className={styles.pageTitle}>
        <div className={styles.merge}>
          <div
            className={styles.icon}
            style={iconStyle}
            onClick={onIconContainerClick}
          >
            <img
              className={styles.iconscalendar}
              alt=""
              src="../iconschevronright.svg"
            />
          </div>
          <b className={styles.subscriptions} style={subscriptionsStyle}>
            {paymentText}
          </b>
          <div className={styles.smallButtons1}>
            <div className={styles.icons16pxaddParent}>
              <img
                className={styles.icons16pxadd}
                alt=""
                src={addIconImageUrl}
              />
              <div className={styles.button}>Post a job</div>
            </div>
          </div>
        </div>
        <div className={styles.border} />
      </div>
    </div>
  );
};

export default NavigationContainer;
