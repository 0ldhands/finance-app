import '../css/Home.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddTransaction = () => {

    const navi=useNavigate();

    const [radio,setRadio]=useState();
    const [accno1,setAccno1]=useState();
    const [accno2,setAccno2]=useState();
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
                    <h2>Add Transaction</h2>
                    <label htmlFor="fromaccno">From Acc.No.</label>
                    <input type="number" id='fromaccno' onChange={(e) => setAccno1(e)} />
                    <label htmlFor="toaccno">To Acc.No.</label>
                    <input type="number" id='toaccno' onChange={(e) => setAccno2(e)} />
                    <label htmlFor='payment1'>
                        <input type="radio" value='Cash' checked={radio == 'Cash'} onChange={(e) => radioClick(e)} id='payment1' />Cash</label>

                    <label htmlFor='payment1'>
                        <input type="radio" value='Upi' checked={radio == 'Upi'} onChange={(e) => radioClick(e)} id='payment2' />Upi</label>

                    <label htmlFor='payment1'>
                        <input type="radio" value='Card' checked={radio == 'Card'} onChange={(e) => radioClick(e)} id='payment3' />Card</label>

                    <label htmlFor="amount">Amount</label>
                    <input type="number" id='amount' onChange={(e) => setMoney(e)} />

                    <input type="submit" onClick={(e) => handleClick(e)} />
            </form>
        </div>
    )
}

export default AddTransaction