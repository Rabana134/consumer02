import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import PrototypeContainer3 from "../components/PrototypeContainer3";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import styles from "./HOME1.module.css";

const HOME1 = () => {
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);

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

  return (
    <>
      <div className={styles.home}>
        <div className={styles.homeInner}>
          <div className={styles.offersParent}>
            <div className={styles.offers}>
              <img
                className={styles.offersChild}
                alt=""
                src="../frame-671233.svg"
              />
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameGroup}>
                    <div className={styles.frameParent}>
                      <div className={styles.businessNameAndAvatar}>
                        <img
                          className={styles.avatarIcon}
                          alt=""
                          src="../avatar55.svg"
                        />
                        <div className={styles.businessName}>
                          Fruit and Vegetable Supplyers
                        </div>
                      </div>
                      <div className={styles.ratings}>
                        <div className={styles.starRating}>
                          <img
                            className={styles.icons16pxstar}
                            alt=""
                            src="../icons16pxstar250.svg"
                          />
                          <img
                            className={styles.icons16pxstar}
                            alt=""
                            src="../icons16pxstar250.svg"
                          />
                          <img
                            className={styles.icons16pxstar}
                            alt=""
                            src="../icons16pxstar250.svg"
                          />
                          <img
                            className={styles.icons16pxstar}
                            alt=""
                            src="../icons16pxstar250.svg"
                          />
                          <img
                            className={styles.icons16pxstar}
                            alt=""
                            src="../icons16pxstar254.svg"
                          />
                        </div>
                        <div className={styles.ratingNumber}>5.0 (300K)</div>
                      </div>
                    </div>
                    <div className={styles.jobCategory}>
                      Job category | Distance
                    </div>
                  </div>
                  <div className={styles.offerParent}>
                    <div className={styles.offer}>Offer description</div>
                    <div className={styles.countdown}>Deadline</div>
                  </div>
                </div>
                <div className={styles.largeButtons}>
                  <img
                    className={styles.icons20pxplaceholder}
                    alt=""
                    src="../icons20pxplaceholder38.svg"
                  />
                  <b className={styles.ratingNumber}>Get quote</b>
                  <img
                    className={styles.icons20pxplaceholder}
                    alt=""
                    src="../icons20pxplaceholder38.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.offers}>
              <img
                className={styles.offersChild}
                alt=""
                src="../frame-671234.svg"
              />
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameGroup}>
                    <div className={styles.frameParent}>
                      <div className={styles.businessNameAndAvatar}>
                        <img
                          className={styles.avatarIcon}
                          alt=""
                          src="../avatar56.svg"
                        />
                        <div className={styles.businessName}>
                          Lakhey Trading Company
                        </div>
                      </div>
                      <div className={styles.ratings}>
                        <div className={styles.starRating}>
                          <img
                            className={styles.icons16pxstar}
                            alt=""
                            src="../icons16pxstar250.svg"
                          />
                          <img
                            className={styles.icons16pxstar}
                            alt=""
                            src="../icons16pxstar250.svg"
                          />
                          <img
                            className={styles.icons16pxstar}
                            alt=""
                            src="../icons16pxstar250.svg"
                          />
                          <img
                            className={styles.icons16pxstar}
                            alt=""
                            src="../icons16pxstar250.svg"
                          />
                          <img
                            className={styles.icons16pxstar}
                            alt=""
                            src="../icons16pxstar254.svg"
                          />
                        </div>
                        <div className={styles.ratingNumber}>5.0 (300K)</div>
                      </div>
                    </div>
                    <div className={styles.jobCategory}>
                      Job category | Distance
                    </div>
                  </div>
                  <div className={styles.offerParent}>
                    <div className={styles.offer}>Offer description</div>
                    <div className={styles.countdown}>Deadline</div>
                  </div>
                </div>
                <div className={styles.largeButtons}>
                  <img
                    className={styles.icons20pxplaceholder}
                    alt=""
                    src="../icons20pxplaceholder38.svg"
                  />
                  <b className={styles.ratingNumber}>Get quote</b>
                  <img
                    className={styles.icons20pxplaceholder}
                    alt=""
                    src="../icons20pxplaceholder38.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.offers}>
              <img
                className={styles.offersChild}
                alt=""
                src="../frame-671235.svg"
              />
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameGroup}>
                    <div className={styles.frameParent}>
                      <div className={styles.businessNameAndAvatar}>
                        <img
                          className={styles.avatarIcon}
                          alt=""
                          src="../avatar57.svg"
                        />
                        <div className={styles.businessName}>
                          VIP IMPORT EXPORT
                        </div>
                      </div>
                      <div className={styles.ratings}>
                        <div className={styles.starRating}>
                          <img
                            className={styles.icons16pxstar}
                            alt=""
                            src="../icons16pxstar250.svg"
                          />
                          <img
                            className={styles.icons16pxstar}
                            alt=""
                            src="../icons16pxstar250.svg"
                          />
                          <img
                            className={styles.icons16pxstar}
                            alt=""
                            src="../icons16pxstar250.svg"
                          />
                          <img
                            className={styles.icons16pxstar}
                            alt=""
                            src="../icons16pxstar250.svg"
                          />
                          <img
                            className={styles.icons16pxstar}
                            alt=""
                            src="../icons16pxstar254.svg"
                          />
                        </div>
                        <div className={styles.ratingNumber}>5.0 (300K)</div>
                      </div>
                    </div>
                    <div className={styles.jobCategory}>
                      Job category | Distance
                    </div>
                  </div>
                  <div className={styles.offerParent}>
                    <div className={styles.offer}>Offer description</div>
                    <div className={styles.countdown}>Deadline</div>
                  </div>
                </div>
                <div className={styles.largeButtons}>
                  <img
                    className={styles.icons20pxplaceholder}
                    alt=""
                    src="../icons20pxplaceholder38.svg"
                  />
                  <b className={styles.ratingNumber}>Get quote</b>
                  <img
                    className={styles.icons20pxplaceholder}
                    alt=""
                    src="../icons20pxplaceholder38.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <PrototypeContainer3
          frameImageUrl="frame-6652278.svg"
          iconImageUrl="iconshome79.svg"
          onDefaultContainerClick={onDefaultContainerClick}
          onDefaultContainer1Click={onDefaultContainer1Click}
          onDefaultContainer2Click={onDefaultContainer2Click}
          onDefaultContainer3Click={onDefaultContainer3Click}
        />
        <CarpenterNavContainer
          addIconUrl="icons16pxadd132.svg"
          searchIconUrl="icons20pxsearch75.svg"
          paymentType="Bookmarks"
          addIcon4Url="icons16pxadd133.svg"
          propDisplay2="unset"
          propCursor="unset"
          onSmallButtonsContainerClick={onSmallButtonsContainerClick}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
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

export default HOME1;
