import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./PrototypeContainer3.module.css";

const PrototypeContainer3 = ({
  frameImageUrl,
  iconImageUrl,
  onDefaultContainerClick,
  onDefaultContainer1Click,
  onDefaultContainer2Click,
  onDefaultContainer3Click,
}) => {
  const [page, setPage] = useState(0)
  const location = useLocation();
  useEffect(() => {
    if(location.pathname=='/home1')
    {
      setPage(0)
    }
    else if(location.pathname=='/messages1')
    {
      setPage(1)
    }
    else if(location.pathname=='/home2')
    {
      setPage(2)
    }
    else if(location.pathname=='/messages2')
    {
      setPage(3)
    }
  }, [])
  
  return (
    <div className={styles.navPrototype}>
      <div className={styles.nav}>
        <img className={styles.navChild} alt="" src={'../frame-66522.svg'} />
        <div className={styles.defaultParent}>
          <div className={page==0?styles.default:styles.default1} onClick={onDefaultContainerClick}>
            <div className={styles.iconshomeParent}>
              <img className={styles.iconshome} alt="" src={'../iconshome67.svg'} />
              <div className={styles.home}>Home</div>
            </div>
          </div>
          <div className={page==1?styles.default:styles.default1} onClick={onDefaultContainer1Click}>
            <div className={styles.iconshomeParent}>
              <img
                className={styles.iconshome}
                alt=""
                src="../iconscalendar1.svg"
              />
              <div className={styles.home1}>Bookings</div>
            </div>
          </div>
          <div className={page==2?styles.default:styles.default1} onClick={onDefaultContainer2Click}>
            <div className={styles.iconshomeParent}>
              <img
                className={styles.iconshome}
                alt=""
                src="../iconsmessage.svg"
              />
              <div className={styles.home1}>Messages</div>
            </div>
          </div>
          <div className={page==3?styles.default:styles.default1} onClick={onDefaultContainer3Click}>
            <div className={styles.iconshomeParent}>
              <img
                className={styles.iconshome}
                alt=""
                src="../iconsactivity.svg"
              />
              <div className={styles.home1}>Activities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrototypeContainer3;
