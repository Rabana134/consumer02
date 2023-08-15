import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import RNSContainer from "../components/RNSContainer";
import ActivitiesNavContainer from "../components/ActivitiesNavContainer";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import styles from "./Messages1.module.css";
import PrototypeContainer3 from "../components/PrototypeContainer3";

const Messages1 = () => {
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);
  const [tab, setTab]= useState(0)

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

  const onFrameContainer19Click = useCallback(() => {
    navigate("/messages1");
  }, [navigate]);

  const onFrameContainer20Click = useCallback(() => {
    navigate("/messages4");
  }, [navigate]);

  const onAllContainerClick = useCallback(() => {
    setTab(0)
  }, [navigate]);

  const onAllContainer1Click = useCallback(() => {
    setTab(1)
  }, [navigate]);

  const onAllContainer2Click = useCallback(() => {
    setTab(2)
  }, [navigate]);

  return (
    <>
      <div className={styles.messages}>
      <RNSContainer
          avatarImageUrl="avatar244.svg"
          companyName="Dyson Electricals"
          avatarImageUrl179="../avatar116.svg"
          companyLogoUrl="Dyson Electricals"
          icons20pxPlaceholderDisplay="flex"
          bookingsCardDisplay="none"
          icons20pxPlaceholderDisplay1="flex"
          tab={tab}
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
              <div className={styles.all} style={tab==0?{borderBottom: '2px solid green',color:'green'}:{}} onClick={onAllContainerClick}>
                <div className={tab==0?styles.booking:styles.booking1}>Current</div>
              </div>
              <div className={styles.all1} style={tab==1?{borderBottom: '2px solid green',color:'green'}:{}} onClick={onAllContainer1Click}>
                <div className={tab==1?styles.booking:styles.booking1}>Upcoming</div>
              </div>
              <div className={styles.all2} style={tab==2?{borderBottom: '2px solid green',color:'green'}:{}}onClick={onAllContainer2Click}>
                <div className={tab==2?styles.booking:styles.booking1}>Past</div>
              </div>
            </div>
          </div>
        </div>
        <PrototypeContainer3
          frameImageUrl="../frame-66522.svg"
          iconImageUrl="../iconshome67.svg"
          onDefaultContainerClick={onDefaultContainerClick}
          onDefaultContainer1Click={onDefaultContainer1Click}
          onDefaultContainer2Click={onDefaultContainer2Click}
          onDefaultContainer3Click={onDefaultContainer3Click}
        />
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

export default Messages1;
