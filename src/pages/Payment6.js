import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import SectionForm from "../components/SectionForm";
import CardContainer from "../components/CardContainer";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import PrototypeContainer1 from "../components/PrototypeContainer1";
import styles from "./Payment6.module.css";


const Payment6 = () => {
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
      <div className={styles.payment}>
        <SectionForm />
       
        <CardContainer
          iconImageUrl="iconsplaceholder61.svg"
          mastercardImageUrl="../mastercard-113.svg"
          additionalIconImageUrl="iconsadd67.svg"
          additionalIconImageUrl1="iconsadd68.svg"
        />
        <CarpenterNavContainer
          addIconUrl="icons16pxadd132.svg"
          searchIconUrl="icons20pxsearch85.svg"
          paymentType="Payment"
          addIcon4Url="icons16pxadd153.svg"
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

export default Payment6;
