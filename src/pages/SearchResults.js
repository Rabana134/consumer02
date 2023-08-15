import ElectriciansPromotionsContaine from "../components/ElectriciansPromotionsContaine";
import FooterContainer from "../components/FooterContainer";
import StarRatingContainer from "../components/StarRatingContainer";
import Header1 from "../components/Header1";
import NavigationWrapper from "../components/NavigationWrapper";
import styles from "./SearchResults.module.css";

const SearchResults = () => {
  return (
    <div className={styles.searchResults}>
      <div className={styles.merge}>
        <div className={styles.merge1}>
          <div className={styles.title}>
            <div className={styles.electricians}>{`Electricians `}</div>
            <div className={styles.titleChild} />
          </div>
          <ElectriciansPromotionsContaine />
        </div>
        <div className={styles.largeButtons}>
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src="../icons20pxplaceholder32.svg"
          />
          <b className={styles.label}>Load More</b>
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src="../icons20pxplaceholder32.svg"
          />
        </div>
      </div>
      <FooterContainer />
      <div className={styles.filters}>
        <div className={styles.filtersParent}>
          <div className={styles.filters1}>Filters</div>
          <div className={styles.frameParent}>
            <StarRatingContainer
              ratingText="Star rating"
              distanceText="5 Stars"
              ratingIconUrl="../iconsstar.svg"
              ratingIconUrl2="../iconsstar.svg"
              ratingIconUrl3="../iconsstar.svg"
              ratingIconUrl4="../iconsstar.svg"
              ratingIconUrl5="../iconsstar.svg"
              ratingValue="4 Stars"
              ratingIconUrl1="../iconsstar.svg"
              distanceIconUrl="../iconsstar.svg"
              ratingIconUrl6="../iconsstar.svg"
              ratingIconUrl7="../iconsstar.svg"
              ratingIconUrl8="../iconsstar9.svg"
              ratingText1="3 Stars"
              ratingIconUrl9="../iconsstar.svg"
              ratingIconUrl10="../iconsstar.svg"
              ratingIconUrl11="../iconsstar.svg"
              ratingIconUrl12="../iconsstar9.svg"
              ratingIconUrl13="../iconsstar9.svg"
              ratingText2="2 Stars"
              ratingIconUrl14="../iconsstar.svg"
              ratingIconUrl15="../iconsstar.svg"
              ratingIconUrl16="../iconsstar9.svg"
              ratingIconUrl17="../iconsstar9.svg"
              ratingIconUrl18="../iconsstar9.svg"
              starRatingText="1 Stars"
              starRatingIconUrl="../iconsstar.svg"
              starRatingIconUrl1="../iconsstar9.svg"
              starRatingIconUrl2="../iconsstar9.svg"
              starRatingIconUrl3="../iconsstar9.svg"
              starRatingIconUrl4="../iconsstar9.svg"
              propWidth="57px"
              propFlexShrink="0"
              propDisplay="flex"
              propWidth1="57px"
              propFlexShrink1="0"
              propDisplay1="flex"
              propWidth2="57px"
              propFlexShrink2="0"
              propDisplay2="flex"
              propWidth3="57px"
              propFlexShrink3="0"
              propDisplay3="flex"
              propWidth4="57px"
              propFlexShrink4="0"
              propDisplay4="flex"
            />
            <StarRatingContainer
              ratingText="Distance"
              distanceText="10 - 20 miles"
              ratingIconUrl="../iconsstar25.svg"
              ratingIconUrl2="../iconsstar26.svg"
              ratingIconUrl3="../iconsstar26.svg"
              ratingIconUrl4="../iconsstar26.svg"
              ratingIconUrl5="../iconsstar26.svg"
              ratingValue="20 - 40 miles"
              ratingIconUrl1="../iconsstar25.svg"
              distanceIconUrl="../iconsstar26.svg"
              ratingIconUrl6="../iconsstar26.svg"
              ratingIconUrl7="../iconsstar26.svg"
              ratingIconUrl8="../iconsstar26.svg"
              ratingText1="40 - 60 miles"
              ratingIconUrl9="../iconsstar25.svg"
              ratingIconUrl10="../iconsstar26.svg"
              ratingIconUrl11="../iconsstar26.svg"
              ratingIconUrl12="../iconsstar26.svg"
              ratingIconUrl13="../iconsstar26.svg"
              ratingText2="60 - 80 miles"
              ratingIconUrl14="../iconsstar25.svg"
              ratingIconUrl15="../iconsstar26.svg"
              ratingIconUrl16="../iconsstar26.svg"
              ratingIconUrl17="../iconsstar26.svg"
              ratingIconUrl18="../iconsstar26.svg"
              starRatingText="80 - 100 miles"
              starRatingIconUrl="../iconsstar25.svg"
              starRatingIconUrl1="../iconsstar26.svg"
              starRatingIconUrl2="../iconsstar26.svg"
              starRatingIconUrl3="../iconsstar26.svg"
              starRatingIconUrl4="../iconsstar26.svg"
              propWidth="unset"
              propFlexShrink="unset"
              propDisplay="none"
              propWidth1="unset"
              propFlexShrink1="unset"
              propDisplay1="none"
              propWidth2="unset"
              propFlexShrink2="unset"
              propDisplay2="none"
              propWidth3="unset"
              propFlexShrink3="unset"
              propDisplay3="none"
              propWidth4="unset"
              propFlexShrink4="unset"
              propDisplay4="none"
            />
            <StarRatingContainer
              ratingText="Categories/Specializations"
              distanceText="Domestic/Residential"
              ratingIconUrl="../iconsstar25.svg"
              ratingIconUrl2="../iconsstar26.svg"
              ratingIconUrl3="../iconsstar26.svg"
              ratingIconUrl4="../iconsstar26.svg"
              ratingIconUrl5="../iconsstar26.svg"
              ratingValue="Commercial"
              ratingIconUrl1="../iconsstar25.svg"
              distanceIconUrl="../iconsstar26.svg"
              ratingIconUrl6="../iconsstar26.svg"
              ratingIconUrl7="../iconsstar26.svg"
              ratingIconUrl8="../iconsstar26.svg"
              ratingText1="Power contractors"
              ratingIconUrl9="../iconsstar25.svg"
              ratingIconUrl10="../iconsstar26.svg"
              ratingIconUrl11="../iconsstar26.svg"
              ratingIconUrl12="../iconsstar26.svg"
              ratingIconUrl13="../iconsstar26.svg"
              ratingText2="Industrial electric"
              ratingIconUrl14="../iconsstar25.svg"
              ratingIconUrl15="../iconsstar26.svg"
              ratingIconUrl16="../iconsstar26.svg"
              ratingIconUrl17="../iconsstar26.svg"
              ratingIconUrl18="../iconsstar26.svg"
              starRatingText="Solar installation"
              starRatingIconUrl="../iconsstar25.svg"
              starRatingIconUrl1="../iconsstar26.svg"
              starRatingIconUrl2="../iconsstar26.svg"
              starRatingIconUrl3="../iconsstar26.svg"
              starRatingIconUrl4="../iconsstar26.svg"
              propWidth="unset"
              propFlexShrink="unset"
              propDisplay="none"
              propWidth1="unset"
              propFlexShrink1="unset"
              propDisplay1="none"
              propWidth2="unset"
              propFlexShrink2="unset"
              propDisplay2="none"
              propWidth3="unset"
              propFlexShrink3="unset"
              propDisplay3="none"
              propWidth4="unset"
              propFlexShrink4="unset"
              propDisplay4="none"
            />
          </div>
        </div>
        <div className={styles.ad}>
          <div className={styles.merge2}>
            <div className={styles.text}>
              <div className={styles.doYouHave}>
                Do you have a professional service to offer?
              </div>
              <div className={styles.postAJob}>
                Post a job with your price in mind, then get offers
              </div>
            </div>
            <div className={styles.smallButtons}>
              <div className={styles.buttonWrapper}>
                <div className={styles.button}>Become a Professional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <Header1 />
        <NavigationWrapper />
      </div>
    </div>
  );
};

export default SearchResults;
