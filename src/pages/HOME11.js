import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import DysonCard from "../components/DysonCard";
import PrototypeContainer from "../components/PrototypeContainer";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import styles from "./HOME11.module.css";

const HOME11 = () => {
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);

  const onFrameContainer10Click = useCallback(() => {
    navigate("/home11");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/home12");
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

  return (
    <>
      <div className={styles.home}>
        <DysonCard
          avatarImageUrl="../avatar68.svg"
          radioButtonImageUrl="radio-btn1.svg"
          iconImageUrl="icons20pxplaceholder10.svg"
          paymentOptionText="Pay Now"
          iconPlaceholderImageUrl="icons20pxplaceholder10.svg"
          paypalImageUrl="../paypal-26.svg"
          radioBTNCursor="pointer"
          radioBTNCursor1="pointer"
          icons20pxPlaceholderCursor="unset"
          onFrameContainer10Click={onFrameContainer10Click}
          onFrameContainer12Click={onFrameContainer12Click}
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

export default HOME11;
