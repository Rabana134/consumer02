import { useMemo } from "react";
import styles from "./DysonForm.module.css";

const DysonForm = ({
  avatarImageUrl,
  guaranteeImageUrl,
  groupImageUrl,
  vectorImageUrl,
  vectorImageUrl2,
  propCursor,
  openFrame,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.avatarParent}>
            <img className={styles.avatarIcon} alt="" src={avatarImageUrl} />
            <div className={styles.frameDiv}>
              <div className={styles.frameDiv}>
                <div className={styles.dysonElectricalsParent}>
                  <div className={styles.dysonElectricals}>
                    Dyson Electricals
                  </div>
                  <img
                    className={styles.guarantee1Icon}
                    alt=""
                    src={guaranteeImageUrl}
                  />
                </div>
                <div className={styles.applianceRepair}>Appliance repair</div>
              </div>
              <div className={styles.memberSince2014}>Member since 2014</div>
            </div>
          </div>
          <div className={styles.awards}>
            <div className={styles.rookie} />
            <div className={styles.rookie} />
            <div className={styles.rookie} />
            <div className={styles.rookie} />
            <div className={styles.rookie} />
            <div className={styles.rookie} />
            <div className={styles.ambassador}>
              <img
                className={styles.ambassadorChild}
                alt=""
                src="../group-66966.svg"
              />
              <img
                className={styles.ambassadorItem}
                alt=""
                src={groupImageUrl}
              />
              <img
                className={styles.ambassadorInner}
                alt=""
                src={vectorImageUrl}
              />
              <div className={styles.ambassador1}>Ambassador</div>
              <img className={styles.vectorIcon} alt="" src={vectorImageUrl2} />
            </div>
          </div>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.frameParent2}>
          <div className={styles.parent}>
            <b className={styles.b}>4.3</b>
            <div className={styles.ratings}>Ratings</div>
          </div>
          <div className={styles.parent}>
            <b className={styles.b}>12</b>
            <div className={styles.ratings}>Reviews</div>
          </div>
          <div className={styles.parent}>
            <b className={styles.b}>23</b>
            <div className={styles.ratings}>Jobs</div>
          </div>
        </div>
      </div>
      <div className={styles.largeButtonsParent}>
        <div className={styles.largeButtons}>
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src="../icons20pxplaceholder70.svg"
          />
          <b className={styles.label}>Get quote</b>
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src="../icons20pxplaceholder70.svg"
          />
        </div>
        <div
          className={styles.frameWrapper}
          style={frameDiv2Style}
          onClick={openFrame}
        >
          <div className={styles.shareParent}>
            <b className={styles.share}>Share</b>
            <img className={styles.iconsshare} alt="" src="../iconsshare.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DysonForm;
