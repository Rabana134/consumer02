import BookingsCardContainer from "../components/BookingsCardContainer";
import styles from "./DysonElectricalsForm.module.css";

const DysonElectricalsForm = () => {
  return (
    <div className={styles.bookingsCardParent}>
      <BookingsCardContainer
        avatarImageUrl="../avatar175.svg"
        companyName="Dyson Electricals"
        iconImageUrl="icons20pxplaceholder272.svg"
        actionText="Mark Job as Completed"
        icon20pxImageUrl="icons20pxplaceholder301.svg"
        icon16pxImageUrl="../icons16pxstar3.svg"
        starImageUrl="../icons16pxstar3.svg"
        starRatingImageUrl="../icons16pxstar3.svg"
        starRatingText="../icons16pxstar3.svg"
        starRatingImageUrl2="../icons16pxstar24.svg"
        icons20pxPlaceholderDisplay="none"
        starRatingAlignSelf="stretch"
        starRatingDisplay="flex"
      />
      <BookingsCardContainer
        avatarImageUrl="../avatar176.svg"
        companyName="Chicago Brewery"
        iconImageUrl="icons20pxplaceholder276.svg"
        actionText="Leave a Review"
        icon20pxImageUrl="icons20pxplaceholder256.svg"
        icon16pxImageUrl="../icons16pxstar.svg"
        starImageUrl="../icons16pxstar.svg"
        starRatingImageUrl="../icons16pxstar.svg"
        starRatingText="../icons16pxstar.svg"
        starRatingImageUrl2="../icons16pxstar4.svg"
        icons20pxPlaceholderDisplay="flex"
        starRatingAlignSelf="unset"
        starRatingDisplay="none"
        starRatingWidth="558px"
      />
      <BookingsCardContainer
        avatarImageUrl="../avatar177.svg"
        companyName="Dreamcraft Ventury"
        iconImageUrl="icons20pxplaceholder272.svg"
        actionText="Mark Job as Completed"
        icon20pxImageUrl="icons20pxplaceholder301.svg"
        icon16pxImageUrl="../icons16pxstar3.svg"
        starImageUrl="../icons16pxstar3.svg"
        starRatingImageUrl="../icons16pxstar3.svg"
        starRatingText="../icons16pxstar3.svg"
        starRatingImageUrl2="../icons16pxstar24.svg"
        starRatingAlignSelf="unset"
        starRatingWidth="558px"
      />
    </div>
  );
};

export default DysonElectricalsForm;
