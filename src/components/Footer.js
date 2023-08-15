import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useMemo } from "react";
import styles from "./Footer.module.css";
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Footer = ({
  frameImageUrl,
  iconImageUrl,
  propCursor,
  onInputContainerClick, text,
onText,
onSend
}) => {
  const input3Style = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className={styles.input}>
      <img className={styles.inputChild} alt="" src={frameImageUrl} />
      <div
        className={styles.input1}
        style={input3Style}
      //onClick={onInputContainerClick}
      >
        <div className={styles.labelContainer}>
          <div className={styles.label}>Label</div>
        </div>
        
        <div style={{width:'100%'}}>
          <TextField
          fullWidth
          value={text}
          onChange={onText}
          onKeyDown={onSend}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton disableRipple={true} size="small">
          <AttachFileIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
