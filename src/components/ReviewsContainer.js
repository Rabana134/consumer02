import styles from "./ReviewsContainer.module.css";

const ReviewsContainer = ({
  svgImageUrl,
  avatarImageUrl,
  starImageUrl,
  star78ImageUrl,
  star119ImageUrl,
  star78ImageUrl2,
  star119ImageUrl2,
  avatar116ImageUrl,
  star78ImageUrl3,
  star78ImageUrl4,
  star78Count,
  star78Count2,
  star119Count,
  group66678ImageUrl,
  group66679ImageUrl,
  group66680ImageUrl,
  group666781ImageUrl,
  group666791ImageUrl,
  group666801ImageUrl,
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.reviewsParent}>
          <div className={styles.reviews}>Reviews</div>
          <div className={styles.groupParent}>
            <div className={styles.groupContainer}>
              <div className={styles.parent}>
                <div className={styles.div}>
                  <span>4.6</span>
                  <span className={styles.span}>{` `}</span>
                </div>
                <div className={styles.reviews1}>(56 Reviews)</div>
              </div>
              <img className={styles.groupChild} alt="" />
            </div>
            <div className={styles.reviewBarParent}>
              <div className={styles.reviewBar}>
                <div className={styles.stars}>5 Stars</div>
                <div className={styles.wrapper}>
                  <div className={styles.div1} />
                </div>
                <div className={styles.div2}>(16)</div>
              </div>
              <div className={styles.reviewBar}>
                <div className={styles.stars}>4 Stars</div>
                <div className={styles.wrapper}>
                  <div className={styles.div1} />
                </div>
                <div className={styles.div2}>(16)</div>
              </div>
              <div className={styles.reviewBar}>
                <div className={styles.stars}>3 Stars</div>
                <div className={styles.wrapper}>
                  <div className={styles.div1} />
                </div>
                <div className={styles.div2}>(16)</div>
              </div>
              <div className={styles.reviewBar}>
                <div className={styles.stars}>2 Stars</div>
                <div className={styles.wrapper}>
                  <div className={styles.div1} />
                </div>
                <div className={styles.div2}>(16)</div>
              </div>
              <div className={styles.reviewBar}>
                <div className={styles.stars}>1 Star</div>
                <div className={styles.wrapper}>
                  <div className={styles.div1} />
                </div>
                <div className={styles.div2}>(16)</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.reviewsGroup}>
            <div className={styles.reviews2}>
              <div className={styles.frameParent1}>
                <div className={styles.avatarParent}>
                  <img className={styles.avatarIcon} alt="" />
                  <div className={styles.peoplenameParent}>
                    <div className={styles.peoplename}>Avigdor Branca</div>
                    <div className={styles.jun2021}>09 Jun 2021 | 9:30 AM</div>
                  </div>
                </div>
                <div className={styles.starRatingWrapper}>
                  <div className={styles.starRating}>
                    <img className={styles.icons16pxstar} alt="" />
                    <img className={styles.icons16pxstar} alt="" />
                    <img className={styles.icons16pxstar} alt="" />
                    <img className={styles.icons16pxstar} alt="" />
                    <img className={styles.icons16pxstar} alt="" />
                  </div>
                </div>
              </div>
              <div
                className={styles.iAmEnjoying}
              >{`I am enjoying these “computer” speakers. They are sinced with my phone. I had Bose speakers and bought these as a replacement. It took me awhile to get the Bluetooth to work with my phone. `}</div>
            </div>
            <div className={styles.reviews2}>
              <div className={styles.frameParent1}>
                <div className={styles.avatarParent}>
                  <img className={styles.avatarIcon} alt="" />
                  <div className={styles.peoplenameParent}>
                    <div className={styles.peoplename}>Avigdor Branca</div>
                    <div className={styles.jun2021}>09 Jun 2021 | 9:30 AM</div>
                  </div>
                </div>
                <div className={styles.starRatingWrapper}>
                  <div className={styles.starRating}>
                    <img className={styles.icons16pxstar} alt="" />
                    <img className={styles.icons16pxstar} alt="" />
                    <img className={styles.icons16pxstar} alt="" />
                    <img className={styles.icons16pxstar} alt="" />
                    <img className={styles.icons16pxstar} alt="" />
                  </div>
                </div>
              </div>
              <div
                className={styles.iAmEnjoying}
              >{`I am enjoying these “computer” speakers. They are sinced with my phone. I had Bose speakers and bought these as a replacement. It took me awhile to get the Bluetooth to work with my phone. `}</div>
            </div>
          </div>
          <div className={styles.seeAll}>See all</div>
        </div>
      </div>
      <div className={styles.verificationStatusParent}>
        <div className={styles.verificationStatus}>Verification Status</div>
        <div className={styles.frameParent3}>
          <div className={styles.groupParent1}>
            <div className={styles.instanceParent}>
              <img className={styles.groupItem} alt="" />
              <div className={styles.licenseAndCertification}>
                License and certification
              </div>
            </div>
            <div className={styles.instanceGroup}>
              <img className={styles.groupInner} alt="" />
              <div className={styles.network}>Network</div>
            </div>
            <div className={styles.instanceGroup}>
              <img className={styles.groupItem} alt="" />
              <div className={styles.network}>References</div>
            </div>
            <div className={styles.instanceParent}>
              <img className={styles.groupItem} alt="" />
              <div className={styles.licenseAndCertification}>
                License and certification
              </div>
            </div>
          </div>
          <div className={styles.groupParent1}>
            <div className={styles.instanceGroup}>
              <img className={styles.groupInner} alt="" />
              <div className={styles.network}>Network</div>
            </div>
            <div className={styles.instanceGroup}>
              <img className={styles.groupItem} alt="" />
              <div className={styles.network}>References</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsContainer;
