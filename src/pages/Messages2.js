import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import RNSContainer from "../components/RNSContainer";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import ActivitiesNavContainer from "../components/ActivitiesNavContainer";
import styles from "./Messages2.module.css";

const Messages2 = () => {
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

  const onFrameContainer19Click = useCallback(() => {
    navigate("/messages1");
  }, [navigate]);

  const onFrameContainer20Click = useCallback(() => {
    navigate("/messages4");
  }, [navigate]);

  const onAllContainerClick = useCallback(() => {
    navigate("/messages1");
  }, [navigate]);

  const onAllContainer1Click = useCallback(() => {
    navigate("/messages5");
  }, [navigate]);

  const onAllContainer2Click = useCallback(() => {
    navigate("/messages6");
  }, [navigate]);

  return (
    <>
      <div className={styles.messages}>
        <RNSContainer
          avatarImageUrl="../avatar178.svg"
          companyName="RNS products"
          avatarImageUrl179="../avatar179.svg"
          companyLogoUrl={`Daya & Sons `}
          icons20pxPlaceholderDisplay="none"
          bookingsCardDisplay="flex"
          icons20pxPlaceholderDisplay1="none"
        />
        <div className={styles.title}>
          <div className={styles.bookingTabMain}>
            <div className={styles.twoTabSwitch}>
              <div
                className={styles.tab1Wrapper}
                onClick={onFrameContainer19Click}
              >
                <div className={styles.tab1}>Bookings</div>
              </div>
              <div
                className={styles.tab2Wrapper}
                onClick={onFrameContainer20Click}
              >
                <div className={styles.tab2}>Review</div>
              </div>
            </div>
          </div>
          <div className={styles.bookingSubTab}>
            <div className={styles.tabSwitch}>
              <div className={styles.tabSwitchChild} />
              <div className={styles.all} onClick={onAllContainerClick}>
                <div className={styles.booking}>Current</div>
              </div>
              <div className={styles.all1} onClick={onAllContainer1Click}>
                <div className={styles.booking1}>Upcoming</div>
              </div>
              <div className={styles.all2} onClick={onAllContainer2Click}>
                <div className={styles.booking}>Past</div>
              </div>
            </div>
          </div>
        </div>
        <CarpenterNavContainer
          addIconUrl="icons16pxadd103.svg"
          searchIconUrl="icons20pxsearch58.svg"
          paymentType="Bookings"
          addIcon4Url="icons16pxadd103.svg"
          propDisplay2="unset"
          propCursor="unset"
          propDisplay4="none"
          onSmallButtonsContainerClick={onSmallButtonsContainerClick}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
        />
        <ActivitiesNavContainer
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

export default Messages2;
