import { Alert, Button, Snackbar, TextField } from "@mui/material";
import CardInput from "../components/CardInput";
import styles from "./FormFieldContainer.module.css";
import PhoneInput from "react-phone-input-2";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";

const FormFieldContainer = () => {
  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const [addy, setAddy] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [msg, setMsg] = useState()

  useEffect(() => {
    if(auth.currentUser.uid){
     db.collection('customers').doc(auth.currentUser.uid).get().then(function(snapshot) {
            setFname(snapshot.data().fname)
            setLname(snapshot.data().lname)
            setEmail(snapshot.data().email)
            setAddy(snapshot.data().addy)
            setPhone(snapshot.data().phone)
            setImage(snapshot.data().url)
          });
        }
  }, [])
  
  return (
    <div className={styles.inputParent} style={{width:'50vw'}}>
    <Snackbar
                    open={Boolean(msg)}
                    anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                    autoHideDuration={8000} 
                    onClose={() => setMsg(null)}
                >
                    <Alert
                        onClose={() => setMsg(null)} 
                        severity="success"
                        variant="filled"
                    >
                        {msg}
                    </Alert>
                </Snackbar>
      <TextField
      fullWidth
      value={fname}
      onChange={(e)=>{setFname(e.target.value)}}
       placeholder="Full Name"
      />
      <TextField
      fullWidth
       value={lname}
      onChange={(e)=>{setLname(e.target.value)}}
        placeholder="Last Name"
      />
      <div className={styles.largeInputs}>
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
     <TextField
      fullWidth
       value={email}
      onChange={(e)=>{setEmail(e.target.value)}}
        placeholder="Email"
      />
    <TextField
      fullWidth
       value={addy}
      onChange={(e)=>{setAddy(e.target.value)}}
        placeholder="Address"
      />
      <Button variant="contained" onClick={()=>{
           db.collection('customers').doc(id).update({
                fname: fname,
                lname: lname,
                phone: phone,
                addy: addy,
                email: email
                  });
                  setMsg('Updated successfully.')
      }}> Save </Button>
    </div>
  );
};

export default FormFieldContainer;
