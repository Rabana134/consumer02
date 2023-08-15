import { useMemo } from "react";
import styles from "./PromotionsContainer.module.css";

const PromotionsContainer = ({
  companyLogoUrl,
  companyAvatarUrl,
  companyName,
  companyLogoImageUrl,
  companyAvatarSvgUrl,
  companyName1,
  businessNameDisplay,
  propDisplay,
}) => {
  const offerDeadlineStyle = useMemo(() => {
    return {
      display: businessNameDisplay,
    };
  }, [businessNameDisplay]);

  const offerDeadline1Style = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={styles.dealOfTheDayParent}>
      <div className={styles.dealOfTheDay}>
        <img className={styles.dealOfTheDayChild} alt="" src={companyLogoUrl} />
        <div className={styles.infoSection}>
          <div className={styles.container}>
            <div className={styles.merge}>
              <div className={styles.col}>
                <div className={styles.businessName}>
                  <div className={styles.avatarName}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src={companyAvatarUrl}
                    />
                    <div className={styles.businessName1}>{companyName}</div>
                  </div>
                  <div className={styles.rating}>
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
                    <div className={styles.ratingNumber}>5.0 (300K)</div>
                  </div>
                </div>
                <div className={styles.professionalCategory}>
                  <div className={styles.ratingNumber}>
                    Professional category
                  </div>
                </div>
                <div className={styles.tags}>
                  <div className={styles.professionalsPills}>
                    <div className={styles.skills}>
                      <div className={styles.ratingNumber}>
                        Power contractors
                      </div>
                      <img
                        className={styles.iconsclose}
                        alt=""
                        src="../iconsclose2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.professionalsPills}>
                    <div className={styles.skills}>
                      <div className={styles.ratingNumber}>
                        Generator installation
                      </div>
                      <img
                        className={styles.iconsclose}
                        alt=""
                        src="../iconsclose2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.professionalsPills}>
                    <div className={styles.skills}>
                      <div className={styles.ratingNumber}>
                        Industrial electrical
                      </div>
                      <img
                        className={styles.iconsclose}
                        alt=""
                        src="../iconsclose2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.professionalsPills3}>
                    <div className={styles.skills}>
                      <div className={styles.ratingNumber}>Tag</div>
                      <img className={styles.iconsclose} alt="" />
                    </div>
                  </div>
                  <div className={styles.professionalsPills3}>
                    <div className={styles.skills}>
                      <div className={styles.ratingNumber}>Tag</div>
                      <img className={styles.iconsclose} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.offerDeadline} style={offerDeadlineStyle}>
                <div className={styles.ratingNumber}>
                  Spend $100 and get 20% off
                </div>
                <div className={styles.countdown}>Ends in 0d:0h:0m:0s</div>
              </div>
            </div>
            <div className={styles.smallButtons}>
              <div className={styles.professionalsPills}>
                <div className={styles.button}>Request Quote</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dealOfTheDay}>
        <img
          className={styles.dealOfTheDayChild}
          alt=""
          src={companyLogoImageUrl}
        />
        <div className={styles.infoSection}>
          <div className={styles.container}>
            <div className={styles.merge}>
              <div className={styles.col}>
                <div className={styles.businessName}>
                  <div className={styles.avatarName}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src={companyAvatarSvgUrl}
                    />
                    <div className={styles.businessName1}>{companyName1}</div>
                  </div>
                  <div className={styles.rating}>
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
                    <div className={styles.ratingNumber}>5.0 (300K)</div>
                  </div>
                </div>
                <div className={styles.professionalCategory}>
                  <div className={styles.ratingNumber}>
                    Professional category
                  </div>
                </div>
                <div className={styles.tags}>
                  <div className={styles.professionalsPills}>
                    <div className={styles.skills}>
                      <div className={styles.ratingNumber}>
                        Power contractors
                      </div>
                      <img
                        className={styles.iconsclose}
                        alt=""
                        src="../iconsclose2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.professionalsPills}>
                    <div className={styles.skills}>
                      <div className={styles.ratingNumber}>
                        Generator installation
                      </div>
                      <img
                        className={styles.iconsclose}
                        alt=""
                        src="../iconsclose2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.professionalsPills}>
                    <div className={styles.skills}>
                      <div className={styles.ratingNumber}>
                        Industrial electrical
                      </div>
                      <img
                        className={styles.iconsclose}
                        alt=""
                        src="../iconsclose2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.professionalsPills3}>
                    <div className={styles.skills}>
                      <div className={styles.ratingNumber}>Tag</div>
                      <img className={styles.iconsclose} alt="" />
                    </div>
                  </div>
                  <div className={styles.professionalsPills3}>
                    <div className={styles.skills}>
                      <div className={styles.ratingNumber}>Tag</div>
                      <img className={styles.iconsclose} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.offerDeadline} style={offerDeadline1Style}>
                <div className={styles.ratingNumber}>
                  Spend $100 and get 20% off
                </div>
                <div className={styles.countdown}>Ends in 0d:0h:0m:0s</div>
              </div>
            </div>
            <div className={styles.smallButtons}>
              <div className={styles.professionalsPills}>
                <div className={styles.button}>Request Quote</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionsContainer;
