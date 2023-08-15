import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import CarpenterContainer from "../components/CarpenterContainer";
import PrototypeContainer3 from "../components/PrototypeContainer3";
import styles from "./HOME2.module.css";
import { auth, db } from "../firebase";

const HOME2 = () => {
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);
  const [promo, setPromo] = useState([])
  useEffect(() => {
         const fetchData = async () => {
     await new Promise(resolve => setTimeout(resolve, 1000));
       if(auth.currentUser){
   navigator.geolocation.getCurrentPosition(function(position) {
      db.collection('customers').doc(auth.currentUser.uid).update({
         lat:position.coords.latitude,
        lng:position.coords.longitude
      })
    });
     db.collection('customers').doc(auth.currentUser.uid).get().then(function(snapshot) {
            if(snapshot.data())
            {
              let lat = snapshot.data().lat
              let lng = snapshot.data().lng
              let distance = 5
              fetchJob(lat,lng,distance);
            }
          });
  }
  };
   const fetchJob = (lat,lng,distance) => {
       const unsubscribe = 
       db
      .collection('promo')
      .orderBy('stamp', 'desc')
      .onSnapshot((snapshot) => {
        const jobsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        // Filter jobs within the selected distance
        const filteredList = jobsData.filter((job) => {
          const jobLatitude = job.lat;
          const jobLongitude = job.lng;

          const jobDistance = calculateDistance(lat, lng, jobLatitude, jobLongitude);

          return jobDistance <= distance;
        });

        setPromo(filteredList);
      });

    return () => {
      unsubscribe();
    };
    };

  fetchData();
  }, [])
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = degreesToRadians(lat2 - lat1);
    const dLon = degreesToRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degreesToRadians(lat1)) *
        Math.cos(degreesToRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    return milesToKilometers(distance);
  };

  const degreesToRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  };

  const milesToKilometers = (miles) => {
    return miles * 1.60934;
  };

  const onSmallButtonsContainer4Click = useCallback(() => {
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

  const onProfessionalPillContainer1Click = useCallback(() => {
    navigate("/home4");
  }, [navigate]);

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

  const onDealOfTheDayClick = useCallback(() => {
    navigate("/home3");
  }, [navigate]);

  return (
    <>
      <div className={styles.home}>
        <div className={styles.homeInner}>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../rectangle-12196@2x.png"
              />
              <div className={styles.content}>
                <img
                  className={styles.contentChild}
                  alt=""
                  src="../ellipse-2534.svg"
                />
                <img
                  className={styles.contentChild}
                  alt=""
                  src="../ellipse-2544.svg"
                />
                <img
                  className={styles.contentChild}
                  alt=""
                  src="../ellipse-2544.svg"
                />
                <img
                  className={styles.contentChild}
                  alt=""
                  src="../ellipse-2544.svg"
                />
                <img
                  className={styles.contentChild}
                  alt=""
                  src="../ellipse-2544.svg"
                />
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.dealOfTheDayParent}>
                <div className={styles.dealOfThe}>Deal of the day</div>
                <div className={styles.frameGroup}>
                  <div className={styles.dealOfTheDayGroup}>
                    <div
                      className={styles.dealOfTheDay}
                      onClick={onDealOfTheDayClick}
                    >
                      <img
                        className={styles.dealOfTheDayChild}
                        alt=""
                        src="../frame-6713212@2x.png"
                      />
                      <div className={styles.dealOfTheDayInner}>
                        <div className={styles.frameContainer}>
                          <div className={styles.frameDiv}>
                            <div className={styles.colParent}>
                              <div className={styles.col}>
                                <div className={styles.avatarName}>
                                  <img
                                    className={styles.avatarIcon}
                                    alt=""
                                    src="../avatar.svg"
                                  />
                                  <div className={styles.businessName}>
                                    Dyson Electricals
                                  </div>
                                </div>
                                <div className={styles.ratings}>
                                  <div className={styles.starRating}>
                                    <img
                                      className={styles.icons16pxstar}
                                      alt=""
                                      src="../icons16pxstar.svg"
                                    />
                                    <img
                                      className={styles.icons16pxstar}
                                      alt=""
                                      src="../icons16pxstar.svg"
                                    />
                                    <img
                                      className={styles.icons16pxstar}
                                      alt=""
                                      src="../icons16pxstar.svg"
                                    />
                                    <img
                                      className={styles.icons16pxstar3}
                                      alt=""
                                      src="../icons16pxstar3.svg"
                                    />
                                    <img
                                      className={styles.icons16pxstar}
                                      alt=""
                                      src="../icons16pxstar4.svg"
                                    />
                                  </div>
                                  <div className={styles.ratingNumber}>
                                    5.0 (300K)
                                  </div>
                                </div>
                              </div>
                              <div className={styles.jobCategoryWrapper}>
                                <div className={styles.ratingNumber}>
                                  Job category
                                </div>
                              </div>
                            </div>
                            <div className={styles.offerParent}>
                              <div className={styles.ratingNumber}>
                                <span>{`Get `}</span>
                                <span className={styles.span}>20%</span>
                                <span> off 5 weeks booking</span>
                              </div>
                              <div className={styles.countdown}>04:34:40</div>
                            </div>
                          </div>
                          <div className={styles.smallButtons}>
                            <div className={styles.buttonWrapper}>
                              <div className={styles.button}>Request Quote</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.dealOfTheDay1}>
                      <img
                        className={styles.dealOfTheDayChild}
                        alt=""
                        src="../frame-6713213@2x.png"
                      />
                      <div className={styles.dealOfTheDayInner}>
                        <div className={styles.frameContainer}>
                          <div className={styles.frameDiv}>
                            <div className={styles.colParent}>
                              <div className={styles.col}>
                                <div className={styles.avatarName}>
                                  <img
                                    className={styles.avatarIcon}
                                    alt=""
                                    src="../avatar.svg"
                                  />
                                  <div className={styles.businessName}>
                                    Kisan Traders
                                  </div>
                                </div>
                                <div className={styles.ratings}>
                                  <div className={styles.starRating}>
                                    <img
                                      className={styles.icons16pxstar}
                                      alt=""
                                      src="../icons16pxstar.svg"
                                    />
                                    <img
                                      className={styles.icons16pxstar}
                                      alt=""
                                      src="../icons16pxstar.svg"
                                    />
                                    <img
                                      className={styles.icons16pxstar}
                                      alt=""
                                      src="../icons16pxstar.svg"
                                    />
                                    <img
                                      className={styles.icons16pxstar3}
                                      alt=""
                                      src="../icons16pxstar3.svg"
                                    />
                                    <img
                                      className={styles.icons16pxstar}
                                      alt=""
                                      src="../icons16pxstar4.svg"
                                    />
                                  </div>
                                  <div className={styles.ratingNumber}>
                                    5.0 (300K)
                                  </div>
                                </div>
                              </div>
                              <div className={styles.jobCategoryWrapper}>
                                <div className={styles.ratingNumber}>
                                  Job category
                                </div>
                              </div>
                            </div>
                            <div className={styles.offerParent}>
                              <div className={styles.ratingNumber}>
                                Spend $100 and get 20% off
                              </div>
                              <div className={styles.countdown}>
                                Ends in 0d:0h:0m:0s
                              </div>
                            </div>
                          </div>
                          <div className={styles.smallButtons}>
                            <div className={styles.buttonWrapper}>
                              <div className={styles.button}>Request Quote</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.dealOfTheDayGroup}>
                    <div className={styles.dealOfTheDay1}>
                      <img
                        className={styles.dealOfTheDayChild}
                        alt=""
                        src="../frame-6713214@2x.png"
                      />
                      <div className={styles.dealOfTheDayInner}>
                        <div className={styles.frameContainer}>
                          <div className={styles.frameDiv}>
                            <div className={styles.colParent}>
                              <div className={styles.col}>
                                <div className={styles.avatarName}>
                                  <img
                                    className={styles.avatarIcon}
                                    alt=""
                                    src="../avatar.svg"
                                  />
                                  <div className={styles.businessName}>
                                    RNS products
                                  </div>
                                </div>
                                <div className={styles.ratings}>
                                  <div className={styles.starRating}>
                                    <img
                                      className={styles.icons16pxstar}
                                      alt=""
                                      src="../icons16pxstar.svg"
                                    />
                                    <img
                                      className={styles.icons16pxstar}
                                      alt=""
                                      src="../icons16pxstar.svg"
                                    />
                                    <img
                                      className={styles.icons16pxstar}
                                      alt=""
                                      src="../icons16pxstar.svg"
                                    />
                                    <img
                                      className={styles.icons16pxstar3}
                                      alt=""
                                      src="../icons16pxstar3.svg"
                                    />
                                    <img
                                      className={styles.icons16pxstar}
                                      alt=""
                                      src="../icons16pxstar4.svg"
                                    />
                                  </div>
                                  <div className={styles.ratingNumber}>
                                    5.0 (300K)
                                  </div>
                                </div>
                              </div>
                              <div className={styles.jobCategoryWrapper}>
                                <div className={styles.ratingNumber}>
                                  Job category
                                </div>
                              </div>
                            </div>
                            <div className={styles.offerParent}>
                              <div className={styles.ratingNumber}>
                                Spend $100 and get 20% off
                              </div>
                              <div className={styles.countdown}>
                                Ends in 0d:0h:0m:0s
                              </div>
                            </div>
                          </div>
                          <div className={styles.smallButtons}>
                            <div className={styles.buttonWrapper}>
                              <div className={styles.button}>Request Quote</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.dealOfTheDay1}>
                      <img
                        className={styles.dealOfTheDayChild}
                        alt=""
                        src="../frame-6713215@2x.png"
                      />
                      <div className={styles.dealOfTheDayInner}>
                        <div className={styles.frameContainer}>
                          <div className={styles.frameDiv}>
                            <div className={styles.colParent}>
                              <div className={styles.col}>
                                <div className={styles.avatarName}>
                                  <img
                                    className={styles.avatarIcon}
                                    alt=""
                                    src="../avatar.svg"
                                  />
                                  <div className={styles.businessName}>
                                    Bifrost Connect
                                  </div>
                                </div>
                                <div className={styles.ratings}>
                                  <div className={styles.starRating}>
                                    <img
                                      className={styles.icons16pxstar}
                                      alt=""
                                      src="../icons16pxstar.svg"
                                    />
                                    <img
                                      className={styles.icons16pxstar}
                                      alt=""
                                      src="../icons16pxstar.svg"
                                    />
                                    <img
                                      className={styles.icons16pxstar}
                                      alt=""
                                      src="../icons16pxstar.svg"
                                    />
                                    <img
                                      className={styles.icons16pxstar3}
                                      alt=""
                                      src="../icons16pxstar3.svg"
                                    />
                                    <img
                                      className={styles.icons16pxstar}
                                      alt=""
                                      src="../icons16pxstar4.svg"
                                    />
                                  </div>
                                  <div className={styles.ratingNumber}>
                                    5.0 (300K)
                                  </div>
                                </div>
                              </div>
                              <div className={styles.jobCategoryWrapper}>
                                <div className={styles.ratingNumber}>
                                  Job category
                                </div>
                              </div>
                            </div>
                            <div className={styles.offerParent}>
                              <div className={styles.ratingNumber}>
                                Spend $100 and get 20% off
                              </div>
                              <div className={styles.countdown}>
                                Ends in 0d:0h:0m:0s
                              </div>
                            </div>
                          </div>
                          <div className={styles.smallButtons}>
                            <div className={styles.buttonWrapper}>
                              <div className={styles.button}>Request Quote</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.dealOfTheDayParent}>
                <div className={styles.dealOfThe}>Offers</div>
                <div className={styles.frameWrapper}>
                  <div className={styles.dealOfTheDayGroup}>
                    <div className={styles.offers1}>
                      <img
                        className={styles.offersChild}
                        alt=""
                        src="../frame-671236.svg"
                      />
                      <div className={styles.businessNameAndAvatarParent}>
                        <div className={styles.frameParent8}>
                          <div className={styles.frameParent8}>
                            <div className={styles.businessNameAndAvatarParent}>
                              <div className={styles.businessNameAndAvatar}>
                                <img
                                  className={styles.avatarIcon4}
                                  alt=""
                                  src="../avatar64.svg"
                                />
                                <div className={styles.businessName}>
                                  Fruit and Vegetable Supplyers
                                </div>
                              </div>
                              <div className={styles.ratings4}>
                                <div className={styles.starRating}>
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar24.svg"
                                  />
                                </div>
                                <div className={styles.ratingNumber}>
                                  5.0 (300K)
                                </div>
                              </div>
                            </div>
                            <div className={styles.jobCategory4}>
                              Job category | Distance
                            </div>
                          </div>
                          <div className={styles.offerParent2}>
                            <div className={styles.offer4}>
                              Offer description
                            </div>
                            <div className={styles.countdown4}>Deadline</div>
                          </div>
                        </div>
                        <div className={styles.largeButtons}>
                          <img
                            className={styles.icons20pxplaceholder}
                            alt=""
                            src="../icons20pxplaceholder48.svg"
                          />
                          <b className={styles.ratingNumber}>Get quote</b>
                          <img
                            className={styles.icons20pxplaceholder}
                            alt=""
                            src="../icons20pxplaceholder48.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.offers1}>
                      <img
                        className={styles.offersChild}
                        alt=""
                        src="../frame-671237.svg"
                      />
                      <div className={styles.businessNameAndAvatarParent}>
                        <div className={styles.frameParent8}>
                          <div className={styles.frameParent8}>
                            <div className={styles.businessNameAndAvatarParent}>
                              <div className={styles.businessNameAndAvatar}>
                                <img
                                  className={styles.avatarIcon4}
                                  alt=""
                                  src="../avatar65.svg"
                                />
                                <div className={styles.businessName}>
                                  Lakhey Trading Company
                                </div>
                              </div>
                              <div className={styles.ratings4}>
                                <div className={styles.starRating}>
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar24.svg"
                                  />
                                </div>
                                <div className={styles.ratingNumber}>
                                  5.0 (300K)
                                </div>
                              </div>
                            </div>
                            <div className={styles.jobCategory4}>
                              Job category | Distance
                            </div>
                          </div>
                          <div className={styles.offerParent2}>
                            <div className={styles.offer4}>
                              Offer description
                            </div>
                            <div className={styles.countdown4}>Deadline</div>
                          </div>
                        </div>
                        <div className={styles.largeButtons}>
                          <img
                            className={styles.icons20pxplaceholder}
                            alt=""
                            src="../icons20pxplaceholder.svg"
                          />
                          <b className={styles.ratingNumber}>Get quote</b>
                          <img
                            className={styles.icons20pxplaceholder}
                            alt=""
                            src="../icons20pxplaceholder.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.offers1}>
                      <img
                        className={styles.offersChild}
                        alt=""
                        src="../frame-671238.svg"
                      />
                      <div className={styles.businessNameAndAvatarParent}>
                        <div className={styles.frameParent8}>
                          <div className={styles.frameParent8}>
                            <div className={styles.businessNameAndAvatarParent}>
                              <div className={styles.businessNameAndAvatar}>
                                <img
                                  className={styles.avatarIcon4}
                                  alt=""
                                  src="../avatar66.svg"
                                />
                                <div className={styles.businessName}>
                                  VIP IMPORT EXPORT
                                </div>
                              </div>
                              <div className={styles.ratings4}>
                                <div className={styles.starRating}>
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar24.svg"
                                  />
                                </div>
                                <div className={styles.ratingNumber}>
                                  5.0 (300K)
                                </div>
                              </div>
                            </div>
                            <div className={styles.jobCategory4}>
                              Job category | Distance
                            </div>
                          </div>
                          <div className={styles.offerParent2}>
                            <div className={styles.offer4}>
                              Offer description
                            </div>
                            <div className={styles.countdown4}>Deadline</div>
                          </div>
                        </div>
                        <div className={styles.largeButtons}>
                          <img
                            className={styles.icons20pxplaceholder}
                            alt=""
                            src="../icons20pxplaceholder.svg"
                          />
                          <b className={styles.ratingNumber}>Get quote</b>
                          <img
                            className={styles.icons20pxplaceholder}
                            alt=""
                            src="../icons20pxplaceholder.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.dealOfTheDayParent}>
                <div className={styles.dealOfThe}>Recommendations</div>
                <div className={styles.frameParent16}>
                  <div className={styles.dealOfTheDayGroup}>
                    <div className={styles.professionals1}>
                      <img
                        className={styles.imageIcon}
                        alt=""
                        src="../image27.svg"
                      />
                      <div className={styles.description}>
                        <div className={styles.descriptionInner}>
                          <div className={styles.frameParent17}>
                            <div className={styles.frameParent17}>
                              <div className={styles.avatarParent}>
                                <img
                                  className={styles.avatarIcon4}
                                  alt=""
                                  src="../avatar67.svg"
                                />
                                <div className={styles.dealOfThe}>
                                  Dyson Electricals
                                </div>
                              </div>
                              <div className={styles.ratings7}>
                                <div className={styles.starRating}>
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar24.svg"
                                  />
                                </div>
                                <div className={styles.ratingNumber7}>
                                  5.0 (300K)
                                </div>
                              </div>
                            </div>
                            <div className={styles.jobCategory7}>
                              Job category | Distance
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.professionals1}>
                      <img
                        className={styles.imageIcon}
                        alt=""
                        src="../image28.svg"
                      />
                      <div className={styles.description}>
                        <div className={styles.descriptionInner}>
                          <div className={styles.frameParent17}>
                            <div className={styles.frameParent17}>
                              <div className={styles.avatarParent}>
                                <img
                                  className={styles.avatarIcon4}
                                  alt=""
                                  src="../avatar68.svg"
                                />
                                <div className={styles.dealOfThe}>
                                  Clifton Bakery
                                </div>
                              </div>
                              <div className={styles.ratings7}>
                                <div className={styles.starRating}>
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar24.svg"
                                  />
                                </div>
                                <div className={styles.ratingNumber7}>
                                  5.0 (300K)
                                </div>
                              </div>
                            </div>
                            <div className={styles.jobCategory7}>
                              Job category | Distance
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.professionals1}>
                      <img
                        className={styles.imageIcon}
                        alt=""
                        src="../image29.svg"
                      />
                      <div className={styles.description}>
                        <div className={styles.descriptionInner}>
                          <div className={styles.frameParent17}>
                            <div className={styles.frameParent17}>
                              <div className={styles.avatarParent}>
                                <img
                                  className={styles.avatarIcon4}
                                  alt=""
                                  src="../avatar69.svg"
                                />
                                <div
                                  className={styles.dealOfThe}
                                >{`Farm Door `}</div>
                              </div>
                              <div className={styles.ratings7}>
                                <div className={styles.starRating}>
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar24.svg"
                                  />
                                </div>
                                <div className={styles.ratingNumber7}>
                                  5.0 (300K)
                                </div>
                              </div>
                            </div>
                            <div className={styles.jobCategory7}>
                              Job category | Distance
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.dealOfTheDayGroup}>
                    <div className={styles.professionals1}>
                      <img
                        className={styles.imageIcon}
                        alt=""
                        src="../image30.svg"
                      />
                      <div className={styles.description}>
                        <div className={styles.descriptionInner}>
                          <div className={styles.frameParent17}>
                            <div className={styles.frameParent17}>
                              <div className={styles.avatarParent}>
                                <img
                                  className={styles.avatarIcon4}
                                  alt=""
                                  src="../avatar70.svg"
                                />
                                <div className={styles.dealOfThe}>
                                  Carly's Thrift
                                </div>
                              </div>
                              <div className={styles.ratings7}>
                                <div className={styles.starRating}>
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar24.svg"
                                  />
                                </div>
                                <div className={styles.ratingNumber7}>
                                  5.0 (300K)
                                </div>
                              </div>
                            </div>
                            <div className={styles.jobCategory7}>
                              Job category | Distance
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.professionals1}>
                      <img
                        className={styles.imageIcon}
                        alt=""
                        src="../image31.svg"
                      />
                      <div className={styles.description}>
                        <div className={styles.descriptionInner}>
                          <div className={styles.frameParent17}>
                            <div className={styles.frameParent17}>
                              <div className={styles.avatarParent}>
                                <img
                                  className={styles.avatarIcon4}
                                  alt=""
                                  src="../avatar71.svg"
                                />
                                <div
                                  className={styles.dealOfThe}
                                >{`Moma's Kitchen `}</div>
                              </div>
                              <div className={styles.ratings7}>
                                <div className={styles.starRating}>
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar24.svg"
                                  />
                                </div>
                                <div className={styles.ratingNumber7}>
                                  5.0 (300K)
                                </div>
                              </div>
                            </div>
                            <div className={styles.jobCategory7}>
                              Job category | Distance
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.professionals1}>
                      <img
                        className={styles.imageIcon}
                        alt=""
                        src="../image32.svg"
                      />
                      <div className={styles.description}>
                        <div className={styles.descriptionInner}>
                          <div className={styles.frameParent17}>
                            <div className={styles.frameParent17}>
                              <div className={styles.avatarParent}>
                                <img
                                  className={styles.avatarIcon4}
                                  alt=""
                                  src="../avatar72.svg"
                                />
                                <div className={styles.dealOfThe}>
                                  Brick's Pizza
                                </div>
                              </div>
                              <div className={styles.ratings7}>
                                <div className={styles.starRating}>
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar3.svg"
                                  />
                                  <img
                                    className={styles.icons16pxstar3}
                                    alt=""
                                    src="../icons16pxstar24.svg"
                                  />
                                </div>
                                <div className={styles.ratingNumber7}>
                                  5.0 (300K)
                                </div>
                              </div>
                            </div>
                            <div className={styles.jobCategory7}>
                              Job category | Distance
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.dealOfTheDayParent}>
                <div className={styles.dealOfThe}>Explore popular services</div>
                <div className={styles.frameParent29}>
                  <div className={styles.dealOfTheDayGroup}>
                    <div className={styles.services}>
                      <img
                        className={styles.imgIcon}
                        alt=""
                        src="../img8@2x.png"
                      />
                      <div className={styles.profiledescription}>
                        <div className={styles.buttonWrapper}>
                          <div className={styles.electriciansWrapper}>
                            <div className={styles.electricians}>
                              Electricians
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.services}>
                      <img
                        className={styles.imgIcon}
                        alt=""
                        src="../img9@2x.png"
                      />
                      <div className={styles.profiledescription}>
                        <div className={styles.buttonWrapper}>
                          <div className={styles.electriciansWrapper}>
                            <div className={styles.electricians}>
                              Dry Cleaner
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.services}>
                      <img
                        className={styles.imgIcon}
                        alt=""
                        src="../img10@2x.png"
                      />
                      <div className={styles.profiledescription}>
                        <div className={styles.buttonWrapper}>
                          <div className={styles.electriciansWrapper}>
                            <div className={styles.electricians}>
                              Short order cook
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.dealOfTheDayGroup}>
                    <div className={styles.services}>
                      <img
                        className={styles.imgIcon}
                        alt=""
                        src="../img11@2x.png"
                      />
                      <div className={styles.profiledescription}>
                        <div className={styles.buttonWrapper}>
                          <div className={styles.electriciansWrapper}>
                            <div className={styles.electricians}>
                              Disk Jockey
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.services}>
                      <img
                        className={styles.imgIcon}
                        alt=""
                        src="../img12@2x.png"
                      />
                      <div className={styles.profiledescription}>
                        <div className={styles.buttonWrapper}>
                          <div className={styles.electriciansWrapper}>
                            <div className={styles.electricians}>
                              Carpenters
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.services}>
                      <img
                        className={styles.imgIcon}
                        alt=""
                        src="../img13@2x.png"
                      />
                      <div className={styles.profiledescription}>
                        <div className={styles.buttonWrapper}>
                          <div className={styles.electriciansWrapper}>
                            <div className={styles.electricians}>Therapist</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CarpenterNavContainer
          addIconUrl="../icons16pxadd128.svg"
          searchIconUrl="../icons20pxsearch74.svg"
          paymentType="Activities"
          addIcon4Url="../icons16pxadd129.svg"
          propDisplay2="unset"
          propDisplay3="none"
          propCursor="unset"
          propDisplay4="none"
          onSmallButtonsContainerClick={onSmallButtonsContainer4Click}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
        />
        <div className={styles.homeChild}>
          <div className={styles.dealOfTheDayParent}>
            <div className={styles.promotionsParent}>
              <div className={styles.promotions}>Promotions</div>
              <div className={styles.adsWrapper}>
                <div className={styles.ads}>Ads</div>
              </div>
            </div>
            <div className={styles.promotions1}>
            {
                promo.map(data=>{
                  return(
                      <div className={styles.promotions2}>
                <div className={styles.imgWrapper}>
                  <img className={styles.imgIcon6} alt="" src={data.image} />
                </div>
                <div className={styles.description6}>
                  <div className={styles.descriptionInner5}>
                    <div className={styles.frameParent31}>
                      <div className={styles.colParent}>
                        <div className={styles.businessNameAndAvatar3}>
                          <img
                            className={styles.avatarIcon4}
                            alt=""
                            src="../avatar73.svg"
                          />
                          <div className={styles.businessName}>
                           {data.name}
                          </div>
                        </div>
                        <div className={styles.ratings13}>
                          <div className={styles.starRating}>
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar3.svg"
                            />
                            <img
                              className={styles.icons16pxstar3}
                              alt=""
                              src="../icons16pxstar24.svg"
                            />
                          </div>
                          <div className={styles.ratingNumber}>5.0 (300K)</div>
                        </div>
                      </div>
                      <div className={styles.jobCategory13}>
                        {data.tags.map(tag=>{
                          return(
                            <div style={{display:'flex'}}>
                            {tag+' '}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                  <div className={styles.largeButtons3}>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder.svg"
                    />
                    <b className={styles.ratingNumber}>Get quote</b>
                    <img
                      className={styles.icons20pxplaceholder}
                      alt=""
                      src="../icons20pxplaceholder.svg"
                    />
                  </div>
                </div>
              </div>
                  )
                })
              }
             
            </div>
          </div>
        </div>
        <CarpenterContainer
          iconImageUrl="../iconsplaceholder62.svg"
          categoryIconImageUrl="../iconscategories18.svg"
          cleaningIconImageUrl="../iconscleaning1.svg"
          entertainmentIconImageUrl="../iconsentertainment1.svg"
          healthIconImageUrl="../iconshealth1.svg"
          propWidth="792px"
          propCursor="pointer"
          onProfessionalPillContainer1Click={onProfessionalPillContainer1Click}
        />
        <PrototypeContainer3
          frameImageUrl="https://www.twilio.com/login"
          iconImageUrl="https://www.twilio.com/login"
          onDefaultContainerClick={onDefaultContainerClick}
          onDefaultContainer1Click={onDefaultContainer1Click}
          onDefaultContainer2Click={onDefaultContainer2Click}
          onDefaultContainer3Click={onDefaultContainer3Click}
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

export default HOME2;
