import JobManagementContainer from "../components/JobManagementContainer";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.monthlyParent}>
            <div className={styles.monthly}>Monthly</div>
            <div className={styles.monthlyProfessional}>
              <span>
                <span className={styles.span}>£50</span>
              </span>
              <span className={styles.monthlyProfessional1}>
                <span>{` `}</span>
                <span>Monthly /Professional</span>
              </span>
            </div>
          </div>
          <div className={styles.largeButtons}>
            <img
              className={styles.iconsmessage}
              alt=""
              src="../iconsmessage13.svg"
            />
            <b className={styles.label}>Choose Plan</b>
            <img
              className={styles.iconsmessage}
              alt=""
              src="../iconsmessage14.svg"
            />
          </div>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.frameDiv}>
          <JobManagementContainer
            jobManagementText="Job Management"
            quoteText="Automatically manage your jobs with our job management feature."
          />
          <JobManagementContainer
            jobManagementText="Quote"
            quoteText="Send a quote to receive payment swiftly."
          />
          <JobManagementContainer
            jobManagementText="Social Share"
            quoteText="Share your business on any platform and get booked."
          />
          <JobManagementContainer
            jobManagementText="Vetting"
            quoteText="Get vetted for free to improve your business reputation and increase visibility."
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
