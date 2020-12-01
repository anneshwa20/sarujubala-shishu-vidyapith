 import React , {useState} from 'react'
import './ImageUpload.css'
import {Button} from '@material-ui/core'
import { db ,storage } from './Firebase'
import firebase from "firebase"
import Form from './Form'

function ImageUpload({heading}) {
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
           <h2>{heading}</h2>
           <progress className="imageupload__progress" value={progress} max="100" />
           <input type="file" onChange= {handleChange} />
            <Button className="imageupload__button" onClick={handleUpload} > Upload </Button> 
        </div>
    )
}

export default ImageUpload 

{/* 
import React ,{useState} from 'react'
import firebase from './Firebase'
import {storage} from './Firebase'
import './ImageUpload.css'

function ImageUpload({heading}) {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("")
    const [progress, setProgress] = useState(0)
    const handleChange = e => {
        if(e.target.files[0]){
          setImage(e.target.files[0])
        }
    };
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          snapshot => {
              const progress = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) *100
              );
              setProgress(progress);
          },
          error =>{
              console.log(error);
          },
          () =>{
              storage.ref("images")
                     .child(image.name)
                     .getDownloadURL()
                     .then(url => {
                        setUrl(url)
                     })
                
          }
        )
    };
    return (
        <div className="imageupload" >
             <h2> Upload the photo of the applicant </h2>
            <progress className="imageupload__progress" value={progress} max="100" />
           <input type="file" onChange={handleChange} />
           <button  className="imageupload__button" onClick={handleUpload}>Upload</button>
           
            <h2> Upload the scanned copy of Birth Certificate </h2>
            <progress className="imageupload__progress" value={progress} max="100" />
           <input type="file" onChange={handleChange} />
           <button  className="imageupload__button" onClick={handleUpload}>Upload</button> 
           
        </div>
        
    )
}

export default ImageUpload
*/}