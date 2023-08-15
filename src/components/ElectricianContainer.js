import styles from "./ElectricianContainer.module.css";

const ElectricianContainer = ({
  svgImageUrl,
  starIconUrl,
  starIcon16pxUrl,
  starIcon16px3Url,
  starIcon16px3to119Url,
  starIcon16px24to119Url,
  imageSvgUrl,
  starIcon16px3to78Url,
  starIcon16px3to78Url2,
  starIcon16px3to78Url3,
  starIcon16px3to78Url4,
  starIcon16px24to119Url2,
  image2to20SvgUrl,
  starIcon16px3to78Url5,
  starIcon16px3to78Url6,
  starIcon16px3to78Url7,
  starIcon16px3to78Url8,
  starIcon16px24to119Url3,
}) => {
  return (
    <div className={styles.electriciansNearYouParent}>
      <div className={styles.electriciansNearYou}>Electricians near you</div>
      <div className={styles.professionalsParent}>
        <div className={styles.professionals}>
          <img className={styles.imageIcon} alt="" src={svgImageUrl} />
          <div className={styles.description}>
            <div className={styles.descriptionInner}>
              <div className={styles.frameParent}>
                <div className={styles.frameParent}>
                  <div className={styles.avatarParent}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="../avatar4.svg"
                    />
                    <div className={styles.electriciansNearYou}>
                      Taco Two Day's
                    </div>
                  </div>
                  <div className={styles.ratings}>
                    <div className={styles.starRating}>
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src={starIconUrl}
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src={starIcon16pxUrl}
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src={starIcon16px3Url}
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src={starIcon16px3to119Url}
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src={starIcon16px24to119Url}
                      />
                    </div>
                    <div className={styles.ratingNumber}>5.0 (300K)</div>
                  </div>
                </div>
                <div className={styles.jobCategory}>
                  Job category | Distance
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.professionals}>
          <img className={styles.imageIcon} alt="" src={imageSvgUrl} />
          <div className={styles.description}>
            <div className={styles.descriptionInner}>
              <div className={styles.frameParent}>
                <div className={styles.frameParent}>
                  <div className={styles.avatarParent}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="../avatar4.svg"
                    />
                    <div
                      className={styles.electriciansNearYou}
                    >{`Moma's Kitchen `}</div>
                  </div>
                  <div className={styles.ratings}>
                    <div className={styles.starRating}>
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src={starIcon16px3to78Url}
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src={starIcon16px3to78Url2}
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src={starIcon16px3to78Url3}
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src={starIcon16px3to78Url4}
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src={starIcon16px24to119Url2}
                      />
                    </div>
                    <div className={styles.ratingNumber}>5.0 (300K)</div>
                  </div>
                </div>
                <div className={styles.jobCategory}>
                  Job category | Distance
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.professionals}>
          <img className={styles.imageIcon} alt="" src={image2to20SvgUrl} />
          <div className={styles.description}>
            <div className={styles.descriptionInner}>
              <div className={styles.frameParent}>
                <div className={styles.frameParent}>
                  <div className={styles.avatarParent}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="../avatar4.svg"
                    />
                    <div
                      className={styles.electriciansNearYou}
                    >{`Dog & Brew`}</div>
                  </div>
                  <div className={styles.ratings}>
                    <div className={styles.starRating}>
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src={starIcon16px3to78Url5}
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src={starIcon16px3to78Url6}
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src={starIcon16px3to78Url7}
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src={starIcon16px3to78Url8}
                      />
                      <img
                        className={styles.icons16pxstar}
                        alt=""
                        src={starIcon16px24to119Url3}
                      />
                    </div>
                    <div className={styles.ratingNumber}>5.0 (300K)</div>
                  </div>
                </div>
                <div className={styles.jobCategory}>
                  Job category | Distance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricianContainer;
