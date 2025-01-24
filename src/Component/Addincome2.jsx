import { useNavigate } from 'react-router-dom';
import '../css/Register.css'
import { useState } from 'react';

const Addincome2 = ({data}) => {

  const navi=useNavigate()

  const[users,setUsers]=useState([]);
  const[userinfo,setUserinfo]=useState({
    name:'',
    accno:'',
    amount:'',
    payment:''
    
  })


  const handleClick=(e)=>{
    const{name,value}=e.target
    setUserinfo((crr)=>{
      return({...crr,[name]:value})
    })
  }

  const addDetails=()=>{
    setUsers((crr)=>[...crr,userinfo])
    setUserinfo(()=>{
      return({
        name:'',
        accno:'',
        amount:'',
        payment:''
        
      })
    })
    data({name:userinfo.name,accno:userinfo.accno,amount:userinfo.amount,payment:userinfo.payment})
    navi(-1)
  }

  return (
    <div className='add2-container'>
        <form>
          <h2>Add Income</h2>
            <label htmlFor="name">Name <h5 style={{display:'inline'}}>*</h5></label>
            <input type="text" name='name' value={userinfo.name} id='name' onChange={(e)=>handleClick(e)} required/>
            <label htmlFor="accno">Acc. No. * </label>
            <input type="number" name='accno' value={userinfo.accno} id='accno' onChange={(e)=>handleClick(e)} required/>

            <label > Select Payment <h5 style={{display:'inline'}}>*</h5></label>
            <label htmlFor='payment1'>
            <input type="radio" name='payment' value='Cash' onChange={(e)=>handleClick(e)} id='payment1'/>Cash</label>
            
            <label htmlFor='payment2'>
            <input type="radio" name='payment' value='Upi' onChange={(e)=>handleClick(e)} id='payment2'/>Upi</label>
            
            <label htmlFor='payment3'>
            <input type="radio" name='payment' value='Card' onChange={(e)=>handleClick(e)} id='payment3'/>Card</label>
          
            <label htmlFor="amount">Amount <h5 style={{display:'inline'}}>*</h5></label>
            <input type="number" name='amount' value={userinfo.amount} id='amount' onChange={(e)=>handleClick(e)} required/>
            
            <input type="submit" onClick={addDetails}/>  
            <p>{data}</p>

        </form>

    </div>
  )
}

export default Addincome2