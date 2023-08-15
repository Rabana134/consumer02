import styles from "./ReferralContainer.module.css";

const ReferralContainer = () => {
  return (
    <div className={styles.referABusinessAndEarn200Parent}>
      <div className={styles.referABusiness}>
        Refer a business and earn 200 points
      </div>
      <div className={styles.sendThemYourUniqueReferralParent}>
        <div className={styles.sendThemYour}>
          Send them your unique referral link
        </div>
        <div className={styles.youGet200}>
          You get 200 Points when they get their first boooking
        </div>
        <img
          className={styles.feathercheckCircleIcon}
          alt=""
          src="../feathercheckcircle.svg"
        />
        <img
          className={styles.feathercheckCircleIcon1}
          alt=""
          src="../feathercheckcircle.svg"
        />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.abc123g}>ABC123G</b>
        <div className={styles.yourReferralCode}>Your referral code</div>
        <b className={styles.copyCode}>
          <p className={styles.copy}>Copy</p>
          <p className={styles.code}>Code</p>
        </b>
        <div className={styles.groupItem} />
      </div>
      <div className={styles.shareLinkReferralViaParent}>
        <div className={styles.shareLinkReferral}>Share link referral via</div>
        <img className={styles.frameChild} alt="" src="../group-66926.svg" />
      </div>
    </div>
  );
};

export default ReferralContainer;
