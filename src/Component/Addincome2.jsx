import '../css/Register.css'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const Addincome2 = () => {

  const navi=useNavigate();

  const [radio,setRadio]=useState();
  const [name,setName]=useState();
  const [accno,setAccno]=useState();
  const [money,setMoney]=useState();

  const radioClick=(e)=>{
    setRadio(e.target.value);
  }

  const nav=()=>{
    navi(-1)
    console.log('hi')
  }
  
  const handleClick=(e)=>{
    e.preventDefault()
    nav()
  }


  return (
    <div className='add2-container'>
        <form>
          <h2>Add Income</h2>
            <label htmlFor="name">Name <g>*</g></label>
            <input type="text" id='name' onChange={(e)=>setName(e)} required/>
            <label htmlFor="accno">Acc. No. <g>*</g></label>
            <input type="number" id='accno' onChange={(e)=>setAccno(e)} required/>

            <label > Select Payment <g>*</g></label>
            <label htmlFor='payment1'>
            <input type="radio" value='Cash' checked={radio == 'Cash'} onChange={(e)=>radioClick(e)} id='payment1'/>Cash</label>
            
            <label htmlFor='payment2'>
            <input type="radio" value='Upi' checked={radio == 'Upi'} onChange={(e)=>radioClick(e)} id='payment2'/>Upi</label>
            
            <label htmlFor='payment3'>
            <input type="radio" value='Card' checked={radio == 'Card'} onChange={(e)=>radioClick(e)} id='payment3'/>Card</label>
          
            <label htmlFor="amount">Amount <g>*</g></label>
            <input type="number" id='amount' onChange={(e)=>setMoney(e)} required/>
            
            <input type="submit" onClick={(e)=>handleClick(e)}/>

        </form>
    </div>
  )
}

export default Addincome2