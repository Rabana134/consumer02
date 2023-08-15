import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import styles from "./Account.module.css";

const Account = ({ onClose }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if(auth.currentUser)
    {
        db.collection('customers').doc(auth.currentUser.uid).get().then(function(snapshot) {
            if(snapshot.data())
            {
              setName(snapshot.data().fname)
              setEmail(snapshot.data().email)
            }
          });
    }
  
  }, [])

  const onFrameContainer2Click = useCallback(() => {
    navigate("/how-to-earn-points");
  }, [navigate]);

  const onSettingsContainerClick = useCallback(() => {
    navigate("/log-cash-transactions");
  }, [navigate]);

  const onSettingsContainer1Click = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  const onSettingsContainer2Click = useCallback(() => {
    navigate("/split-pay");
  }, [navigate]);

  const onSettingsContainer3Click = useCallback(() => {
    navigate("/refer-earn");
  }, [navigate]);

  const onSettingsContainer4Click = useCallback(() => {
    navigate("/personal-settings");
  }, [navigate]);

  const onSettingsContainer5Click = useCallback(() => {
    navigate("/security");
  }, [navigate]);

  const onSettingsContainer7Click = useCallback(() => {
    navigate("/log-cash-transactions1");
  }, [navigate]);

  const onSettingsContainer8Click = useCallback(() => {
    navigate("/help1");
  }, [navigate]);

  const onSettingsContainer9Click = useCallback(() => {
    navigate("/payment1");
  }, [navigate]);

  return (
    <div className={styles.account}>
      <div className={styles.scroll}>
        <div className={styles.logPointsParent}>
          <div className={styles.logPoints}>Log points</div>
          <div className={styles.groupParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="../group-66985.svg"
            />
            <div className={styles.frameWrapper}>
              <div className={styles.parent}>
                <b className={styles.b}>300</b>
                <div className={styles.points}>Points</div>
              </div>
            </div>
            <div className={styles.of5000}>of 5,000</div>
          </div>
          <div
            className={styles.howToEarnPointsAndLevelUParent}
            onClick={onFrameContainer2Click}
          >
            <div className={styles.howToEarn}>
              How to earn points and level up
            </div>
            <img
              className={styles.iconswarning}
              alt=""
              src="../iconswarning.svg"
            />
          </div>
        </div>
        <div className={styles.account1}>Account</div>
        <div className={styles.settings}>Settings</div>
        <div className={styles.settingsParent}>
          <div className={styles.settings1} onClick={onSettingsContainerClick}>
            <div className={styles.frameParent}>
              <div className={styles.iconslogCashParent}>
                <img
                  className={styles.iconslogCash}
                  alt=""
                  src="../iconslog-cash.svg"
                />
                <div className={styles.logCash}>Log cash</div>
              </div>
              <img
                className={styles.iconslogCash}
                alt=""
                src="../iconschevronright68.svg"
              />
            </div>
          </div>
          <div className={styles.settings1} onClick={onSettingsContainer1Click}>
            <div className={styles.frameParent}>
              <div className={styles.iconslogCashParent}>
                <img
                  className={styles.iconslogCash}
                  alt=""
                  src="../iconscard.svg"
                />
                <div className={styles.logCash}>Payment</div>
              </div>
              <img
                className={styles.iconslogCash}
                alt=""
                src="../iconschevronright68.svg"
              />
            </div>
          </div>
          <div className={styles.settings1} onClick={onSettingsContainer2Click}>
            <div className={styles.frameParent}>
              <div className={styles.iconslogCashParent}>
                <img
                  className={styles.iconslogCash}
                  alt=""
                  src="../iconssplit-pay.svg"
                />
                <div className={styles.logCash}>Split pay</div>
              </div>
              <img
                className={styles.iconslogCash}
                alt=""
                src="../iconschevronright68.svg"
              />
            </div>
          </div>
          <div className={styles.settings1} onClick={onSettingsContainer3Click}>
            <div className={styles.frameParent}>
              <div className={styles.iconslogCashParent}>
                <img
                  className={styles.iconslogCash}
                  alt=""
                  src="../iconsshare5.svg"
                />
                <div className={styles.logCash}>Referrals</div>
              </div>
              <img
                className={styles.iconslogCash}
                alt=""
                src="../iconschevronright68.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.settingsGroup}>
          <div className={styles.settings1} onClick={onSettingsContainer4Click}>
            <div className={styles.frameParent}>
              <div className={styles.iconslogCashParent}>
                <img
                  className={styles.iconslogCash}
                  alt=""
                  src="../iconsuser.svg"
                />
                <div className={styles.logCash}>Personal</div>
              </div>
              <img
                className={styles.iconslogCash}
                alt=""
                src="../iconschevronright68.svg"
              />
            </div>
          </div>
          <div className={styles.settings1} onClick={onSettingsContainer5Click}>
            <div className={styles.frameParent}>
              <div className={styles.iconslogCashParent}>
                <img
                  className={styles.iconslogCash}
                  alt=""
                  src="../iconssecurity.svg"
                />
                <div className={styles.logCash}>Security</div>
              </div>
              <img
                className={styles.iconslogCash}
                alt=""
                src="../iconschevronright73.svg"
              />
            </div>
          </div>
          <div className={styles.settings7}>
            <div className={styles.frameParent}>
              <div className={styles.iconslogCashParent}>
                <img className={styles.iconswarning} alt="" />
                <div className={styles.logCash}>Dark Theme</div>
              </div>
              <img className={styles.iconslogCash} alt="" />
            </div>
          </div>
          <div className={styles.settings1} onClick={onSettingsContainer7Click}>
            <div className={styles.frameParent}>
              <div className={styles.iconslogCashParent}>
                <img className={styles.iconslogCash} alt="" src="../iconschevronright73.svg"/>
                <div className={styles.logCash}>Notifications</div>
              </div>
              <img className={styles.iconslogCash} alt="" />
            </div>
          </div>
          <div className={styles.settings1} onClick={onSettingsContainer8Click}>
            <div className={styles.frameParent}>
              <div className={styles.iconslogCashParent}>
                <img className={styles.iconslogCash} alt="" />
                <div className={styles.logCash}>Help</div>
              </div>
              <img className={styles.iconslogCash} alt="" />
            </div>
          </div>
          <div className={styles.settings1} onClick={onSettingsContainer9Click}>
            <div className={styles.frameParent}>
              <div className={styles.iconslogCashParent}>
                <img className={styles.iconslogCash} alt="" />
                <div className={styles.logCash}>Connect social accounts</div>
              </div>
              <img className={styles.iconslogCash} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.iconslogoutParent} style={{cursor:'pointer'}} 
        onClick={()=>{auth.signOut()}}>
          <img className={styles.iconslogCash} alt="" />
          <div className={styles.logCash}>Logout</div>
        </div>
        <div className={styles.userInformation}>
          <div className={styles.avatarParent}>
            <img className={styles.avatarIcon} alt="" src="../avatar233.svg" />
            <div className={styles.crosbyOdennehyParent}>
              <b className={styles.crosbyOdennehy}>{name}</b>
              <div className={styles.points}>{email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
