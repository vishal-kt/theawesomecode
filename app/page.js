// "use client"
// import React, { useState } from 'react'

// const page = () => {
//   // let name = "vishal"
//   const [name ,setnames]= useState("vishal")
//   return (
//     <div>
//       <>
//       <h1> my name is  {name}</h1>
//       <button onClick={()=>{setnames("vishal kumar")}} id="btn">SUBMIT</button>
//       </>
//     </div>
//   ) 
// }

// export default page


"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'


const page = () => {

  const [name,setname] = useState("vishal")
  const [tech,settech]=useState("Android")
  return (
    <>
      <Header name ={name} tech = {tech}/>
      
    </>
  )
}

export default page
