import styles from "./PersonalInformationContainer.module.css";
import { TextField } from "@mui/material";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";

const PersonalInformationContainer = ({
  avatarImageUrl,
  userName,
  iconsImageUrl,
  userInputText,
  iconsPlaceholderImageUrl,
  emailAddress,
  iconsPlaceholderImageUrl2,
  icons20pxImageUrl,
  icons20pxPlaceholderImage,
  labelCursor,
  iconsPlaceholderDisplay,
  iconsPlaceholderDisplay1,
  propDisplay,
  propBackgroundColor,
  propCursor,
  propColor,
  onLargeInputsContainerClick,
  onLargeButtonsContainerClick,
}) => {
  const largeInputs2Style = useMemo(() => {
    return {
      cursor: labelCursor,
    };
  }, [labelCursor]);

  const userInput13Style = useMemo(() => {
    return {
      display: iconsPlaceholderDisplay,
    };
  }, [iconsPlaceholderDisplay]);

  const userInput14Style = useMemo(() => {
    return {
      display: iconsPlaceholderDisplay1,
    };
  }, [iconsPlaceholderDisplay1]);

  const userInput15Style = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const largeButtons17Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      cursor: propCursor,
    };
  }, [propBackgroundColor, propCursor]);

  const label4Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);
  const [ name, setName] = useState('')
  const [ email, setEmail] = useState('')
  const [ last, setLast] = useState('')
const navigate = useNavigate()
  const proceed=()=>{
     let data = {
         fname:name,
         email: email,
         lname: last
        }
        db.collection('customers').doc(auth.currentUser.uid).set(data)
        navigate('/home1')
  }
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.personalInformationParent}>
          <b className={styles.personalInformation}>Personal Information</b>
          <div className={styles.weWouldLove}>We would love to know you</div>
        </div>
        <div className={styles.avatarParent}>
          <img className={styles.avatarIcon} alt="" src={avatarImageUrl} />
          <div className={styles.addProfilePic}>Add profile pic</div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.largeInputsParent}>
          <div
            className={styles.largeInputs}
            style={largeInputs2Style}
            onClick={onLargeInputsContainerClick}
          >
            <div className={styles.label}>Firstname</div>
             <div style={{width:'100%'}}>
              <TextField
              fullWidth
              onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className={styles.thisIsA}>This is a helper text</div>
          </div>
          <div className={styles.largeInputs}>
            <div className={styles.label}>Lastname</div>
             <div style={{width:'100%'}}>
              <TextField
              fullWidth
              onChange={(e)=>setLast(e.target.value)}
              />
            </div>
            <div className={styles.thisIsA}>This is a helper text</div>
          </div>
          <div className={styles.largeInputs}>
            <div className={styles.label}>Email address</div>
            <div style={{width:'100%'}}>
              <TextField
              fullWidth
              onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className={styles.thisIsA}>This is a helper text</div>
          </div>
        </div>
        <div
          className={styles.largeButtons}
          onClick={proceed}
          style={largeButtons17Style}
        >
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src={icons20pxImageUrl}
          />
          <b className={styles.label3} style={label4Style}>
            Sign Up
          </b>
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src={icons20pxPlaceholderImage}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationContainer;
