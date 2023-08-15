import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import BookingContainer from "../components/BookingContainer";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import PrototypeContainer2 from "../components/PrototypeContainer2";
import JobCompleteContainer from "../components/JobCompleteContainer";
import styles from "./Messages21.module.css";

const Messages21 = () => {
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

  const onFrameContainer22Click = useCallback(() => {
    navigate("/messages15");
  }, [navigate]);

  const onLargeButtonsContainer5Click = useCallback(() => {
    navigate("/messages19");
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/messages2");
  }, [navigate]);

  const onFrameContainer7Click = useCallback(() => {
    navigate("/messages9");
  }, [navigate]);

  const onAllContainerClick = useCallback(() => {
    navigate("/messages2");
  }, [navigate]);

  const onBookingContainerClick = useCallback(() => {
    navigate("/messages10");
  }, [navigate]);

  const onPaymentContainerClick = useCallback(() => {
    navigate("/messages11");
  }, [navigate]);

  const onPromotionContainerClick = useCallback(() => {
    navigate("/messages12");
  }, [navigate]);

  const onMessageContainerClick = useCallback(() => {
    navigate("/messages13");
  }, [navigate]);

  return (
    <>
      <div className={styles.messages}>
        <BookingContainer
          iconImageUrl="icons20pxplaceholder88.svg"
          iconImageUrls="icons20pxplaceholder88.svg"
          iconImageUrls20px="icons20pxplaceholder88.svg"
          iconImageUrls20pxPlacehol="icons20pxplaceholder88.svg"
          iconImageUrls20pxPlacehol2="icons20pxplaceholder88.svg"
          iconImageUrls20pxPlacehol3="icons20pxplaceholder88.svg"
          iconImageUrls20pxPlacehol4="icons20pxplaceholder88.svg"
          iconImageUrls20pxPlacehol5="icons20pxplaceholder88.svg"
          iconImageUrls20pxPlacehol6="icons20pxplaceholder88.svg"
          iconImageUrls20pxPlacehol7="icons20pxplaceholder88.svg"
          notifcationsGap="12px"
          containerDisplay="flex"
          containerDisplay1="flex"
          containerDisplay2="none"
          containerDisplay3="none"
          containerDisplay4="none"
        />
        <div className={styles.prototypeActivitesTabParent}>
          <div className={styles.prototypeActivitesTab}>
            <div className={styles.twoTabSwitch}>
              <div
                className={styles.tab1Wrapper}
                onClick={onFrameContainer6Click}
              >
                <div className={styles.tab1}>Notifications</div>
              </div>
              <div
                className={styles.tab2Wrapper}
                onClick={onFrameContainer7Click}
              >
                <div className={styles.tab2}>Community</div>
              </div>
            </div>
          </div>
          <div className={styles.subTabActivities}>
            <div className={styles.tabsSubSwitch}>
              <div className={styles.allParent}>
                <div className={styles.all} onClick={onAllContainerClick}>
                  <div className={styles.booking}>All</div>
                </div>
                <div
                  className={styles.booking1}
                  onClick={onBookingContainerClick}
                >
                  <div className={styles.booking2}>Booking</div>
                </div>
                <div className={styles.all} onClick={onPaymentContainerClick}>
                  <div className={styles.booking}>Payment</div>
                </div>
                <div className={styles.all} onClick={onPromotionContainerClick}>
                  <div className={styles.booking}>Promotion</div>
                </div>
                <div className={styles.all} onClick={onMessageContainerClick}>
                  <div className={styles.booking}>Message</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CarpenterNavContainer
          addIconUrl="icons16pxadd38.svg"
          searchIconUrl="icons20pxsearch20.svg"
          paymentType="Activities"
          addIcon4Url="icons16pxadd38.svg"
          propDisplay2="unset"
          propCursor="unset"
          propDisplay4="none"
          onSmallButtonsContainerClick={onSmallButtonsContainerClick}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
        />
        <PrototypeContainer2
          homeIconUrl="../iconshome.svg"
          onDefaultContainerClick={onDefaultContainerClick}
          onDefaultContainer1Click={onDefaultContainer1Click}
          onDefaultContainer2Click={onDefaultContainer2Click}
          onDefaultContainer3Click={onDefaultContainer3Click}
        />
        <div className={styles.overlay}>
          <JobCompleteContainer
            reviewText="iconsstar275.svg"
            userInputText="The wiring was neatly done. Would definitely recommend."
            propDisplay="inline-block"
            propCursor1="pointer"
            onFrameContainer22Click={onFrameContainer22Click}
            onLargeButtonsContainer5Click={onLargeButtonsContainer5Click}
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

export default Messages21;
