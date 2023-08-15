import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import NearbyContainer from "../components/NearbyContainer";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import ChildcareContainer from "../components/ChildcareContainer";
import PrototypeContainer3 from "../components/PrototypeContainer3";
import styles from "./HOME.module.css";

const HOME = () => {
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);

  const onSmallButtonsContainer4Click = useCallback(() => {
    navigate("/messages");
  }, [navigate]);

  const openAccount = useCallback(() => {
    setAccountOpen(true);
  }, []);

  const closeAccount = useCallback(() => {
    setAccountOpen(false);
  }, []);

  const onComponent98ContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onProfessionalPillContainerClick = useCallback(() => {
    navigate("/home1");
  }, [navigate]);

  const onDefaultContainerClick = useCallback(() => {
    navigate("/home1");
  }, [navigate]);

  const onDefaultContainer1Click = useCallback(() => {
    navigate("/messages1");
  }, [navigate]);

  const onDefaultContainer2Click = useCallback(() => {
    navigate("/home2");
  }, [navigate]);

  const onDefaultContainer3Click = useCallback(() => {
    navigate("/messages2");
  }, [navigate]);

  return (
    <>
      <div className={styles.home}>
        <div className={styles.homeInner}>
          <div className={styles.frameParent}>
            <div className={styles.dealOfTheDayParent}>
              <div className={styles.dealOfThe}>Deal of the day</div>
              <div className={styles.frameGroup}>
                <div className={styles.dealOfTheDayGroup}>
                  <div className={styles.dealOfTheDay}>
                    <img
                      className={styles.dealOfTheDayChild}
                      alt=""
                      src="../frame-67132@2x.png"
                    />
                    <div className={styles.dealOfTheDayInner}>
                      <div className={styles.frameContainer}>
                        <div className={styles.frameDiv}>
                          <div className={styles.colParent}>
                            <div className={styles.col}>
                              <div className={styles.avatarName}>
                                <img
                                  className={styles.avatarIcon}
                                  alt=""
                                  src="../avatar.svg"
                                />
                                <div className={styles.businessName}>
                                  Be Strong
                                </div>
                              </div>
                              <div className={styles.ratings}>
                                <div className={styles.starRating}>
                                  <img
                                    className={styles.icons16pxstar}
                                    alt=""
                                    src="../icons16pxstar.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar}
                                    alt=""
                                    src="../icons16pxstar.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar}
                                    alt=""
                                    src="../icons16pxstar.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar}
                                    alt=""
                                    src="../icons16pxstar4.svg"
                                  />
                                </div>
                                <div className={styles.ratingNumber}>
                                  5.0 (300K)
                                </div>
                              </div>
                            </div>
                            <div className={styles.jobCategoryWrapper}>
                              <div className={styles.ratingNumber}>
                                Job category
                              </div>
                            </div>
                          </div>
                          <div className={styles.offerParent}>
                            <div className={styles.ratingNumber}>
                              Spend $100 and get 20% off
                            </div>
                            <div className={styles.countdown}>
                              Ends in 0d:0h:0m:0s
                            </div>
                          </div>
                        </div>
                        <div className={styles.smallButtons}>
                          <div className={styles.buttonWrapper}>
                            <div className={styles.button}>Request Quote</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.dealOfTheDay}>
                    <img
                      className={styles.dealOfTheDayChild}
                      alt=""
                      src="../frame-671321@2x.png"
                    />
                    <div className={styles.dealOfTheDayInner}>
                      <div className={styles.frameContainer}>
                        <div className={styles.frameDiv}>
                          <div className={styles.colParent}>
                            <div className={styles.col}>
                              <div className={styles.avatarName}>
                                <img
                                  className={styles.avatarIcon}
                                  alt=""
                                  src="../avatar.svg"
                                />
                                <div className={styles.businessName}>
                                  Pump It Up
                                </div>
                              </div>
                              <div className={styles.ratings}>
                                <div className={styles.starRating}>
                                  <img
                                    className={styles.icons16pxstar}
                                    alt=""
                                    src="../icons16pxstar.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar}
                                    alt=""
                                    src="../icons16pxstar.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar}
                                    alt=""
                                    src="../icons16pxstar.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar}
                                    alt=""
                                    src="../icons16pxstar4.svg"
                                  />
                                </div>
                                <div className={styles.ratingNumber}>
                                  5.0 (300K)
                                </div>
                              </div>
                            </div>
                            <div className={styles.jobCategoryWrapper}>
                              <div className={styles.ratingNumber}>
                                Job category
                              </div>
                            </div>
                          </div>
                          <div className={styles.offerParent}>
                            <div className={styles.ratingNumber}>
                              Spend $100 and get 20% off
                            </div>
                            <div className={styles.countdown}>
                              Ends in 0d:0h:0m:0s
                            </div>
                          </div>
                        </div>
                        <div className={styles.smallButtons}>
                          <div className={styles.buttonWrapper}>
                            <div className={styles.button}>Request Quote</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.dealOfTheDayGroup}>
                  <div className={styles.dealOfTheDay}>
                    <img
                      className={styles.dealOfTheDayChild}
                      alt=""
                      src="../frame-671322@2x.png"
                    />
                    <div className={styles.dealOfTheDayInner}>
                      <div className={styles.frameContainer}>
                        <div className={styles.frameDiv}>
                          <div className={styles.colParent}>
                            <div className={styles.col}>
                              <div className={styles.avatarName}>
                                <img
                                  className={styles.avatarIcon}
                                  alt=""
                                  src="../avatar.svg"
                                />
                                <div className={styles.businessName}>
                                  Studio Fixx
                                </div>
                              </div>
                              <div className={styles.ratings}>
                                <div className={styles.starRating}>
                                  <img
                                    className={styles.icons16pxstar}
                                    alt=""
                                    src="../icons16pxstar.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar}
                                    alt=""
                                    src="../icons16pxstar.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar}
                                    alt=""
                                    src="../icons16pxstar.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar}
                                    alt=""
                                    src="../icons16pxstar4.svg"
                                  />
                                </div>
                                <div className={styles.ratingNumber}>
                                  5.0 (300K)
                                </div>
                              </div>
                            </div>
                            <div className={styles.jobCategoryWrapper}>
                              <div className={styles.ratingNumber}>
                                Job category
                              </div>
                            </div>
                          </div>
                          <div className={styles.offerParent}>
                            <div className={styles.ratingNumber}>
                              Spend $100 and get 20% off
                            </div>
                            <div className={styles.countdown}>
                              Ends in 0d:0h:0m:0s
                            </div>
                          </div>
                        </div>
                        <div className={styles.smallButtons}>
                          <div className={styles.buttonWrapper}>
                            <div className={styles.button}>Request Quote</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.dealOfTheDay}>
                    <img
                      className={styles.dealOfTheDayChild}
                      alt=""
                      src="../frame-671323@2x.png"
                    />
                    <div className={styles.dealOfTheDayInner}>
                      <div className={styles.frameContainer}>
                        <div className={styles.frameDiv}>
                          <div className={styles.colParent}>
                            <div className={styles.col}>
                              <div className={styles.avatarName}>
                                <img
                                  className={styles.avatarIcon}
                                  alt=""
                                  src="../avatar.svg"
                                />
                                <div className={styles.businessName}>
                                  Texas Gym
                                </div>
                              </div>
                              <div className={styles.ratings}>
                                <div className={styles.starRating}>
                                  <img
                                    className={styles.icons16pxstar}
                                    alt=""
                                    src="../icons16pxstar.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar}
                                    alt=""
                                    src="../icons16pxstar.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar}
                                    alt=""
                                    src="../icons16pxstar.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar}
                                    alt=""
                                    src="../icons16pxstar4.svg"
                                  />
                                </div>
                                <div className={styles.ratingNumber}>
                                  5.0 (300K)
                                </div>
                              </div>
                            </div>
                            <div className={styles.jobCategoryWrapper}>
                              <div className={styles.ratingNumber}>
                                Job category
                              </div>
                            </div>
                          </div>
                          <div className={styles.offerParent}>
                            <div className={styles.ratingNumber}>
                              Spend $100 and get 20% off
                            </div>
                            <div className={styles.countdown}>
                              Ends in 0d:0h:0m:0s
                            </div>
                          </div>
                        </div>
                        <div className={styles.smallButtons}>
                          <div className={styles.buttonWrapper}>
                            <div className={styles.button}>Request Quote</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.dealOfTheDayParent}>
              <div className={styles.dealOfThe}>Offers</div>
              <div className={styles.frameWrapper}>
                <div className={styles.dealOfTheDayGroup}>
                  <div className={styles.offers1}>
                    <img
                      className={styles.offersChild}
                      alt=""
                      src="../frame-67123.svg"
                    />
                    <div className={styles.businessNameAndAvatarParent}>
                      <div className={styles.frameParent8}>
                        <div className={styles.frameParent8}>
                          <div className={styles.businessNameAndAvatarParent}>
                            <div className={styles.businessNameAndAvatar}>
                              <img
                                className={styles.avatarIcon4}
                                alt=""
                                src="../avatar4.svg"
                              />
                              <div
                                className={styles.businessName}
                              >{`Moma's Kitchen `}</div>
                            </div>
                            <div className={styles.ratings4}>
                              <div className={styles.starRating}>
                                <img
                                  className={styles.icons16pxstar3}
                                  alt=""
                                  src="../icons16pxstar3.svg"
                                />
                                <img
                                  className={styles.icons16pxstar3}
                                  alt=""
                                  src="../icons16pxstar3.svg"
                                />
                                <img
                                  className={styles.icons16pxstar3}
                                  alt=""
                                  src="../icons16pxstar3.svg"
                                />
                                <img
                                  className={styles.icons16pxstar3}
                                  alt=""
                                  src="../icons16pxstar3.svg"
                                />
                                <img
                                  className={styles.icons16pxstar3}
                                  alt=""
                                  src="../icons16pxstar24.svg"
                                />
                              </div>
                              <div className={styles.ratingNumber}>
                                5.0 (300K)
                              </div>
                            </div>
                          </div>
                          <div className={styles.jobCategory4}>
                            Job category | Distance
                          </div>
                        </div>
                        <div className={styles.offerParent2}>
                          <div className={styles.offer4}>Offer description</div>
                          <div className={styles.countdown4}>Deadline</div>
                        </div>
                      </div>
                      <div className={styles.largeButtons}>
                        <img
                          className={styles.icons20pxplaceholder}
                          alt=""
                          src="../icons20pxplaceholder.svg"
                        />
                        <b className={styles.ratingNumber}>Get quote</b>
                        <img
                          className={styles.icons20pxplaceholder}
                          alt=""
                          src="../icons20pxplaceholder.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.offers1}>
                    <img
                      className={styles.offersChild}
                      alt=""
                      src="../frame-671231.svg"
                    />
                    <div className={styles.businessNameAndAvatarParent}>
                      <div className={styles.frameParent8}>
                        <div className={styles.frameParent8}>
                          <div className={styles.businessNameAndAvatarParent}>
                            <div className={styles.businessNameAndAvatar}>
                              <img
                                className={styles.avatarIcon4}
                                alt=""
                                src="../avatar4.svg"
                              />
                              <div
                                className={styles.businessName}
                              >{`Joe's Eatery `}</div>
                            </div>
                            <div className={styles.ratings4}>
                              <div className={styles.starRating}>
                                <img
                                  className={styles.icons16pxstar3}
                                  alt=""
                                  src="../icons16pxstar3.svg"
                                />
                                <img
                                  className={styles.icons16pxstar3}
                                  alt=""
                                  src="../icons16pxstar3.svg"
                                />
                                <img
                                  className={styles.icons16pxstar3}
                                  alt=""
                                  src="../icons16pxstar3.svg"
                                />
                                <img
                                  className={styles.icons16pxstar3}
                                  alt=""
                                  src="../icons16pxstar3.svg"
                                />
                                <img
                                  className={styles.icons16pxstar3}
                                  alt=""
                                  src="../icons16pxstar24.svg"
                                />
                              </div>
                              <div className={styles.ratingNumber}>
                                5.0 (300K)
                              </div>
                            </div>
                          </div>
                          <div className={styles.jobCategory4}>
                            Job category | Distance
                          </div>
                        </div>
                        <div className={styles.offerParent2}>
                          <div className={styles.offer4}>Offer description</div>
                          <div className={styles.countdown4}>Deadline</div>
                        </div>
                      </div>
                      <div className={styles.largeButtons}>
                        <img
                          className={styles.icons20pxplaceholder}
                          alt=""
                          src="../icons20pxplaceholder2.svg"
                        />
                        <b className={styles.ratingNumber}>Get quote</b>
                        <img
                          className={styles.icons20pxplaceholder}
                          alt=""
                          src="../icons20pxplaceholder2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.offers1}>
                    <img
                      className={styles.offersChild}
                      alt=""
                      src="../frame-671232.svg"
                    />
                    <div className={styles.businessNameAndAvatarParent}>
                      <div className={styles.frameParent8}>
                        <div className={styles.frameParent8}>
                          <div className={styles.businessNameAndAvatarParent}>
                            <div className={styles.businessNameAndAvatar}>
                              <img
                                className={styles.avatarIcon4}
                                alt=""
                                src="../avatar4.svg"
                              />
                              <div className={styles.businessName}>
                                Coffee N' Go
                              </div>
                            </div>
                            <div className={styles.ratings4}>
                              <div className={styles.starRating}>
                                <img
                                  className={styles.icons16pxstar3}
                                  alt=""
                                  src="../icons16pxstar3.svg"
                                />
                                <img
                                  className={styles.icons16pxstar3}
                                  alt=""
                                  src="../icons16pxstar3.svg"
                                />
                                <img
                                  className={styles.icons16pxstar3}
                                  alt=""
                                  src="../icons16pxstar3.svg"
                                />
                                <img
                                  className={styles.icons16pxstar3}
                                  alt=""
                                  src="../icons16pxstar3.svg"
                                />
                                <img
                                  className={styles.icons16pxstar3}
                                  alt=""
                                  src="../icons16pxstar24.svg"
                                />
                              </div>
                              <div className={styles.ratingNumber}>
                                5.0 (300K)
                              </div>
                            </div>
                          </div>
                          <div className={styles.jobCategory4}>
                            Job category | Distance
                          </div>
                        </div>
                        <div className={styles.offerParent2}>
                          <div className={styles.offer4}>Offer description</div>
                          <div className={styles.countdown4}>Deadline</div>
                        </div>
                      </div>
                      <div className={styles.largeButtons}>
                        <img
                          className={styles.icons20pxplaceholder}
                          alt=""
                          src="../icons20pxplaceholder2.svg"
                        />
                        <b className={styles.ratingNumber}>Get quote</b>
                        <img
                          className={styles.icons20pxplaceholder}
                          alt=""
                          src="../icons20pxplaceholder2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NearbyContainer
              nearbyCaregiverText="Baby sitters near you"
              nearbyCaregiverImageUrl="../image27.svg"
              nearbyRestaurantText="Taco Two Day's"
              nearbyRestaurantImageUrl="../image28.svg"
              nearbyCafeText="Moma's Kitchen "
              nearbyCafeImageUrl="../image29.svg"
              nearbyBreweryText={`Dog & Brew`}
              nearbyBreweryImageUrl="../image30.svg"
              nearbyTradingCompanyText="Brighton Early"
              nearbyTradingCompanyImage="../image31.svg"
              nearbyBikeShopText="Cal's Bike Shop"
              nearbyBikeShopImageUrl="../image32.svg"
              nearbyFarmText="Guac and Roll"
            />
            <NearbyContainer
              nearbyCaregiverText="Child minders near you"
              nearbyCaregiverImageUrl="../image33.svg"
              nearbyRestaurantText="Chicago Brewery"
              nearbyRestaurantImageUrl="../image34.svg"
              nearbyCafeText="Farm Door "
              nearbyCafeImageUrl="../image35.svg"
              nearbyBreweryText="Coffee N' Go"
              nearbyBreweryImageUrl="../image36.svg"
              nearbyTradingCompanyText="Meena Commodity Trading Company"
              nearbyTradingCompanyImage="../image37.svg"
              nearbyBikeShopText="Raeesh Krishi Vyapaar"
              nearbyBikeShopImageUrl="../image38.svg"
              nearbyFarmText="Lawaniya Krishi Farm"
            />
            <NearbyContainer
              nearbyCaregiverText="Nannies near you"
              nearbyCaregiverImageUrl="../image39.svg"
              nearbyRestaurantText="VIP IMPORT EXPORT"
              nearbyRestaurantImageUrl="../image40.svg"
              nearbyCafeText="Lakhey Trading Company"
              nearbyCafeImageUrl="../image41.svg"
              nearbyBreweryText={`Jadhav Fruit & Vegetables`}
              nearbyBreweryImageUrl="../image42.svg"
              nearbyTradingCompanyText="Diamond Flake"
              nearbyTradingCompanyImage="../image43.svg"
              nearbyBikeShopText="Skipit"
              nearbyBikeShopImageUrl="../image44.svg"
              nearbyFarmText="Portchain"
            />
          </div>
        </div>
        <CarpenterNavContainer
          addIconUrl="icons16pxadd111.svg"
          searchIconUrl="icons20pxsearch59.svg"
          paymentType="Activities"
          addIcon4Url="icons16pxadd111.svg"
          propDisplay2="unset"
          propDisplay3="none"
          propCursor="unset"
          propDisplay4="none"
          onSmallButtonsContainerClick={onSmallButtonsContainer4Click}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
        />
        <div className={styles.homeChild}>
          <div className={styles.dealOfTheDayParent}>
            <div className={styles.promotionsParent}>
              <div className={styles.promotions}>Promotions</div>
              <div className={styles.adsWrapper}>
                <div className={styles.ads}>Ads</div>
              </div>
            </div>
            <div className={styles.promotions1}>
              <div className={styles.promotions2}>
                <div className={styles.imgWrapper}>
                  <img className={styles.imgIcon} alt="" src="../img@2x.png" />
                </div>
                <div className={styles.description}>
                  <div className={styles.descriptionInner}>
                    <div className={styles.frameParent17}>
                      <div className={styles.colParent}>
                        <div className={styles.businessNameAndAvatar3}>
                          <img
                            className={styles.avatarIcon4}
                            alt=""
                            src="../avatar25.svg"
                          />
                          <div className={styles.businessName}>
                            Elite Carpenters
                          </div>
                        </div>
                        <div className={styles.ratings7}>
                          <div className={styles.starRating}>
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar24.svg"
                            />
                          </div>
                          <div className={styles.ratingNumber}>5.0 (300K)</div>
                        </div>
                      </div>
                      <div className={styles.jobCategory7}>
                        Carpenrty | Distance
                      </div>
                    </div>
                  </div>
                  <div className={styles.largeButtons3}>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder2.svg"
                    />
                    <b className={styles.ratingNumber}>Get quote</b>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.promotions2}>
                <div className={styles.imgWrapper}>
                  <img className={styles.imgIcon} alt="" src="../img1@2x.png" />
                </div>
                <div className={styles.description}>
                  <div className={styles.descriptionInner}>
                    <div className={styles.frameParent17}>
                      <div className={styles.colParent}>
                        <div className={styles.businessNameAndAvatar3}>
                          <img
                            className={styles.avatarIcon4}
                            alt=""
                            src="../avatar26.svg"
                          />
                          <div className={styles.businessName}>Shop Modish</div>
                        </div>
                        <div className={styles.ratings7}>
                          <div className={styles.starRating}>
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar24.svg"
                            />
                          </div>
                          <div className={styles.ratingNumber}>5.0 (300K)</div>
                        </div>
                      </div>
                      <div className={styles.jobCategory7}>
                        Job category | Distance
                      </div>
                    </div>
                  </div>
                  <div className={styles.largeButtons3}>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder2.svg"
                    />
                    <b className={styles.ratingNumber}>Get quote</b>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.promotions2}>
                <div className={styles.imgWrapper}>
                  <img className={styles.imgIcon} alt="" src="../img2@2x.png" />
                </div>
                <div className={styles.description}>
                  <div className={styles.descriptionInner}>
                    <div className={styles.frameParent17}>
                      <div className={styles.colParent}>
                        <div className={styles.businessNameAndAvatar3}>
                          <img
                            className={styles.avatarIcon4}
                            alt=""
                            src="../avatar27.svg"
                          />
                          <div className={styles.businessName}>Shopque</div>
                        </div>
                        <div className={styles.ratings7}>
                          <div className={styles.starRating}>
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar24.svg"
                            />
                          </div>
                          <div className={styles.ratingNumber}>5.0 (300K)</div>
                        </div>
                      </div>
                      <div className={styles.jobCategory7}>
                        Job category | Distance
                      </div>
                    </div>
                  </div>
                  <div className={styles.largeButtons3}>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder2.svg"
                    />
                    <b className={styles.ratingNumber}>Get quote</b>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.promotions2}>
                <div className={styles.imgWrapper}>
                  <img className={styles.imgIcon} alt="" src="../img3@2x.png" />
                </div>
                <div className={styles.description}>
                  <div className={styles.descriptionInner}>
                    <div className={styles.frameParent17}>
                      <div className={styles.colParent}>
                        <div className={styles.businessNameAndAvatar3}>
                          <img
                            className={styles.avatarIcon4}
                            alt=""
                            src="../avatar28.svg"
                          />
                          <div className={styles.businessName}>
                            FlexPricing.com
                          </div>
                        </div>
                        <div className={styles.ratings7}>
                          <div className={styles.starRating}>
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar24.svg"
                            />
                          </div>
                          <div className={styles.ratingNumber}>5.0 (300K)</div>
                        </div>
                      </div>
                      <div className={styles.jobCategory7}>
                        Job category | Distance
                      </div>
                    </div>
                  </div>
                  <div className={styles.largeButtons3}>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder2.svg"
                    />
                    <b className={styles.ratingNumber}>Get quote</b>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.promotions2}>
                <div className={styles.imgWrapper}>
                  <img className={styles.imgIcon} alt="" src="../img4@2x.png" />
                </div>
                <div className={styles.description}>
                  <div className={styles.descriptionInner}>
                    <div className={styles.frameParent17}>
                      <div className={styles.colParent}>
                        <div className={styles.businessNameAndAvatar3}>
                          <img
                            className={styles.avatarIcon4}
                            alt=""
                            src="../avatar29.svg"
                          />
                          <div className={styles.businessName}>Shop Swank</div>
                        </div>
                        <div className={styles.ratings7}>
                          <div className={styles.starRating}>
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar24.svg"
                            />
                          </div>
                          <div className={styles.ratingNumber}>5.0 (300K)</div>
                        </div>
                      </div>
                      <div className={styles.jobCategory7}>
                        Job category | Distance
                      </div>
                    </div>
                  </div>
                  <div className={styles.largeButtons3}>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder2.svg"
                    />
                    <b className={styles.ratingNumber}>Get quote</b>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.promotions2}>
                <div className={styles.imgWrapper}>
                  <img className={styles.imgIcon} alt="" src="../img5@2x.png" />
                </div>
                <div className={styles.description}>
                  <div className={styles.descriptionInner}>
                    <div className={styles.frameParent17}>
                      <div className={styles.colParent}>
                        <div className={styles.businessNameAndAvatar3}>
                          <img
                            className={styles.avatarIcon4}
                            alt=""
                            src="../avatar30.svg"
                          />
                          <div className={styles.businessName}>Shop Drip</div>
                        </div>
                        <div className={styles.ratings7}>
                          <div className={styles.starRating}>
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar24.svg"
                            />
                          </div>
                          <div className={styles.ratingNumber}>5.0 (300K)</div>
                        </div>
                      </div>
                      <div className={styles.jobCategory7}>
                        Job category | Distance
                      </div>
                    </div>
                  </div>
                  <div className={styles.largeButtons3}>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder2.svg"
                    />
                    <b className={styles.ratingNumber}>Get quote</b>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.promotions2}>
                <div className={styles.imgWrapper}>
                  <img className={styles.imgIcon} alt="" src="../img6@2x.png" />
                </div>
                <div className={styles.description}>
                  <div className={styles.descriptionInner}>
                    <div className={styles.frameParent17}>
                      <div className={styles.colParent}>
                        <div className={styles.businessNameAndAvatar3}>
                          <img
                            className={styles.avatarIcon4}
                            alt=""
                            src="../avatar31.svg"
                          />
                          <div className={styles.businessName}>
                            Shop Misfits
                          </div>
                        </div>
                        <div className={styles.ratings7}>
                          <div className={styles.starRating}>
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar24.svg"
                            />
                          </div>
                          <div className={styles.ratingNumber}>5.0 (300K)</div>
                        </div>
                      </div>
                      <div className={styles.jobCategory7}>
                        Job category | Distance
                      </div>
                    </div>
                  </div>
                  <div className={styles.largeButtons3}>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder2.svg"
                    />
                    <b className={styles.ratingNumber}>Get quote</b>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.promotions2}>
                <div className={styles.imgWrapper}>
                  <img className={styles.imgIcon} alt="" src="../img7@2x.png" />
                </div>
                <div className={styles.description}>
                  <div className={styles.descriptionInner}>
                    <div className={styles.frameParent17}>
                      <div className={styles.colParent}>
                        <div className={styles.businessNameAndAvatar3}>
                          <img
                            className={styles.avatarIcon4}
                            alt=""
                            src="../avatar32.svg"
                          />
                          <div className={styles.businessName}>Shop Peek</div>
                        </div>
                        <div className={styles.ratings7}>
                          <div className={styles.starRating}>
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar24.svg"
                            />
                          </div>
                          <div className={styles.ratingNumber}>5.0 (300K)</div>
                        </div>
                      </div>
                      <div className={styles.jobCategory7}>
                        Job category | Distance
                      </div>
                    </div>
                  </div>
                  <div className={styles.largeButtons3}>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder2.svg"
                    />
                    <b className={styles.ratingNumber}>Get quote</b>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChildcareContainer
          iconImageUrl="../icons16pxplaceholder.svg"
          iconSvgUrl="iconsplaceholder59.svg"
          cleaningIconSvgUrl="../iconscleaning.svg"
          entertainmentIconSvgUrl="../iconsentertainment.svg"
          healthIconSvgUrl="../iconshealth.svg"
          propBackgroundColor="#fff"
          propBorder="1px solid var(--grey-801)"
          propCursor="pointer"
          propColor="#2e2e2e"
          propBackgroundColor1="#2e2e2e"
          propBorder1="1px solid var(--grey-102)"
          propColor1="#fafafa"
          onProfessionalPillContainerClick={onProfessionalPillContainerClick}
        />
        <PrototypeContainer3
          frameImageUrl="../frame-66522.svg"
          iconImageUrl="iconshome74.svg"
          onDefaultContainerClick={onDefaultContainerClick}
          onDefaultContainer1Click={onDefaultContainer1Click}
          onDefaultContainer2Click={onDefaultContainer2Click}
          onDefaultContainer3Click={onDefaultContainer3Click}
        />
      </div>
      {isAccountOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAccount}
        >
          <Account onClose={closeAccount} />
        </PortalPopup>
      )}
    </>
  );
};

export default HOME;
