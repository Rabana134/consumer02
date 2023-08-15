import { TextField } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import styles from "./FormContainer.module.css";
import { auth, db } from "../../firebase";

const FormContainer = ({
  avatarImageUrl,
  iconImageUrl,
  iconImageUrl2,
  ellipse251Cursor,
  propBackgroundColor,
  propCursor,
  propColor,
  onInputContainerClick,
  next,
  onTo,
  onFrom
}) => {
  const input2Style = useMemo(() => {
    return {
      cursor: ellipse251Cursor,
    };
  }, [ellipse251Cursor]);

  const largeButtons8Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      cursor: propCursor,
    };
  }, [propBackgroundColor, propCursor]);

  const label1Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);
   const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  useEffect(() => {
    if(auth.currentUser)
    {
        db.collection('customers').doc(auth.currentUser.uid).get().then(function(snapshot) {
            if(snapshot.data())
            {
              setName(snapshot.data().fname + " "+ snapshot.data().lname)
              setEmail(snapshot.data().email)
            }
          });
    }
  
  }, [])

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.avatarParent}>
          <img className={styles.avatarIcon} alt="" src={avatarImageUrl} />
          <div className={styles.devonLane}>{name}</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.inputParent}>
          <div
            className={styles.input}
            style={input2Style}
            onClick={onInputContainerClick}
          >
            <div className={styles.labelContainer}>
              <div className={styles.label}>From</div>
            </div>
            <div style={{width:'100%'}}>
            <TextField fullWidth onChange={onFrom}/>
            </div>
            <div className={styles.helperTextContainer}>
              <div className={styles.thisIsA}>This is a helper text</div>
              <div className={styles.div}>1/100</div>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.labelContainer}>
              <div className={styles.label}>To</div>
            </div>
           <div style={{width:'100%'}}>
            <TextField fullWidth onChange={onTo}/>
            </div>
            <div className={styles.helperTextContainer}>
              <div className={styles.thisIsA}>This is a helper text</div>
              <div className={styles.div}>1/100</div>
            </div>
          </div>
        </div>
        <div
          className={styles.largeButtons}
          onClick={next}
          style={largeButtons8Style}
        >
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src={iconImageUrl}
          />
          <b className={styles.label2} style={label1Style}>
            Upload Images
          </b>
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src={iconImageUrl2}
          />
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
