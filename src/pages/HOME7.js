import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BusinessNameContainer from "../components/BusinessNameContainer";
import DysonContainer from "../components/DysonContainer";
import NavigationContainer from "../components/NavigationContainer";
import PrototypeContainer3 from "../components/PrototypeContainer3";
import styles from "./HOME7.module.css";

const HOME7 = () => {
  const navigate = useNavigate();

  const onFrameContainer18Click = useCallback(() => {
    navigate("/home3");
  }, [navigate]);

  const onIconContainerClick = useCallback(() => {
    navigate("/home1");
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

  const onIconsCloseClick = useCallback(() => {
    navigate("/home5");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <BusinessNameContainer
        starIconUrl="../icons16pxstar.svg"
        starIconUrl2="../icons16pxstar.svg"
        placeholderIconUrl="../icons16pxstar.svg"
        star4IconUrl="../icons16pxstar.svg"
        star4IconUrl2="../icons16pxstar4.svg"
        placeholder2IconUrl="icons20pxplaceholder272.svg"
        placeholder2IconUrl2="icons20pxplaceholder272.svg"
        frame67133Top="566px"
        frame67133Display="none"
      />
      <DysonContainer
        avatarSvgUrl="../avatar156.svg"
        guaranteeSvgUrl="../guarantee-1.svg"
        groupSvgUrl="../group-66967.svg"
        vectorSvgUrl="../group-66950.svg"
        iconsSvgUrl="../vector-39.svg"
        avatarSvgUrl157="../avatar157.svg"
        iconsSvgUrl16pxstar="../icons16pxstar3.svg"
        iconsSvgUrl16pxstar3="../icons16pxstar3.svg"
        iconsSvgUrl16pxstar78="../icons16pxstar3.svg"
        iconsSvgUrl16pxstar32="../icons16pxstar3.svg"
        iconsSvgUrl16pxstar24="../icons16pxstar24.svg"
        iconsSvgUrl20pxplaceholde="icons20pxplaceholder276.svg"
        avatarSvgUrl158="../avatar158.svg"
        onFrameContainer18Click={onFrameContainer18Click}
      />
      <NavigationContainer
        iconImageUrl="icons16pxadd103.svg"
        searchIconImageUrl="icons20pxsearch58.svg"
        paymentText="Dyson Electricals"
        addIconImageUrl="icons16pxadd103.svg"
        propCursor="pointer"
        propLeft="97px"
        onIconContainerClick={onIconContainerClick}
      />
      <PrototypeContainer3
        frameImageUrl="../frame-66522.svg"
        iconImageUrl="iconshome53.svg"
        onDefaultContainerClick={onDefaultContainerClick}
        onDefaultContainer1Click={onDefaultContainer1Click}
        onDefaultContainer2Click={onDefaultContainer2Click}
        onDefaultContainer3Click={onDefaultContainer3Click}
      />
      <div className={styles.overlay}>
        <div className={styles.frameParent}>
          <div className={styles.shareParent}>
            <div className={styles.share}>Share</div>
            <img
              className={styles.iconsclose}
              alt=""
              src="../iconsclose.svg"
              onClick={onIconsCloseClick}
            />
          </div>
          <div className={styles.loggworkscomdysonElectricalParent}>
            <div className={styles.loggworkscomdysonElectrical}>
              Loggworks.com/Dyson-Electricals
            </div>
            <div className={styles.copyWrapper}>
              <div className={styles.copy}>Copy</div>
            </div>
          </div>
          <div className={styles.facebook1Parent}>
            <img
              className={styles.facebook1Icon}
              alt=""
              src="../001facebook-1.svg"
            />
            <img
              className={styles.facebook1Icon}
              alt=""
              src="../013twitter-1.svg"
            />
            <img
              className={styles.facebook1Icon}
              alt=""
              src="../011instagram-1.svg"
            />
            <img
              className={styles.facebook1Icon}
              alt=""
              src="../003whatsapp-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HOME7;
