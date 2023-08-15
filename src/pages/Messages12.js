import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ActivityContainer from "../components/ActivityContainer";
import Header from "../components/Header";
import PrototypeContainer2 from "../components/PrototypeContainer2";
import styles from "./Messages12.module.css";

const Messages12 = () => {
  const navigate = useNavigate();

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
      <ActivityContainer
        iconImageUrl="icons20pxplaceholder148.svg"
        iconImageUrls="icons20pxplaceholder148.svg"
        iconImageUrls20px="icons20pxplaceholder148.svg"
        iconImageUrls20pxPlacehol="icons20pxplaceholder148.svg"
        iconImageUrls20pxPlacehol2="icons20pxplaceholder148.svg"
        iconImageUrls20pxPlacehol3="icons20pxplaceholder148.svg"
        iconImageUrls20pxPlacehol4="icons20pxplaceholder148.svg"
        iconImageUrls20pxPlacehol5="icons20pxplaceholder148.svg"
        iconImageUrls20pxPlacehol6="icons20pxplaceholder148.svg"
        iconImageUrls20pxPlacehol7="icons20pxplaceholder148.svg"
      />
      <Header
        iconImageUrl="../icons16pxadd.svg"
        searchIconImageUrl="../icons20pxsearch.svg"
        searchText="Try searching carpenter..."
        locationText="Location"
      />
      <PrototypeContainer2
        homeIconUrl="../iconshome.svg"
        onDefaultContainerClick={onDefaultContainerClick}
        onDefaultContainer1Click={onDefaultContainer1Click}
        onDefaultContainer2Click={onDefaultContainer2Click}
        onDefaultContainer3Click={onDefaultContainer3Click}
      />
    </div>
  );
};

export default Messages12;
