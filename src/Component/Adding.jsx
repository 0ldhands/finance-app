import '../css/Adding.css'
import { NavLink } from 'react-router-dom'

const Adding = () => {
    return (
        <div className='add-container'>
            <nav>
                <label htmlFor="touch"><span>Add</span></label>
                <input type="checkbox" id="touch" />
                <ul className="slide">
                    <NavLink to='./Addincome2'><li>Add income</li></NavLink>
                    <NavLink to='./Addexpense'><li>Add expense</li></NavLink>
                    <NavLink to='./Addtransaction'><li>Add transaction</li></NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Adding