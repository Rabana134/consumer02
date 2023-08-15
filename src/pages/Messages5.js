import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import TheresaWebbContainer from "../components/TheresaWebbContainer";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import ActivitiesNavContainer from "../components/ActivitiesNavContainer";
import styles from "./Messages5.module.css";

const Messages5 = () => {
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

  const onFrameContainer5Click = useCallback(() => {
    navigate("/messages1");
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/messages4");
  }, [navigate]);

  const onAllContainerClick = useCallback(() => {
    navigate("/messages4");
  }, [navigate]);

  const onAllContainer1Click = useCallback(() => {
    navigate("/messages7");
  }, [navigate]);

  const onAllContainer2Click = useCallback(() => {
    navigate("/messages8");
  }, [navigate]);

  return (
    <>
      <div className={styles.messages}>
        <TheresaWebbContainer />
        <CarpenterNavContainer
          addIconUrl="icons16pxadd96.svg"
          searchIconUrl="icons20pxsearch55.svg"
          paymentType="Bookings"
          addIcon4Url="icons16pxadd96.svg"
          propDisplay2="unset"
          propCursor="unset"
          propDisplay4="none"
          onSmallButtonsContainerClick={onSmallButtonsContainerClick}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
        />
        <div className={styles.title}>
          <div className={styles.bookingTabMain}>
            <div className={styles.twoTabSwitch}>
              <div
                className={styles.tab1Wrapper}
                onClick={onFrameContainer5Click}
              >
                <div className={styles.tab1}>Bookings</div>
              </div>
              <div
                className={styles.tab2Wrapper}
                onClick={onFrameContainer6Click}
              >
                <div className={styles.tab2}>Review</div>
              </div>
            </div>
          </div>
          <div className={styles.reviewSubTab}>
            <div className={styles.tabSwitch}>
              <div className={styles.tabSwitchChild} />
              <div className={styles.all} onClick={onAllContainerClick}>
                <div className={styles.booking}>Reviews</div>
              </div>
              <div className={styles.all1} onClick={onAllContainer1Click}>
                <div className={styles.booking1}>{`Question & Answers`}</div>
              </div>
              <div className={styles.all2} onClick={onAllContainer2Click}>
                <div className={styles.booking}>Comments</div>
              </div>
            </div>
          </div>
        </div>
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

export default Messages5;
