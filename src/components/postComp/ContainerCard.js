import { TextareaAutosize, TextField } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { auth, db } from "../../firebase";
import styles from "./ContainerCard.module.css";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Catering',
  'Childcare',
  'Cleaning',
  'Entertainment',
  'Appliance Repair',
  'Mobile Mechanic',
  'Personal Assistance',
  'Pet Groomer',
  'Recovery Services',
  'Computer & Phone Repair',
  'Removal Services',
  'Tradesman',
  'Transport Services',
  'Dry Cleaning & Laundry',
  'Health, Wellness & Beauty',
  'Tuition & Classes',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ContainerCard = ({
  avatarImageUrl,
  labelText,
  electricianLocationText,
  icon20pxImageUrl,
  propBackgroundColor,
  propColor,
  next,
  onTitle,
  onDesc,
  onCate,
}) => {
  const largeButtons9Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

   const [name, setName] = useState('')
  const [email, setEmail] = useState('')
    const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    setPersonName(
      event.target.value
    );
    onCate(event.target.value)
  };
  useEffect(() => {
    if(auth.currentUser)
    {
        db.collection('customers').doc(auth.currentUser.uid).get().then(function(snapshot) {
            if(snapshot.data())
            {
              setName(snapshot.data().fname + " "+ snapshot.data().lname)
              setEmail(snapshot.data().email)
            }
          });
    }
  
  }, [])

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.avatarParent}>
          <img className={styles.avatarIcon} alt="" src={avatarImageUrl} />
          <div className={styles.devonLane}>{name}</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.inputParent}>
          <div className={styles.input}>
            <div className={styles.labelContainer}>
              <div className={styles.label}>Title</div>
            </div>
            <div style={{width:'100%'}}>
              <TextField fullWidth onChange={onTitle}/>
            </div>
            <div className={styles.helperTextContainer}>
              <div className={styles.thisIsA}>This is a helper text</div>
              <div className={styles.div}>1/100</div>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.labelContainer}>
              <div className={styles.label}>{labelText}</div>
            </div>
            <div style={{width:'100%'}}>
             <TextareaAutosize style={{width:'100%', height:'5rem'}} onChange={onDesc}/>
            </div>
            <div className={styles.helperTextContainer}>
              <div className={styles.thisIsA}>This is a helper text</div>
              <div className={styles.div}>1/100</div>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.labelContainer}>
              <div className={styles.label}>Category</div>
            </div>
            <div style={{width:'100%'}}>
                <FormControl  fullWidth>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput fullWidth/>}
          MenuProps={MenuProps}
          fullWidth
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
            </div>
            <div className={styles.helperTextContainer}>
              <div className={styles.thisIsA}>This is a helper text</div>
              <div className={styles.div}>1/100</div>
            </div>
          </div>
        </div>
        <div className={styles.largeButtons} style={largeButtons9Style} onClick={next}>
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src={electricianLocationText}
          />
          <b
            className={styles.label3}
            style={{color:'white', cursor:'pointer'}}
          >{`Enter location & Date`}</b>
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src={icon20pxImageUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
