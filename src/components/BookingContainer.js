import { useMemo } from "react";
import styles from "./BookingContainer.module.css";

const BookingContainer = ({
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
  notifcationsGap,
  containerDisplay,
  containerDisplay1,
  icons20pxPlaceholderCursor,
  containerDisplay2,
  containerDisplay3,
  containerDisplay4,
  onLargeButtonsContainer1Click,
}) => {
  const frameDiv5Style = useMemo(() => {
    return {
      gap: notifcationsGap,
    };
  }, [notifcationsGap]);

  const notifcationsStyle = useMemo(() => {
    return {
      display: containerDisplay,
    };
  }, [containerDisplay]);

  const notifcations1Style = useMemo(() => {
    return {
      display: containerDisplay1,
    };
  }, [containerDisplay1]);

  const largeButtons5Style = useMemo(() => {
    return {
      cursor: icons20pxPlaceholderCursor,
    };
  }, [icons20pxPlaceholderCursor]);

  const notifcations2Style = useMemo(() => {
    return {
      display: containerDisplay2,
    };
  }, [containerDisplay2]);

  const notifcations3Style = useMemo(() => {
    return {
      display: containerDisplay3,
    };
  }, [containerDisplay3]);

  const notifcations4Style = useMemo(() => {
    return {
      display: containerDisplay4,
    };
  }, [containerDisplay4]);

  return (
    <div className={styles.notifcationsParent} style={frameDiv5Style}>
      <div className={styles.notifcations} style={notifcationsStyle}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.bookingParent}>
                <div className={styles.booking}>{`Booking: `}</div>
                <div className={styles.sun01July}>Sun 01 July at 7:20pm</div>
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
      <div className={styles.notifcations} style={notifcations1Style}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.bookingParent}>
                <div className={styles.booking}>{`Booking: `}</div>
                <div className={styles.sun01July}>Sun 01 July at 7:20pm</div>
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
            <div
              className={styles.largeButtons1}
              style={largeButtons5Style}
              onClick={onLargeButtonsContainer1Click}
            >
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
      <div className={styles.notifcations2} style={notifcations2Style}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.bookingParent}>
                <div className={styles.booking}>Promotions:</div>
                <div className={styles.sun01July}>Sun 01 July at 7:20pm</div>
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
                on 1st Oct 2021; 9:00pm is currently running an offer. Tap to
                find out more.
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
      <div className={styles.notifcations2} style={notifcations3Style}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.bookingParent}>
                <div className={styles.booking}>{`Payment: `}</div>
                <div className={styles.sun01July}>Sun 01 July at 7:20pm</div>
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
      <div className={styles.notifcations2} style={notifcations4Style}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.bookingParent}>
                <div className={styles.booking}>Message:</div>
                <div className={styles.sun01July}>Sun 01 July at 7:20pm</div>
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
  );
};

export default BookingContainer;
