import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ChatContainer from "../components/ChatContainer";
import { auth, db } from "../firebase";
import ChatLeftContainer from "./ChatLeftContainer";
import ContentContainer from "./ContentContainer";
import styles from "./ElectricalsContainer.module.css";
import { Typography } from "@mui/material";

const ElectricalsContainer = () => {
   const navigate = useNavigate();
  let {id} = useParams()
  const [prof, setProf]= useState('')
  const [info, setInfo]= useState('')
  const [name, setName]= useState('')
  const [messages, setMessages]= useState([])
  
  useEffect(() => {
    if(auth.currentUser)
    {
 db.collection('users').doc(id).get().then(snapshot=>{
      setName(snapshot.data().name)
    })
  db.collection('cust_contacts/'+auth.currentUser.uid+'/my/').where('uid','==',id).get().then(snapshot=> {
     snapshot.forEach((snap) => {
         setInfo(snap.data().desc)
      });  
   })
   db.collection('cust_messages/'+auth.currentUser.uid+'/'+id).orderBy('stamp','asc').onSnapshot(snapshot=>{
    let list = []
    snapshot.forEach(snap => {
              list.push(snap.data());
          });
    setMessages(list)
   })
    }
   
  }, [])
  
  return (
    <div className={styles.content}>
      <div className={styles.chatHeader}>
        <div className={styles.avatarname}>
          <img className={styles.avatarIcon} alt="" src="../avatar177.svg" />
          <div className={styles.peoplename}>{name}</div>
        </div>
      </div>
       <div style={{width:'50vw',marginTop:'5rem'}}>
      <div style={{maxHeight:'70vh',minHeight:'70vh', overflowY:'scroll'}}>
      { /*<div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.today}>Today</div>
      </div>*/}
      {
        messages.map(data=>{
          return(
            <div>
                
                {
                  data.senderid=='cust'?
                  <div style={{marginTop:'1rem'}}>
                  <ChatContainer greetingText={data.message} time={data.time}/>
                  </div>
                  :
                   data.senderid=='qoute'?
                   <div style={{marginTop:'1rem'}}>
                  <ContentContainer time={data.time} qkey={data.qkey} status={data.status||''}/>
                   </div>
                  :
                  <div style={{marginTop:'1rem'}}>
                  <ChatLeftContainer
        greetingText={data.message}
        propTop="377px"
        propWidth="312px"
        propFlexShrink="0"
        time={data.time}
      />
                  </div>
                  
                }
            </div>
          )
        })
      }
      </div>
      </div>
    </div>
  );
};

export default ElectricalsContainer;
