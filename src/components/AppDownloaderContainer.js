import styles from "./AppDownloaderContainer.module.css";

const AppDownloaderContainer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.download}>
        <div className={styles.downloadOurApps}>Download our apps</div>
        <img className={styles.playstoreButtonIcon} alt="" />
        <img className={styles.appstoreButtonIcon} alt="" />
      </div>
      <div className={styles.footerChild} />
      <img className={styles.layer2Icon} alt="" />
      <div className={styles.frameParent}>
        <div className={styles.homeownersParent}>
          <b className={styles.homeowners}>Homeowners</b>
          <div className={styles.postAJobParent}>
            <div className={styles.postAJob}>Post a Job</div>
            <div className={styles.postAJob}>How it works</div>
            <div className={styles.postAJob}>Contact Us</div>
            <div className={styles.postAJob}>{`Help & FAQ’s`}</div>
            <div className={styles.postAJob}>User Agreement</div>
          </div>
        </div>
        <div className={styles.professionalsParent}>
          <b className={styles.homeowners}>Professionals</b>
          <div className={styles.postAJobParent}>
            <div className={styles.postAJob}>Sign Up</div>
            <div className={styles.postAJob}>How it works</div>
            <div className={styles.postAJob}>Contact Us</div>
            <div className={styles.postAJob}>{`Help & FAQ’s`}</div>
            <div className={styles.postAJob}>User Agreement</div>
          </div>
        </div>
        <div className={styles.loggworksParent}>
          <b className={styles.homeowners}>Loggworks</b>
          <div className={styles.postAJobParent}>
            <div className={styles.postAJob}>About us</div>
            <div className={styles.postAJob}>Careers</div>
            <div className={styles.postAJob}>Partners</div>
            <div className={styles.postAJob}>Influencer program</div>
            <div className={styles.postAJob}>Blog</div>
          </div>
        </div>
        <div className={styles.loggworksGroup}>
          <div className={styles.loggworks1}>
            <b className={styles.followUs}>Follow us</b>
          </div>
          <div className={styles.groupParent}>
            <div className={styles.frameGroup}>
              <img className={styles.frameIcon} alt="" />
              <div className={styles.facebook}>Facebook</div>
            </div>
            <div className={styles.frameContainer}>
              <img className={styles.frameIcon1} alt="" />
              <div className={styles.twitter}>Twitter</div>
            </div>
            <div className={styles.groupDiv}>
              <img className={styles.frameIcon1} alt="" />
              <div className={styles.twitter}>Instagram</div>
            </div>
            <div className={styles.frameParent1}>
              <img className={styles.frameIcon1} alt="" />
              <div className={styles.twitter}>YouTube</div>
            </div>
            <div className={styles.mdilinkedinParent}>
              <img className={styles.mdilinkedinIcon} alt="" />
              <div className={styles.linkedin}>LinkedIn</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright2022LoggworkLtdAParent}>
        <div className={styles.copyright2022Loggwork}>
          ©Copyright 2022 loggwork Ltd. All Rights Reserved
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.termsOfUseParent}>
            <div className={styles.copyright2022Loggwork}>Terms of Use</div>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.termsOfUseParent}>
            <div
              className={styles.copyright2022Loggwork}
            >{`Privacy Policy `}</div>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.termsOfUseParent}>
            <div className={styles.copyright2022Loggwork}>Cookies</div>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.contactUsParent}>
            <div className={styles.copyright2022Loggwork}>Contact Us</div>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.termsOfUseParent}>
            <div className={styles.copyright2022Loggwork}>Sitemap</div>
            <div className={styles.frameChild1} />
          </div>
        </div>
      </div>
      <div className={styles.largeButtonsParent}>
        <div className={styles.largeButtons}>
          <img className={styles.icons20pxplaceholder} alt="" />
          <b className={styles.label}>Become a Professional</b>
          <img className={styles.icons20pxplaceholder} alt="" />
        </div>
        <div className={styles.largeButtons}>
          <img className={styles.icons20pxplaceholder} alt="" />
          <b className={styles.label}>Post a Job</b>
          <img className={styles.icons20pxplaceholder} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppDownloaderContainer;
