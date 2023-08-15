import { useEffect, useMemo, useState } from "react";
import styles from "./DysonCard.module.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useParams } from "react-router-dom";
import { auth, db } from "../firebase";
import { serverTimestamp } from "firebase/firestore";
import PaymentSuccessContainer from "./PaymentSuccessContainer";
import { Box } from "@mui/system";
import { Modal } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DysonCard = ({
  avatarImageUrl,
  radioButtonImageUrl,
  iconImageUrl,
  paymentOptionText,
  iconPlaceholderImageUrl,
  paypalImageUrl,
  radioBTNCursor,
  radioBTNCursor1,
  icons20pxPlaceholderCursor,
  onFrameContainer10Click,
  onFrameContainer12Click,
  onLargeButtonsContainerClick,
}) => {
  const [value, setValue] = useState(0);
  let {id} = useParams()
  let {qkey} = useParams()
  const [tools, setTool]=useState([])
  const [q_data, setQdata]=useState({})
  const [m_card, setMcard]=useState([])
  const [user, setUser] = useState({})
  const [success, setSuccess] = useState(false)
  useEffect(() => {
   db.collection('my_draft/'+id+'/list/').doc(qkey).get().then(function (snapshot){
    setTool(snapshot.data().tools)
    setQdata(snapshot.data())
   })
   db.collection('cards/'+auth.currentUser.uid+"/list").where('status','==','default')
   .get().then(function (snapshot){
     let cald = [];
    snapshot.forEach(snap => {
        cald.push(snap.data());
    });
    setMcard(cald)
   })
    db.collection('users').doc(id).get().then(function(snapshot) {
            if(snapshot.data())
            {
              setUser(snapshot.data())
            }
          });
  }, [])

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const onPay =()=>{
    if(id){

    db.collection('wallet/'+id+'/balance').add({
      type: 'job',
      pend: tools.reduce((a,v) =>  a = Number(a) + Number(v.total),0 ),
      stamp: serverTimestamp(),
      status:'pend'
    })
    const key = db.collection("tmp").doc().id
    db.collection('cust_booking/'+auth.currentUser.uid+'/list').doc(key).set({
      pid: id,
      cid: auth.currentUser.uid,
      qid: qkey,
      unix: Date.now(),
      qoute: q_data,
      pname: user.name
    })
    db.collection('prof_booking/'+id+'/list').doc(key).set({
       pid: id,
      cid: auth.currentUser.uid,
      qid: qkey,
      unix: Date.now(),
      qoute: q_data,
      pname: user.name
    })
    db.collection('bookings/').doc(key).set({
      pid: id,
      cid: auth.currentUser.uid,
      qid: qkey,
      unix: Date.now(),
      qoute: q_data,
      pname: user.name
    })
    db.collection('my_draft/'+id+'/list/').doc(qkey).update({
      status:'acc'
    })
    db.collection('cust_messages/' + auth.currentUser.uid + '/' + id)
  .where('qkey', '==', qkey)
  .get()
  .then(snapshot => {
    const batch = db.batch();
    snapshot.forEach(doc => {
      const docRef = db.collection('cust_messages/' + auth.currentUser.uid + '/' + id).doc(doc.id);
      batch.update(docRef, { status: 'acc' });
    });
    return batch.commit();
  })
  .then(() => {
    console.log('Status updated successfully');
  })
  .catch(error => {
    console.log('Error updating status:', error);
  });

    setSuccess(true)
  }
  }
  const frameDiv7Style = useMemo(() => {
    return {
      cursor: radioBTNCursor,
    };
  }, [radioBTNCursor]);

  const frameDiv8Style = useMemo(() => {
    return {
      cursor: radioBTNCursor1,
    };
  }, [radioBTNCursor1]);

  const largeButtons12Style = useMemo(() => {
    return {
      cursor: icons20pxPlaceholderCursor,
    };
  }, [icons20pxPlaceholderCursor]);

  return (
    <div className={styles.homeInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.bookingsCardWrapper}>
            <div className={styles.bookingsCard}>
              <div className={styles.avatarParent}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src={avatarImageUrl}
                />
                <div className={styles.peoplenameParent}>
                  <div className={styles.peoplename}>{user.name}</div>
                  <div className={styles.dateParent}>
                    <div className={styles.date}> {q_data.jdate}</div>
                    <div className={styles.frameChild} />
                    <div className={styles.date}> {q_data.jtime}</div>
                  </div>
                </div>
              </div>
              <div className={styles.electricianRequiredTo}>
               {q_data.jdesc}
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.iconscalendarParent}>
                    <img
                      className={styles.iconscalendar}
                      alt=""
                      src="/iconscalendar21.svg"
                    />
                    <div className={styles.date}>{q_data.jdate}</div>
                  </div>
                  <div className={styles.iconscalendarParent}>
                    <img
                      className={styles.iconscalendar}
                      alt=""
                      src="/iconsclock.svg"
                    />
                    <div className={styles.date}>{q_data.jtime}</div>
                  </div>
                  <div className={styles.iconscalendarParent}>
                    <img
                      className={styles.iconscalendar}
                      alt=""
                      src="/iconsduration.svg"
                    />
                    <div className={styles.date}>{q_data.jdura} days</div>
                  </div>
                </div>
                <div className={styles.iconscalendarParent}>
                  <img
                    className={styles.iconscalendar}
                    alt=""
                    src="/iconslocation.svg"
                  />
                  <div className={styles.citiessummary3}>
                    {user.addy1}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bookingsCard}>
            <div className={styles.selectAPayment}>Select a payment method</div>
            <div className={styles.frameParent1}>
            <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value={0} control={<Radio />} label="Credit or debit card" />
         
        <FormControlLabel value={1} control={<Radio />} label="Pay from Wallet" />
      </RadioGroup>
    </FormControl>
              <div
                className={styles.radioBtnParent}
                style={frameDiv8Style}
                onClick={onFrameContainer10Click}
              >
                <img
                  className={styles.radioBtnIcon}
                  alt=""
                  src={'../radio-btn2.svg'}
                />
                <div className={styles.date}>Split pay</div>
              </div>
            </div>
          </div>
          <div className={styles.frameItem} />
          <div className={styles.orderSummaryParent}>
            <div className={styles.selectAPayment}>Order Summary</div>
            <div className={styles.frameParent2}>
              <div className={styles.subTotalParent}>
                <div className={styles.subTotal}>Sub Total</div>
                <div className={styles.div}>£{tools.reduce((a,v) =>  a = Number(a) + Number(v.total),0 )}</div>
              </div>
              {/*<div className={styles.subTotalParent}>
                <div className={styles.subTotal}>Sale Tax Rate</div>
                <div className={styles.div}>18%</div>
              </div>*/}
              <div className={styles.subTotalParent}>
                <div className={styles.subTotal}>Sales Tax</div>
                <div className={styles.div}>£{(tools.reduce((a,v) =>  a = Number(a) + Number(v.quant),0 )*tools.reduce((a,v) =>  a = Number(a) + Number(v.unit),0 ))*tools.reduce((a,v) =>  a = Number(a) + Number(v.tax) ,0)/100}</div>
              </div>
              <div className={styles.subTotalParent}>
                <div className={styles.subTotal}>Discount</div>
                <div className={styles.div}>-£{(tools.reduce((a,v) =>  a =  Number(a) + Number(v.quant) ,0 )*tools.reduce((a,v) =>  a =  Number(a) + Number(v.unit),0 ))*tools.reduce((a,v) =>  a =  Number(a) +Number(v.disc) ,0 )/100}</div>
              </div>
              <div className={styles.subTotalParent}>
                <b className={styles.subTotal}>Total Amount</b>
                <b className={styles.b}>£{tools.reduce((a,v) =>  a = Number(a) + Number(v.total),0 )}</b>
              </div>
            </div>
          </div>
        </div>
      
        <Modal open={success} onClose={()=>{setSuccess(false)}}>
       <Box sx={style}>
       <PaymentSuccessContainer
            illustrationSvgUrls="/illustrations2.svg"
            iconSvgUrls="/icons20pxplaceholder22.svg"
            icon20pxSvgUrls="/icons20pxplaceholder22.svg"
            propCursor="unset"
            onLargeButtonsContainer1Click={()=>{setSuccess(false)}}
            onIconsCloseClick={()=>{setSuccess(false)}}
          />
      </Box>
    </Modal>
        <div className={styles.largeButtonsParent}>
          <div
            className={styles.largeButtons}
            onClick={onPay}
            style={largeButtons12Style}
          >
            <img
              className={styles.icons20pxplaceholder}
              alt=""
              src={iconImageUrl}
            />
            <b className={styles.date}>{paymentOptionText}</b>
            <img
              className={styles.icons20pxplaceholder}
              alt=""
              src={iconPlaceholderImageUrl}
            />
          </div>
          <div className={styles.demarcation}>
            <div className={styles.demarcationChild} />
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.or}>OR</div>
            </div>
          </div>
          <div className={styles.groupWrapper}>
            <div className={styles.payWithParent}>
              <div className={styles.payWith}>Pay with</div>
              <img className={styles.paypal2Icon} alt="" src={paypalImageUrl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DysonCard;
