import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../../components/Account";
import PortalPopup from "../../components/PortalPopup";
import JobProgressContainer from "../../components/JobProgressContainer";
import FormContainer from "../../components/postComp/FormContainer";
import CarpenterNavContainer from "../../components/CarpenterNavContainer";
import PrototypeContainer1 from "../../components/PrototypeContainer1";
import styles from "./Messages29.module.css";
import Messages26 from "./Messages26";

const Messages29 = ({title, cate, desc,addy1,addy2,zip,reg,city,country,lat,lng}) => {
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);
    const [prog, setProg] = useState(2)
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
 const next = useCallback(()=>{
    setProg(3)
  }, [navigate])
const onFrom =(e)=>{
    setFrom(e.target.value)
  }
   const onTo =(e)=>{
    setTo(e.target.value)
  }
  const onLargeButtonsContainerClick = useCallback(() => {
    navigate("/messages25");
  }, [navigate]);

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
       {
      prog == 2 ?
        <>
      <div className={styles.messages}>
        <JobProgressContainer />
        <FormContainer
          avatarImageUrl="../avatar109.svg"
          cardName="600"
          cardAmount="1000"
          iconImageUrl="icons20pxplaceholder6.svg"
          iconImageUrl2="icons20pxplaceholder6.svg"
          ellipse256Color="#2e2e2e"
          ellipse256Display="inline-block"
          ellipse256Color1="#2e2e2e"
          ellipse256Display1="inline-block"
          propBackgroundColor="1.5px solid #2fa500"
          propCursor="pointer"
          propColor="#fff"
          onLargeButtonsContainerClick={onLargeButtonsContainerClick}
          next={next}
          onTo ={onTo}
          onFrom={onFrom}
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
      :
      <>
      <Messages26 title={title} cate={cate} desc={desc} 
      addy1={addy1} addy2={addy2} city={city} zip={zip} reg={reg} country={country} to={to} from={from}
          lat={lat}
          lng={lng}/>
      </>
    }  
    </>
 
  
  );
};

export default Messages29;
