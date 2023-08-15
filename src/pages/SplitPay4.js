import AppDownloaderContainer from "../components/AppDownloaderContainer";
import SectionForm from "../components/SectionForm";
import ActivitiesContainer from "../components/ActivitiesContainer";
import Header from "../components/Header";
import SplitPayContainer from "../components/SplitPayContainer";
import styles from "./SplitPay4.module.css";

const SplitPay4 = () => {
  return (
    <div className={styles.splitPay}>
      <div className={styles.blog}>
        <div className={styles.blogChild} />
        <div className={styles.blogPost}>
          <img
            className={styles.blogPostChild}
            alt=""
            src="../rectangle-11919@2x.png"
          />
          <div className={styles.blogTitledate}>
            <div className={styles.howToKnow}>How to know a good painter</div>
            <div className={styles.feb122022}>{`Feb 12, 2022 | 15 mins `}</div>
          </div>
        </div>
        <div className={styles.component21}>
          <img
            className={styles.component21Child}
            alt=""
            src="../rectangle-119191@2x.png"
          />
          <div className={styles.tipsForRunning}>
            7 tips for running a successful cleaning service company
          </div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.groupChild}
              alt=""
              src="../ellipse-21@2x.png"
            />
            <div className={styles.loggworksParent}>
              <div className={styles.loggworks}>{`Loggworks `}</div>
              <div className={styles.feb12}>Feb 12</div>
              <div className={styles.mins}>12mins</div>
              <img className={styles.groupItem} alt="" />
              <img className={styles.groupInner} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.component22}>
          <img
            className={styles.component21Child}
            alt=""
            src="../rectangle-119191@2x.png"
          />
          <div className={styles.tipsForRunning}>
            How to know the best child care worker for your kids
          </div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.groupChild}
              alt=""
              src="../ellipse-21@2x.png"
            />
            <div className={styles.loggworksParent}>
              <div className={styles.loggworks}>{`Loggworks `}</div>
              <div className={styles.feb12}>Feb 12</div>
              <div className={styles.mins}>12mins</div>
              <img className={styles.groupItem} alt="" />
              <img className={styles.groupInner} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.visitBlogWrapper}>
          <div className={styles.visitBlog}>Visit blog</div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.checkoutOurBlogWrapper}>
            <div className={styles.checkoutOurBlog}>Checkout our blog</div>
          </div>
          <img className={styles.greenTickersIcon} alt="" />
        </div>
      </div>
      <AppDownloaderContainer />
      <SectionForm />
      <ActivitiesContainer
        frameImageUrl="../frame-66522.svg"
        iconImageUrl="iconshome53.svg"
        propHeight="911px"
      />
      <Header
        iconImageUrl="icons16pxadd96.svg"
        searchIconImageUrl="icons20pxsearch51.svg"
        searchText="Try searching carpenter..."
        locationText="Location"
      />
      <SplitPayContainer
        avatarImageUrl="../avatar138.svg"
        avatarImageUrls="../avatar139.svg"
        avatarImageUrls2="../avatar140.svg"
        avatarImageUrls3="avatar141.svg"
        paymentImageUrl="../mastercard-17.svg"
        paymentLogoUrl="../paypal-210.svg"
      />
    </div>
  );
};

export default SplitPay4;
