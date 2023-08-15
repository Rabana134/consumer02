import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import NavContainer from "../components/NavContainer";
import styles from "./Messages18.module.css";

const Messages18 = () => {
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
    navigate("/messages2");
  }, [navigate]);

  const onFrameContainer27Click = useCallback(() => {
    navigate("/messages9");
  }, [navigate]);

  return (
    <>
      <div className={styles.messages}>
        <div className={styles.messagesInner}>
          <div className={styles.communityMessagesParent}>
            <div className={styles.communityMessages}>
              <div className={styles.avatarParent}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="../avatar59.svg"
                />
                <div className={styles.frameParent}>
                  <div className={styles.peoplenameParent}>
                    <div className={styles.peoplename}>Sheri Warner</div>
                    <div className={styles.d}>1d</div>
                  </div>
                  <div className={styles.reviewForJamesBowenParent}>
                    <div className={styles.reviewForJamesContainer}>
                      <span className={styles.reviewForJamesContainer1}>
                        <span>{`Review for `}</span>
                        <span className={styles.jamesBowen}>James Bowen</span>
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
                        src="../iconseye10.svg"
                      />
                      <div className={styles.div}>34</div>
                    </div>
                    <div className={styles.iconseyeParent}>
                      <img
                        className={styles.iconseye}
                        alt=""
                        src="../iconseye10.svg"
                      />
                      <div className={styles.div}>34</div>
                    </div>
                  </div>
                  <img
                    className={styles.iconseye}
                    alt=""
                    src="../iconseye10.svg"
                  />
                </div>
                <div className={styles.bottomChild} />
              </div>
            </div>
            <div className={styles.communityMessages}>
              <div className={styles.avatarParent}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="../avatar59.svg"
                />
                <div className={styles.frameParent}>
                  <div className={styles.peoplenameParent}>
                    <div className={styles.peoplename}>Sheri Warner</div>
                    <div className={styles.d}>1d</div>
                  </div>
                  <div className={styles.reviewForJamesBowenParent}>
                    <div className={styles.reviewForJamesContainer}>
                      <span className={styles.reviewForJamesContainer1}>
                        <span>{`Review for `}</span>
                        <span className={styles.jamesBowen}>James Bowen</span>
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
                        src="../iconseye10.svg"
                      />
                      <div className={styles.div}>34</div>
                    </div>
                    <div className={styles.iconseyeParent}>
                      <img
                        className={styles.iconseye}
                        alt=""
                        src="../iconseye10.svg"
                      />
                      <div className={styles.div}>34</div>
                    </div>
                  </div>
                  <img
                    className={styles.iconseye}
                    alt=""
                    src="../iconseye10.svg"
                  />
                </div>
                <div className={styles.bottomChild} />
              </div>
            </div>
            <div className={styles.communityMessages}>
              <div className={styles.avatarParent}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="../avatar59.svg"
                />
                <div className={styles.frameParent}>
                  <div className={styles.peoplenameParent}>
                    <div className={styles.peoplename}>Sheri Warner</div>
                    <div className={styles.d}>1d</div>
                  </div>
                  <div className={styles.reviewForJamesBowenParent}>
                    <div className={styles.reviewForJamesContainer}>
                      <span className={styles.reviewForJamesContainer1}>
                        <span>{`Review for `}</span>
                        <span className={styles.jamesBowen}>James Bowen</span>
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
                        src="../iconseye10.svg"
                      />
                      <div className={styles.div}>34</div>
                    </div>
                    <div className={styles.iconseyeParent}>
                      <img
                        className={styles.iconseye}
                        alt=""
                        src="../iconseye10.svg"
                      />
                      <div className={styles.div}>34</div>
                    </div>
                  </div>
                  <img
                    className={styles.iconseye}
                    alt=""
                    src="../iconseye10.svg"
                  />
                </div>
                <div className={styles.bottomChild} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.prototypeActivitesTab}>
          <div className={styles.twoTabSwitch}>
            <div
              className={styles.tab1Wrapper}
              onClick={onFrameContainer26Click}
            >
              <div className={styles.tab1}>Notifications</div>
            </div>
            <div
              className={styles.tab2Wrapper}
              onClick={onFrameContainer27Click}
            >
              <div className={styles.tab2}>Community</div>
            </div>
          </div>
        </div>
        <CarpenterNavContainer
          addIconUrl="../icons16pxadd.svg"
          searchIconUrl="../icons20pxsearch.svg"
          paymentType="Activities"
          addIcon4Url="../icons16pxadd.svg"
          propDisplay2="unset"
          propCursor="unset"
          propDisplay4="none"
          onSmallButtonsContainerClick={onSmallButtonsContainerClick}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
        />
        <NavContainer
          homeIconUrl="../iconshome.svg"
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

export default Messages18;
