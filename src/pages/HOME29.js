import BlogContainer from "../components/BlogContainer";
import AppDownloaderContainer from "../components/AppDownloaderContainer";
import SectionForm from "../components/SectionForm";
import DealOfTheDayContainer from "../components/DealOfTheDayContainer";
import CarpenterContainer from "../components/CarpenterContainer";
import Header from "../components/Header";
import ActivitiesContainer from "../components/ActivitiesContainer";
import PromoContainer from "../components/PromoContainer";
import styles from "./HOME29.module.css";

const HOME29 = () => {
  return (
    <div className={styles.home}>
      <BlogContainer />
      <AppDownloaderContainer />
      <SectionForm />
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="../rectangle-12196@2x.png"
        />
        <div className={styles.content}>
          <img
            className={styles.contentChild}
            alt=""
            src="../ellipse-2534.svg"
          />
          <img
            className={styles.contentChild}
            alt=""
            src="../ellipse-2544.svg"
          />
          <img
            className={styles.contentChild}
            alt=""
            src="../ellipse-2544.svg"
          />
          <img
            className={styles.contentChild}
            alt=""
            src="../ellipse-2544.svg"
          />
          <img
            className={styles.contentChild}
            alt=""
            src="../ellipse-2544.svg"
          />
        </div>
      </div>
      <DealOfTheDayContainer
        frameSvgUrl="../frame-671239.svg"
        avatarSvgUrl="avatar254.svg"
        frameSvgUrl2="../frame-6712310.svg"
        avatarSvgUrl2="../avatar255.svg"
        frameSvgUrl3="../frame-6712311.svg"
        avatarSvgUrl3="../avatar256.svg"
        imageSvgUrl="../image51.svg"
        avatarSvgUrl4="../avatar257.svg"
        imageSvgUrl2="../image52.svg"
        avatarSvgUrl42="../avatar258.svg"
        imageSvgUrl22="../image53.svg"
        avatarSvgUrl5="../avatar259.svg"
        imageSvgUrl3="../image54.svg"
        avatarSvgUrl6="../avatar260.svg"
        imageSvgUrl4="../image55.svg"
        avatarSvgUrl7="../avatar261.svg"
        imageSvgUrl5="../image56.svg"
        avatarSvgUrl8="../avatar262.svg"
      />
      <CarpenterContainer
        iconImageUrl="iconsplaceholder76.svg"
        categoryIconImageUrl="../iconscategories19.svg"
        cleaningIconImageUrl="../iconscleaning2.svg"
        entertainmentIconImageUrl="../iconsentertainment2.svg"
        healthIconImageUrl="../iconshealth2.svg"
        propWidth="788px"
        propCursor="unset"
      />
      <Header
        iconImageUrl="icons16pxadd154.svg"
        searchIconImageUrl="icons20pxsearch85.svg"
        searchText="Try searching carpenter..."
        locationText="Location"
      />
      <ActivitiesContainer
        frameImageUrl="frame-6652278.svg"
        iconImageUrl="iconshome79.svg"
      />
      <PromoContainer
        avatarImageUrl="../avatar263.svg"
        avatarImageUrls="../avatar264.svg"
        avatarImageUrlsList="../avatar265.svg"
        avatarImageUrlsRange="../avatar266.svg"
        avatarImageUrlsRange267to="../avatar267.svg"
        avatarImageUrlsRange268to="../avatar268.svg"
        avatarImageUrlsRange269to="../avatar269.svg"
        avatarImageUrlsRange270to="../avatar270.svg"
      />
      <div className={styles.account}>
        <div className={styles.scroll}>
          <div className={styles.logPointsParent}>
            <div className={styles.logPoints}>Log points</div>
            <div className={styles.groupParent}>
              <img
                className={styles.frameItem}
                alt=""
                src="../group-669851.svg"
              />
              <div className={styles.frameWrapper}>
                <div className={styles.parent}>
                  <b className={styles.b}>300</b>
                  <div className={styles.points}>Points</div>
                </div>
              </div>
              <div className={styles.of5000}>of 5,000</div>
            </div>
            <div className={styles.howToEarnPointsAndLevelUParent}>
              <div className={styles.howToEarn}>
                How to earn points and level up
              </div>
              <img
                className={styles.iconswarning}
                alt=""
                src="../iconswarning1.svg"
              />
            </div>
          </div>
          <div className={styles.account1}>Account</div>
          <div className={styles.settings}>Settings</div>
          <div className={styles.settingsParent}>
            <div className={styles.settings1}>
              <div className={styles.frameParent}>
                <div className={styles.iconslogCashParent}>
                  <img
                    className={styles.iconslogCash}
                    alt=""
                    src="../iconslog-cash1.svg"
                  />
                  <div className={styles.logCash}>Log cash</div>
                </div>
                <img
                  className={styles.iconslogCash}
                  alt=""
                  src="../iconschevronright68.svg"
                />
              </div>
            </div>
            <div className={styles.settings1}>
              <div className={styles.frameParent}>
                <div className={styles.iconslogCashParent}>
                  <img
                    className={styles.iconslogCash}
                    alt=""
                    src="../iconscard1.svg"
                  />
                  <div className={styles.logCash}>Payment</div>
                </div>
                <img
                  className={styles.iconslogCash}
                  alt=""
                  src="../iconschevronright68.svg"
                />
              </div>
            </div>
            <div className={styles.settings1}>
              <div className={styles.frameParent}>
                <div className={styles.iconslogCashParent}>
                  <img
                    className={styles.iconslogCash}
                    alt=""
                    src="../iconssplit-pay1.svg"
                  />
                  <div className={styles.logCash}>Split pay</div>
                </div>
                <img
                  className={styles.iconslogCash}
                  alt=""
                  src="../iconschevronright68.svg"
                />
              </div>
            </div>
            <div className={styles.settings1}>
              <div className={styles.frameParent}>
                <div className={styles.iconslogCashParent}>
                  <img
                    className={styles.iconslogCash}
                    alt=""
                    src="../iconsshare6.svg"
                  />
                  <div className={styles.logCash}>Referrals</div>
                </div>
                <img
                  className={styles.iconslogCash}
                  alt=""
                  src="../iconschevronright68.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.settingsGroup}>
            <div className={styles.settings1}>
              <div className={styles.frameParent}>
                <div className={styles.iconslogCashParent}>
                  <img
                    className={styles.iconslogCash}
                    alt=""
                    src="../iconsuser1.svg"
                  />
                  <div className={styles.logCash}>Personal</div>
                </div>
                <img
                  className={styles.iconslogCash}
                  alt=""
                  src="../iconschevronright68.svg"
                />
              </div>
            </div>
            <div className={styles.settings1}>
              <div className={styles.frameParent}>
                <div className={styles.iconslogCashParent}>
                  <img
                    className={styles.iconslogCash}
                    alt=""
                    src="../iconssecurity1.svg"
                  />
                  <div className={styles.logCash}>Security</div>
                </div>
                <img
                  className={styles.iconslogCash}
                  alt=""
                  src="../iconschevronright73.svg"
                />
              </div>
            </div>
            <div className={styles.settings7}>
              <div className={styles.frameParent}>
                <div className={styles.iconslogCashParent}>
                  <img className={styles.iconswarning} alt="" />
                  <div className={styles.logCash}>Dark Theme</div>
                </div>
                <img className={styles.iconslogCash} alt="" />
              </div>
            </div>
            <div className={styles.settings1}>
              <div className={styles.frameParent}>
                <div className={styles.iconslogCashParent}>
                  <img className={styles.iconslogCash} alt="" />
                  <div className={styles.logCash}>Notifications</div>
                </div>
                <img className={styles.iconslogCash} alt="" />
              </div>
            </div>
            <div className={styles.settings1}>
              <div className={styles.frameParent}>
                <div className={styles.iconslogCashParent}>
                  <img className={styles.iconslogCash} alt="" />
                  <div className={styles.logCash}>Help</div>
                </div>
                <img className={styles.iconslogCash} alt="" />
              </div>
            </div>
            <div className={styles.settings1}>
              <div className={styles.frameParent}>
                <div className={styles.iconslogCashParent}>
                  <img className={styles.iconslogCash} alt="" />
                  <div className={styles.logCash}>Connect social accounts</div>
                </div>
                <img className={styles.iconslogCash} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.iconslogoutParent}>
            <img className={styles.iconslogCash} alt="" />
            <div className={styles.logCash}>Logout</div>
          </div>
          <div className={styles.userInformation}>
            <div className={styles.avatarParent}>
              <img
                className={styles.avatarIcon}
                alt=""
                src="../avatar293.svg"
              />
              <div className={styles.crosbyOdennehyParent}>
                <b className={styles.crosbyOdennehy}>Crosby O'Dennehy</b>
                <div className={styles.points}>
                  Aristidedossouyovo@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HOME29;
