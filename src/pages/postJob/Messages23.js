import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../../components/Account";
import PortalPopup from "../../components/PortalPopup";
import JobDetailsContainer from "../../components/JobDetailsContainer";
import ContainerCard from "../../components/postComp/ContainerCard";
import CarpenterNavContainer from "../../components/CarpenterNavContainer";
import PrototypeContainer1 from "../../components/PrototypeContainer1";
import styles from "./Messages23.module.css";
import Messages28 from "./Messages28";

const Messages23 = () => {
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);
  const [prog, setProg] = useState(0)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [cate, setCate] = useState('')
 const next = (()=>{
    setProg(1)
  })
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

  const onTitle =((e) => {
    setTitle(e.target.value)
  });
  const onDesc = ((e) => {
    setDesc(e.target.value)
  });
  const onCate =((e) => {
    setCate(e)
  });
  return (
    <>
    {
      prog==0?
      <>
         <div className={styles.messages}>
        <JobDetailsContainer />
        <ContainerCard
          avatarImageUrl="../avatar115.svg"
          iconText="../iconsplaceholder31.svg"
          electricianText="Name of Card"
          labelText="Provide a brief description of the job"
          iconImageUrl="../iconsplaceholder31.svg"
          circuitBoxText="User input"
          categoryText="Choose a category"
          electricianLocationText="icons20pxplaceholder86.svg"
          icon20pxImageUrl="icons20pxplaceholder86.svg"
          ellipse256Color="#a6a6a6"
          ellipse256Display="none"
          ellipse254Border="1px solid var(--grey-70)"
          ellipse256Color1="#2e2e2e"
          ellipse256Display1="none"
          propBackgroundColor="1px solid #ccc"
          propColor="#5e5e5e"
          next={next}
          onTitle={onTitle}
          onCate={onCate}
          onDesc={onDesc}
        />
        <CarpenterNavContainer
          addIconUrl="../icons16pxadd3.svg"
          searchIconUrl="icons20pxsearch24.svg"
          paymentType="Post a Job"
          addIcon4Url="../icons16pxadd3.svg"
          propDisplay1="none"
          onSmallButtonsContainerClick={onSmallButtonsContainerClick}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
          onIconContainerClick={onIconContainerClick}
        />
        <PrototypeContainer1
          frameImageUrl="../frame-66522.svg"
          iconImageUrl="../iconshome32.svg"
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
      <Messages28 title={title} cate={cate} desc={desc}/>
      </>
    }
     
    </>
  );
};

export default Messages23;
