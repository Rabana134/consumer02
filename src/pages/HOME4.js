import AppDownloaderContainer from "../components/AppDownloaderContainer";
import SectionForm from "../components/SectionForm";
import BackContainer from "../components/BackContainer";
import BusinessNameContainer from "../components/BusinessNameContainer";
import DysonForm from "../components/DysonForm";
import DistanceContainer from "../components/DistanceContainer";
import SkillTagContainer from "../components/SkillTagContainer";
import ReviewsContainer from "../components/ReviewsContainer";
import Header from "../components/Header";
import ActivitiesContainer from "../components/ActivitiesContainer";
import SidebarContainer from "../components/SidebarContainer";
import styles from "./HOME4.module.css";

const HOME4 = () => {
  return (
    <div className={styles.home}>
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
      <BackContainer />
      <div className={styles.iconschevronRightParent}>
        <img
          className={styles.iconschevronRight}
          alt=""
          src="../iconschevronright12.svg"
        />
        <div className={styles.back}>Back</div>
      </div>
      <div className={styles.div} />
      <div className={styles.div1} />
      <BusinessNameContainer
        starIconUrl="icons16pxstar78.svg"
        starIconUrl2="icons16pxstar78.svg"
        placeholderIconUrl="icons16pxstar78.svg"
        star4IconUrl="icons16pxstar78.svg"
        star4IconUrl2="icons16pxstar119.svg"
        placeholder2IconUrl="icons20pxplaceholder290.svg"
        placeholder2IconUrl2="icons20pxplaceholder290.svg"
        frame67133Display="flex"
      />
      <div className={styles.frameParent}>
        <DysonForm
          avatarImageUrl="../avatar181.svg"
          guaranteeImageUrl="../guarantee-13.svg"
          groupImageUrl="../group-669673.svg"
          vectorImageUrl="../group-669503.svg"
          vectorImageUrl2="../vector-393.svg"
        />
        <div className={styles.twoTabSwitchParent}>
          <div className={styles.twoTabSwitch}>
            <div className={styles.tab}>
              <div className={styles.profile}>Tab 1</div>
            </div>
            <div className={styles.tab1}>
              <div className={styles.profile1}>Tab 1</div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <DistanceContainer frameSvgUrl="../frame-66791.svg" />
            <div className={styles.serviceDescriptionParent}>
              <div className={styles.profile}>Service Description</div>
              <div className={styles.dysonElectricalsIs}>
                Dyson Electricals is a firm that performs specialized
                construction work related to the design, installation, and
                maintenance of electrical systems. ... Electricians may work for
                an electrical contractor, or directly for individuals or
                companies.
              </div>
            </div>
            <SkillTagContainer />
            <ReviewsContainer />
          </div>
        </div>
      </div>
      <Header
        iconImageUrl="icons16pxadd111.svg"
        searchIconImageUrl="icons20pxsearch59.svg"
        searchText="Try searching carpenter..."
        locationText="Location"
      />
      <ActivitiesContainer
        frameImageUrl="../frame-66522.svg"
        iconImageUrl="iconshome61.svg"
      />
      <div className={styles.overlay}>
        <SidebarContainer
          starIconUrls="icons16pxstar78.svg"
          starIconUrls2="icons16pxstar78.svg"
          starIconUrls3="icons16pxstar78.svg"
          starIconUrlsArray="icons16pxstar78.svg"
          starIconUrlsArray2="icons16pxstar119.svg"
          starIconUrlsArray3="icons16pxstar78.svg"
          starIconUrlsArray4="icons16pxstar78.svg"
          starIconUrlsArray5="icons16pxstar78.svg"
          starIconUrlsArray6="icons16pxstar78.svg"
          starIconUrlsArray7="icons16pxstar119.svg"
          starIconUrlsArray8="icons16pxstar78.svg"
          starIconUrlsArray9="icons16pxstar78.svg"
          starIconUrlsArray10="icons16pxstar78.svg"
          starIconUrlsArray11="icons16pxstar78.svg"
          starIconUrlsArray12="icons16pxstar119.svg"
          starIconUrlsArray13="icons16pxstar78.svg"
          starIconUrlsArray14="icons16pxstar78.svg"
          starIconUrlsArray15="icons16pxstar78.svg"
          starIconUrlsArray16="icons16pxstar78.svg"
          starIconUrlsArray17="icons16pxstar119.svg"
        />
      </div>
    </div>
  );
};

export default HOME4;
