import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import JobDetailsContainer from "../components/JobDetailsContainer";
import ContainerCard from "../components/postComp/ContainerCard";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import PrototypeContainer1 from "../components/PrototypeContainer1";
import styles from "./Messages31.module.css";

const Messages31 = () => {
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);

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
        <JobDetailsContainer />
        <ContainerCard
          avatarImageUrl="avatar107.svg"
          iconText="../iconsplaceholder.svg"
          electricianText="Electrician needed"
          labelText="Label"
          iconImageUrl="../iconsplaceholder.svg"
          circuitBoxText="I’m in need of a skilled electrician at Manchester UK. My circuit box just got blown due to flutuauting current. Electrician should be available to fix it this evening as it is an urgent fix"
          categoryText="Appliance Repair (Domestic Appliance Repair)"
          electricianLocationText="../icons20pxplaceholder44.svg"
          icon20pxImageUrl="../icons20pxplaceholder44.svg"
          ellipse254Border="1px solid var(--grey-70)"
          ellipse254Border1="1px solid var(--green-5001)"
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
  );
};

export default Messages31;
