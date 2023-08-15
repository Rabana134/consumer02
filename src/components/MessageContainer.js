import { useMemo } from "react";
import styles from "./MessageContainer.module.css";

const MessageContainer = ({
  avatarImageUrl,
  avatarImageUrls,
  avatarImageUrls2,
  avatarImageUrls3,
  avatarPrice,
  icons20pxPlaceholderCursor,
  onLargeButtonsContainer1Click,
}) => {
  const largeButtons14Style = useMemo(() => {
    return {
      cursor: icons20pxPlaceholderCursor,
    };
  }, [icons20pxPlaceholderCursor]);

  return (
    <div className={styles.homeInner}>
      <div className={styles.messageParent}>
        <div className={styles.messageParent}>
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
                Hey guys please help me make payment for a electrical Job at
                home.
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
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.avatarParent}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src={avatarImageUrl}
                  />
                  <div className={styles.peoplename}>You</div>
                </div>
                <div className={styles.peoplename1}>£200</div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.avatarParent}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src={avatarImageUrls}
                  />
                  <div className={styles.peoplename}>Nguyen, Shane</div>
                </div>
                <div className={styles.peoplename1}>£200</div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.avatarParent}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src={avatarImageUrls2}
                  />
                  <div className={styles.peoplename}>Flores, Juanita</div>
                </div>
                <div className={styles.peoplename1}>£200</div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.avatarParent}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src={avatarImageUrls3}
                  />
                  <div className={styles.peoplename}>Necla Eyici</div>
                </div>
                <div className={styles.peoplename1}>£200</div>
              </div>
            </div>
            <div className={styles.largeButtons}>
              <img className={styles.iconsadd} alt="" src="../iconsadd61.svg" />
              <b className={styles.label1}>Add Contacts</b>
              <img className={styles.iconsadd} alt="" src="../iconsadd62.svg" />
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.inAppAlert}>
            <div className={styles.yourBookingIs}>
              Your booking is confirmed after total payment is completed.
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.totalAmountParent}>
              <div className={styles.totalAmount}>Total Amount</div>
              <b className={styles.b}>{avatarPrice}</b>
            </div>
            <div
              className={styles.largeButtons1}
              style={largeButtons14Style}
              onClick={onLargeButtonsContainer1Click}
            >
              <img
                className={styles.icons20pxplaceholder}
                alt=""
                src="../icons20pxplaceholder304.svg"
              />
              <b className={styles.label1}>Send Split Pay Request</b>
              <img
                className={styles.icons20pxplaceholder}
                alt=""
                src="../icons20pxplaceholder304.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
