import styles from "./ElectricianCard.module.css";

const ElectricianCard = ({
  restaurantImageUrl,
  avatarImageUrl,
  restaurantName,
  foodImageUrl,
  avatarImageUrl2,
  momasKitchenName,
  tacoTwoDaysName,
  avatarImageUrl1,
  dogBrewName,
}) => {
  return (
    <div className={styles.professionalsParent}>
      <div className={styles.professionals}>
        <img className={styles.imageIcon} alt="" src={restaurantImageUrl} />
        <div className={styles.description}>
          <div className={styles.descriptionInner}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.avatarParent}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src={avatarImageUrl}
                  />
                  <div className={styles.businessName}>{restaurantName}</div>
                </div>
                <div className={styles.ratings}>
                  <div className={styles.starRating}>
                    <img
                      className={styles.icons16pxstar}
                      alt=""
                      src="../icons16pxstar3.svg"
                    />
                    <img
                      className={styles.icons16pxstar}
                      alt=""
                      src="../icons16pxstar3.svg"
                    />
                    <img
                      className={styles.icons16pxstar}
                      alt=""
                      src="../icons16pxstar3.svg"
                    />
                    <img
                      className={styles.icons16pxstar}
                      alt=""
                      src="../icons16pxstar3.svg"
                    />
                    <img
                      className={styles.icons16pxstar}
                      alt=""
                      src="../icons16pxstar24.svg"
                    />
                  </div>
                  <div className={styles.ratingNumber}>5.0 (300K)</div>
                </div>
              </div>
              <div className={styles.professionalsPillsParent}>
                <div className={styles.professionalsPills}>
                  <div className={styles.skills}>
                    <div className={styles.input}>Power contractors</div>
                    <img
                      className={styles.iconsclose}
                      alt=""
                      src="../iconsclose2.svg"
                    />
                  </div>
                </div>
                <div className={styles.skills}>
                  <div className={styles.input}>Industrial electrical</div>
                  <img
                    className={styles.iconsclose}
                    alt=""
                    src="../iconsclose2.svg"
                  />
                </div>
              </div>
              <div className={styles.jobCategory}>Job category | Distance</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.professionals}>
        <img className={styles.imageIcon} alt="" src={foodImageUrl} />
        <div className={styles.description}>
          <div className={styles.descriptionInner}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.avatarParent}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src={avatarImageUrl2}
                  />
                  <div className={styles.businessName}>{momasKitchenName}</div>
                </div>
                <div className={styles.ratings}>
                  <div className={styles.starRating}>
                    <img
                      className={styles.icons16pxstar}
                      alt=""
                      src="../icons16pxstar3.svg"
                    />
                    <img
                      className={styles.icons16pxstar}
                      alt=""
                      src="../icons16pxstar3.svg"
                    />
                    <img
                      className={styles.icons16pxstar}
                      alt=""
                      src="../icons16pxstar3.svg"
                    />
                    <img
                      className={styles.icons16pxstar}
                      alt=""
                      src="../icons16pxstar3.svg"
                    />
                    <img
                      className={styles.icons16pxstar}
                      alt=""
                      src="../icons16pxstar24.svg"
                    />
                  </div>
                  <div className={styles.ratingNumber}>5.0 (300K)</div>
                </div>
              </div>
              <div className={styles.professionalsPillsParent}>
                <div className={styles.professionalsPills}>
                  <div className={styles.skills}>
                    <div className={styles.input}>Power contractors</div>
                    <img
                      className={styles.iconsclose}
                      alt=""
                      src="../iconsclose2.svg"
                    />
                  </div>
                </div>
                <div className={styles.skills}>
                  <div className={styles.input}>Industrial electrical</div>
                  <img
                    className={styles.iconsclose}
                    alt=""
                    src="../iconsclose2.svg"
                  />
                </div>
              </div>
              <div className={styles.jobCategory}>Job category | Distance</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.professionals}>
        <img className={styles.imageIcon} alt="" src={tacoTwoDaysName} />
        <div className={styles.description}>
          <div className={styles.descriptionInner}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.avatarParent}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src={avatarImageUrl1}
                  />
                  <div className={styles.businessName}>{dogBrewName}</div>
                </div>
                <div className={styles.ratings}>
                  <div className={styles.starRating}>
                    <img
                      className={styles.icons16pxstar}
                      alt=""
                      src="../icons16pxstar3.svg"
                    />
                    <img
                      className={styles.icons16pxstar}
                      alt=""
                      src="../icons16pxstar3.svg"
                    />
                    <img
                      className={styles.icons16pxstar}
                      alt=""
                      src="../icons16pxstar3.svg"
                    />
                    <img
                      className={styles.icons16pxstar}
                      alt=""
                      src="../icons16pxstar3.svg"
                    />
                    <img
                      className={styles.icons16pxstar}
                      alt=""
                      src="../icons16pxstar24.svg"
                    />
                  </div>
                  <div className={styles.ratingNumber}>5.0 (300K)</div>
                </div>
              </div>
              <div className={styles.professionalsPillsParent}>
                <div className={styles.professionalsPills}>
                  <div className={styles.skills}>
                    <div className={styles.input}>Power contractors</div>
                    <img
                      className={styles.iconsclose}
                      alt=""
                      src="../iconsclose2.svg"
                    />
                  </div>
                </div>
                <div className={styles.skills}>
                  <div className={styles.input}>Industrial electrical</div>
                  <img
                    className={styles.iconsclose}
                    alt=""
                    src="../iconsclose2.svg"
                  />
                </div>
              </div>
              <div className={styles.jobCategory}>Job category | Distance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricianCard;
