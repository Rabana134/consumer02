import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import SectionForm from "../components/SectionForm";
import FormFieldContainer from "../components/FormFieldContainer";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import PrototypeContainer1 from "../components/PrototypeContainer1";
import styles from "./PersonalSettings.module.css";
import { auth, db } from "../firebase";

const PersonalSettings = () => {
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);
  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const [addy, setAddy] = useState()
  const [email, setEmail] = useState()
  const [img, setImage] = useState()

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
   const generateToken = (len) => {
        let result = [];
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charLength = characters.length;
        for (let i = 0; i < len; i++) {
            result.push(characters.charAt(Math.floor(Math.random() * charLength)));
        }
        return result.join('');
      }
   useEffect(() => {
    if(auth.currentUser)
    {
       db.collection('customers').doc(auth.currentUser.uid).get().then(function(snapshot) {
            setImage(snapshot.data().url)
          });
    }
   }, [])
     const onImagechange= (event) =>
        {
            if (event.target.files && event.target.files[0]) {
                setImage(URL.createObjectURL(event.target.files[0]));

                let id_pic = generateToken(7)
                const uploadTask = storage.ref(`images/${id_pic}.png`).put(event.target.files[0]);
          uploadTask.on('state_changed', 
          (snapshot) => {
            // progrss function ....
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          }, 
          (error) => {
               // error function ....
            console.log(error);
            
          }, 
        () => {
            // complete function ....
            storage.ref('images').child(id_pic+".png").getDownloadURL().then(url => {
              db.collection('customers').doc(auth.currentUser.uid).update({
                url: url
                  });
            })
        });
              }
        }

  return (
    <>
      <div className={styles.personalSettings}>
       
        <SectionForm />
        <div className={styles.avatarParent}>
          <img className={styles.avatarIcon} alt=""
          src={img || '../avatar294.svg'}
          style={{borderRadius:'50%'}}
          />
          <input type="file" onChange={onImagechange}/>
          <FormFieldContainer />
        </div>
        <CarpenterNavContainer
          addIconUrl="icons16pxadd132.svg"
          searchIconUrl="icons20pxsearch75.svg"
          paymentType="Personal"
          addIcon4Url="icons16pxadd133.svg"
          propDisplay2="unset"
          propCursor="unset"
          onSmallButtonsContainerClick={onSmallButtonsContainerClick}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
        />
        <PrototypeContainer1
          frameImageUrl="frame-6652278.svg"
          iconImageUrl="iconshome77.svg"
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

export default PersonalSettings;
