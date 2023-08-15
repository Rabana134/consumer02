import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../../firebase";
import styles from "./ImageUploaderContainer.module.css";
import { serverTimestamp } from 'firebase/firestore'

const ImageUploaderContainer = ({title, cate, desc,addy1,addy2,zip,reg,country,lat,lng,city,to,from, onDone}) => {
  const navigate = useNavigate();
 const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [image1,setImage1] = useState('')
  const [image2,setImage2] = useState('')
  const [image3,setImage3] = useState('')
  const [image4,setImage4] = useState('')

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
   const generateToken = (len) => {
        let result = [];
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charLength = characters.length;
        for (let i = 0; i < len; i++) {
            result.push(characters.charAt(Math.floor(Math.random() * charLength)));
        }
        return result.join('');
      }
  const onImagechange= (event) =>
        {
            if (event.target.files && event.target.files[0]) {

                let id_pic = generateToken(7)
                const uploadTask = storage.ref(`images/${id_pic}.png`).put(event.target.files[0]);
          uploadTask.on('state_changed', 
          (snapshot) => {
            // progrss function ....
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          }, 
          (error) => {
               // error function ....
            console.log(error);
            
          }, 
        () => {
            // complete function ....
            storage.ref('images').child(id_pic+".png").getDownloadURL().then(url => {
              if(image1=='')
              {
                setImage1(url)
              }
              else if(image2=='')
              {
                setImage2(url)
              }
              else if(image3=='')
              {
                setImage3(url)
              }
              else
              {
                setImage4(url)
              }
            })
        });
              }
        }
  const postJob =()=>{
    db.collection('my_jobs/'+auth.currentUser.uid+'/list').add({
      title: title,
      cate: cate,
      desc: desc,
      addy1: addy1,
      addy2: addy2,
      zip, zip,
      reg: reg,
      city: city,
      lat: lat,
      lng: lng,
      country: country,
      to: to,
      from: from,
      name: name,
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      timestamp: serverTimestamp(),
      unix: Date.now()
    })
     db.collection('post_by_cate/'+cate+'/list').add({
      title: title,
      cate: cate,
      desc: desc,
      addy1: addy1,
      addy2: addy2,
      zip, zip,
      reg: reg,
      city: city,
       lat: lat,
      lng: lng,
      country: country,
      to: to,
      from: from,
      uid: auth.currentUser.uid,
      name: name,
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      timestamp: serverTimestamp(),
      unix: Date.now()
    })
     db.collection('jobs/').add({
      title: title,
      cate: cate,
      desc: desc,
      addy1: addy1,
      addy2: addy2,
      zip, zip,
      reg: reg,
       lat: lat,
      lng: lng,
      city: city,
      to: to,
      from: from,
      name: name,
      uid: auth.currentUser.uid,
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      timestamp: serverTimestamp(),
      unix: Date.now()
    })
    onDone();
  }
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.avatarParent}>
          <img className={styles.avatarIcon} alt="" src="../avatar154.svg" />
          <div className={styles.devonLane}>{name}</div>
        </div>
      </div>
      <div className={styles.uploadAnImageOptionalParent}>
        <div className={styles.uploadAnImage}>Upload an image (Optional)</div>
        <div className={styles.frameGroup}>
        <input type="file" accept="image/*" id="upload-button" style={{ display: "none" }} onChange={onImagechange}/>
        <label htmlFor="upload-button" style={{cursor:'pointer'}}>
           <div className={styles.uploadImageParent} onChange={onImagechange}>
            <div className={styles.uploadImage}>
              <div className={styles.imageFrame}>
                <div className={styles.boundary} />
                <div className={styles.imageArea} />
                <img
                  className={image1 == ''?styles.iconsadd:styles.uploadImage}
                  alt=""
                  src={image1==''?"../iconsadd8.svg":image1}
                />
              </div>
              <img
                className={styles.addcancelCircleIcon}
                onClick={()=>setImage1('')}
                alt=""
                src={image1==''?"../addcancel-circle24.svg":'../addcancel-circle.svg'}
              />
            </div>
            <div className={styles.uploadImage1}>
              <div className={styles.imageFrame}>
                <div className={styles.boundary} />
                <div className={styles.imageArea} />
               <img
                  className={image2 == ''?styles.iconsadd:styles.uploadImage1}
                  alt=""
                  src={image2==''?"../iconsadd8.svg":image2}
                />
              </div>
              <img
                className={styles.addcancelCircleIcon}
                onClick={()=>setImage2('')}
                alt=""
                src={image2==''?"../addcancel-circle24.svg":'../addcancel-circle.svg'}
              />
            </div>
            <div className={styles.uploadImage1}>
              <div className={styles.imageFrame}>
                <div className={styles.boundary} />
                <div className={styles.imageArea} />
                <img
                  className={image3 == ''?styles.iconsadd:styles.uploadImage1}
                  alt=""
                  src={image3==''?"../iconsadd8.svg":image3}
                />
              </div>
              <img
                className={styles.addcancelCircleIcon}
                onClick={()=>setImage3('')}
                alt=""
                src={image3==''?"../addcancel-circle24.svg":'../addcancel-circle.svg'}
              />
            </div>
            <div className={styles.uploadImage1}>
              <div className={styles.imageFrame}>
                <div className={styles.boundary} />
                <div className={styles.imageArea} />
                <img
                  className={image4 == ''?styles.iconsadd:styles.uploadImage1}
                  alt=""
                  src={image4==''?"../iconsadd8.svg":image4}
                />
              </div>
              <img
                className={styles.addcancelCircleIcon}
                onClick={()=>setImage4('')}
                alt=""
                src={image4==''?"../addcancel-circle24.svg":'../addcancel-circle.svg'}
              />
            </div>
          </div>
        </label>
         
          <div className={styles.addSupportingImages}>
            Add supporting images to best showcase your job request
          </div>
        </div>
      </div>
      <div className={styles.largeButtons} style={{cursor:'pointer'}} onClick={postJob}>
        <img
          className={styles.icons20pxplaceholder}
          alt=""
          src="../icons20pxplaceholder28.svg"
        />
        <b className={styles.addSupportingImages}>Post Job</b>
        <img
          className={styles.icons20pxplaceholder}
          alt=""
          src="../icons20pxplaceholder28.svg"
        />
      </div>
    </div>
  );
};

export default ImageUploaderContainer;
