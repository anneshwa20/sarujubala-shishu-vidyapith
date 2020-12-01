import React, { useState, useEffect } from 'react'
import { db } from "./Firebase";
import {Button} from '@material-ui/core'
import { storage } from './Firebase'
import "./Form.css";
import ImageUpload from './ImageUpload';

function Form() {
     const [name, setName] =useState("")
     const [dob, setDob] =useState("")
     const [fname, setFname] =useState("")
     const [mname, setMname] =useState("")
     const [presentAdd, setPresentAdd] =useState("")
     const [permanentAdd, setPermanentAdd] =useState("")
     const [fphone, setFphone] =useState("")
     const [mphone, setMphone] =useState("")
     const [rphone, setRphone] =useState("")
     const [nationality, setNationality] =useState("")
     const [religion, setReligion] =useState("")
     const [qualificationF, setQualificationF] =useState("")
     const [qualificationM, setQualificationM] =useState("")
     const [incomeF, setIncomeF] =useState("")
     const [incomeM, setIncomeM] =useState("")
     const [addClass, setAddClass] =useState("")
     const [prevClass, setPrevClass] =useState("")
     const [schoolName, setSchoolName] =useState("")
     const [gurdianName, setGurdianName] =useState("")
     const [relation, setrelation] =useState("")
     const [gphone, setGphone] =useState("")
     const [parents, setParents] =useState("")
     const [parentsName, setParentsName] =useState("")
     const [parentsReltn, setParentsReltn] =useState("")
     const [parentsPhone, setParentsPhone] =useState("")
     const [loader, setLoader] = useState(false);
     const [image, setImage] =useState(null)
     const [progress, setProgress] = useState(0)



     const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);
  
      db.collection("contacts")
        .add({
          name: name,
          dob : dob,
          fname : fname,
          mname : mname ,
          presentAdd : presentAdd,
          permanentAdd : permanentAdd,
          fphone :fphone ,
          mphone : mphone ,
          rphone : rphone ,
          nationality : nationality ,
          religion :religion ,
          qualificationF :qualificationF ,
          qualificationM :qualificationM ,
          incomeF :incomeF ,
          incomeM : incomeM ,
          addClass : addClass ,
          prevClass : prevClass ,
          schoolName : schoolName ,
          gurdianName : gurdianName ,
          relation : relation ,
          gphone : gphone ,
          parents : parents ,
          parentsName : parentsName ,
          parentsReltn : parentsReltn ,
          parentsPhone : parentsPhone,
          
        })
        .then(() => {
          setLoader(false);
          alert("Your message has been submitted👍");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
      setName("");
     setDob("");
     setFname("");  
    setMname(""); 
     setPresentAdd(""); 
     setPermanentAdd(""); 
     setFphone(""); 
     setMphone(""); 
     setRphone(""); 
     setNationality(""); 
     setReligion(""); 
     setQualificationF(""); 
     setQualificationM(""); 
     setIncomeF(""); 
     setIncomeM(""); 
     setAddClass(""); 
     setPrevClass(""); 
     setSchoolName(""); 
     setGurdianName(""); 
     setrelation(""); 
     setGphone(""); 
     setParents(""); 
     setParentsName(""); 
     setParentsReltn(""); 
     setParentsPhone(""); 
    };
     


    return (
        <form className="form" onSubmit={handleSubmit} >
      <h2 className="heading"> Registration From for Admission</h2>
      <div className="all__inputs">
      <div className="adjust">
    <label>Name of The Student</label> 

      <input 
        placeholder="Name"
       value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
      
    <div className="adjust">
    <label>Date of Birth</label>
      <input
      type="date"
        placeholder="DOB"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
    </div>
     
  <div className="adjust">
  <label>Father's Name</label>
  <input
        placeholder="Father's Name"
         value={fname}
        onChange={(e) => setFname(e.target.value)}
      />

  </div>
  <div className="adjust">
  <label>Mother's Name</label>
  <input
        placeholder="Mother's Name"
        value={mname}
        onChange={(e) => setMname(e.target.value)}
      />

  </div>

            <div className="adjust">
            <label>Present Address</label>
            <textarea placeholder="Presnt address"
             value={presentAdd}
             onChange={(e) => setPresentAdd(e.target.value)}></textarea>
            
            <label>Permanent Address</label>
            <textarea placeholder="Permanent address"
             value={permanentAdd}
             onChange={(e) => setPermanentAdd(e.target.value)}></textarea>

            </div>

            <div className="adjust">
            <label>Telephone No.</label><label> a.Father</label>

            <input
                    placeholder="Ph no."
                    value={fphone}
                    onChange={(e) => setFphone(e.target.value)}
                />
                <label>B.Mother</label>

            <input
                    placeholder="Ph no."
                    value={mphone}
                    onChange={(e) => setMphone(e.target.value)} 
                />
                <label>C.Recidence</label>

                <input
                        placeholder="Ph no."
                       value={rphone}
                        onChange={(e) => setRphone(e.target.value)}
                    />

          </div>



          <div className="adjust">
            <label>Nationality</label>
             <input
                    placeholder="Nationality"
                     value={nationality}
                    onChange={(e) => setNationality(e.target.value)}                 />
                <label>Region</label>

            <input
                    placeholder="Region"
                  value={religion}
                    onChange={(e) => setReligion(e.target.value)}
                />
                
                <label>cast:</label>

                <select className="select">
                    <option disabled selected  >Select Cast</option>
                    <option>General</option>
                    <option>SC</option>
                    <option>ST</option>
                    <option>OBC</option>
                    <option>Minority</option>
                </select>
               </div>
          <div className="adjust">
            <label>Academic Qualification:</label><label> A.Father</label>

            <input
                    placeholder=""
                    value={qualificationF}
                    onChange={(e) => setQualificationF(e.target.value)}
                />
                <label>B.Mother</label>

            <input
                    placeholder=""
                     value={qualificationM}
                    onChange={(e) => setQualificationM(e.target.value)} 
                />
             </div>
            < div className="adjust">
            <label>Monthly Income:</label><label> A.Father</label>

            <input
                    placeholder=""
                     value={incomeF}
                    onChange={(e) => setIncomeF(e.target.value)}
                />
                <label>B.Mother</label>

            <input
                    placeholder=""
                     value={incomeM}
                    onChange={(e) => setIncomeM(e.target.value)}
                />
             </div>

             < div className="adjust">
            <label>In Which Class He/She Seeks Admission:</label>

                <input
                        placeholder=""
                       value={addClass}
                        onChange={(e) => setAddClass(e.target.value)}
                    />
                <label>Previous Class In Which He/She Read Now:</label>

                <input
                        placeholder=""
                         value={prevClass}
                        onChange={(e) => setPrevClass(e.target.value)}
                    />
                    <label>If yes,Name of The School</label>

                    <input
                            placeholder=""
                            value={schoolName}
                            onChange={(e) => setSchoolName(e.target.value)} 
                        />
             </div>
             <div className="adjust">
            <label>Name of The Guardian</label>
            <input
                    placeholder="Guardian Name"
                    value={gurdianName}
                    onChange={(e) => setGurdianName(e.target.value)} 
                />
                <label>Relation With Student</label>
                <input
                    placeholder="Relation"
                     value={relation}
                    onChange={(e) => setrelation(e.target.value)} 
                />
                <label>Ph No.</label>
                <input
                    placeholder="Ph No."
                     value={gphone}
                    onChange={(e) => setGphone(e.target.value)} 
                />

              </div>


              
          <div className="adjust">
            <label>Who Will Receive The Child On Behalf Of The Parents:</label>
             <input
                    placeholder="Relation"
                     value={parents}
                    onChange={(e) => setParents(e.target.value)} 
                />

                </div>
                <div className="adjust">
                <label>Name</label>

            <input
                    placeholder="Name"
                     value={parentsName}
                    onChange={(e) => setParentsName(e.target.value)} 
                />
                
                <label>Relation</label>

                <input
                        placeholder="Relation"
                         value={parentsReltn}
                        onChange={(e) => setParentsReltn(e.target.value)}
                    />
                    <label>Contact No.</label>

                <input
                        placeholder=""
                        value={parentsPhone}
                        onChange={(e) => setParentsPhone(e.target.value)} 
                    />
               </div>

               <div className="adjust__checkbox">
               <input 
                  className="checkboxInput"
                   type="checkbox"/>
                 <label className="checkbox__label">I do heereby declare that the above statements are true to be 
                    best of my knowledge and if found incorrect at any time, 
                    the admission will be cancelled.
                    I always obey the rules and regulation of the institute</label>

                  </div>



      </div>
     
     
      {/* <ImageUpload heading="Upload a passport size photo of the applicant" />
      <ImageUpload heading= "Upload scanned copy of Birth Certificate" />
    */}
      <button
        type="submit"
        style={{ background:  loader ? "#ccc" :  " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
      
    </form>
    
    )
}

export default Form

/* 
import React, { useState, useEffect } from "react";

import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

 

 

  return (
   
  );
};

export default Contact; */