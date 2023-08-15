import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import JobProgressContainer1 from "../components/JobProgressContainer1";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import PrototypeContainer1 from "../components/PrototypeContainer1";
import styles from "./Messages24.module.css";
import AddressContainer from "../components/postComp/AddressContainer";

const Messages24 = () => {
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);

  const onInputContainerClick = useCallback(() => {
    navigate("/messages21");
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
    navigate("/messages");
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
      <div className={styles.messages}>
        <JobProgressContainer1 />
        <AddressContainer
          avatarImageUrl="../avatar114.svg"
          addressText="5 Pereira Road, Birmingham, B17 9JG"
          locationText="5 Pereira Road, Birmingham, B17 9JG"
          countryText="5 Pereira Road, Birmingham, B17 9JG"
          postalCodeText="5 Pereira Road, Birmingham, B17 9JG"
          iconImageUrl="../icons20pxplaceholder34.svg"
          iconImageUrl20px="../icons20pxplaceholder34.svg"
          ellipse251Cursor="pointer"
          ellipse254Border="1px solid var(--grey-70)"
          ellipse256Display="none"
          ellipse256Display1="none"
          ellipse256Display2="none"
          ellipse256Display3="none"
          propBackgroundColor="1px solid #ccc"
          propCursor="unset"
          propColor="#5e5e5e"
          onInputContainerClick={onInputContainerClick}
        />
        <CarpenterNavContainer
          addIconUrl="../icons16pxadd.svg"
          searchIconUrl="../icons20pxsearch.svg"
          paymentType="Post a Job"
          addIcon4Url="../icons16pxadd.svg"
          propDisplay1="none"
          onSmallButtonsContainerClick={onSmallButtonsContainerClick}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
          onIconContainerClick={onIconContainerClick}
        />
        <PrototypeContainer1
          frameImageUrl="../frame-66522.svg"
          iconImageUrl="../iconshome.svg"
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

export default Messages24;
