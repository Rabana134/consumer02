import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import ReferralContainer from "../components/ReferralContainer";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import PrototypeContainer1 from "../components/PrototypeContainer1";
import styles from "./ReferEarn.module.css";

const ReferEarn = () => {
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
      <div className={styles.referEarn}>
        <div className={styles.referEarnChild} />
        <img className={styles.groupIcon} alt="" src="../group.svg" />
        <div className={styles.referYourFriendsAndEarnParent}>
          <b className={styles.referYourFriends}>
            Refer your friends and earn!
          </b>
          <img className={styles.frameChild} alt="" src="../group-66928.svg" />
          <div className={styles.frameParent}>
            <img className={styles.frameItem} alt="" src="../frame-66964.svg" />
            <div className={styles.loggpoints}>200 Loggpoints</div>
          </div>
        </div>
        <ReferralContainer />
        <CarpenterNavContainer
          addIconUrl="icons16pxadd132.svg"
          searchIconUrl="icons20pxsearch75.svg"
          paymentType="Split Pay"
          addIcon4Url="icons16pxadd133.svg"
          propDisplay2="unset"
          propDisplay3="none"
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

export default ReferEarn;
