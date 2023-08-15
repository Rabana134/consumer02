import styles from "./NearbyContainer.module.css";

const NearbyContainer = ({
  nearbyCaregiverText,
  nearbyCaregiverImageUrl,
  nearbyRestaurantText,
  nearbyRestaurantImageUrl,
  nearbyCafeText,
  nearbyCafeImageUrl,
  nearbyBreweryText,
  nearbyBreweryImageUrl,
  nearbyTradingCompanyText,
  nearbyTradingCompanyImage,
  nearbyBikeShopText,
  nearbyBikeShopImageUrl,
  nearbyFarmText,
}) => {
  return (
    <div className={styles.babySittersNearYouParent}>
      <div className={styles.babySittersNear}>{nearbyCaregiverText}</div>
      <div className={styles.frameParent}>
        <div className={styles.professionalsParent}>
          <div className={styles.professionals}>
            <img
              className={styles.imageIcon}
              alt=""
              src={nearbyCaregiverImageUrl}
            />
            <div className={styles.description}>
              <div className={styles.descriptionInner}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameGroup}>
                    <div className={styles.avatarParent}>
                      <img
                        className={styles.avatarIcon}
                        alt=""
                        src="../avatar4.svg"
                      />
                      <div className={styles.babySittersNear}>
                        {nearbyRestaurantText}
                      </div>
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
                  <div className={styles.jobCategory}>
                    Job category | Distance
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.professionals}>
            <img
              className={styles.imageIcon}
              alt=""
              src={nearbyRestaurantImageUrl}
            />
            <div className={styles.description}>
              <div className={styles.descriptionInner}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameGroup}>
                    <div className={styles.avatarParent}>
                      <img
                        className={styles.avatarIcon}
                        alt=""
                        src="../avatar4.svg"
                      />
                      <div className={styles.babySittersNear}>
                        {nearbyCafeText}
                      </div>
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
                  <div className={styles.jobCategory}>
                    Job category | Distance
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.professionals}>
            <img className={styles.imageIcon} alt="" src={nearbyCafeImageUrl} />
            <div className={styles.description}>
              <div className={styles.descriptionInner}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameGroup}>
                    <div className={styles.avatarParent}>
                      <img
                        className={styles.avatarIcon}
                        alt=""
                        src="../avatar4.svg"
                      />
                      <div className={styles.babySittersNear}>
                        {nearbyBreweryText}
                      </div>
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
                  <div className={styles.jobCategory}>
                    Job category | Distance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.professionalsParent}>
          <div className={styles.professionals}>
            <img
              className={styles.imageIcon}
              alt=""
              src={nearbyBreweryImageUrl}
            />
            <div className={styles.description}>
              <div className={styles.descriptionInner}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameGroup}>
                    <div className={styles.avatarParent}>
                      <img
                        className={styles.avatarIcon}
                        alt=""
                        src="../avatar4.svg"
                      />
                      <div className={styles.babySittersNear}>
                        {nearbyTradingCompanyText}
                      </div>
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
                  <div className={styles.jobCategory}>
                    Job category | Distance
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.professionals}>
            <img
              className={styles.imageIcon}
              alt=""
              src={nearbyTradingCompanyImage}
            />
            <div className={styles.description}>
              <div className={styles.descriptionInner}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameGroup}>
                    <div className={styles.avatarParent}>
                      <img
                        className={styles.avatarIcon}
                        alt=""
                        src="../avatar4.svg"
                      />
                      <div className={styles.babySittersNear}>
                        {nearbyBikeShopText}
                      </div>
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
                  <div className={styles.jobCategory}>
                    Job category | Distance
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.professionals}>
            <img
              className={styles.imageIcon}
              alt=""
              src={nearbyBikeShopImageUrl}
            />
            <div className={styles.description}>
              <div className={styles.descriptionInner}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameGroup}>
                    <div className={styles.avatarParent}>
                      <img
                        className={styles.avatarIcon}
                        alt=""
                        src="../avatar4.svg"
                      />
                      <div className={styles.babySittersNear}>
                        {nearbyFarmText}
                      </div>
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
                  <div className={styles.jobCategory}>
                    Job category | Distance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearbyContainer;
