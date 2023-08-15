import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../../components/Account";
import PortalPopup from "../../components/PortalPopup";
import JobProgressContainer1 from "../../components/JobProgressContainer1";
import CarpenterNavContainer from "../../components/CarpenterNavContainer";
import PrototypeContainer1 from "../../components/PrototypeContainer1";
import styles from "./Messages28.module.css";
import AddressContainer from "../../components/postComp/AddressContainer";
import Messages29 from "./Messages29";

const Messages28 = ({title, cate, desc}) => {
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);
   const [prog, setProg] = useState(1)
   const [addy1, setAddy1] = useState('')
  const [addy2, setAddy2] = useState('')
  const [city, setCity] = useState('')
  const [reg, setReg] = useState('')
  const [zip, setZip] = useState('')
  const [country, setCountry] = useState('')
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  const [m_lat, setMLat] = useState(0)
  const [m_lng, setMLng] = useState(0)
 const next = useCallback(()=>{
    setProg(2)
  }, [navigate])
  const onAddy1 =(e)=>{
    setAddy1(e)
    console.log(e)
  }
   const onAddy2 =(e)=>{
    setAddy2(e)
  }
   const onCity =(e)=>{
    setCity(e)
  }
  const onReg =(e)=>{
    setReg(e)
  }
  const onZip =(e)=>{
    setZip(e)
    console.log(zip)
  }
   const onLat =(e)=>{
    setLat(e)
    console.log(lat)
  }
   const onLng =(e)=>{
    setLng(e)
    console.log(lng)
  }
 const onCountry =(e)=>{
    setCountry(e)
    console.log(country)
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
       {
        prog==1?
        <>
      <div className={styles.messages}>
        <JobProgressContainer1 />
        <AddressContainer
          avatarImageUrl="../avatar110.svg"
          addressText="5 Pereira Road, Birmingham"
          locationText="North Lanarkshire"
          countryText="England"
          postalCodeText="HU17 8JJ"
          iconImageUrl="../icons20pxplaceholder22.svg"
          iconImageUrl20px="../icons20pxplaceholder22.svg"
          ellipse254Border="1px solid var(--green-5001)"
          ellipse256Display="inline-block"
          ellipse256Display1="inline-block"
          ellipse256Display2="inline-block"
          ellipse256Display3="inline-block"
          propBackgroundColor="1.5px solid #2fa500"
          propCursor="pointer"
          propColor="#fff"
          next={next}
          onAddy1={onAddy1}
          onAddy2={onAddy2}
          onCity={onCity}
          onReg={onReg}
          onZip={onZip}
          onCountry={onCountry}
          onLat={onLat}
          onLng={onLng}
          lat={lat}
          lng={lng}
          city={city}
          reg={reg}
          zip={zip}
          country={country}
        />
        <CarpenterNavContainer
          addIconUrl="../icons16pxadd.svg"
          searchIconUrl="../icons20pxsearch.svg"
          paymentType="Post a Job"
          addIcon4Url="../icons16pxadd.svg"
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
      <Messages29 title={title} cate={cate} desc={desc} 
      addy1={addy1} addy2={addy2} city={city} zip={zip} reg={reg} 
country={country}
  onLat={onLat}
          onLng={onLng}
          lat={lat}
          lng={lng}
/>
    </>
       }
    </>
    
  );
};

export default Messages28;
