import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import PrototypeContainer2 from "../components/PrototypeContainer2";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import styles from "./Messages7.module.css";
import PrototypeContainer3 from "../components/PrototypeContainer3";

const Messages7 = () => {
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

  const onFrameContainer12Click = useCallback(() => {
    navigate("/messages2");
  }, [navigate]);

  const onFrameContainer13Click = useCallback(() => {
    navigate("/messages9");
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
        <div className={styles.messagesInner}>
          <div className={styles.notifcationsParent}>
            <div className={styles.notifcations}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <div className={styles.top}>
                    <div className={styles.bookingParent}>
                      <div className={styles.booking}>{`Booking: `}</div>
                      <div className={styles.sun01July}>
                        Sun 01 July at 7:20pm
                      </div>
                    </div>
                    <div className={styles.minsAgo}>3mins ago</div>
                  </div>
                  <div className={styles.youHaveAnContainer}>
                    <span>{`You have an upcoming Booking with `}</span>
                    <span className={styles.smithsConstructions}>
                      Smith’s constructions
                    </span>
                    <span> on 1st Oct 2021; 9:00pm</span>
                  </div>
                  <div className={styles.largeButtons}>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder150.svg"
                    />
                    <b className={styles.label}>Mark Job as Completed</b>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder150.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.notifcations}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <div className={styles.top}>
                    <div className={styles.bookingParent}>
                      <div className={styles.booking}>{`Booking: `}</div>
                      <div className={styles.sun01July}>
                        Sun 01 July at 7:20pm
                      </div>
                    </div>
                    <div className={styles.minsAgo}>3mins ago</div>
                  </div>
                  <div className={styles.youHaveAnContainer}>
                    <span>{`Job booking has been marked complete by `}</span>
                    <span className={styles.smithsConstructions}>
                      Smith’s constructions
                    </span>
                    <span>{` `}</span>
                  </div>
                  <div className={styles.largeButtons1}>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder150.svg"
                    />
                    <b className={styles.label}>Mark Job as Completed</b>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder150.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.notifcations}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <div className={styles.top}>
                    <div className={styles.bookingParent}>
                      <div className={styles.booking}>Promotions:</div>
                      <div className={styles.sun01July}>
                        Sun 01 July at 7:20pm
                      </div>
                    </div>
                    <div className={styles.minsAgo}>3mins ago</div>
                  </div>
                  <div className={styles.youHaveAnContainer}>
                    <span>{`You have an upcoming Booking with `}</span>
                    <span className={styles.smithsConstructions}>
                      Smith’s constructions
                    </span>
                    <span>
                      {" "}
                      on 1st Oct 2021; 9:00pm is currently running an offer. Tap
                      to find out more.
                    </span>
                  </div>
                  <div className={styles.largeButtons}>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder150.svg"
                    />
                    <b className={styles.label}>Mark Job as Completed</b>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder150.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.notifcations}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <div className={styles.top}>
                    <div className={styles.bookingParent}>
                      <div className={styles.booking}>{`Booking: `}</div>
                      <div className={styles.sun01July}>
                        Sun 01 July at 7:20pm
                      </div>
                    </div>
                    <div className={styles.minsAgo}>3mins ago</div>
                  </div>
                  <div className={styles.youHaveAnContainer}>
                    <span>{`Payment of £450 to `}</span>
                    <span className={styles.smithsConstructions}>
                      Smith’s constructions
                    </span>
                    <span> is successful</span>
                  </div>
                  <div className={styles.largeButtons}>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder150.svg"
                    />
                    <b className={styles.label}>Mark Job as Completed</b>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder150.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.notifcations}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <div className={styles.top}>
                    <div className={styles.bookingParent}>
                      <div className={styles.booking}>Message:</div>
                      <div className={styles.sun01July}>
                        Sun 01 July at 7:20pm
                      </div>
                    </div>
                    <div className={styles.minsAgo}>3mins ago</div>
                  </div>
                  <div className={styles.youHaveAnContainer}>
                    <span>{`New message form `}</span>
                    <span className={styles.smithsConstructions}>
                      Smith’s constructions
                    </span>
                    <span>{` `}</span>
                  </div>
                  <div className={styles.largeButtons}>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder150.svg"
                    />
                    <b className={styles.label}>Mark Job as Completed</b>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder150.svg"
                    />
                  </div>
                </div>
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
        <div className={styles.prototypeActivitesTabParent}>
          <div className={styles.prototypeActivitesTab}>
            <div className={styles.twoTabSwitch}>
              <div
                className={styles.tab1Wrapper}
                onClick={onFrameContainer12Click}
              >
                <div className={styles.booking}>Notifications</div>
              </div>
              <div
                className={styles.tab2Wrapper}
                onClick={onFrameContainer13Click}
              >
                <div className={styles.tab2}>Community</div>
              </div>
            </div>
          </div>
          <div className={styles.subTabActivities}>
            <div className={styles.tabsSubSwitch}>
              <div className={styles.allParent}>
                <div className={styles.all}>
                  <div className={styles.booking5}>All</div>
                </div>
                <div
                  className={styles.payment}
                  onClick={onBookingContainerClick}
                >
                  <div className={styles.booking7}>Booking</div>
                </div>
                <div
                  className={styles.payment}
                  onClick={onPaymentContainerClick}
                >
                  <div className={styles.booking7}>Payment</div>
                </div>
                <div
                  className={styles.payment}
                  onClick={onPromotionContainerClick}
                >
                  <div className={styles.booking7}>Promotion</div>
                </div>
                <div
                  className={styles.payment}
                  onClick={onMessageContainerClick}
                >
                  <div className={styles.booking7}>Message</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CarpenterNavContainer
          addIconUrl="icons16pxadd47.svg"
          searchIconUrl="icons20pxsearch24.svg"
          paymentType="Activities"
          addIcon4Url="icons16pxadd95.svg"
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

export default Messages7;
