import { useState, useCallback } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import DysonForm from "../components/DysonForm";
import DistanceContainer from "../components/DistanceContainer";
import SkillTagContainer from "../components/SkillTagContainer";
import ReviewsContainer from "../components/ReviewsContainer";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import BusinessNameContainer from "../components/BusinessNameContainer";
import PrototypeContainer3 from "../components/PrototypeContainer3";
import styles from "./HOME3.module.css";

const HOME3 = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

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

  const onFrameContainer15Click = useCallback(() => {
    navigate("/home5");
  }, [navigate]);

  return (
    <>
      <div className={styles.home}>
        <div className={styles.div} />
        <div className={styles.div1} />
        <div className={styles.homeInner}>
          <div className={styles.imgContainerParent}>
            <div className={styles.imgContainer}>
              <img
                className={styles.imgContainerChild}
                alt=""
                src="../frame-67185.svg"
              />
              <img
                className={styles.imgContainerItem}
                alt=""
                src="../frame-67186.svg"
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
            <div className={styles.frameParent}>
              <DysonForm
                avatarImageUrl="../avatar186.svg"
                guaranteeImageUrl="../guarantee-14.svg"
                groupImageUrl="../group-669674.svg"
                vectorImageUrl="../group-669504.svg"
                vectorImageUrl2="../vector-394.svg"
                propCursor="pointer"
                openFrame={openFrame}
              />
              <div className={styles.twoTabSwitchParent}>
                <div className={styles.twoTabSwitch}>
                  <div className={styles.tab1Wrapper}>
                    <div className={styles.tab1}>Profile</div>
                  </div>
                  <div
                    className={styles.tab2Wrapper}
                    onClick={onFrameContainer15Click}
                  >
                    <div className={styles.tab2}>Promotion</div>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <DistanceContainer />
                  <div className={styles.serviceDescriptionParent}>
                    <div className={styles.serviceDescription}>
                      Service Description
                    </div>
                    <div className={styles.dysonElectricalsIs}>
                      Dyson Electricals is a firm that performs specialized
                      construction work related to the design, installation, and
                      maintenance of electrical systems. ... Electricians may
                      work for an electrical contractor, or directly for
                      individuals or companies.
                    </div>
                  </div>
                  <SkillTagContainer
                    svgImageUrl="../x.svg"
                    svgImageText="../x.svg"
                    svgImageAltText="../x.svg"
                    svgImageSource="../x.svg"
                    svgImageDescription="../x.svg"
                    svgImagePath="../x.svg"
                  />
                  <ReviewsContainer
                    svgImageUrl="../group-66649.svg"
                    avatarImageUrl="../avatar116.svg"
                    starImageUrl="icons16pxstar78.svg"
                    star78ImageUrl="icons16pxstar78.svg"
                    star119ImageUrl="icons16pxstar78.svg"
                    star78ImageUrl2="icons16pxstar78.svg"
                    star119ImageUrl2="icons16pxstar119.svg"
                    avatar116ImageUrl="../avatar116.svg"
                    star78ImageUrl3="icons16pxstar78.svg"
                    star78ImageUrl4="icons16pxstar78.svg"
                    star78Count="icons16pxstar78.svg"
                    star78Count2="icons16pxstar78.svg"
                    star119Count="icons16pxstar119.svg"
                    group66678ImageUrl="../group-66678.svg"
                    group66679ImageUrl="../group-66679.svg"
                    group66680ImageUrl="../group-66680.svg"
                    group666781ImageUrl="../group-666781.svg"
                    group666791ImageUrl="../group-666791.svg"
                    group666801ImageUrl="../group-666801.svg"
                  />
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
        <PrototypeContainer3
          frameImageUrl="../frame-66522.svg"
          iconImageUrl="iconshome73.svg"
          onDefaultContainerClick={onDefaultContainerClick}
          onDefaultContainer1Click={onDefaultContainer1Click}
          onDefaultContainer2Click={onDefaultContainer2Click}
          onDefaultContainer3Click={onDefaultContainer3Click}
        />
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent5 onClose={closeFrame} />
        </PortalPopup>
      )}
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

export default HOME3;
