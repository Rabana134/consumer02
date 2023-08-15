import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import DysonFormContainer from "../components/DysonFormContainer";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import PrototypeContainer from "../components/PrototypeContainer";
import PaymentSuccessContainer from "../components/PaymentSuccessContainer";
import styles from "./HOME13.module.css";

const HOME13 = () => {
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

  const onLargeButtonsContainer1Click = useCallback(() => {
    navigate("/home14");
  }, [navigate]);

  return (
    <>
      <div className={styles.home}>
        <DysonFormContainer
          paymentImageUrl="../avatar66.svg"
          creditCardImageUrl="../mastercard-11.svg"
          iconImageUrl="../icons20pxplaceholder44.svg"
          placeholderImageUrl="../icons20pxplaceholder44.svg"
          paypalImageUrl="../paypal-24.svg"
        />
        <CarpenterNavContainer
          addIconUrl="icons16pxadd16.svg"
          searchIconUrl="icons20pxsearch9.svg"
          paymentType="Payment"
          addIcon4Url="icons16pxadd16.svg"
          propCursor="unset"
          onSmallButtonsContainerClick={onSmallButtonsContainerClick}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
        />
        <PrototypeContainer
          frameImageUrl="frame-665223.svg"
          iconImageUrl="../iconshome2.svg"
          onDefaultContainerClick={onDefaultContainerClick}
          onDefaultContainer1Click={onDefaultContainer1Click}
          onDefaultContainer2Click={onDefaultContainer2Click}
          onDefaultContainer3Click={onDefaultContainer3Click}
        />
        <div className={styles.overlay}>
          <PaymentSuccessContainer
            illustrationSvgUrls="../illustrations2.svg"
            iconSvgUrls="../icons20pxplaceholder22.svg"
            icon20pxSvgUrls="../icons20pxplaceholder22.svg"
            propCursor="unset"
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

export default HOME13;
