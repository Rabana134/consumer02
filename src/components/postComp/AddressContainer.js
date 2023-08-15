import { useTheme } from "@emotion/react";
import { FormControl, Input, Paper, TextField } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { auth, db } from "../../firebase";
import styles from "./AddressContainer.module.css";
import AddressAutocomplete from 'mui-address-autocomplete';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
  geocodeByPlaceId
} from 'react-google-places-autocomplete';
import styled from 'styled-components';

const renderInput = (props) => {
  return (
    <FormControl fullWidth>
      <TextField {...props} />
    </FormControl>
  );
};
const StyledDropdownContainer = styled.div`
  position: absolute;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  width: 100%;
`;

const StyledDropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const AddressContainer = ({
  avatarImageUrl,
  iconImageUrl,
  iconImageUrl20px,
  ellipse251Cursor,
  propBackgroundColor,
  propCursor,
  propColor,
  onInputContainerClick,
  next,
  onAddy1,
  onAddy2,
  onCity,
  onZip,
  onReg,
  city,
  reg,
  zip,
  onCountry,
  onLat,
  onLng,
  lat,
  lng
}) => {
  const input1Style = useMemo(() => {
    return {
      cursor: ellipse251Cursor,
    };
  }, [ellipse251Cursor]);

  const largeButtons7Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      cursor: propCursor,
    };
  }, [propBackgroundColor, propCursor]);

  const labelStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);
   const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('');

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
  function getAddressComponentValue(addressComponents, type) {
  const component = addressComponents.find((component) =>
    component.types.includes(type)
  );

  return component ? component.long_name : '';
}
   const handleSelect2 =  async (value) => {
    onAddy2(value.description);
  };
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
          <div
            className={styles.input}
            style={input1Style}
            onClick={onInputContainerClick}
          >
            <div className={styles.labelContainer}>
              <div className={styles.label}>Address line 1</div>
            </div>
            <div style={{width:'100%'}}>
          <AddressAutocomplete
  apiKey="AIzaSyCOxtBVhmbGLxam160Dh2uB6Ern7xxHv2Y"
  placeholder="Address"
  fields={['geometry']} 
  requiredFields={['city']}
   onChange={(_, value) => {
   const { formatted_address, geometry, address_components } = value;
    const { location } = geometry;
      // Retrieve the relevant address components
      const city = getAddressComponentValue(address_components, 'locality');
      const state = getAddressComponentValue(address_components, 'administrative_area_level_1');
      const country = getAddressComponentValue(address_components, 'country');
      const zip = getAddressComponentValue(address_components, 'postal_code');
      
   setAddress(formatted_address);
    onAddy1(formatted_address)
    onCity(city);
    onReg(state);
    onCountry(country);
    onZip(zip);
    const { lat, lng } = location;
    onLat(lat)
    onLng(lng)
    
  }}
/>
      
            </div>
            <div className={styles.helperTextContainer}>
              <div className={styles.thisIsA}>Enter Post Code</div>
              <div className={styles.div}>1/100</div>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.labelContainer}>
              <div className={styles.label}>Address line 2 (Optional)</div>
            </div>
           <div style={{width:'100%'}}>
           <TextField
             fullWidth
             onChange={(e)=>{onAddy2(e.target.value);}}
           />
            </div>
            <div className={styles.helperTextContainer}>
              <div className={styles.thisIsA}>
                Apartment, suite, unit, building, floor.
              </div>
              <div className={styles.div}>1/100</div>
            </div>
          </div>
         {/* <div className={styles.input}>
            <div className={styles.labelContainer}>
              <div className={styles.label}>City</div>
            </div>
             <div style={{width:'100%'}}>
              <TextField fullWidth value={city} onChange={(e)=>{onCity(e.target.value)}}/>
            </div>
            <div className={styles.helperTextContainer2}>
              <div className={styles.thisIsA}>
                Apartment, suite, unit, building, floor.
              </div>
              <div className={styles.div}>1/100</div>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.input3}>
              <div className={styles.labelContainer}>
                <div className={styles.label}>State/Province/Region</div>
              </div>
              <div style={{width:'100%'}}>
              <TextField fullWidth value={reg} onChange={(e)=>onReg(e.target.value)}/>
            </div>
              <div className={styles.helperTextContainer2}>
                <div className={styles.thisIsA}>This is a helper text</div>
                <div className={styles.div3}>1/100</div>
              </div>
            </div>
            <div className={styles.input3}>
              <div className={styles.labelContainer}>
                <div className={styles.label}>Zip/Postcode</div>
              </div>
             <div style={{width:'100%'}}>
              <TextField fullWidth value={zip} onChange={(e)=>onZip(e.target.value)}/>
            </div>
              <div className={styles.helperTextContainer2}>
                <div className={styles.thisIsA}>This is a helper text</div>
                <div className={styles.div3}>1/100</div>
              </div>
            </div>
          </div>*/}
        </div>
        <div
          className={styles.largeButtons}
          onClick={next}
          style={largeButtons7Style}
        >
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src={iconImageUrl}
          />
          <b className={styles.label5} style={labelStyle}>
            Enter a budget
          </b>
          <img
            className={styles.icons20pxplaceholder}
            alt=""
            src={iconImageUrl20px}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressContainer;
