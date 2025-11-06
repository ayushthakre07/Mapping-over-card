import React from 'react'
import "./App.css"

import { STUDENTS_DATA } from '../cards/student.js';

import { APP_NAME, APP_DESCRIPTION, BG_PRIMARYCOLOR ,SECONDARY_COLOR} from '../cards/app.js';
 
import StudentCard from '../Studentcard/Studentcard.jsx';

function App() {
  return (

      <div style={{background:SECONDARY_COLOR,fontFamily:"sans-serif"}}>

      <h4 className='result-container'>Results are out now. Click on the button to get the results.</h4>

      <h1 className='heading'>{APP_NAME}</h1>
  
      <h1 className='description'>{APP_DESCRIPTION}</h1>

      <div style={{display:"flex",flexWrap:"wrap",background:BG_PRIMARYCOLOR}}>
        
      {STUDENTS_DATA.map((student)=>{

      const{photo, name, email, rollnumber, result }=student;

return(
<StudentCard
name={name}
email={email}
rollnumber={rollnumber}
photo={photo}
result={result}
/>
)})}
</div>
</div>
  )
}

export default App
