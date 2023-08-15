import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../../components/Account";
import PortalPopup from "../../components/PortalPopup";
import JobProgressTrackerContainer from "../../components/JobProgressTrackerContainer";
import ImageUploaderContainer from "../../components/postComp/ImageUploaderContainer";
import CarpenterNavContainer from "../../components/CarpenterNavContainer";
import PrototypeContainer1 from "../../components/PrototypeContainer1";
import styles from "./Messages26.module.css";
import JobPostingSuccessModalContaine from "../../components/JobPostingSuccessModalContaine";

const Messages26 = ({title, cate, desc,addy1,addy2,zip,reg,city,lat,lng, country,to,from}) => {
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);
  const [done, setDone]= useState(false)
  const onDone =()=>{
    setDone(true)
  }
  const onSmallButtonsContainerClick = useCallback(() => {
    navigate("/messages");
  }, [navigate]);

  const openAccount = useCallback(() => {
    setAccountOpen(true);
  }, []);

  const closeAccount = useCallback(() => {
    setAccountOpen(false);
  }, []);

  const onComponent98ContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onIconContainerClick = useCallback(() => {
    navigate("/messages");
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
    <>
      <div className={styles.messages}>
        <JobProgressTrackerContainer jobDetailsTop="164px" />
        <ImageUploaderContainer 
          title={title} cate={cate} desc={desc} 
      addy1={addy1} addy2={addy2} city={city} zip={zip} reg={reg} to={to} from={from}
      country={country}
          lat={lat}
          lng={lng}
      onDone={onDone}
        />
        <CarpenterNavContainer
          addIconUrl="icons16pxadd38.svg"
          searchIconUrl="icons20pxsearch20.svg"
          paymentType="Post a Job"
          addIcon4Url="icons16pxadd38.svg"
          propDisplay1="none"
          onSmallButtonsContainerClick={onSmallButtonsContainerClick}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
          onIconContainerClick={onIconContainerClick}
        />
        <PrototypeContainer1
          frameImageUrl="../frame-66522.svg"
          iconImageUrl="../iconshome.svg"
          onDefaultContainerClick={onDefaultContainerClick}
          onDefaultContainer1Click={onDefaultContainer1Click}
          onDefaultContainer2Click={onDefaultContainer2Click}
          onDefaultContainer3Click={onDefaultContainer3Click}
        />
        {
          done?
          <div className={styles.overlay}>
          <JobPostingSuccessModalContaine />
        </div>
          :
          null
        }
         
      </div>
      {isAccountOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAccount}
        >
          <Account onClose={closeAccount} />
        </PortalPopup>
      )}
    </>
  );
};

export default Messages26;
