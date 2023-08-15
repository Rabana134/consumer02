import { useMemo } from "react";
import styles from "./DysonContainer.module.css";

const DysonContainer = ({
  avatarSvgUrl,
  guaranteeSvgUrl,
  groupSvgUrl,
  vectorSvgUrl,
  iconsSvgUrl,
  avatarSvgUrl157,
  iconsSvgUrl16pxstar,
  iconsSvgUrl16pxstar3,
  iconsSvgUrl16pxstar78,
  iconsSvgUrl16pxstar32,
  iconsSvgUrl16pxstar24,
  iconsSvgUrl20pxplaceholde,
  avatarSvgUrl158,
  avatarCursor,
  propCursor,
  openFrame,
  onFrameContainer18Click,
  onAllContainerClick,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      cursor: avatarCursor,
    };
  }, [avatarCursor]);

  const allStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className={styles.mergeWrapper}>
      <div className={styles.merge}>
        <div className={styles.profileHeader}>
          <div className={styles.imgContainer}>
            <img
              className={styles.imgContainerChild}
              alt=""
              src="../frame-671852.svg"
            />
            <img
              className={styles.imgContainerItem}
              alt=""
              src="../frame-671863.svg"
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
          <div className={styles.profileHeader}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.avatarParent}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src={avatarSvgUrl}
                  />
                  <div className={styles.frameDiv}>
                    <div className={styles.frameDiv}>
                      <div className={styles.dysonElectricalsParent}>
                        <div className={styles.dysonElectricals}>
                          Dyson Electricals
                        </div>
                        <img
                          className={styles.guarantee1Icon}
                          alt=""
                          src={guaranteeSvgUrl}
                        />
                      </div>
                      <div className={styles.applianceRepair}>
                        Appliance repair
                      </div>
                    </div>
                    <div className={styles.memberSince2014}>
                      Member since 2014
                    </div>
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
                      src={groupSvgUrl}
                    />
                    <img
                      className={styles.ambassadorInner}
                      alt=""
                      src={vectorSvgUrl}
                    />
                    <div className={styles.ambassador1}>Ambassador</div>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src={iconsSvgUrl}
                    />
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
                  src="../icons20pxplaceholder100.svg"
                />
                <b className={styles.label}>Get quote</b>
                <img
                  className={styles.icons20pxplaceholder}
                  alt=""
                  src="../icons20pxplaceholder100.svg"
                />
              </div>
              <div
                className={styles.frameWrapper}
                style={frameDiv4Style}
                onClick={openFrame}
              >
                <div className={styles.shareParent}>
                  <b className={styles.share}>Share</b>
                  <img
                    className={styles.iconsshare}
                    alt=""
                    src="../iconsshare.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content1}>
          <div className={styles.title}>
            <div className={styles.twoTabSwitch}>
              <div
                className={styles.tab1Wrapper}
                onClick={onFrameContainer18Click}
              >
                <div className={styles.tab1}>Profile</div>
              </div>
              <div className={styles.tab2Wrapper}>
                <div className={styles.dysonElectricals}>Promotions</div>
              </div>
            </div>
            <div className={styles.tabsSubSwitch}>
              <div className={styles.allParent}>
                <div
                  className={styles.all}
                  style={allStyle}
                  onClick={onAllContainerClick}
                >
                  <div className={styles.booking}>Deal of the Day</div>
                </div>
                <div className={styles.booking1}>
                  <div className={styles.booking2}>Offers</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contentInner1}>
            <div className={styles.profilePromotionsParent}>
              <div className={styles.profilePromotions}>
                <img
                  className={styles.profilePromotionsChild}
                  alt=""
                  src="../frame-6713216@2x.png"
                />
                <div className={styles.profilePromotionsInner}>
                  <div className={styles.title}>
                    <div className={styles.avatarGroup}>
                      <img
                        className={styles.avatarIcon1}
                        alt=""
                        src={avatarSvgUrl157}
                      />
                      <div className={styles.businessName}>
                        Dyson Electricals
                      </div>
                    </div>
                    <div className={styles.ratings1}>
                      <div className={styles.starRating}>
                        <img
                          className={styles.guarantee1Icon}
                          alt=""
                          src={iconsSvgUrl16pxstar}
                        />
                        <img
                          className={styles.guarantee1Icon}
                          alt=""
                          src={iconsSvgUrl16pxstar3}
                        />
                        <img
                          className={styles.guarantee1Icon}
                          alt=""
                          src={iconsSvgUrl16pxstar78}
                        />
                        <img
                          className={styles.guarantee1Icon}
                          alt=""
                          src={iconsSvgUrl16pxstar32}
                        />
                        <img
                          className={styles.guarantee1Icon}
                          alt=""
                          src={iconsSvgUrl16pxstar24}
                        />
                      </div>
                      <div className={styles.ratingNumber}>5.0 (300K)</div>
                    </div>
                    <div className={styles.jobCategory}>Job category</div>
                    <div className={styles.offer}>
                      <span>{`Get `}</span>
                      <b>20%</b>
                      <span> off 5 weeks booking</span>
                    </div>
                    <div className={styles.countdown}>Deadline</div>
                    <div className={styles.largeButtons1}>
                      <img
                        className={styles.icons20pxplaceholder}
                        alt=""
                        src={iconsSvgUrl20pxplaceholde}
                      />
                      <b className={styles.ratingNumber}>Get quote</b>
                      <img
                        className={styles.icons20pxplaceholder}
                        alt=""
                        src="../icons20pxplaceholder84.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.profilePromotions1}>
                <img
                  className={styles.profilePromotionsChild}
                  alt=""
                  src="../frame-6713216@2x.png"
                />
                <div className={styles.profilePromotionsInner}>
                  <div className={styles.title}>
                    <div className={styles.avatarGroup}>
                      <img
                        className={styles.avatarIcon1}
                        alt=""
                        src={avatarSvgUrl158}
                      />
                      <div className={styles.businessName}>
                        Dyson Electricals
                      </div>
                    </div>
                    <div className={styles.ratings1}>
                      <div className={styles.starRating}>
                        <img
                          className={styles.guarantee1Icon}
                          alt=""
                          src="../icons16pxstar265.svg"
                        />
                        <img
                          className={styles.guarantee1Icon}
                          alt=""
                          src="../icons16pxstar265.svg"
                        />
                        <img
                          className={styles.guarantee1Icon}
                          alt=""
                          src="../icons16pxstar265.svg"
                        />
                        <img
                          className={styles.guarantee1Icon}
                          alt=""
                          src="../icons16pxstar265.svg"
                        />
                        <img
                          className={styles.guarantee1Icon}
                          alt=""
                          src="../icons16pxstar269.svg"
                        />
                      </div>
                      <div className={styles.ratingNumber}>5.0 (300K)</div>
                    </div>
                    <div className={styles.jobCategory}>Job category</div>
                    <div className={styles.offer}>
                      <span>{`Get `}</span>
                      <b>20%</b>
                      <span> off 5 weeks booking</span>
                    </div>
                    <div className={styles.countdown}>Deadline</div>
                    <div className={styles.largeButtons1}>
                      <img
                        className={styles.icons20pxplaceholder}
                        alt=""
                        src="../icons20pxplaceholder84.svg"
                      />
                      <b className={styles.ratingNumber}>Get quote</b>
                      <img
                        className={styles.icons20pxplaceholder}
                        alt=""
                        src="../icons20pxplaceholder84.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DysonContainer;
