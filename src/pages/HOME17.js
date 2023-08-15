import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import MessageBox from "../components/MessageBox";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import PrototypeContainer from "../components/PrototypeContainer";
import styles from "./HOME17.module.css";

const HOME17 = () => {
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);

  const onLargeButtonsContainerClick = useCallback(() => {
    navigate("/home17");
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

  return (
    <>
      <div className={styles.home}>
        <MessageBox
          iconImageUrl="../iconsplaceholder1.svg"
          iconImageUrl20px="../icons20pxplaceholder22.svg"
          iconImageUrl20pxPlacehold="../icons20pxplaceholder22.svg"
          iconsAddCursor="pointer"
          onLargeButtonsContainerClick={onLargeButtonsContainerClick}
        />
        <CarpenterNavContainer
          addIconUrl="icons16pxadd16.svg"
          searchIconUrl="icons20pxsearch9.svg"
          paymentType="Split Payment"
          addIcon4Url="icons16pxadd16.svg"
          onSmallButtonsContainerClick={onSmallButtonsContainerClick}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
          onIconContainerClick={onIconContainerClick}
        />
        <PrototypeContainer
          frameImageUrl="frame-665223.svg"
          iconImageUrl="../iconshome2.svg"
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

export default HOME17;
