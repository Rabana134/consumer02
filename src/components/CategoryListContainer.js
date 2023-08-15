import CategorySelector from "../components/CategorySelector";
import styles from "./CategoryListContainer.module.css";

const CategoryListContainer = () => {
  return (
    <div className={styles.categories}>
      <div className={styles.categoriesDb}>
        <div className={styles.categories1}>
          <div className={styles.frameParent}>
            <div className={styles.iconscategoriesParent}>
              <img
                className={styles.iconscategories}
                alt=""
                src="../iconscategories1.svg"
              />
              <div className={styles.catering}>Catering</div>
            </div>
            <img
              className={styles.iconscategories}
              alt=""
              src="../iconschevrondown23.svg"
            />
          </div>
        </div>
        <div className={styles.categories1}>
          <div className={styles.frameParent}>
            <div className={styles.iconscategoriesParent}>
              <img
                className={styles.iconscategories}
                alt=""
                src="../iconscategories2.svg"
              />
              <div className={styles.catering}>Childcare</div>
            </div>
            <img
              className={styles.iconscategories}
              alt=""
              src="../iconschevrondown23.svg"
            />
          </div>
        </div>
        <div className={styles.categories1}>
          <div className={styles.frameParent}>
            <div className={styles.iconscategoriesParent}>
              <img
                className={styles.iconscategories}
                alt=""
                src="../iconscategories3.svg"
              />
              <div className={styles.catering}>Cleaning</div>
            </div>
            <img
              className={styles.iconscategories}
              alt=""
              src="../iconschevrondown23.svg"
            />
          </div>
        </div>
        <div className={styles.categories1}>
          <div className={styles.frameParent}>
            <div className={styles.iconscategoriesParent}>
              <img
                className={styles.iconscategories}
                alt=""
                src="../iconscategories4.svg"
              />
              <div className={styles.catering}>Entertainment</div>
            </div>
            <img
              className={styles.iconscategories}
              alt=""
              src="../iconschevrondown23.svg"
            />
          </div>
        </div>
        <div className={styles.categories1}>
          <div className={styles.frameParent}>
            <div className={styles.iconscategoriesParent}>
              <img
                className={styles.iconscategories}
                alt=""
                src="../iconscategories5.svg"
              />
              <div className={styles.catering}>{`Applicance Repair `}</div>
            </div>
            <img
              className={styles.iconscategories}
              alt=""
              src="../iconschevrondown23.svg"
            />
          </div>
        </div>
        <div className={styles.categories6}>
          <div className={styles.frameParent}>
            <div className={styles.iconscategoriesParent}>
              <img
                className={styles.iconscategories}
                alt=""
                src="../iconscategories6.svg"
              />
              <div className={styles.catering}>Door Supervisor</div>
            </div>
            <img
              className={styles.iconscategories}
              alt=""
              src="../iconschevrondown23.svg"
            />
          </div>
        </div>
        <div className={styles.categories1}>
          <div className={styles.frameParent}>
            <div className={styles.iconscategoriesParent}>
              <img
                className={styles.iconscategories}
                alt=""
                src="../iconscategories7.svg"
              />
              <div className={styles.catering}>Mobile Mechanic</div>
            </div>
            <img
              className={styles.iconscategories}
              alt=""
              src="../iconschevrondown23.svg"
            />
          </div>
        </div>
        <div className={styles.categories1}>
          <div className={styles.frameParent}>
            <div className={styles.iconscategoriesParent}>
              <img
                className={styles.iconscategories}
                alt=""
                src="../iconscategories8.svg"
              />
              <div className={styles.catering}>Personal Assistance</div>
            </div>
            <img
              className={styles.iconscategories}
              alt=""
              src="../iconschevrondown23.svg"
            />
          </div>
        </div>
        <div className={styles.categories1}>
          <div className={styles.frameParent}>
            <div className={styles.iconscategoriesParent}>
              <img
                className={styles.iconscategories}
                alt=""
                src="../iconscategories9.svg"
              />
              <div className={styles.catering}>Pet Groomers</div>
            </div>
            <img
              className={styles.iconscategories}
              alt=""
              src="../iconschevrondown23.svg"
            />
          </div>
        </div>
        <div className={styles.categories1}>
          <div className={styles.frameParent}>
            <div className={styles.iconscategoriesParent}>
              <img
                className={styles.iconsplaceholder}
                alt=""
                src="../iconsplaceholder49.svg"
              />
              <div className={styles.catering}>Recovery Services</div>
            </div>
            <img
              className={styles.iconscategories}
              alt=""
              src="../iconschevrondown23.svg"
            />
          </div>
        </div>
        <div className={styles.categories1}>
          <div className={styles.frameParent}>
            <div className={styles.iconscategoriesParent}>
              <img
                className={styles.iconsplaceholder}
                alt=""
                src="../iconsplaceholder50.svg"
              />
              <div className={styles.catering}>Tradesman</div>
            </div>
            <img
              className={styles.iconscategories}
              alt=""
              src="../iconschevrondown33.svg"
            />
          </div>
        </div>
        <div className={styles.categories1}>
          <div className={styles.frameParent}>
            <div className={styles.iconscategoriesParent}>
              <img className={styles.iconsplaceholder} alt="" />
              <div className={styles.catering}>Removal Services</div>
            </div>
            <img className={styles.iconscategories} alt="" />
          </div>
        </div>
        <div className={styles.categories1}>
          <div className={styles.frameParent}>
            <div className={styles.iconscategoriesParent}>
              <img className={styles.iconsplaceholder} alt="" />
              <div className={styles.catering}>Transport Services</div>
            </div>
            <img className={styles.iconscategories} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.modalTitle}>
        <div className={styles.jobDetails}>Categories</div>
        <img className={styles.iconsclose} alt="" src="../iconsclose1.svg" />
      </div>
      <div className={styles.input}>
        <div className={styles.labelContainer}>
          <div className={styles.label}>Label</div>
        </div>
        <div className={styles.baseField}>
          <img
            className={styles.iconsplaceholder4}
            alt=""
            src="../iconsplaceholder51.svg"
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
      <CategorySelector
        propBackgroundColor="1px solid #ccc"
        propColor="#5e5e5e"
      />
    </div>
  );
};

export default CategoryListContainer;
