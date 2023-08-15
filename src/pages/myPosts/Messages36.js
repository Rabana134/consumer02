import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import JobPostContainer from "../../components/myPosts/JobPostContainer";
import JobPostingContainer from "../../components/JobPostingContainer";
import Header from "../../components/Header";
import PrototypeContainer from "../../components/PrototypeContainer";
import styles from "./Messages36.module.css";

const Messages36 = () => {
  const navigate = useNavigate();

  const onIconContainerClick = useCallback(() => {
    navigate("/home1");
  }, [navigate]);
   const onSmallButtonsContainerClick = useCallback(() => {
    navigate("/messages20");
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

  return (
    <div className={styles.messages}>
      <div className={styles.activeJobPostsParent}>
        <JobPostContainer
          jobTitle="Electrician Needed"
          jobLocationIconUrl="iconsplaceholder13.svg"
          jobDescription="../iconsplaceholder13.svg"
          frame67453Display="none"
        />
        <JobPostContainer
          jobIconUrl="../frame-67452.svg"
          jobTitle="Electrician needed"
          jobLocationIconUrl="../iconsmoney.svg"
          jobDescription="../iconslocation.svg"
          frame67453Display="flex"
          frame67449Overflow="hidden"
          propOverflow="hidden"
        />
      </div>
     <JobPostingContainer
        iconImageUrl="../icons16pxadd3.svg"
        propCursor="unset"
        propCursor1="pointer"
        onSmallButtonsContainerClick={onSmallButtonsContainerClick}
      />
      <Header
        iconImageUrl="icons16pxadd38.svg"
        searchIconImageUrl="icons20pxsearch20.svg"
        searchText="Try searching carpenter..."
        locationText="Location"
        propDisplay="none"
        propDisplay1="none"
      />
      <PrototypeContainer
        frameImageUrl="../frame-66522.svg"
        iconImageUrl="../iconshome.svg"
        onDefaultContainerClick={onDefaultContainerClick}
        onDefaultContainer1Click={onDefaultContainer1Click}
        onDefaultContainer2Click={onDefaultContainer2Click}
        onDefaultContainer3Click={onDefaultContainer3Click}
      />
    </div>
  );
};

export default Messages36;
