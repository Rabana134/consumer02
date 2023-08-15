import ActivityContainer from "../components/ActivityContainer";
import Header from "../components/Header";
import styles from "./Messages32.module.css";

const Messages32 = () => {
  return (
    <div className={styles.messages}>
      <ActivityContainer
        iconImageUrl="icons20pxplaceholder60.svg"
        iconImageUrls="icons20pxplaceholder60.svg"
        iconImageUrls20px="icons20pxplaceholder60.svg"
        iconImageUrls20pxPlacehol="icons20pxplaceholder60.svg"
        iconImageUrls20pxPlacehol2="icons20pxplaceholder60.svg"
        iconImageUrls20pxPlacehol3="icons20pxplaceholder60.svg"
        iconImageUrls20pxPlacehol4="icons20pxplaceholder60.svg"
        iconImageUrls20pxPlacehol5="icons20pxplaceholder60.svg"
        iconImageUrls20pxPlacehol6="icons20pxplaceholder60.svg"
        iconImageUrls20pxPlacehol7="icons20pxplaceholder60.svg"
      />
      <Header
        iconImageUrl="icons16pxadd47.svg"
        searchIconImageUrl="icons20pxsearch24.svg"
        searchText="Electrician"
        locationText="Conventry"
        propBorder="1px solid var(--primary-10)"
        propDisplay2="none"
        propColor="#2e2e2e"
        propColor1="#2e2e2e"
      />
      <div className={styles.nav}>
        <img className={styles.navChild} alt="" src="../frame-66522.svg" />
        <div className={styles.defaultParent}>
          <div className={styles.default}>
            <div className={styles.iconshomeParent}>
              <img
                className={styles.iconshome}
                alt=""
                src="../iconshome32.svg"
              />
              <div className={styles.home}>Home</div>
            </div>
          </div>
          <div className={styles.default}>
            <div className={styles.iconshomeParent}>
              <img
                className={styles.iconshome}
                alt=""
                src="../iconscalendar1.svg"
              />
              <div className={styles.home}>Bookings</div>
            </div>
          </div>
          <div className={styles.default}>
            <div className={styles.iconshomeParent}>
              <img
                className={styles.iconshome}
                alt=""
                src="../iconsmessage.svg"
              />
              <div className={styles.home}>Messages</div>
            </div>
          </div>
          <div className={styles.default3}>
            <div className={styles.iconshomeParent}>
              <img
                className={styles.iconshome}
                alt=""
                src="../iconsactivity32.svg"
              />
              <div className={styles.home3}>Activities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages32;
