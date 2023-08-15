import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import BookingContainer from "../components/BookingContainer";
import PrototypeContainer2 from "../components/PrototypeContainer2";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import JobStatusContainer from "../components/JobStatusContainer";
import styles from "./Messages13.module.css";

const Messages13 = () => {
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);

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

  const onFrameContainer22Click = useCallback(() => {
    navigate("/messages15");
  }, [navigate]);

  const onFrameContainer15Click = useCallback(() => {
    navigate("/messages2");
  }, [navigate]);

  const onFrameContainer16Click = useCallback(() => {
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
          iconImageUrl="icons20pxplaceholder148.svg"
          iconImageUrls="icons20pxplaceholder148.svg"
          iconImageUrls20px="icons20pxplaceholder148.svg"
          iconImageUrls20pxPlacehol="icons20pxplaceholder148.svg"
          iconImageUrls20pxPlacehol2="icons20pxplaceholder148.svg"
          iconImageUrls20pxPlacehol3="icons20pxplaceholder148.svg"
          iconImageUrls20pxPlacehol4="icons20pxplaceholder148.svg"
          iconImageUrls20pxPlacehol5="icons20pxplaceholder148.svg"
          iconImageUrls20pxPlacehol6="icons20pxplaceholder148.svg"
          iconImageUrls20pxPlacehol7="icons20pxplaceholder148.svg"
        />
        <PrototypeContainer2
          homeIconUrl="../iconshome.svg"
          onDefaultContainerClick={onDefaultContainerClick}
          onDefaultContainer1Click={onDefaultContainer1Click}
          onDefaultContainer2Click={onDefaultContainer2Click}
          onDefaultContainer3Click={onDefaultContainer3Click}
        />
        <CarpenterNavContainer
          addIconUrl="../icons16pxadd.svg"
          searchIconUrl="../icons20pxsearch.svg"
          paymentType="Activities"
          addIcon4Url="../icons16pxadd.svg"
          propDisplay2="unset"
          propCursor="unset"
          propDisplay4="none"
          onSmallButtonsContainerClick={onSmallButtonsContainerClick}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
        />
        <div className={styles.prototypeActivitesTabParent}>
          <div className={styles.prototypeActivitesTab}>
            <div className={styles.twoTabSwitch}>
              <div
                className={styles.tab1Wrapper}
                onClick={onFrameContainer15Click}
              >
                <div className={styles.tab1}>Notifications</div>
              </div>
              <div
                className={styles.tab2Wrapper}
                onClick={onFrameContainer16Click}
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
        <div className={styles.overlay}>
          <JobStatusContainer
            starIconUrls="iconsstar289.svg"
            starRatingIconUrls="iconsstar289.svg"
            placeholderIconUrls="iconsstar289.svg"
            addCancelIconUrl="iconsstar289.svg"
            ratingValues="0.0"
            placeholderIconUrls20px="icons20pxplaceholder158.svg"
            addCancelIconUrls="addcancel-circle22.svg"
            addIconUrls="iconsadd41.svg"
            addCancelIconUrls14px="addcancel-circle22.svg"
            addIconUrls31and41="iconsadd41.svg"
            addCancelIconUrls14px2="addcancel-circle22.svg"
            propCursor="unset"
            onFrameContainer22Click={onFrameContainer22Click}
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

export default Messages13;
