import { TextField } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../firebase";
import styles from "./MessageChatContainer.module.css";
import moment from "moment";

const MessageChatContainer = ({
  avatarImageUrl,
  avatarImageUrls,
  avatarImageUrlsRange,
  avatarImageUrlsRange73to7,
  avatarImageUrlsRange74to8,
  avatarImageUrlsRange75to8,
  propCursor,
  propBorderRadius,
  propBackgroundColor,
  onChatContainerClick,
}) => {
  const chatStyle = useMemo(() => {
    return {
      cursor: propCursor,
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
    };
  }, [propCursor, propBorderRadius, propBackgroundColor]);

  let {id} = useParams()
  const [list, setList]= useState([])
  const navigate = useNavigate()
   
  useEffect(() => {
    if(auth.currentUser)
   {
    let cald = [];
    db.collection('cust_contacts/'+auth.currentUser.uid+'/my/').orderBy('timestamp','desc').get().then(snapshot=> {
          snapshot.forEach(snap => {
              cald.push(snap.data());
          });
          setList(cald)
   })
    }
  }, [])

  return (
    <div className={styles.messageChat}>
      <div className={styles.avatarnameWrapper}>
        <div className={styles.avatarname}>
          <b className={styles.peoplename}>Messages</b>
        </div>
      </div>
      <div className={styles.chatParent}>
        {
        list.map(data=>{
          return(
             <div
          className={styles.chat}
          style={id==data.uid?chatStyle:null}
          onClick={()=>{navigate('/home8/'+data.uid)}}
        >
          <div className={styles.avatarParent}>
            <img className={styles.avatarIcon} alt="" src={avatarImageUrl} />
            <div className={styles.namedateParent}>
              <div className={styles.namedate}>
                <div className={styles.peoplename1}>{data.name}</div>
                <div className={styles.yesterday}>{moment(data.unix).fromNow()}</div>
              </div>
              <div className={styles.msgCounter}>
                <div className={styles.citiessummary}>
                  {data.last}
                </div>
                <div className={styles.chatCounter}>
                  <div className={styles.div}>2+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
          )
        })
      }
      
      </div>
      <div className={styles.input}>
        <div className={styles.labelContainer}>
          <div className={styles.label}>Label</div>
        </div>
       <div style={{width:'100%'}}>
       <TextField
        fullWidth
        placeholder="Search"
       />
       </div>
      </div>
    </div>
  );
};

export default MessageChatContainer;
