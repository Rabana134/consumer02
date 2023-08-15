import { useEffect, useMemo, useState } from "react";
import styles from "./RNSContainer.module.css";
import { auth, db } from "../firebase";

const RNSContainer = ({
  avatarImageUrl,
  companyName,
  avatarImageUrl179,
  companyLogoUrl,
  icons20pxPlaceholderDisplay,
  bookingsCardDisplay,
  icons20pxPlaceholderDisplay1,
  tab
}) => {
  const largeButtons1Style = useMemo(() => {
    return {
      display: icons20pxPlaceholderDisplay,
    };
  }, [icons20pxPlaceholderDisplay]);

  const bookingsCardStyle = useMemo(() => {
    return {
      display: bookingsCardDisplay,
    };
  }, [bookingsCardDisplay]);

  const largeButtons2Style = useMemo(() => {
    return {
      display: icons20pxPlaceholderDisplay1,
    };
  }, [icons20pxPlaceholderDisplay1]);
  const [pastData, setPastData] = useState([]);
  const [futureData, setFutureData] = useState([]);
  const [presentData, setPresentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection('cust_booking/'+auth.currentUser.uid+'/list').get();
        const currentDate = new Date();

        snapshot.forEach(doc => {
          const data = doc.data();
          console.log(data.qoute.jdate)
          const providedDate = new Date(data.qoute.jdate);

          if (providedDate < currentDate) {
            setPastData([data]);
          } else if (providedDate > currentDate) {
            setFutureData([data]);
          } else {
            setPresentData([data]);
          }
        });
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
 
  

  return (
    <div className={styles.bookingsCardParent}>

    {
      tab==0?
      presentData.map((data)=>{
        return(
          <div className={styles.bookingsCard}>
        <div className={styles.bookingsCard1}>
          <div className={styles.avatarParent}>
            <img className={styles.avatarIcon} alt="" src={avatarImageUrl} />
            <div className={styles.peoplenameParent}>
              <div className={styles.peoplename}>{data.pname}</div>
              <div className={styles.dateParent}>
                <div className={styles.date}>{data.qoute.jdate}</div>
                <div className={styles.frameChild} />
                <div className={styles.date}>{data.qoute.jtime}</div>
              </div>
            </div>
          </div>
          <div className={styles.electricianRequiredTo}>
           {data.qoute.jdesc}
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.iconscalendarParent}>
                <img
                  className={styles.iconscalendar}
                  alt=""
                  src="../iconscalendar21.svg"
                />
                <div className={styles.date}> {data.qoute.jdate}</div>
              </div>
              <div className={styles.iconscalendarParent}>
                <img
                  className={styles.iconscalendar}
                  alt=""
                  src="../iconsclock.svg"
                />
                <div className={styles.date}> {data.qoute.jtime}</div>
              </div>
              <div className={styles.iconscalendarParent}>
                <img
                  className={styles.iconscalendar}
                  alt=""
                  src="../iconsduration.svg"
                />
                <div className={styles.date}> {data.qoute.jdura} days</div>
              </div>
            </div>
            <div className={styles.iconslocationParent}>
              <img
                className={styles.iconscalendar}
                alt=""
                src="../iconslocation.svg"
              />
              <div className={styles.citiessummary3}>
                {data.qoute.caddy}
              </div>
            </div>
          </div>
          <div className={styles.largeButtons} style={largeButtons1Style}>
            <img
              className={styles.icons20pxplaceholder}
              alt=""
              src="../icons20pxplaceholder44.svg"
            />
            <b className={styles.date}>Mark Job as Completed</b>
            <img
              className={styles.icons20pxplaceholder}
              alt=""
              src="../icons20pxplaceholder44.svg"
            />
          </div>
          <div className={styles.starRating}>
            <div className={styles.transactionStatus}>
              <div className={styles.success}>completed</div>
            </div>
            <div className={styles.starRating1}>
              <img
                className={styles.icons16pxstar}
                alt=""
                src="../icons16pxstar265.svg"
              />
              <img
                className={styles.icons16pxstar}
                alt=""
                src="../icons16pxstar265.svg"
              />
              <img
                className={styles.icons16pxstar}
                alt=""
                src="../icons16pxstar265.svg"
              />
              <img
                className={styles.icons16pxstar}
                alt=""
                src="../icons16pxstar265.svg"
              />
              <img
                className={styles.icons16pxstar}
                alt=""
                src="../icons16pxstar269.svg"
              />
            </div>
          </div>
        </div>
      </div>
        );
      })
      :tab==1?
      futureData.map((data)=>{
        return(
          <div className={styles.bookingsCard}>
        <div className={styles.bookingsCard1}>
          <div className={styles.avatarParent}>
            <img className={styles.avatarIcon} alt="" src={avatarImageUrl} />
            <div className={styles.peoplenameParent}>
              <div className={styles.peoplename}>{data.pname}</div>
              <div className={styles.dateParent}>
                <div className={styles.date}>{data.qoute.jdate}</div>
                <div className={styles.frameChild} />
                <div className={styles.date}>{data.qoute.jtime}</div>
              </div>
            </div>
          </div>
          <div className={styles.electricianRequiredTo}>
           {data.qoute.jdesc}
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.iconscalendarParent}>
                <img
                  className={styles.iconscalendar}
                  alt=""
                  src="../iconscalendar21.svg"
                />
                <div className={styles.date}> {data.qoute.jdate}</div>
              </div>
              <div className={styles.iconscalendarParent}>
                <img
                  className={styles.iconscalendar}
                  alt=""
                  src="../iconsclock.svg"
                />
                <div className={styles.date}> {data.qoute.jtime}</div>
              </div>
              <div className={styles.iconscalendarParent}>
                <img
                  className={styles.iconscalendar}
                  alt=""
                  src="../iconsduration.svg"
                />
                <div className={styles.date}> {data.qoute.jdura} days</div>
              </div>
            </div>
            <div className={styles.iconslocationParent}>
              <img
                className={styles.iconscalendar}
                alt=""
                src="../iconslocation.svg"
              />
              <div className={styles.citiessummary3}>
                {data.qoute.caddy}
              </div>
            </div>
          </div>
          <div className={styles.largeButtons} style={largeButtons1Style}>
            <img
              className={styles.icons20pxplaceholder}
              alt=""
              src="../icons20pxplaceholder44.svg"
            />
            <b className={styles.date}>Mark Job as Completed</b>
            <img
              className={styles.icons20pxplaceholder}
              alt=""
              src="../icons20pxplaceholder44.svg"
            />
          </div>
          <div className={styles.starRating}>
            <div className={styles.transactionStatus}>
              <div className={styles.success}>completed</div>
            </div>
            <div className={styles.starRating1}>
              <img
                className={styles.icons16pxstar}
                alt=""
                src="../icons16pxstar265.svg"
              />
              <img
                className={styles.icons16pxstar}
                alt=""
                src="../icons16pxstar265.svg"
              />
              <img
                className={styles.icons16pxstar}
                alt=""
                src="../icons16pxstar265.svg"
              />
              <img
                className={styles.icons16pxstar}
                alt=""
                src="../icons16pxstar265.svg"
              />
              <img
                className={styles.icons16pxstar}
                alt=""
                src="../icons16pxstar269.svg"
              />
            </div>
          </div>
        </div>
      </div>
        );
      })
      :
      pastData.map((data)=>{
        return(
          <div className={styles.bookingsCard}>
        <div className={styles.bookingsCard1}>
          <div className={styles.avatarParent}>
            <img className={styles.avatarIcon} alt="" src={avatarImageUrl} />
            <div className={styles.peoplenameParent}>
              <div className={styles.peoplename}>{data.pname}</div>
              <div className={styles.dateParent}>
                <div className={styles.date}>{data.qoute.jdate}</div>
                <div className={styles.frameChild} />
                <div className={styles.date}>{data.qoute.jtime}</div>
              </div>
            </div>
          </div>
          <div className={styles.electricianRequiredTo}>
           {data.qoute.jdesc}
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.iconscalendarParent}>
                <img
                  className={styles.iconscalendar}
                  alt=""
                  src="../iconscalendar21.svg"
                />
                <div className={styles.date}> {data.qoute.jdate}</div>
              </div>
              <div className={styles.iconscalendarParent}>
                <img
                  className={styles.iconscalendar}
                  alt=""
                  src="../iconsclock.svg"
                />
                <div className={styles.date}> {data.qoute.jtime}</div>
              </div>
              <div className={styles.iconscalendarParent}>
                <img
                  className={styles.iconscalendar}
                  alt=""
                  src="../iconsduration.svg"
                />
                <div className={styles.date}> {data.qoute.jdura} days</div>
              </div>
            </div>
            <div className={styles.iconslocationParent}>
              <img
                className={styles.iconscalendar}
                alt=""
                src="../iconslocation.svg"
              />
              <div className={styles.citiessummary3}>
                {data.qoute.caddy}
              </div>
            </div>
          </div>
          <div className={styles.largeButtons} style={largeButtons1Style}>
            <img
              className={styles.icons20pxplaceholder}
              alt=""
              src="../icons20pxplaceholder44.svg"
            />
            <b className={styles.date}>Mark Job as Completed</b>
            <img
              className={styles.icons20pxplaceholder}
              alt=""
              src="../icons20pxplaceholder44.svg"
            />
          </div>
          <div className={styles.starRating}>
            <div className={styles.transactionStatus}>
              <div className={styles.success}>completed</div>
            </div>
            <div className={styles.starRating1}>
              <img
                className={styles.icons16pxstar}
                alt=""
                src="../icons16pxstar265.svg"
              />
              <img
                className={styles.icons16pxstar}
                alt=""
                src="../icons16pxstar265.svg"
              />
              <img
                className={styles.icons16pxstar}
                alt=""
                src="../icons16pxstar265.svg"
              />
              <img
                className={styles.icons16pxstar}
                alt=""
                src="../icons16pxstar265.svg"
              />
              <img
                className={styles.icons16pxstar}
                alt=""
                src="../icons16pxstar269.svg"
              />
            </div>
          </div>
        </div>
      </div>
        );
      })
    }
    </div>
  );
};

export default RNSContainer;
