import { useEffect, useMemo, useState } from "react";
import app, { auth, db } from "../../firebase";
import styles from "./JobPostContainer.module.css";

const JobPostContainer = ({
  jobIconUrl,
  jobTitle,
  jobLocationIconUrl,
  jobDescription,
  frame67453Display,
  frame67449Overflow,
  propOverflow,
}) => {
  const activeJobPostsStyle = useMemo(() => {
    return {
      display: frame67453Display,
      marginTop: '1rem',
    };
  }, [frame67453Display]);

  const iconsPlaceholder1Style = useMemo(() => {
    return {
      overflow: frame67449Overflow,
    };
  }, [frame67449Overflow]);

  const iconsPlaceholder2Style = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);
  const [list,setList] = useState([])
  useEffect(() => {
     app.auth().onAuthStateChanged(user => {
      if(user)
      {
         db.collection('my_jobs/'+auth.currentUser.uid+'/list').orderBy('timestamp','desc').onSnapshot(snapshot=> {
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
      list.map((data) => {
            return(
          <div className={styles.activeJobPosts} style={activeJobPostsStyle}>
      <img className={styles.activeJobPostsChild} alt="" src={data.image1}/>
      <div className={styles.activeJobPostsInner}>
        <div className={styles.frameParent}>
          <div className={styles.electricianNeededParent}>
            <div className={styles.electricianNeeded}>{data.title}</div>
            <div className={styles.imInNeed}>
             {data.desc}
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.iconsplaceholderParent}>
              <img
                className={styles.iconsplaceholder}
                alt=""
                src={jobLocationIconUrl}
                style={iconsPlaceholder1Style}
              />
              <div className={styles.citiessummary}>£{data.from} - £{data.to}</div>
            </div>
            <div className={styles.iconsplaceholderParent}>
              <img
                className={styles.iconsplaceholder}
                alt=""
                src={jobDescription}
                style={iconsPlaceholder2Style}
              />
              <div className={styles.citiessummary}>
               {data.addy1}, {data.addy2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
            )
        })
    }
 
    </div>
   
  );
};

export default JobPostContainer;
