import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import PrototypeContainer1 from "../components/PrototypeContainer1";
import styles from "./HowToEarnPoints.module.css";

const HowToEarnPoints = () => {
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);

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
      <div className={styles.howToEarnPoints}>
        <div className={styles.howToEarnPointsInner}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../mask-group.svg"
                />
                <b className={styles.earnLoggPoints}>Earn Logg Points</b>
              </div>
              <div className={styles.collectingLoggPoints}>
                Collecting Logg points is easy. The more you use the Loggworks
                app, the more you earn. Accumlation of your points are
                automatically redeemed in Logg cash.
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.howEasyItIsToEarnPointsParent}>
                  <div className={styles.howEasyIt}>
                    How easy it is to earn points?
                  </div>
                  <div className={styles.theMoreYou}>
                    The more you use, your chances of winning. Here are someways
                    you can earn points.
                  </div>
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.howEasyItIsToEarnPointsParent}>
                    <div className={styles.points}>Points</div>
                    <div className={styles.every150Container}>
                      <p className={styles.blankLine}>10 Every 1$</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine}>50</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine}>10</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine}>50</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.verifyYourProfile}>50</p>
                    </div>
                  </div>
                  <div className={styles.howEasyItIsToEarnPointsParent}>
                    <div className={styles.points}>Actions</div>
                    <div className={styles.bookAServiceContainer}>
                      <p className={styles.blankLine}>Book a service</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine}>Write a review</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine}>
                        Upload photo with your review
                      </p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine}>
                        Share our app on Social media
                      </p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.verifyYourProfile}>
                        Verify your profile via Social media
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.howEasyItIsToEarnPointsParent}>
                <div className={styles.howDoI}>How do I use my points?</div>
                <div className={styles.collectingLoggPoints}>
                  Your points are automatically redeemed for Logcash
                </div>
              </div>
              <div className={styles.howEasyItIsToEarnPointsParent}>
                <div className={styles.howDoI}>Do my points expire?</div>
                <div className={styles.collectingLoggPoints}>
                  No, points don’t expire
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.howEasyItIsToEarnPointsParent}>
                  <div className={styles.howEasyIt}>The Levels</div>
                  <div className={styles.theMoreYou}>
                    To level up, earn points by completing your profile,
                    referring a business, social account verification, rating,
                    sharing the app on your social accounts and completing a job
                  </div>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.howEasyItIsToEarnPointsParent}>
                    <div className={styles.points}>Points</div>
                    <div className={styles.div}>
                      <p className={styles.blankLine}>1000</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine}>2000</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine}>3000</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine}>4000</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine}>5000</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine}>6000</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.verifyYourProfile}>7000</p>
                    </div>
                  </div>
                  <div className={styles.howEasyItIsToEarnPointsParent}>
                    <div className={styles.points}>Type</div>
                    <div className={styles.rookieIntermediateSkilledContainer}>
                      <p className={styles.blankLine}>Rookie</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine}>Intermediate</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine}>Skilled</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine}>Semi Pro</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine}>Professional</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine}>Legendary</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.verifyYourProfile}>Ambassador</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CarpenterNavContainer
          addIconUrl="icons16pxadd132.svg"
          searchIconUrl="icons20pxsearch75.svg"
          paymentType="How to Earn Points"
          addIcon4Url="icons16pxadd133.svg"
          propDisplay2="unset"
          propCursor="unset"
          onSmallButtonsContainerClick={onSmallButtonsContainerClick}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
        />
        <PrototypeContainer1
          frameImageUrl="frame-6652278.svg"
          iconImageUrl="iconshome77.svg"
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

export default HowToEarnPoints;
