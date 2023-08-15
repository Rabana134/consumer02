import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MessageWrapper.module.css";

const MessageWrapper = () => {
  const navigate = useNavigate();

  const onLargeButtonsContainerClick = useCallback(() => {
    navigate("/home22");
  }, [navigate]);

  return (
    <div className={styles.messageParent}>
      <div className={styles.message}>
        <div className={styles.input}>
          <div className={styles.labelContainer}>
            <div className={styles.label}>Message</div>
          </div>
          <div className={styles.baseField}>
            <img
              className={styles.iconsplaceholder}
              alt=""
              src="../iconsplaceholder62.svg"
            />
            <div className={styles.userInput}>
              Hey guys please help me make payment for a electrical Job at home.
            </div>
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
            <div className={styles.thisIsA}>This is a helper text</div>
            <div className={styles.div}>1/100</div>
          </div>
        </div>
        <div className={styles.messageChild} />
      </div>
      <div className={styles.contacts}>
        <div className={styles.splitPaymentWith}>Split payment with</div>
        <div className={styles.contactsInner}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.avatarParent}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="../avatar224.svg"
                />
                <div className={styles.peoplename}>You</div>
              </div>
              <div className={styles.peoplename1}>£200</div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.avatarParent}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="../avatar225.svg"
                />
                <div className={styles.peoplename}>Nguyen, Shane</div>
              </div>
              <div className={styles.peoplename1}>£200</div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.avatarParent}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="../avatar226.svg"
                />
                <div className={styles.peoplename}>Flores, Juanita</div>
              </div>
              <div className={styles.peoplename1}>£200</div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.avatarParent}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="../avatar227.svg"
                />
                <div className={styles.peoplename}>Necla Eyici</div>
              </div>
              <div className={styles.peoplename1}>£200</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.inAppAlert}>
          <div className={styles.yourBookingIs}>
            Your booking is confirmed after total payment is completed.
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.yourSplitAmountParent}>
            <div className={styles.yourSplitAmount}>Your Split Amount</div>
            <b className={styles.b}>£200</b>
          </div>
          <div
            className={styles.largeButtons}
            onClick={onLargeButtonsContainerClick}
          >
            <img
              className={styles.icons20pxplaceholder}
              alt=""
              src="../icons20pxplaceholder268.svg"
            />
            <b className={styles.label1}>Make My Own Payment</b>
            <img
              className={styles.icons20pxplaceholder}
              alt=""
              src="../icons20pxplaceholder268.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageWrapper;
