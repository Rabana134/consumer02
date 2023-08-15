import { useCallback } from "react";
import ChatContainer from "../components/ChatContainer";
import ChatLeftContainer from "../components/ChatLeftContainer";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./ContentContainer.module.css";
import { auth, db } from "../firebase";

const ContentContainer = ({time,qkey,status}) => {
  const navigate = useNavigate();
  let {id} =useParams()

  const onQuoteContainerClick = useCallback(() => {
    navigate("/home10/"+id+'/'+qkey);
  }, [navigate]);

  const onSmallButtonsContainer1Click = useCallback(() => {
    navigate("/home9");
  }, [navigate]);
   const decline=()=>{
    db.collection('cust_messages/' + auth.currentUser.uid + '/' + id)
  .where('qkey', '==', qkey)
  .get()
  .then(snapshot => {
    const batch = db.batch();
    snapshot.forEach(doc => {
      const docRef = db.collection('cust_messages/' + auth.currentUser.uid + '/' + id).doc(doc.id);
      batch.update(docRef, { status: 'decl' });
    });
    return batch.commit();
  })
  .then(() => {
    console.log('Status updated successfully');
  })
  .catch(error => {
    console.log('Error updating status:', error);
  });

  }
  return (
    <div >
      <div className={styles.chatLeft}>
        <img className={styles.chatLeftChild} alt="" src="../vector-263.svg" />
        <div className={styles.chatLeftInner}>
          <div className={styles.quoteParent}>
            <div className={styles.quote} >
              <div className={styles.quoteBtn}>
                <img
                  className={styles.quoteBtnChild}
                  alt=""
                  src="../rectangle-12260@2x.png"
                  onClick={onQuoteContainerClick}
                />
                {
                  status==''?
                  <div className={styles.smallButtonsParent}>
                  <div className={styles.smallButtons}
                   style={{cursor:'pointer'}}
                   onClick={decline}>
                    <div className={styles.buttonWrapper}>
                      <div className={styles.button}>Decline</div>
                    </div>
                  </div>
                  <div
                    className={styles.smallButtons1}
                    onClick={onQuoteContainerClick}
                  >
                    <div className={styles.buttonWrapper}>
                      <div className={styles.button1}>Accept</div>
                    </div>
                  </div>
                </div>
                :status=='acc'?
                <div className={styles.smallButtonsParent}><b style={{color:'green'}}>Accepted</b></div>
                :
                <div className={styles.smallButtonsParent}><b style={{color:'red'}}>Declined</b></div>
                }
                
              </div>
            </div>
            <div className={styles.pm}>{time}</div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ContentContainer;
