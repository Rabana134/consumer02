import { useMemo } from "react";
import styles from "./CarpenterNavContainer.module.css";

const CarpenterNavContainer = ({
  addIconUrl,
  searchIconUrl,
  paymentType,
  addIcon4Url,
  propDisplay,
  propDisplay1,
  propDisplay2,
  propDisplay3,
  propCursor,
  propDisplay4,
  propLeft,
  onSmallButtonsContainerClick,
  openAccount,
  onComponent98ContainerClick,
  onIconContainerClick,
}) => {
  const navBarStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const smallButtons2Style = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const searchBar1Style = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  const pageTitleStyle = useMemo(() => {
    return {
      display: propDisplay3,
    };
  }, [propDisplay3]);

  const icon2Style = useMemo(() => {
    return {
      cursor: propCursor,
      display: propDisplay4,
    };
  }, [propCursor, propDisplay4]);

  const subscriptions1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.prototypeNav}>
      <div className={styles.topNavigation}>
        <div className={styles.navBar} style={navBarStyle}>
          <div
            className={styles.smallButtons}
            onClick={onSmallButtonsContainerClick}
            style={smallButtons2Style}
          >
            <div className={styles.icons16pxaddParent}>
              <img className={styles.icons16pxadd} alt="" src={'../../icons16pxadd3.svg'} />
              <div className={styles.button}>Post a job</div>
            </div>
          </div>
          <img
            className={styles.navBarChild}
            alt=""
            src={"../../ellipse-252@2x.png"}
            onClick={openAccount}
          />
          <div
            className={styles.component98}
            onClick={onComponent98ContainerClick}
          >
            <img
              className={styles.iconscalendar}
              alt=""
              src={"../../iconscalendar.svg"}
            />
            <div className={styles.home}>Bookmarks</div>
          </div>
          <div className={styles.searchBar} style={searchBar1Style}>
            <div className={styles.icons20pxsearchParent}>
              <img
                className={styles.icons20pxsearch}
                alt=""
                src={searchIconUrl}
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
                src={"../../iconslocation.svg"}
              />
              <div className={styles.trySearchingCarpenter}>Location</div>
            </div>
          </div>
        </div>
        <div className={styles.pageTitle} style={pageTitleStyle}>
          <div className={styles.merge}>
            <div
              className={styles.icon}
              onClick={onIconContainerClick}
              style={icon2Style}
            >
              <img
                className={styles.iconscalendar}
                alt=""
                src={"../../iconschevronright.svg"}
              />
            </div>
            <b className={styles.subscriptions} style={subscriptions1Style}>
              {paymentType}
            </b>
            <div className={styles.smallButtons1}>
              <div className={styles.icons16pxaddParent}>
                <img className={styles.icons16pxadd} alt="" src={addIcon4Url} />
                <div className={styles.button}>Post a job</div>
              </div>
            </div>
          </div>
          <div className={styles.border} />
        </div>
      </div>
    </div>
  );
};

export default CarpenterNavContainer;
