import { useMemo } from "react";
import styles from "./BookingsCardContainer.module.css";

const BookingsCardContainer = ({
  avatarImageUrl,
  companyName,
  iconImageUrl,
  actionText,
  icon20pxImageUrl,
  icon16pxImageUrl,
  starImageUrl,
  starRatingImageUrl,
  starRatingText,
  starRatingImageUrl2,
  icons20pxPlaceholderDisplay,
  starRatingAlignSelf,
  starRatingDisplay,
  starRatingWidth,
}) => {
  const largeButtons3Style = useMemo(() => {
    return {
      display: icons20pxPlaceholderDisplay,
    };
  }, [icons20pxPlaceholderDisplay]);

  const starRatingStyle = useMemo(() => {
    return {
      alignSelf: starRatingAlignSelf,
      display: starRatingDisplay,
      width: starRatingWidth,
    };
  }, [starRatingAlignSelf, starRatingDisplay, starRatingWidth]);

  return (
    <div className={styles.bookingsCard}>
      <div className={styles.bookingsCard1}>
        <div className={styles.avatarParent}>
          <img className={styles.avatarIcon} alt="" src={avatarImageUrl} />
          <div className={styles.peoplenameParent}>
            <div className={styles.peoplename}>{companyName}</div>
            <div className={styles.dateParent}>
              <div className={styles.date}>26/06/2021</div>
              <div className={styles.frameChild} />
              <div className={styles.date}>{`6:32AM `}</div>
            </div>
          </div>
        </div>
        <div className={styles.electricianRequiredTo}>
          Electrician required to fix a spoilt vaccum cleaner. Please treat as
          urgent.
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.iconscalendarParent}>
              <img
                className={styles.iconscalendar}
                alt=""
                src="../iconscalendar21.svg"
              />
              <div className={styles.date}>{`09/06/2021 `}</div>
            </div>
            <div className={styles.iconscalendarParent}>
              <img
                className={styles.iconscalendar}
                alt=""
                src="../iconsclock.svg"
              />
              <div className={styles.date}>9:00AM</div>
            </div>
            <div className={styles.iconscalendarParent}>
              <img
                className={styles.iconscalendar}
                alt=""
                src="../iconsduration.svg"
              />
              <div className={styles.date}>5 days</div>
            </div>
          </div>
          <div className={styles.iconslocationParent}>
            <img
              className={styles.iconscalendar}
              alt=""
              src="../iconslocation.svg"
            />
            <div className={styles.citiessummary3}>
              8 High Street, Chase Terrace, WS7 1LP
            </div>
          </div>
        </div>
        <div className={styles.largeButtons} style={largeButtons3Style}>
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src={iconImageUrl}
          />
          <b className={styles.date}>{actionText}</b>
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src={icon20pxImageUrl}
          />
        </div>
        <div className={styles.starRating} style={starRatingStyle}>
          <div className={styles.transactionStatus}>
            <div className={styles.success}>completed</div>
          </div>
          <div className={styles.starRating1}>
            <img
              className={styles.icons16pxstar}
              alt=""
              src={icon16pxImageUrl}
            />
            <img className={styles.icons16pxstar} alt="" src={starImageUrl} />
            <img
              className={styles.icons16pxstar}
              alt=""
              src={starRatingImageUrl}
            />
            <img className={styles.icons16pxstar} alt="" src={starRatingText} />
            <img
              className={styles.icons16pxstar}
              alt=""
              src={starRatingImageUrl2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsCardContainer;
