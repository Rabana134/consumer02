import BlogContainer from "../components/BlogContainer";
import AppDownloaderContainer from "../components/AppDownloaderContainer";
import SectionForm from "../components/SectionForm";
import DealOfTheDayContainer from "../components/DealOfTheDayContainer";
import CarpenterContainer from "../components/CarpenterContainer";
import Header from "../components/Header";
import ActivitiesContainer from "../components/ActivitiesContainer";
import PromoContainer from "../components/PromoContainer";
import styles from "./HOME28.module.css";

const HOME28 = () => {
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
        frameSvgUrl="../frame-6712312.svg"
        avatarSvgUrl="../avatar276.svg"
        frameSvgUrl2="../frame-6712313.svg"
        avatarSvgUrl2="../avatar277.svg"
        frameSvgUrl3="../frame-6712314.svg"
        avatarSvgUrl3="../avatar278.svg"
        imageSvgUrl="../image57.svg"
        avatarSvgUrl4="../avatar279.svg"
        imageSvgUrl2="../image58.svg"
        avatarSvgUrl42="../avatar280.svg"
        imageSvgUrl22="../image59.svg"
        avatarSvgUrl5="../avatar281.svg"
        imageSvgUrl3="../image60.svg"
        avatarSvgUrl6="../avatar282.svg"
        imageSvgUrl4="../image61.svg"
        avatarSvgUrl7="../avatar283.svg"
        imageSvgUrl5="../image62.svg"
        avatarSvgUrl8="../avatar284.svg"
      />
      <CarpenterContainer
        iconImageUrl="iconsplaceholder76.svg"
        categoryIconImageUrl="../iconscategories20.svg"
        cleaningIconImageUrl="../iconscategories21.svg"
        entertainmentIconImageUrl="../iconscategories22.svg"
        healthIconImageUrl="../iconscategories23.svg"
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
        avatarImageUrl="../avatar285.svg"
        avatarImageUrls="../avatar286.svg"
        avatarImageUrlsList="../avatar287.svg"
        avatarImageUrlsRange="../avatar288.svg"
        avatarImageUrlsRange267to="../avatar289.svg"
        avatarImageUrlsRange268to="../avatar290.svg"
        avatarImageUrlsRange269to="../avatar291.svg"
        avatarImageUrlsRange270to="../avatar292.svg"
      />
    </div>
  );
};

export default HOME28;
