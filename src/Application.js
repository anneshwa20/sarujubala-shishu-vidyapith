import React , {useEffect, useState} from 'react'
import './Application.css'
import firebase from "./Firebase"

function Application() {
    const [students, setStudents] = useState([])

    const ref =firebase.firestore().collection("contacts")
    function getApplications(){
        ref.get().then((item)=>{
            const items = item.docs.map((doc)=> doc.data());
            setStudents(items)
        })
    }

    useEffect(() =>{
        getApplications();
    }, [])
    return (
        <div className="application" >
           <h1>Apllications for Admission</h1> 
           {
               students.map((student) => (
                   
                   <div className="student__applications" >
                       <ul>
                           
                       </ul>
                     
                  <h2> Student Name : {student.name}</h2> <br></br>
                  <ul >
                  <li ><span> Date of Birth :</span>{student.dob} </li>
                  <li ><span> Father's Name : </span>{student.fname} </li>
                  <li ><span>Mother's Name : </span>{student.mname} </li>
                  <li ><span>Present Address :</span>{student.presentAdd} </li>
                  <li ><span>Permanent Address :</span>{student.permanentAdd} </li>
                  <h4>PHONE NO.</h4>
                  <li ><span>A.Father :</span>{student.fphone} </li>
                  <li ><span>B.Mother :</span>{student.mname} </li>
                  <li ><span>C.Residence :</span>{student.rphone} </li>
                  
                  <li ><span>Nationality :</span>{student.nationality} </li>
                  <li ><span>Religion :</span>{student.religion} </li>
                  </ul>
                  <ul >
                  <li ><span>Father's Academic Qualification :</span>{student.qualificationF}</li>
                
                 
                  <li ><span>Mother's Academic Qualification :</span>{student.qualificationM} </li>
                  <li ><span>Father's Monthly Income :</span>{student.incomeF} </li> 
                  <li ><span>Mother's Monthly Income :</span>{student.incomeM} </li>
                  <li ><span>He/She seeks Admission for :</span>{student.addClass} </li>
                  <li ><span>He/She now reads in :</span>{student.prevClass} </li>
                  <li ><span>Previous School Name :</span>{student.schoolName} </li> 
                  <li ><span>Who Will Receive The Child On Behalf Of The Parents :</span>{student.gurdianName} </li> 
                  <li ><span>Parent's Name :</span>{student.parentsName} </li>
                <li ><span> Parent's Relation : </span>{student.parentsReltn}</li>
                <li ><span>Parent's Phone No.:</span>{student.parentsPhone} </li> 
                
                </ul>
                  </div>          

                
               ))
           }
           
        </div>
    )
}

export default Application
