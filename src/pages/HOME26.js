import { useState, useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Account from "../components/Account";
import PortalPopup from "../components/PortalPopup";
import SectionForm from "../components/SectionForm";
import PrototypeContainer from "../components/PrototypeContainer";
import CarpenterNavContainer from "../components/CarpenterNavContainer";
import styles from "./HOME26.module.css";
import { db } from "../firebase";

const HOME26 = () => {
  const navigate = useNavigate();
  const [isAccountOpen, setAccountOpen] = useState(false);
  let {id} = useParams()
  let {qkey} = useParams()

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
  const [tools, setTool]=useState([])
  const [q_data, setQdata]=useState({})
   const [user, setUser] = useState({})
  useEffect(() => {
   db.collection('my_draft/'+id+'/list/').doc(qkey).get().then(function (snapshot){
    setTool(snapshot.data().tools)
    setQdata(snapshot.data())
   })
    db.collection('users').doc(id).get().then(function(snapshot) {
            if(snapshot.data())
            {
              setUser(snapshot.data())
            }
          });
  }, [])
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
    <>
      <div className={styles.home}>
        <SectionForm />
        <div className={styles.frameParent3}>
          <div className={styles.headerParent}>
            <div className={styles.header}>
              <div className={styles.merge}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src={user.img||"../avatar231.svg"}
                />
                <div className={styles.dysonElectricalsParent}>
                  <div className={styles.dysonElectricals}>
                    {user.name}
                  </div>
                  <div className={styles.templeWayWithamOnTheHillParent}>
                    <div className={styles.templeWayWitham}>
                      {user.addy1}
                    </div>
                    <div className={styles.templeWayWitham}></div>
                    <div className={styles.templeWayWitham}>
                     {user.email}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.date11112021Parent}>
                <div className={styles.date11112021}>Date: 11/11/2021</div>
                <div className={styles.invoiceNoParent}>
                  <div className={styles.invoiceNo}>Invoice No</div>
                  <div className={styles.div1}>{qkey}</div>
                </div>
                <div className={styles.invoiceNoParent}>
                  <div className={styles.invoiceNo}>Due Date</div>
                  <div className={styles.div1}>{q_data.due}</div>
                </div>
              </div>
            </div>
            <div className={styles.descParent}>
              <div className={styles.dysonElectricalsParent}>
                <div className={styles.tableTitle}>
                  <div className={styles.merge1}>
                    <div className={styles.description}>DESCRIPTION</div>
                    <div className={styles.right}>
                      <div className={styles.description}>RATE</div>
                      <div className={styles.description}>QTY</div>
                      <div className={styles.description}>DISCOUNT</div>
                      <div className={styles.description}>TAX</div>
                      <div className={styles.description}>AMOUNT</div>
                    </div>
                  </div>
                </div>
                <div className={styles.qutoeMaterials}>
             {tools.map((data) => (
           <div className={styles.quoteRow}>
                <div className={styles.metrics}>
                  <div className={styles.electricalInsulator}>
                    {data.desc}
                  </div>
                  <div className={styles.div3}>£{data.unit}</div>
                  <div className={styles.div4}>{data.quant}</div>
                  <div className={styles.div5}>-£{(data.quant*data.unit)*data.disc/100}</div>
                  <div className={styles.div6}>{data.disc}%</div>
                  <div className={styles.div7}>£{(data.quant*data.unit)*data.tax/100}</div>
                  <div className={styles.div8}>{data.tax}%</div>
                  <div className={styles.div9}>£{data.total}</div>
                </div>
              </div>
          ))}
              
             
            </div>
              </div>
               <div className={styles.dysonElectricalsParent}>
            <div className={styles.subtotals}>
              <div className={styles.subtotalParent}>
                <div className={styles.subtotal1}>SUBTOTAL</div>
                <div className={styles.div31}>£{tools.reduce((a,v) =>  a = Number(a) + Number(v.total),0 )}</div>
              </div>
            </div>
            <div className={styles.subtotals}>
              <div className={styles.subtotalParent}>
                <div className={styles.subtotal1}>DISCOUNT</div>
                <div className={styles.div31}>
                £{(tools.reduce((a,v) =>  a =  Number(a) + Number(v.quant) ,0 )*tools.reduce((a,v) =>  a =  Number(a) + Number(v.unit),0 ))*tools.reduce((a,v) =>  a =  Number(a) +Number(v.disc) ,0 )/100}</div>
              </div>
            </div>
            <div className={styles.subtotals2}>
              <div className={styles.subtotalParent}>
                <div className={styles.subtotal1}>TAX</div>
                <div className={styles.div31}>£{(tools.reduce((a,v) =>  a = Number(a) + Number(v.quant),0 )*tools.reduce((a,v) =>  a = Number(a) + Number(v.unit),0 ))*tools.reduce((a,v) =>  a = Number(a) + Number(v.tax) ,0)/100}</div>
              </div>
            </div>
            <div className={styles.subtotals3}>
              <div className={styles.subtotalParent}>
                <div className={styles.subtotal1}>TOTAL</div>
                <div className={styles.div31}>£{tools.reduce((a,v) =>  a = Number(a) + Number(v.total),0 )}</div>
              </div>
            </div>
          </div>
            </div>
          </div>
          <div className={styles.largeButtonsGroup}>
            <div className={styles.largeButtons2}
            style={{cursor:'pointer'}}
            onClick={decline}>
              <img
                className={styles.icons20pxplaceholder}
                alt=""
                src="../icons20pxplaceholder302.svg"
              />
              <b className={styles.label}>Decline</b>
              <img
                className={styles.icons20pxplaceholder}
                alt=""
                src="../icons20pxplaceholder302.svg"
              />
            </div>
            <div className={styles.largeButtons3}
            onClick={()=>{navigate('/home9/'+id+'/'+qkey)}}>
              <img
                className={styles.icons20pxplaceholder}
                alt=""
                src="../icons20pxplaceholder336.svg"
              />
              <b className={styles.label}>Accept Quote</b>
              <img
                className={styles.icons20pxplaceholder}
                alt=""
                src="../icons20pxplaceholder336.svg"
              />
            </div>
          </div>
        </div>
        <PrototypeContainer
        frameImageUrl="../frame-66522.svg"
        iconImageUrl="../iconshome67.svg"
        onDefaultContainerClick={onDefaultContainerClick}
        onDefaultContainer1Click={onDefaultContainer1Click}
        onDefaultContainer2Click={onDefaultContainer2Click}
        onDefaultContainer3Click={onDefaultContainer3Click}
        />
        <CarpenterNavContainer
          addIconUrl="icons16pxadd6.svg"
          searchIconUrl="../icons20pxsearch4.svg"
          paymentType="Quote"
          addIcon4Url="icons16pxadd6.svg"
          propDisplay="none"
          propCursor="unset"
          onSmallButtonsContainerClick={onSmallButtonsContainerClick}
          openAccount={openAccount}
          onComponent98ContainerClick={onComponent98ContainerClick}
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

export default HOME26;
