import { useState, useCallback } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import BusinessNameContainer from "../components/BusinessNameContainer";
import DysonContainer from "../components/DysonContainer";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import PrototypeContainer3 from "../components/PrototypeContainer3";
import styles from "./HOME6.module.css";

const HOME6 = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onFrameContainer18Click = useCallback(() => {
    navigate("/home3");
  }, [navigate]);

  const onAllContainerClick = useCallback(() => {
    navigate("/home5");
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

  return (
    <>
      <div className={styles.home}>
        <BusinessNameContainer
          starIconUrl="../icons16pxstar.svg"
          starIconUrl2="../icons16pxstar.svg"
          placeholderIconUrl="../icons16pxstar.svg"
          star4IconUrl="../icons16pxstar.svg"
          star4IconUrl2="../icons16pxstar4.svg"
          placeholder2IconUrl="icons20pxplaceholder272.svg"
          placeholder2IconUrl2="icons20pxplaceholder272.svg"
        />
        <DysonContainer
          avatarSvgUrl="avatar160.svg"
          guaranteeSvgUrl="../guarantee-11.svg"
          groupSvgUrl="../group-669671.svg"
          vectorSvgUrl="../group-669501.svg"
          iconsSvgUrl="../vector-391.svg"
          avatarSvgUrl157="avatar161.svg"
          iconsSvgUrl16pxstar="icons16pxstar78.svg"
          iconsSvgUrl16pxstar3="icons16pxstar78.svg"
          iconsSvgUrl16pxstar78="icons16pxstar78.svg"
          iconsSvgUrl16pxstar32="icons16pxstar78.svg"
          iconsSvgUrl16pxstar24="icons16pxstar119.svg"
          iconsSvgUrl20pxplaceholde="icons20pxplaceholder284.svg"
          avatarSvgUrl158="avatar162.svg"
          avatarCursor="pointer"
          propCursor="pointer"
          openFrame={openFrame}
          onFrameContainer18Click={onFrameContainer18Click}
          onAllContainerClick={onAllContainerClick}
        />
        <CarpenterNavContainer
          addIconUrl="icons16pxadd103.svg"
          searchIconUrl="icons20pxsearch59.svg"
          paymentType="Dyson Electricals"
          addIcon4Url="icons16pxadd103.svg"
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
          starIconUrl="../icons16pxstar3.svg"
          starIconUrl2="../icons16pxstar3.svg"
          placeholderIconUrl="../icons16pxstar3.svg"
          star4IconUrl="../icons16pxstar3.svg"
          star4IconUrl2="../icons16pxstar24.svg"
          placeholder2IconUrl="icons20pxplaceholder272.svg"
          placeholder2IconUrl2="icons20pxplaceholder272.svg"
          frame67133Top="582px"
          frame67133Display="flex"
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

export default HOME6;
