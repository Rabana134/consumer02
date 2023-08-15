import SectionForm from "../components/SectionForm";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";
import NavigationContainer from "../components/NavigationContainer";
import styles from "./Payment.module.css";

const Payment = () => {
  return (
    <div className={styles.payment}>
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
      <div className={styles.footer}>
        <div className={styles.download}>
          <div className={styles.downloadOurApps}>Download our apps</div>
          <img className={styles.playstoreButtonIcon} alt="" />
          <img className={styles.appstoreButtonIcon} alt="" />
        </div>
        <div className={styles.footerChild} />
        <img className={styles.layer2Icon} alt="" />
        <div className={styles.frameParent}>
          <div className={styles.homeownersParent}>
            <b className={styles.homeowners}>Homeowners</b>
            <div className={styles.postAJobParent}>
              <div className={styles.postAJob}>Post a Job</div>
              <div className={styles.postAJob}>How it works</div>
              <div className={styles.postAJob}>Contact Us</div>
              <div className={styles.postAJob}>{`Help & FAQ’s`}</div>
              <div className={styles.postAJob}>User Agreement</div>
            </div>
          </div>
          <div className={styles.professionalsParent}>
            <b className={styles.homeowners}>Professionals</b>
            <div className={styles.postAJobParent}>
              <div className={styles.postAJob}>Sign Up</div>
              <div className={styles.postAJob}>How it works</div>
              <div className={styles.postAJob}>Contact Us</div>
              <div className={styles.postAJob}>{`Help & FAQ’s`}</div>
              <div className={styles.postAJob}>User Agreement</div>
            </div>
          </div>
          <div className={styles.loggworksContainer}>
            <b className={styles.homeowners}>Loggworks</b>
            <div className={styles.postAJobParent}>
              <div className={styles.postAJob}>About us</div>
              <div className={styles.postAJob}>Careers</div>
              <div className={styles.postAJob}>Partners</div>
              <div className={styles.postAJob}>Influencer program</div>
              <div className={styles.postAJob}>Blog</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.loggworks3}>
              <b className={styles.followUs}>Follow us</b>
            </div>
            <div className={styles.groupContainer}>
              <div className={styles.frameGroup}>
                <img className={styles.frameIcon} alt="" />
                <div className={styles.facebook}>Facebook</div>
              </div>
              <div className={styles.frameContainer}>
                <img className={styles.frameIcon1} alt="" />
                <div className={styles.twitter}>Twitter</div>
              </div>
              <div className={styles.groupDiv}>
                <img className={styles.frameIcon1} alt="" />
                <div className={styles.twitter}>Instagram</div>
              </div>
              <div className={styles.frameParent1}>
                <img className={styles.frameIcon1} alt="" />
                <div className={styles.twitter}>YouTube</div>
              </div>
              <div className={styles.mdilinkedinParent}>
                <img className={styles.mdilinkedinIcon} alt="" />
                <div className={styles.linkedin}>LinkedIn</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright2022LoggworkLtdAParent}>
          <div className={styles.copyright2022Loggwork}>
            ©Copyright 2022 loggwork Ltd. All Rights Reserved
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.termsOfUseParent}>
              <div className={styles.copyright2022Loggwork}>Terms of Use</div>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.termsOfUseParent}>
              <div
                className={styles.copyright2022Loggwork}
              >{`Privacy Policy `}</div>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.termsOfUseParent}>
              <div className={styles.copyright2022Loggwork}>Cookies</div>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.contactUsParent}>
              <div className={styles.copyright2022Loggwork}>Contact Us</div>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.termsOfUseParent}>
              <div className={styles.copyright2022Loggwork}>Sitemap</div>
              <div className={styles.frameChild1} />
            </div>
          </div>
        </div>
        <div className={styles.largeButtonsParent}>
          <div className={styles.largeButtons}>
            <img className={styles.icons20pxplaceholder} alt="" />
            <b className={styles.label}>Become a Professional</b>
            <img className={styles.icons20pxplaceholder} alt="" />
          </div>
          <div className={styles.largeButtons}>
            <img className={styles.icons20pxplaceholder} alt="" />
            <b className={styles.label}>Post a Job</b>
            <img className={styles.icons20pxplaceholder} alt="" />
          </div>
        </div>
      </div>
      <SectionForm />
      <Header
        iconImageUrl="../icons16pxadd.svg"
        searchIconImageUrl="../icons20pxsearch.svg"
        searchText="Try searching carpenter..."
        locationText="Location"
        propDisplay="flex"
        propBorder="1px solid var(--grey-60)"
        propColor="#a6a6a6"
        propColor1="#a6a6a6"
      />
      <CardContainer
        iconImageUrl="../iconsplaceholder.svg"
        mastercardImageUrl="../mastercard-1.svg"
        additionalIconImageUrl="../iconsadd.svg"
        additionalIconImageUrl1="../iconsadd1.svg"
      />
      <div className={styles.nav}>
        <img className={styles.navChild} alt="" src="../frame-66522.svg" />
        <div className={styles.defaultParent}>
          <div className={styles.default}>
            <div className={styles.iconshomeParent}>
              <img className={styles.iconshome} alt="" src="../iconshome.svg" />
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
          <div className={styles.default}>
            <div className={styles.iconshomeParent}>
              <img
                className={styles.iconshome}
                alt=""
                src="../iconsactivity.svg"
              />
              <div className={styles.home}>Activities</div>
            </div>
          </div>
        </div>
      </div>
      <NavigationContainer
        iconImageUrl="../icons16pxadd.svg"
        searchIconImageUrl="../icons20pxsearch.svg"
        paymentText="Payment"
        addIconImageUrl="../icons16pxadd.svg"
        propLeft="194px"
      />
    </div>
  );
};

export default Payment;
