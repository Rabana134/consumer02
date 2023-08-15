import styles from "./CardContainer.module.css";
import { Modal, TextField, Button, Box, Radio } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { auth, db } from "../firebase";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '90%',
    maxWidth: 400,
    padding: '3rem',
    borderRadius: 8,
    backgroundColor: '#f4f4f4',
  },
  cardInput: {
    width: '100%',
    marginBottom: '2rem',
    '& input': {
      padding: '10px 0',
      letterSpacing: '1.1px',
      fontSize: '1.1rem',
      fontWeight: 600,
    },
    '& label': {
      fontWeight: 600,
      fontSize: '1rem',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#bbb',
      },
      '&:hover fieldset': {
        borderColor: '#aaa',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#555',
      },
    },
  },
  cardNameInput: {
    width: '100%',
    marginBottom: '2rem',
    '& input': {
      padding: '10px 0',
      letterSpacing: '1.1px',
      fontSize: '1.1rem',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    '& label': {
      fontWeight: 600,
      fontSize: '1rem',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#bbb',
      },
      '&:hover fieldset': {
        borderColor: '#aaa',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#555',
      },
    },
  },
  cardFormButton: {
    width: '100%',
    padding: '1.5rem',
    borderRadius: 8,
    color: '#fff',
    fontWeight: 600,
    fontSize: '1.1rem',
  },
}));

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

const CardContainer = ({
  iconImageUrl,
  mastercardImageUrl,
  additionalIconImageUrl,
  additionalIconImageUrl1,
}) => {
   const classes = useStyles();
  const [paymentData, setPaymentData] = useState({
    name: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
  });
  const [cards, setCards] = useState([])
  const [def, setDef] = useState(0)
  const [modal_open, setModal] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
useEffect(() => {
  if (auth.currentUser) {
db.collection('cards/'+auth.currentUser.uid+"/list").onSnapshot((snapshot)=>{
     let cald = [];
    snapshot.forEach(snap => {
        cald.push(snap.data());
    });
    setCards(cald)
  })
  }
}, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const { cardNumber, cardExpiry, cardCvv, name } = paymentData;
   const cardData = {
        cardNumber,
        cardExpirationDate: cardExpiry,
        cardCvx: cardCvv,
        name: name
      };
      if (auth.currentUser) {
        db.collection('cards/'+auth.currentUser.uid+"/list").add(cardData);
      }
  };
  return (
    <div className={styles.savedCardsParent}>
       {
          cards.map((data)=>{
            return(
               <div className={styles.savedCards}>
        <div className={styles.crosbyOdennehyParent}>
          <div className={styles.crosbyOdennehy}>{data.name}</div>
          <div className={styles.transactionPills}>
            <div className={styles.success}>{data.status}</div>
          </div>
        </div>
        <img className={styles.iconsplaceholder} alt="" src={iconImageUrl} />
        <div className={styles.div}>**** **** **** {data.cardNumber}</div>
        <div className={styles.mastercard1Parent}>
          <img
            className={styles.mastercard1Icon}
            alt=""
            src={mastercardImageUrl}
          />
          <Radio/>
        </div>
      </div>
            );
          })
        }
     
      <div className={styles.largeButtons} onClick={()=>{setModal(!modal_open)}}>
        <img className={styles.iconsadd} alt="" src={additionalIconImageUrl} />
        <b className={styles.label}>Add another card</b>
        <img
          className={styles.iconsadd1}
          alt=""
          src={additionalIconImageUrl1}
        />
      </div>
      <Modal
      open={modal_open}
      onClose={()=>setModal(!modal_open)}
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit} className={classes.form}>
         <TextField
            label="Cardholder Name"
            name="name"
            value={paymentData.name}
            onChange={handleInputChange}
            variant="outlined"
            className={classes.cardNameInput}
          />
          <TextField
            label="Card Number"
            name="cardNumber"
            value={paymentData.cardNumber}
            onChange={handleInputChange}
            className={classes.cardInput}
          />
          <TextField
            label="Expiry Date"
            name="cardExpiry"
            value={paymentData.cardExpiry}
            onChange={handleInputChange}
            className={classes.cardInput}
          />
          <TextField
            label="CVV"
            name="cardCvv"
            value={paymentData.cardCvv}
            onChange={handleInputChange}
            className={classes.cardInput}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Save Card
          </Button>
        </form>
      </Box>
    </Modal>
    </div>
  );
};

export default CardContainer;
