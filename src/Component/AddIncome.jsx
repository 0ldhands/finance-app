import React, { useState} from 'react'
import {useNavigate}  from 'react-router-dom'
import '../css/Home.css'

const AddIncome = ({incVal,xVal,traVal}) => {
  const [total,setTotal]=useState();
  const navi=useNavigate()

  const add=()=>{
    setTotal(()=>{
      let a=(incVal.reduce((tot,crr)=>tot+=Number(crr.amount)))
      let b=(xVal.reduce((tot,crr)=>tot+=Number(crr.amount)))
      let c=(traVal.reduce((tot,crr)=>tot+=Number(crr.amount)))
      let sum=a-(b+c)
      return sum
    })
  }
  
  setInterval(add,1000);

  return (
    <div className='addinc-container'>
      <form>
        <label>Available Balance :</label><br />
        {(total>500)? <h1 style={{textShadow: "3px 3px 3px rgba(8, 78, 11, 0.8)",color: "rgba(37, 201, 37, 0.8)"}}>{total} ₹</h1>: <h1 style={{textShadow: "3px 3px 3px rgba(109, 6, 6, 0.8)",color: "rgba(255, 0, 0, 0.8)"}}>{total} ₹</h1> }
      </form>
      {(total<500)&& <p style={{color:'red',marginLeft:'5px'}}>Please add money to withdraw</p> }
    </div>
  )
}

export default AddIncome