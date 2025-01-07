import React, { useState } from 'react'
import '../css/Home.css'

const AddIncome = () => {
  const [money, setMoney] = useState();
  const [money2, setMoney2] = useState(0);
  const [storeval, setStoreVal] = useState()

  const handleClick = (e) => {
    e.preventDefault()
    if (money >= 500) {
      setMoney2(Number(money2) + Number(money))
      console.log(money2)
    } else {
      setStoreVal('You adding invalid amount,Try again')
    }

  }


  return (
    <div className='addinc-container'>
      <form>
        <label htmlFor="avail">Available Balance : {money2}₹</label><br />
        <input type="text" id='avail' onChange={(e) => setMoney(e.target.value)} />
        <button onClick={(e) => handleClick(e)}>Add Money</button>
        <p>{storeval}</p>
      </form>
    </div>
  )
}

export default AddIncome