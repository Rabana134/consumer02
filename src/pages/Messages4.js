import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import ActivitiesNavContainer from "../components/ActivitiesNavContainer";
import styles from "./Messages4.module.css";

const Messages4 = () => {
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

  const onFrameContainer26Click = useCallback(() => {
    navigate("/messages1");
  }, [navigate]);

  const onFrameContainer27Click = useCallback(() => {
    navigate("/messages4");
  }, [navigate]);

  const onAllContainerClick = useCallback(() => {
    navigate("/messages4");
  }, [navigate]);

  const onAllContainer1Click = useCallback(() => {
    navigate("/messages7");
  }, [navigate]);

  const onAllContainer2Click = useCallback(() => {
    navigate("/messages8");
  }, [navigate]);

  return (
    <>
      <div className={styles.messages}>
        <div className={styles.messagesInner}>
          <div className={styles.bookingsCardParent}>
            <div className={styles.bookingsCard}>
              <div className={styles.avatarParent}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="../avatar96.svg"
                />
                <div className={styles.frameParent}>
                  <div className={styles.peoplenameParent}>
                    <div className={styles.peoplename}>Dyson Electricals</div>
                    <div className={styles.d}>1d</div>
                  </div>
                  <div className={styles.reviewForJamesBowenParent}>
                    <div className={styles.reviewForJamesContainer}>
                      <span className={styles.reviewForJamesContainer1}>
                        <span>{`Review for `}</span>
                        <span className={styles.dysonElectricals}>
                          Dyson Electricals
                        </span>
                      </span>
                    </div>
                    <div className={styles.starRating}>
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src="../icons16pxstar430.svg"
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src="../icons16pxstar430.svg"
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src="../icons16pxstar430.svg"
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src="../icons16pxstar430.svg"
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src="../icons16pxstar434.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.imagesParent}>
                <div className={styles.images}>
                  <img
                    className={styles.imagesChild}
                    alt=""
                    src="../rectangle-12073@2x.png"
                  />
                  <img
                    className={styles.imagesChild}
                    alt=""
                    src="../rectangle-12074@2x.png"
                  />
                  <img
                    className={styles.imagesChild}
                    alt=""
                    src="../rectangle-12075@2x.png"
                  />
                </div>
                <div className={styles.youveHeardThis}>
                  You've heard this before — the rate of technological change is
                  accelerating. It's unpredictable and unprecedented. As the
                  World Economic Forum acknowledged in its Future of Jobs
                  report, we’re entering a fourth industrial revolution:
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.viewsLikes}>
                  <div className={styles.frameGroup}>
                    <div className={styles.iconseyeParent}>
                      <img
                        className={styles.iconseye}
                        alt=""
                        src="../iconseye1.svg"
                      />
                      <div className={styles.div}>34</div>
                    </div>
                    <div className={styles.iconseyeParent}>
                      <img
                        className={styles.iconseye}
                        alt=""
                        src="../iconseye1.svg"
                      />
                      <div className={styles.div}>34</div>
                    </div>
                  </div>
                  <img
                    className={styles.iconseye}
                    alt=""
                    src="../iconseye1.svg"
                  />
                </div>
                <div className={styles.bottomChild} />
              </div>
            </div>
            <div className={styles.bookingsCard}>
              <div className={styles.avatarGroup}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="../avatar97.svg"
                />
                <div className={styles.frameParent}>
                  <div className={styles.peoplenameParent}>
                    <div className={styles.peoplename1}>Chicago Brewery</div>
                    <div className={styles.d1}>1d</div>
                  </div>
                  <div className={styles.reviewForJamesBowenParent}>
                    <div className={styles.reviewForJamesContainer}>
                      <span className={styles.reviewForJamesContainer1}>
                        <span>{`Review for `}</span>
                        <span
                          className={styles.dysonElectricals}
                        >{`Daya & Sons`}</span>
                      </span>
                    </div>
                    <div className={styles.starRating}>
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src="../icons16pxstar430.svg"
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src="../icons16pxstar430.svg"
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src="../icons16pxstar430.svg"
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src="../icons16pxstar430.svg"
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src="../icons16pxstar434.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.imagesParent}>
                <div className={styles.images1}>
                  <img
                    className={styles.imagesChild}
                    alt=""
                    src="../rectangle-12073@2x.png"
                  />
                  <img
                    className={styles.imagesChild}
                    alt=""
                    src="../rectangle-12074@2x.png"
                  />
                  <img
                    className={styles.imagesChild}
                    alt=""
                    src="../rectangle-12075@2x.png"
                  />
                </div>
                <div className={styles.youveHeardThis}>
                  You've heard this before — the rate of technological change is
                  accelerating. It's unpredictable and unprecedented. As the
                  World Economic Forum acknowledged in its Future of Jobs
                  report, we’re entering a fourth industrial revolution:
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.viewsLikes}>
                  <div className={styles.frameGroup}>
                    <div className={styles.iconseyeParent}>
                      <img
                        className={styles.iconseye}
                        alt=""
                        src="../iconseye1.svg"
                      />
                      <div className={styles.div}>34</div>
                    </div>
                    <div className={styles.iconseyeParent}>
                      <img
                        className={styles.iconseye}
                        alt=""
                        src="../iconseye1.svg"
                      />
                      <div className={styles.div}>34</div>
                    </div>
                  </div>
                  <img
                    className={styles.iconseye}
                    alt=""
                    src="../iconseye1.svg"
                  />
                </div>
                <div className={styles.bottomChild} />
              </div>
            </div>
            <div className={styles.bookingsCard}>
              <div className={styles.avatarParent}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="../avatar98.svg"
                />
                <div className={styles.frameParent}>
                  <div className={styles.peoplenameParent}>
                    <div className={styles.peoplename}>Dreamcraft Ventury</div>
                    <div className={styles.d}>1d</div>
                  </div>
                  <div className={styles.reviewForJamesBowenParent}>
                    <div className={styles.reviewForJamesContainer}>
                      <span className={styles.reviewForJamesContainer1}>
                        <span>{`Review for `}</span>
                        <span className={styles.dysonElectricals}>
                          James Bowen
                        </span>
                      </span>
                    </div>
                    <div className={styles.starRating}>
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src="../icons16pxstar430.svg"
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src="../icons16pxstar430.svg"
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src="../icons16pxstar430.svg"
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src="../icons16pxstar430.svg"
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src="../icons16pxstar434.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.imagesParent}>
                <div className={styles.images}>
                  <img
                    className={styles.imagesChild}
                    alt=""
                    src="../rectangle-12073@2x.png"
                  />
                  <img
                    className={styles.imagesChild}
                    alt=""
                    src="../rectangle-12074@2x.png"
                  />
                  <img
                    className={styles.imagesChild}
                    alt=""
                    src="../rectangle-12075@2x.png"
                  />
                </div>
                <div className={styles.youveHeardThis}>
                  You've heard this before — the rate of technological change is
                  accelerating. It's unpredictable and unprecedented. As the
                  World Economic Forum acknowledged in its Future of Jobs
                  report, we’re entering a fourth industrial revolution:
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.viewsLikes}>
                  <div className={styles.frameGroup}>
                    <div className={styles.iconseyeParent}>
                      <img
                        className={styles.iconseye}
                        alt=""
                        src="../iconseye1.svg"
                      />
                      <div className={styles.div}>34</div>
                    </div>
                    <div className={styles.iconseyeParent}>
                      <img
                        className={styles.iconseye}
                        alt=""
                        src="../iconseye1.svg"
                      />
                      <div className={styles.div}>34</div>
                    </div>
                  </div>
                  <img
                    className={styles.iconseye}
                    alt=""
                    src="../iconseye1.svg"
                  />
                </div>
                <div className={styles.bottomInner} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.title}>
          <div className={styles.bookingTabMain}>
            <div className={styles.twoTabSwitch}>
              <div
                className={styles.tab1Wrapper}
                onClick={onFrameContainer26Click}
              >
                <div className={styles.tab1}>Bookings</div>
              </div>
              <div
                className={styles.tab2Wrapper}
                onClick={onFrameContainer27Click}
              >
                <div className={styles.tab2}>Review</div>
              </div>
            </div>
          </div>
          <div className={styles.reviewSubTab}>
            <div className={styles.tabSwitch}>
              <div className={styles.tabSwitchChild} />
              <div className={styles.all} onClick={onAllContainerClick}>
                <div className={styles.booking}>Reviews</div>
              </div>
              <div className={styles.all1} onClick={onAllContainer1Click}>
                <div className={styles.booking1}>{`Question & Answers`}</div>
              </div>
              <div className={styles.all2} onClick={onAllContainer2Click}>
                <div className={styles.booking1}>Comments</div>
              </div>
            </div>
          </div>
        </div>
        <CarpenterNavContainer
          addIconUrl="icons16pxadd96.svg"
          searchIconUrl="icons20pxsearch55.svg"
          paymentType="Bookings"
          addIcon4Url="icons16pxadd96.svg"
          propDisplay2="unset"
          propCursor="unset"
          propDisplay4="none"
          onSmallButtonsContainerClick={onSmallButtonsContainerClick}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
        />
        <ActivitiesNavContainer
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

export default Messages4;
