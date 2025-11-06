import React from 'react'

import toast, { Toaster } from 'react-hot-toast';

import './Studentcard.css'

function StudentCard({photo, name, email, rollnumber, result } ) {

  const notify = () => toast(`${name} has scored ${result}`);

  return (
    <div>
       <div className="students-container" >
<img src={photo} className='students-photo'/>

<div className='student-other-container'>

  <h3 >Name : {name}</h3>

  <h3 >Email : {email}</h3>

  <h3 >Roll Number : {rollnumber}</h3>

  <h4 style={{display:"none"}}>{result}</h4>

  <button className='btn-container' onClick={notify}> Result </button>
  <Toaster/>
  </div>
  </div>
  </div>
  )
}

export default StudentCard
