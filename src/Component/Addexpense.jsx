import '../css/Home.css'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'

const Addexpense = () => {

    const navi = useNavigate();

    const [check, setCheck] = useState();
    const [name, setName] = useState();
    const [accno, setAccno] = useState();
    const [money, setMoney] = useState();


    const nav = () => {
        navi(-1)
        console.log('hi')
    }

    const handleClick = (e) => {
        e.preventDefault()
        nav()
    }

    return (
        <div className='add2-container'>
            <form>
                <h2>Add Expense</h2>
                <label htmlFor="dropdown"></label>
                <select id="dropdown" onChange={(e)=>setCheck(e.target.value)} value={check}>
                    <option value="">what type of expense ?</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Food">Food</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Others">Others</option>
                </select>

                <label htmlFor="amount">Amount</label>
                <input type="number" id='amount' onChange={(e) => setMoney(e)} />

                <input type="submit" onClick={(e) => handleClick(e)} />

            </form>
        </div>
    )
}

export default Addexpense