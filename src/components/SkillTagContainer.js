import styles from "./SkillTagContainer.module.css";

const SkillTagContainer = ({
  svgImageUrl,
  svgImageText,
  svgImageAltText,
  svgImageSource,
  svgImageDescription,
  svgImagePath,
}) => {
  return (
    <div className={styles.skillAndPriceTagsParent}>
      <div className={styles.skillAndPrice}>Skill and Price Tags</div>
      <div className={styles.frameParent}>
        <div className={styles.skillsPriceTagParent}>
          <div className={styles.skillsPriceTag}>
            <div className={styles.skills}>
              <div className={styles.electrotechnical}>Electrotechnical</div>
              <div className={styles.skillsChild} />
              <img className={styles.xIcon} alt="" />
            </div>
            <div className={styles.skills}>
              <div className={styles.electrotechnical}>£50/hr</div>
              <div className={styles.skillsChild} />
              <img className={styles.xIcon} alt="" />
            </div>
          </div>
          <div className={styles.skillsPriceTag}>
            <div className={styles.skills}>
              <div className={styles.electrotechnical}>
                Security and fire alarm
              </div>
              <div className={styles.skillsChild} />
              <img className={styles.xIcon} alt="" />
            </div>
            <div className={styles.skills}>
              <div className={styles.electrotechnical}>£100/hr</div>
              <div className={styles.skillsChild} />
              <img className={styles.xIcon} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.skillsPriceTag}>
          <div className={styles.skills}>
            <div className={styles.electrotechnical}>Outside lineman</div>
            <div className={styles.skillsChild} />
            <img className={styles.xIcon} alt="" />
          </div>
          <div className={styles.skills}>
            <div className={styles.electrotechnical}>£200/hr</div>
            <div className={styles.skillsChild} />
            <img className={styles.xIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTagContainer;
