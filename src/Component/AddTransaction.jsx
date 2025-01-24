import '../css/Home.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddTransaction = ({data}) => {
const navi=useNavigate()

  const[users,setUsers]=useState([]);
  const[userinfo,setUserinfo]=useState({
        name:'',
        from:'',
        to:'',
        payment:'',
        amount:'',
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
        from:'',
        to:'',
        payment:'',
        amount:'',
        
      })
    })
    data({name:userinfo.name,from:userinfo.from,to:userinfo.to,amount:userinfo.amount,payment:userinfo.payment})
    navi(-1)
  }
    return (
        <div className='add2-container'>
                <form>
                    <h2>Add Transaction</h2>
                    <label htmlFor="name">Name <h5 style={{display:'inline'}}>*</h5></label>
                    <input type="text" name='name' value={userinfo.name} id='name' onChange={(e)=>handleClick(e)} required/>
                    
                    <label htmlFor="fromaccno">From Acc.No. <h5 style={{display:'inline'}}>*</h5></label>
                    <input type="number" name='from' value={userinfo.from} id='fromaccno' onChange={(e) => handleClick(e)} />
                   
                    <label htmlFor="toaccno">To Acc.No. <h5 style={{display:'inline'}}>*</h5></label>
                    <input type="number" name='to' value={userinfo.to} id='toaccno' onChange={(e) => handleClick(e)} />
                   
                    <label htmlFor="payment1">Select payment <h5 style={{display:'inline'}}>*</h5></label>
                    <label htmlFor='payment1'>
                        <input type="radio" value='Cash' name='payment' onChange={(e) =>handleClick(e)} id='payment1' />Cash</label>

                    <label htmlFor='payment2'>
                        <input type="radio" value='Upi' name='payment' onChange={(e) => handleClick(e)} id='payment2' />Upi</label>

                    <label htmlFor='payment3'>
                        <input type="radio" value='Card' name='payment' onChange={(e) => handleClick(e)} id='payment3' />Card</label>

                    <label htmlFor="amount">Amount <h5 style={{display:'inline'}}>*</h5></label>
                    <input type="number" name='amount' value={userinfo.amount} id='amount' onChange={(e) => handleClick(e)} />

                    <input type="submit" onClick={addDetails} />
            </form>
        </div>
    )
}

export default AddTransaction