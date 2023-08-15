import PromotionsContainer from "../components/PromotionsContainer";
import ElectricianCard from "../components/ElectricianCard";
import styles from "./ElectriciansPromotionsContaine.module.css";

const ElectriciansPromotionsContaine = () => {
  return (
    <div className={styles.content}>
      <div className={styles.promotions}>
        <div className={styles.promotionsParent}>
          <div className={styles.promotions1}>Promotions</div>
          <div className={styles.adsWrapper}>
            <div className={styles.ads}>Ads</div>
          </div>
        </div>
        <PromotionsContainer
          companyLogoUrl="../frame-671326@2x.png"
          companyAvatarUrl="avatar15.svg"
          companyName="Cross Technological Enterprises"
          companyLogoImageUrl="../frame-671327@2x.png"
          companyAvatarSvgUrl="avatar16.svg"
          companyName1="Borgin And Burkes"
          businessNameDisplay="none"
          propDisplay="none"
        />
        <PromotionsContainer
          companyLogoUrl="../frame-671328@2x.png"
          companyAvatarUrl="avatar17.svg"
          companyName="Vista Corp"
          companyLogoImageUrl="../frame-671329@2x.png"
          companyAvatarSvgUrl="avatar18.svg"
          companyName1="Hammer Industries"
        />
      </div>
      <div className={styles.dealsOffers}>
        <div className={styles.dealsAndOffers}>Deals and offers</div>
        <div className={styles.frameParent}>
          <PromotionsContainer
            companyLogoUrl="../frame-6713210@2x.png"
            companyAvatarUrl="avatar19.svg"
            companyName="Eupry"
            companyLogoImageUrl="../frame-6713211@2x.png"
            companyAvatarSvgUrl="avatar20.svg"
            companyName1="Bifrost Connect"
            businessNameDisplay="flex"
            propDisplay="flex"
          />
          <PromotionsContainer
            companyLogoUrl="../frame-6713212@2x.png"
            companyAvatarUrl="avatar21.svg"
            companyName="Ripped Fitness"
            companyLogoImageUrl="../frame-6713213@2x.png"
            companyAvatarSvgUrl="avatar22.svg"
            companyName1="The Fit Behaviour"
            businessNameDisplay="flex"
            propDisplay="flex"
          />
        </div>
      </div>
      <div className={styles.dealsOffers}>
        <div className={styles.dealsAndOffers}>All Electricians</div>
        <div className={styles.frameGroup}>
          <ElectricianCard
            restaurantImageUrl="../image9.svg"
            avatarImageUrl="avatar23.svg"
            restaurantName="Taco Two Day's"
            foodImageUrl="../image10.svg"
            avatarImageUrl2="avatar24.svg"
            momasKitchenName="Moma's Kitchen "
            tacoTwoDaysName="../image11.svg"
            avatarImageUrl1="../avatar25.svg"
            dogBrewName={`Dog & Brew`}
          />
          <ElectricianCard
            restaurantImageUrl="../image12.svg"
            avatarImageUrl="../avatar26.svg"
            restaurantName="Taco Two Day's"
            foodImageUrl="../image13.svg"
            avatarImageUrl2="../avatar27.svg"
            momasKitchenName="Moma's Kitchen "
            tacoTwoDaysName="../image14.svg"
            avatarImageUrl1="../avatar28.svg"
            dogBrewName={`Dog & Brew`}
          />
          <ElectricianCard
            restaurantImageUrl="../image15.svg"
            avatarImageUrl="../avatar29.svg"
            restaurantName="Joe's Eatery "
            foodImageUrl="../image16.svg"
            avatarImageUrl2="../avatar30.svg"
            momasKitchenName="Cal's Bike Shop"
            tacoTwoDaysName="../image17.svg"
            avatarImageUrl1="../avatar31.svg"
            dogBrewName="Carly's Thrift"
          />
        </div>
      </div>
    </div>
  );
};

export default ElectriciansPromotionsContaine;
