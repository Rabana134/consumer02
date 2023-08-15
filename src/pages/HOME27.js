import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import DysonCardContainer from "../components/DysonCardContainer";
import PrototypeContainer from "../components/PrototypeContainer";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import PaymentSuccessContainer from "../components/PaymentSuccessContainer";
import styles from "./HOME27.module.css";

const HOME27 = () => {
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);

  const onLargeButtonsContainerClick = useCallback(() => {
    navigate("/home25");
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
    navigate("/home21");
  }, [navigate]);

  const onIconsCloseClick = useCallback(() => {
    navigate("/home25");
  }, [navigate]);

  const onLargeButtonsContainer1Click = useCallback(() => {
    navigate("/home25");
  }, [navigate]);

  return (
    <>
      <div className={styles.home}>
        <DysonCardContainer
          avatarImageUrl="../avatar33.svg"
          radioButtonImageUrl="../radio-btn.svg"
          paypalImageUrl="../paypal-2.svg"
          icons20pxPlaceholderCursor="pointer"
          onLargeButtonsContainerClick={onLargeButtonsContainerClick}
        />
        <PrototypeContainer
          frameImageUrl="frame-665223.svg"
          iconImageUrl="../iconshome2.svg"
          onDefaultContainerClick={onDefaultContainerClick}
          onDefaultContainer1Click={onDefaultContainer1Click}
          onDefaultContainer2Click={onDefaultContainer2Click}
          onDefaultContainer3Click={onDefaultContainer3Click}
        />
        <CarpenterNavContainer
          addIconUrl="../icons16pxadd4.svg"
          searchIconUrl="../icons20pxsearch3.svg"
          paymentType="Split Payment"
          addIcon4Url="../icons16pxadd4.svg"
          propDisplay1="flex"
          propDisplay2="none"
          propDisplay3="flex"
          propCursor="pointer"
          propDisplay4="flex"
          propLeft="194px"
          onSmallButtonsContainerClick={onSmallButtonsContainerClick}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
          onIconContainerClick={onIconContainerClick}
        />
        <div className={styles.overlay}>
          <PaymentSuccessContainer
            illustrationSvgUrls="../illustrations.svg"
            iconSvgUrls="icons20pxplaceholder8.svg"
            icon20pxSvgUrls="icons20pxplaceholder8.svg"
            propCursor="pointer"
            onIconsCloseClick={onIconsCloseClick}
            onLargeButtonsContainer1Click={onLargeButtonsContainer1Click}
          />
        </div>
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

export default HOME27;
