import { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SectionForm from "../components/SectionForm";
import ElectricalsContainer from "../components/ElectricalsContainer";
import Footer from "../components/Footer";
import MessageChatContainer from "../components/MessageChatContainer";
import PrototypeContainer from "../components/PrototypeContainer";
import styles from "./HOME8.module.css";
import { auth, db } from "../firebase";
import { serverTimestamp } from "firebase/firestore";

const HOME8 = () => {
  const navigate = useNavigate();

  const onInputContainerClick = useCallback(() => {
    navigate("/home7");
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
  const [text, setText]= useState('')
  let {id} = useParams()

  const onText=(e)=>{
    setText(e.target.value);
  }
  const onSend=(e)=>{
    if(e.key == 'Enter'){
      var date = new Date();
       var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
         db.collection('messages/'+auth.currentUser.uid+'/'+id).add({
      message: e.target.value,
      senderid: 'cust',
      time: strTime,
      stamp: serverTimestamp()
    })
     db.collection('cust_messages/'+id+'/'+auth.currentUser.uid).add({
      message: e.target.value,
      senderid: 'cust',
      time: strTime,
      stamp: serverTimestamp()
    })
    let key = db.collection("tmp").doc().id
    db.collection('customers').doc(auth.currentUser.uid).get().then(snaps=> {
      db.collection('contacts/'+id+'/my/').where('uid','==',auth.currentUser.uid).get().then(snapshot=>{
        if(snapshot.empty)
        {
          db.collection('contacts/'+id+'/my/').doc(key).set({
      uid:auth.currentUser.uid,
      last: e.target.value,
      unix: Date.now(),
      timestamp: serverTimestamp(),
      name: snaps.data().name,
      key: key
    }) 
     }
     else
        {
         snapshot.forEach((snap) => {
        const key_id = snap.data().key;
        db.collection(`contacts/${id}/my`).doc(key_id).update({
          last: e.target.value,
          unix: Date.now(),
          timestamp: serverTimestamp(),
          name: snaps.data().name
        });
      });
        }
      })
      })
    setText(''); 
    }
  }

  return (
    <div className={styles.home}>
      <ElectricalsContainer />
      <Footer
        frameImageUrl="../frame-674471.svg"
        iconImageUrl="../iconsattachment1.svg"
        propCursor="pointer"
        onInputContainerClick={onInputContainerClick}
        text={text}
        onText={onText}
        onSend={onSend}
      />
      <MessageChatContainer
        avatarImageUrl="../avatar76.svg"
        avatarImageUrls="avatar84.svg"
        avatarImageUrlsRange="avatar85.svg"
        avatarImageUrlsRange73to7="../avatar86.svg"
        avatarImageUrlsRange74to8="avatar87.svg"
        avatarImageUrlsRange75to8="avatar88.svg"
        propBorderRadius="8px"
        propBackgroundColor="#f6f6f6"
      />
      <PrototypeContainer
        frameImageUrl="../frame-66522.svg"
        iconImageUrl="../iconshome67.svg"
        onDefaultContainerClick={onDefaultContainerClick}
        onDefaultContainer1Click={onDefaultContainer1Click}
        onDefaultContainer2Click={onDefaultContainer2Click}
        onDefaultContainer3Click={onDefaultContainer3Click}
      />
    </div>
  );
};

export default HOME8;
