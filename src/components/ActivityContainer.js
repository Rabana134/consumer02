import styles from "./ActivityContainer.module.css";

const ActivityContainer = ({
  iconImageUrl,
  iconImageUrls,
  iconImageUrls20px,
  iconImageUrls20pxPlacehol,
  iconImageUrls20pxPlacehol2,
  iconImageUrls20pxPlacehol3,
  iconImageUrls20pxPlacehol4,
  iconImageUrls20pxPlacehol5,
  iconImageUrls20pxPlacehol6,
  iconImageUrls20pxPlacehol7,
}) => {
  return (
    <div className={styles.activitiesParent}>
      <b className={styles.activities}>Activities</b>
      <div className={styles.frameParent}>
        <div className={styles.twoTabSwitchParent}>
          <div className={styles.twoTabSwitch}>
            <div className={styles.tab1Wrapper}>
              <div className={styles.tab1}>Notifications</div>
            </div>
            <div className={styles.tab2Wrapper}>
              <div className={styles.tab2}>Community</div>
            </div>
          </div>
          <div className={styles.tabsSubSwitch}>
            <div className={styles.allParent}>
              <div className={styles.all}>
                <div className={styles.booking}>All</div>
              </div>
              <div className={styles.booking1}>
                <div className={styles.booking2}>Booking</div>
              </div>
              <div className={styles.all}>
                <div className={styles.booking}>Payment</div>
              </div>
              <div className={styles.all}>
                <div className={styles.booking}>Promotion</div>
              </div>
              <div className={styles.all}>
                <div className={styles.booking}>Message</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.notifcationsParent}>
          <div className={styles.notifcations}>
            <div className={styles.container}>
              <div className={styles.content}>
                <div className={styles.top}>
                  <div className={styles.bookingParent}>
                    <div className={styles.tab1}>{`Booking: `}</div>
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
                    src={iconImageUrl}
                  />
                  <b className={styles.label}>Mark Job as Completed</b>
                  <img
                    className={styles.icons20pxplaceholder}
                    alt=""
                    src={iconImageUrls}
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
                    <div className={styles.tab1}>{`Booking: `}</div>
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
                    src={iconImageUrls20px}
                  />
                  <b className={styles.label}>Mark Job as Completed</b>
                  <img
                    className={styles.icons20pxplaceholder}
                    alt=""
                    src={iconImageUrls20pxPlacehol}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.notifcations2}>
            <div className={styles.container}>
              <div className={styles.content}>
                <div className={styles.top}>
                  <div className={styles.bookingParent}>
                    <div className={styles.tab1}>Promotions:</div>
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
                    src={iconImageUrls20pxPlacehol2}
                  />
                  <b className={styles.label}>Mark Job as Completed</b>
                  <img
                    className={styles.icons20pxplaceholder}
                    alt=""
                    src={iconImageUrls20pxPlacehol3}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.notifcations2}>
            <div className={styles.container}>
              <div className={styles.content}>
                <div className={styles.top}>
                  <div className={styles.bookingParent}>
                    <div className={styles.tab1}>{`Payment: `}</div>
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
                    src={iconImageUrls20pxPlacehol4}
                  />
                  <b className={styles.label}>Mark Job as Completed</b>
                  <img
                    className={styles.icons20pxplaceholder}
                    alt=""
                    src={iconImageUrls20pxPlacehol5}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.notifcations2}>
            <div className={styles.container}>
              <div className={styles.content}>
                <div className={styles.top}>
                  <div className={styles.bookingParent}>
                    <div className={styles.tab1}>Message:</div>
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
                    src={iconImageUrls20pxPlacehol6}
                  />
                  <b className={styles.label}>Mark Job as Completed</b>
                  <img
                    className={styles.icons20pxplaceholder}
                    alt=""
                    src={iconImageUrls20pxPlacehol7}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityContainer;
