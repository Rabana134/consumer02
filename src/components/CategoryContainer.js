import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CategoryContainer.module.css";

const CategoryContainer = () => {
  const navigate = useNavigate();

  const onIconsCloseClick = useCallback(() => {
    navigate("/home15");
  }, [navigate]);

  const onLargeButtonsContainer2Click = useCallback(() => {
    navigate("/home20");
  }, [navigate]);

  return (
    <div className={styles.categories}>
      <div className={styles.modalTitle}>
        <div className={styles.jobDetails}>Contacts</div>
        <img
          className={styles.iconsclose}
          alt=""
          src="../iconsclose1.svg"
          onClick={onIconsCloseClick}
        />
      </div>
      <div className={styles.input}>
        <div className={styles.labelContainer}>
          <div className={styles.label}>Label</div>
        </div>
        <div className={styles.baseField}>
          <img
            className={styles.iconsplaceholder}
            alt=""
            src="../iconsplaceholder64.svg"
          />
          <div className={styles.userInput}>Search</div>
          <div className={styles.dot}>
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
            <img className={styles.dotChild} alt="" src="../ellipse-2514.svg" />
          </div>
        </div>
        <div className={styles.helperTextContainer}>
          <div className={styles.thisIsA}>This is a helper text</div>
          <div className={styles.div}>1/100</div>
        </div>
      </div>
      <div className={styles.contactsParent}>
        <div className={styles.contacts}>
          <div className={styles.avatarParent}>
            <img className={styles.avatarIcon} alt="" src="../avatar213.svg" />
            <div className={styles.peoplename}>Nguyen Shane</div>
          </div>
          <img className={styles.checkboxIcon} alt="" src="../checkbox.svg" />
        </div>
        <div className={styles.contacts}>
          <div className={styles.avatarParent}>
            <img className={styles.avatarIcon} alt="" src="../avatar214.svg" />
            <div className={styles.peoplename}>Cooper Kristin</div>
          </div>
          <div className={styles.checkbox} />
        </div>
        <div className={styles.contacts}>
          <div className={styles.avatarParent}>
            <img className={styles.avatarIcon} alt="" src="../avatar215.svg" />
            <div className={styles.peoplename}>Flores Juanita</div>
          </div>
          <img className={styles.checkboxIcon} alt="" src="../checkbox.svg" />
        </div>
        <div className={styles.contacts}>
          <div className={styles.avatarParent}>
            <img className={styles.avatarIcon} alt="" src="../avatar216.svg" />
            <div className={styles.peoplename}>James Bradley</div>
          </div>
          <div className={styles.checkbox} />
        </div>
        <div className={styles.contacts}>
          <div className={styles.avatarParent}>
            <img className={styles.avatarIcon} alt="" src="../avatar217.svg" />
            <div className={styles.peoplename}>Black Marvin</div>
          </div>
          <div className={styles.checkbox} />
        </div>
        <div className={styles.contacts}>
          <div className={styles.avatarParent}>
            <img className={styles.avatarIcon} alt="" src="../avatar218.svg" />
            <div className={styles.peoplename}>Miles Esther</div>
          </div>
          <div className={styles.checkbox} />
        </div>
        <div className={styles.contacts6}>
          <div className={styles.avatarParent}>
            <div className={styles.avatarIcon}>
              <img
                className={styles.avatarChild}
                alt=""
                src="../ellipse-2473.svg"
              />
              <div className={styles.ac}>CK</div>
            </div>
            <div className={styles.peoplename6}>Cooper Kristin</div>
          </div>
          <div className={styles.checkbox} />
        </div>
        <div className={styles.contacts}>
          <div className={styles.avatarParent}>
            <img className={styles.avatarIcon} alt="" src="../avatar219.svg" />
            <div className={styles.peoplename}>Necla Eyici</div>
          </div>
          <img className={styles.checkboxIcon} alt="" src="../checkbox.svg" />
        </div>
      </div>
      <div
        className={styles.largeButtons}
        onClick={onLargeButtonsContainer2Click}
      >
        <img
          className={styles.icons20pxplaceholder}
          alt=""
          src="../icons20pxplaceholder304.svg"
        />
        <b className={styles.label1}>Add Contact</b>
        <img
          className={styles.icons20pxplaceholder}
          alt=""
          src="../icons20pxplaceholder304.svg"
        />
      </div>
    </div>
  );
};

export default CategoryContainer;
