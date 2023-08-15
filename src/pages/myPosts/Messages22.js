import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Messages22.module.css";
import app, { auth, db } from "../../firebase";
import Messages36 from "./Messages36";
import JobPostingContainer from "../../components/JobPostingContainer";
import Header from "../../components/Header";
import PrototypeContainer3 from "../../components/PrototypeContainer3";

const Messages22 = () => {
  const navigate = useNavigate();

  const onSmallButtonsContainerClick = useCallback(() => {
    navigate("/messages20");
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
 const [list,setList] = useState([])
 //calling jobs from database
  useEffect(() => {
     app.auth().onAuthStateChanged(user => {
      if(user)
      {
         db.collection('my_jobs/'+auth.currentUser.uid+'/list').onSnapshot(snapshot=> {
          let cald = [];
          snapshot.forEach(snap => {
              cald.push(snap.data());
          });
          setList(cald) 
        })
      }
      else
      {
        navigate('/sign-up')
      }
    })
    }, [])
  return (
    <div>
    {
      list.length==0?
        <div className={styles.messages}>
      <JobPostingContainer
        iconImageUrl="../icons16pxadd3.svg"
        propCursor="unset"
        propCursor1="pointer"
        onSmallButtonsContainerClick={onSmallButtonsContainerClick}
      />
      <div className={styles.travelBagLineParent}>
        <img
          className={styles.travelBagLine}
          alt=""
          src="../travel-bag-line.svg"
        />
        <div className={styles.noHaveNot}>No have not posted any Jobs</div>
      </div>
      <Header
        iconImageUrl="../icons16pxadd3.svg"
        searchIconImageUrl="icons20pxsearch24.svg"
        searchText="Try searching carpenter..."
        locationText="Location"
        propDisplay="none"
        propDisplay1="none"
      />
      <PrototypeContainer3
          frameImageUrl="../frame-66522.svg"
          iconImageUrl="../iconshome67.svg"
          onDefaultContainerClick={onDefaultContainerClick}
          onDefaultContainer1Click={onDefaultContainer1Click}
          onDefaultContainer2Click={onDefaultContainer2Click}
          onDefaultContainer3Click={onDefaultContainer3Click}
        />
    </div>
    :
    <>
      <Messages36/>
    </>
    }
    
    </div>
    
  );
};

export default Messages22;
