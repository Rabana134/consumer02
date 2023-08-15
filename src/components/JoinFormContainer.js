import { useEffect, useMemo, useState } from "react";
import styles from "./JoinFormContainer.module.css";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { TextField, IconButton, InputAdornment } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import app, { firebase, auth, signInWithGoogle, db } from '../firebase';
import { useNavigate } from "react-router-dom";
import Onboarding2 from "../pages/Onboarding2";

const JoinFormContainer = ({
  flagImageUrl,
  phoneNumber,
  iconImageUrl,
  flagIconImageUrl,
  flagIconImageUrl1,
  flagIconImageUrl2,
  flagIconImageUrl12,
  flagIconImageUrl3,
  ellipse252Cursor,
  thisIsAHelperTextDisplay,
  oRDisplay,
  alreadyHaveAnAccountCursor,
  onLargeInputsContainerClick,
  onLargeButtonsContainerClick,
}) => {
  const largeInputs1Style = useMemo(() => {
    return {
      cursor: ellipse252Cursor,
    };
  }, [ellipse252Cursor]);

  const div1Style = useMemo(() => {
    return {
      display: thisIsAHelperTextDisplay,
    };
  }, [thisIsAHelperTextDisplay]);

  const dotStyle = useMemo(() => {
    return {
      display: oRDisplay,
    };
  }, [oRDisplay]);

  const largeButtons16Style = useMemo(() => {
    return {
      cursor: alreadyHaveAnAccountCursor,
    };
  }, [alreadyHaveAnAccountCursor]);
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState('')
  const [show, setShow] = useState(false);
  const [final, setfinal] = useState('');
  const [sent,setSent] = useState(false)

  const handleClickShowPassword = () => {
    setShow(!show);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  
    // Sent OTP
    const signin = () => {
  
        if (phone === "" || phone.length < 10) return;
        console.log(phone)
        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        app.auth().signInWithPhoneNumber('+'+phone, verify).then((result) => {
            setfinal(result);
            setSent(true)
        })
            .catch((err) => {
                console.log(err.message)
            });
    }
  
     const [user, setUser] = useState(null);
 const navigate = useNavigate()
 useEffect(() => {
    app.auth().onAuthStateChanged(user => {
      if(user)
      {
        db.collection('customers').doc(user.uid).get().then(function(snapshot) {
            if(snapshot.data())
            {
              navigate('/home1')
            }
            else
            {
              navigate('/onboarding-4')
            }
          });
      }
      else
      {
        navigate('/sign-up')
      }
    })
  }, [])

  return (
    <>
     {
        !sent ?
    <div className={styles.joinLoggworksForFreeParent}>
      <b className={styles.joinLoggworksFor}>Join Loggworks for free</b>
      <div className={styles.login}>
        <div className={styles.login1}>
          <div className={styles.verifyForm}>
            <div className={styles.inputs}>
              <div
                className={styles.largeInputs}
                style={largeInputs1Style}
                onClick={onLargeInputsContainerClick}
              >
                <div className={styles.label}>Phone number</div>
                <div className={styles.field}>
                   <PhoneInput
                  country={'gb'}
                  value={phone}
                  onChange={e => setPhone(e)}
                  inputStyle={{
                    width:'100%',
                    height:'3rem'
                  }}
                />
                </div>
              </div>
              <div className={styles.largeInputs1}>
                <div className={styles.label}>Password</div>
                <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        type={show ? 'text' : 'password'}
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        InputProps={{
                          endAdornment: (
                              <InputAdornment position="end">
                                  <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                  >
                                      {show ? <Visibility /> : <VisibilityOff />}
                                  </IconButton>
                              </InputAdornment>
                          )
                      }}
                    /> 
                    <div id="recaptcha-container" /> 
                <div className={styles.thisIsA}>This is a helper text</div>
              </div>
            </div>
            <div
              className={styles.largeButtons}
               onClick={signin}
              style={largeButtons16Style}
            >
              <img
                className={styles.icons20pxplaceholder}
                alt=""
                src={iconImageUrl}
              />
              <b className={styles.label2}>Verify phone number</b>
              <img
                className={styles.icons20pxplaceholder}
                alt=""
                src={flagIconImageUrl}
              />
            </div>
          </div>
          <div className={styles.demarcation}>
            <div className={styles.demarcationChild} />
            <div className={styles.orWrapper}>
              <div className={styles.or}>OR</div>
            </div>
          </div>
          <div className={styles.socialLogin}>
            <div className={styles.largeButtons1}
            >
              <img
                className={styles.icons20pxplaceholder2}
                alt=""
                src={flagIconImageUrl1}
              />
              <b className={styles.label2}>Sign up with Facebook</b>
              <img
                className={styles.icons20pxplaceholder}
                alt=""
                src={flagIconImageUrl2}
              />
            </div>
            <div className={styles.largeButtons2}
            style={{cursor:'pointer'}}
             onClick={signInWithGoogle}>
              <img
                className={styles.icons20pxplaceholder2}
                alt=""
                src={flagIconImageUrl12}
              />
              <b className={styles.label2}>Sign up with Google</b>
              <img
                className={styles.icons20pxplaceholder}
                alt=""
                src={flagIconImageUrl3}
              />
            </div>
          </div>
        </div>
        <div className={styles.alreadyHaveAnContainer}>
          <span
            className={styles.alreadyHaveAn}
          >{`Already have an account? `}</span>
          <span className={styles.logIn}>Log in</span>
        </div>
      </div>
    </div>
    :
    <div>
      <Onboarding2 phone={phone} final={final}/>
    </div>
     }
     </>
  );
};

export default JoinFormContainer;
