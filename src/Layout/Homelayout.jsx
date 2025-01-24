import { Outlet } from "react-router-dom"
import Hole from "../Pages/Hole"
import '../css/Home.css'
import Incomehistory from "../Component/Incomehistory"
import Expensehistory from "../Component/Expensehistory"
import Transactionhistory from "../Component/Transactionhistory"
import { useState } from "react"
import AddIncome from "../Component/AddIncome"
import Incgraph from '../Component/Incgraph'
import Exgraph from "../Component/Exgraph"
import Generator from "../Component/Generator"
import Exgenrator from "../Component/Exgenrator"
import Tragenerator from "../Component/Tragenerator"


const Homelayout = ({val,val2,val3,val4}) => {


  return (
    <div className="das-container">
        <Hole username={val4}/>
        <div className='grap-container' style={{ backgroundColor:'black' }}></div>
        <AddIncome incVal={val} xVal={val2} traVal={val3}/>
        <div>
        <Generator val={val}  username={val4}/>
        <Exgenrator val={val2} username={val4}/>
        <Tragenerator val={val3} username={val4}/>
        </div>
        <Outlet/>
        <div className="g-container">
        <Incgraph incg={val}/>
        <Exgraph exg={val2}/>
        </div>
        <div className="hist-container">
        <Incomehistory val={val}/>
        <Expensehistory val={val2}/>
        <Transactionhistory val={val3}/>
        </div>
    </div>
  )
}

export default Homelayout