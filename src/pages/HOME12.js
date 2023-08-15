import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import DysonFormContainer from "../components/DysonFormContainer";
import PrototypeContainer from "../components/PrototypeContainer";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import styles from "./HOME12.module.css";

const HOME12 = () => {
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);

  const onLargeButtonsContainerClick = useCallback(() => {
    navigate("/home13");
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
    navigate("/home7");
  }, [navigate]);

  return (
    <>
      <div className={styles.home}>
        <DysonFormContainer
          paymentImageUrl="../avatar67.svg"
          creditCardImageUrl="../mastercard-12.svg"
          iconImageUrl="icons20pxplaceholder10.svg"
          placeholderImageUrl="icons20pxplaceholder10.svg"
          paypalImageUrl="../paypal-25.svg"
          icons20pxPlaceholderCursor="pointer"
          onLargeButtonsContainerClick={onLargeButtonsContainerClick}
        />
        <PrototypeContainer
          frameImageUrl="frame-665223.svg"
          iconImageUrl="../iconshome13.svg"
          onDefaultContainerClick={onDefaultContainerClick}
          onDefaultContainer1Click={onDefaultContainer1Click}
          onDefaultContainer2Click={onDefaultContainer2Click}
          onDefaultContainer3Click={onDefaultContainer3Click}
        />
        <CarpenterNavContainer
          addIconUrl="icons16pxadd6.svg"
          searchIconUrl="../icons20pxsearch4.svg"
          paymentType="Payment"
          addIcon4Url="icons16pxadd6.svg"
          onSmallButtonsContainerClick={onSmallButtonsContainerClick}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
          onIconContainerClick={onIconContainerClick}
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

export default HOME12;
