import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import BusinessNameContainer from "../components/BusinessNameContainer";
import FrameComponent5 from "../components/FrameComponent5";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import PrototypeContainer3 from "../components/PrototypeContainer3";
import styles from "./HOME5.module.css";

const HOME5 = () => {
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);
  const [isFrameOpen, setFrameOpen] = useState(false);

  const onSmallButtonsContainerClick = useCallback(() => {
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

  const onIconContainerClick = useCallback(() => {
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

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onFrameContainer18Click = useCallback(() => {
    navigate("/home3");
  }, [navigate]);

  const onBookingContainerClick = useCallback(() => {
    navigate("/home6");
  }, [navigate]);

  return (
    <>
      <div className={styles.home}>
        <BusinessNameContainer
          starIconUrl="icons16pxstar75.svg"
          starIconUrl2="icons16pxstar75.svg"
          placeholderIconUrl="icons16pxstar75.svg"
          star4IconUrl="icons16pxstar75.svg"
          star4IconUrl2="icons16pxstar79.svg"
          placeholder2IconUrl="icons20pxplaceholder290.svg"
          placeholder2IconUrl2="icons20pxplaceholder290.svg"
        />
        <div className={styles.mergeWrapper}>
          <div className={styles.merge}>
            <div className={styles.profileHeader}>
              <div className={styles.imgContainer}>
                <img
                  className={styles.imgContainerChild}
                  alt=""
                  src="../frame-671852.svg"
                />
                <img
                  className={styles.imgContainerItem}
                  alt=""
                  src="../frame-671862.svg"
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
              <div className={styles.profileHeader}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameContainer}>
                    <div className={styles.avatarParent}>
                      <img
                        className={styles.avatarIcon}
                        alt=""
                        src="../avatar103.svg"
                      />
                      <div className={styles.frameDiv}>
                        <div className={styles.frameDiv}>
                          <div className={styles.dysonElectricalsParent}>
                            <div className={styles.dysonElectricals}>
                              Dyson Electricals
                            </div>
                            <img
                              className={styles.guarantee1Icon}
                              alt=""
                              src="../guarantee-12.svg"
                            />
                          </div>
                          <div className={styles.applianceRepair}>
                            Appliance repair
                          </div>
                        </div>
                        <div className={styles.memberSince2014}>
                          Member since 2014
                        </div>
                      </div>
                    </div>
                    <div className={styles.awards}>
                      <div className={styles.rookie} />
                      <div className={styles.rookie} />
                      <div className={styles.rookie} />
                      <div className={styles.rookie} />
                      <div className={styles.rookie} />
                      <div className={styles.rookie} />
                      <div className={styles.ambassador}>
                        <img
                          className={styles.ambassadorChild}
                          alt=""
                          src="../group-66966.svg"
                        />
                        <img
                          className={styles.ambassadorItem}
                          alt=""
                          src="../group-669672.svg"
                        />
                        <img
                          className={styles.ambassadorInner}
                          alt=""
                          src="../group-669502.svg"
                        />
                        <div className={styles.ambassador1}>Ambassador</div>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="../vector-392.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.frameParent2}>
                    <div className={styles.parent}>
                      <b className={styles.b}>4.3</b>
                      <div className={styles.ratings}>Ratings</div>
                    </div>
                    <div className={styles.parent}>
                      <b className={styles.b}>12</b>
                      <div className={styles.ratings}>Reviews</div>
                    </div>
                    <div className={styles.parent}>
                      <b className={styles.b}>23</b>
                      <div className={styles.ratings}>Jobs</div>
                    </div>
                  </div>
                </div>
                <div className={styles.largeButtonsParent}>
                  <div className={styles.largeButtons}>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder70.svg"
                    />
                    <b className={styles.label}>Get quote</b>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder70.svg"
                    />
                  </div>
                  <div className={styles.frameWrapper} onClick={openFrame}>
                    <div className={styles.shareParent}>
                      <b className={styles.share}>Share</b>
                      <img
                        className={styles.iconsshare}
                        alt=""
                        src="../iconsshare.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content1}>
              <div className={styles.title}>
                <div className={styles.twoTabSwitch}>
                  <div
                    className={styles.tab1Wrapper}
                    onClick={onFrameContainer18Click}
                  >
                    <div className={styles.tab1}>Profile</div>
                  </div>
                  <div className={styles.tab2Wrapper}>
                    <div className={styles.dysonElectricals}>Promotions</div>
                  </div>
                </div>
                <div className={styles.tabsSubSwitch}>
                  <div className={styles.allParent}>
                    <div className={styles.all}>
                      <div className={styles.booking}>Deal of the Day</div>
                    </div>
                    <div
                      className={styles.booking1}
                      onClick={onBookingContainerClick}
                    >
                      <div className={styles.booking2}>Offers</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.contentInner1}>
                <div className={styles.profilePromotionsParent}>
                  <div className={styles.profilePromotions}>
                    <img
                      className={styles.profilePromotionsChild}
                      alt=""
                      src="../frame-6713216@2x.png"
                    />
                    <div className={styles.profilePromotionsInner}>
                      <div className={styles.title}>
                        <div className={styles.avatarGroup}>
                          <img
                            className={styles.avatarIcon1}
                            alt=""
                            src="../avatar104.svg"
                          />
                          <div className={styles.businessName}>
                            Dyson Electricals
                          </div>
                        </div>
                        <div className={styles.ratings1}>
                          <div className={styles.starRating}>
                            <img
                              className={styles.guarantee1Icon}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.guarantee1Icon}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.guarantee1Icon}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.guarantee1Icon}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.guarantee1Icon}
                              alt=""
                              src="../icons16pxstar24.svg"
                            />
                          </div>
                          <div className={styles.ratingNumber}>5.0 (300K)</div>
                        </div>
                        <div className={styles.jobCategory}>Job category</div>
                        <div className={styles.offer}>
                          <span>{`Get `}</span>
                          <b>20%</b>
                          <span> off 5 weeks booking</span>
                        </div>
                        <div className={styles.countdown}>Deadline</div>
                        <div className={styles.largeButtons1}>
                          <img
                            className={styles.icons20pxplaceholder}
                            alt=""
                            src="../icons20pxplaceholder92.svg"
                          />
                          <b className={styles.ratingNumber}>Get quote</b>
                          <img
                            className={styles.icons20pxplaceholder}
                            alt=""
                            src="../icons20pxplaceholder92.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.profilePromotions}>
                    <img
                      className={styles.profilePromotionsChild}
                      alt=""
                      src="../frame-6713216@2x.png"
                    />
                    <div className={styles.profilePromotionsInner}>
                      <div className={styles.title}>
                        <div className={styles.avatarGroup}>
                          <img
                            className={styles.avatarIcon1}
                            alt=""
                            src="../avatar105.svg"
                          />
                          <div className={styles.businessName}>
                            Dyson Electricals
                          </div>
                        </div>
                        <div className={styles.ratings1}>
                          <div className={styles.starRating}>
                            <img
                              className={styles.guarantee1Icon}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.guarantee1Icon}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.guarantee1Icon}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.guarantee1Icon}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.guarantee1Icon}
                              alt=""
                              src="../icons16pxstar24.svg"
                            />
                          </div>
                          <div className={styles.ratingNumber}>5.0 (300K)</div>
                        </div>
                        <div className={styles.jobCategory}>Job category</div>
                        <div className={styles.offer}>
                          <span>{`Get `}</span>
                          <b>20%</b>
                          <span> off 5 weeks booking</span>
                        </div>
                        <div className={styles.countdown}>Deadline</div>
                        <div className={styles.largeButtons1}>
                          <img
                            className={styles.icons20pxplaceholder}
                            alt=""
                            src="../icons20pxplaceholder92.svg"
                          />
                          <b className={styles.ratingNumber}>Get quote</b>
                          <img
                            className={styles.icons20pxplaceholder}
                            alt=""
                            src="../icons20pxplaceholder92.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CarpenterNavContainer
          addIconUrl="icons16pxadd111.svg"
          searchIconUrl="icons20pxsearch59.svg"
          paymentType="Dyson Electricals"
          addIcon4Url="icons16pxadd111.svg"
          propDisplay2="unset"
          propLeft="97px"
          onSmallButtonsContainerClick={onSmallButtonsContainerClick}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
          onIconContainerClick={onIconContainerClick}
        />
        <PrototypeContainer3
          frameImageUrl="../frame-66522.svg"
          iconImageUrl="iconshome61.svg"
          onDefaultContainerClick={onDefaultContainerClick}
          onDefaultContainer1Click={onDefaultContainer1Click}
          onDefaultContainer2Click={onDefaultContainer2Click}
          onDefaultContainer3Click={onDefaultContainer3Click}
        />
        <BusinessNameContainer
          starIconUrl="icons16pxstar78.svg"
          starIconUrl2="icons16pxstar78.svg"
          placeholderIconUrl="icons16pxstar78.svg"
          star4IconUrl="icons16pxstar78.svg"
          star4IconUrl2="icons16pxstar119.svg"
          placeholder2IconUrl="icons20pxplaceholder290.svg"
          placeholder2IconUrl2="icons20pxplaceholder290.svg"
          frame67133Top="582px"
          frame67133Display="flex"
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
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent5 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default HOME5;
