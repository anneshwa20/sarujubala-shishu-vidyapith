import React , {useState} from 'react'
import './ImageUpload.css'
import {Button} from '@material-ui/core'
import { db ,storage } from './Firebase'
import firebase from "firebase"

function ImageUpload({username}) {
    const [image, setImage] =useState(null)
    const [progress, setProgress] = useState(0)

const handleChange = (e) =>{
    if(e.target.files[0]) {
        setImage(e.target.files[0]);
    }
};

const handleUpload =() =>{
  const uploadTask = storage.ref(`images/${image.name}`).put(image);
  uploadTask.on(
      "state__changed",
      (snapshot) => {
          // progress function
          const progress=Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) *100
          );
          setProgress(progress);
      },
     ( error)=>{
         //error function
         console.log(error);
         alert(error.message);
     },
     () =>{
         //complete function
         storage.ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url =>{
             //post image inside a db
             db.collection("contacts").add({
                 imageUrl : url,


             });
  setProgress(0);
  setImage(null);
     })
     }
  )
};

    return (
        <div className="imageupload">
           <h2> lets upload a image</h2>
           <progress className="imageupload__progress" value={progress} max="100" />
           <input type="file" onChange= {handleChange} />
           <Button className="imageupload__button" onClick={handleUpload} > Upload </Button>
        </div>
    )
}

export default ImageUpload
