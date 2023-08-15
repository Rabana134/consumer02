import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import SectionForm from "../components/SectionForm";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import PrototypeContainer1 from "../components/PrototypeContainer1";
import styles from "./Security.module.css";

const Security = () => {
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
      <div className={styles.security}>
        <SectionForm />
        <div className={styles.thisIsA}>This is a helper text</div>
        <div className={styles.frameParent2}>
          <div className={styles.inputParent}>
            <div className={styles.input}>
              <div className={styles.labelContainer}>
                <div className={styles.label2}>Old password</div>
              </div>
              <div className={styles.baseField}>
                <img
                  className={styles.iconseye}
                  alt=""
                  src="../iconseye25.svg"
                />
                <div className={styles.userInput}>Enter old password</div>
                <div className={styles.dot}>
                  <img
                    className={styles.dotChild}
                    alt=""
                    src="../ellipse-251.svg"
                  />
                  <img
                    className={styles.dotChild}
                    alt=""
                    src="../ellipse-251.svg"
                  />
                  <img
                    className={styles.dotChild}
                    alt=""
                    src="../ellipse-251.svg"
                  />
                  <img
                    className={styles.dotChild}
                    alt=""
                    src="../ellipse-251.svg"
                  />
                  <img
                    className={styles.dotChild}
                    alt=""
                    src="../ellipse-251.svg"
                  />
                  <img
                    className={styles.dotChild}
                    alt=""
                    src="../ellipse-251.svg"
                  />
                  <img
                    className={styles.dotChild}
                    alt=""
                    src="../ellipse-251.svg"
                  />
                  <img
                    className={styles.dotChild}
                    alt=""
                    src="../ellipse-251.svg"
                  />
                  <img
                    className={styles.dotChild}
                    alt=""
                    src="../ellipse-251.svg"
                  />
                </div>
              </div>
              <div className={styles.helperTextContainer}>
                <div className={styles.thisIsA1}>This is a helper text</div>
                <div className={styles.div}>1/100</div>
              </div>
            </div>
            <div className={styles.input}>
              <div className={styles.labelContainer}>
                <div className={styles.label2}>New password</div>
              </div>
              <div className={styles.baseField}>
                <img className={styles.iconseye} alt="" src="../iconseye.svg" />
                <div className={styles.userInput}>Enter new password</div>
                <div className={styles.dot}>
                  <img
                    className={styles.dotChild}
                    alt=""
                    src="../ellipse-251.svg"
                  />
                  <img
                    className={styles.dotChild}
                    alt=""
                    src="../ellipse-251.svg"
                  />
                  <img
                    className={styles.dotChild}
                    alt=""
                    src="../ellipse-251.svg"
                  />
                  <img
                    className={styles.dotChild}
                    alt=""
                    src="../ellipse-251.svg"
                  />
                  <img
                    className={styles.dotChild}
                    alt=""
                    src="../ellipse-251.svg"
                  />
                  <img
                    className={styles.dotChild}
                    alt=""
                    src="../ellipse-251.svg"
                  />
                  <img
                    className={styles.dotChild}
                    alt=""
                    src="../ellipse-251.svg"
                  />
                  <img
                    className={styles.dotChild}
                    alt=""
                    src="../ellipse-251.svg"
                  />
                  <img
                    className={styles.dotChild}
                    alt=""
                    src="../ellipse-251.svg"
                  />
                </div>
              </div>
              <div className={styles.helperTextContainer}>
                <div className={styles.thisIsA1}>This is a helper text</div>
                <div className={styles.div}>1/100</div>
              </div>
            </div>
          </div>
          <div className={styles.largeButtons2}>
            <img
              className={styles.icons20pxplaceholder}
              alt=""
              src="../icons20pxplaceholder438.svg"
            />
            <b className={styles.label}>Update Password</b>
            <img
              className={styles.icons20pxplaceholder}
              alt=""
              src="../icons20pxplaceholder438.svg"
            />
          </div>
        </div>
        <CarpenterNavContainer
          addIconUrl="icons16pxadd132.svg"
          searchIconUrl="icons20pxsearch75.svg"
          paymentType="Security"
          addIcon4Url="icons16pxadd133.svg"
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

export default Security;
