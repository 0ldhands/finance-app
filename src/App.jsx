import React ,{useState} from 'react'
import Login from './Component/Login'
import Register from './Component/Register'
import RootLayout from './Layout/RootLayout'
import Account from './Pages/Account'
import Setting from './Pages/Setting'
import Contactus from './Pages/Contactus'
import Aboutus from './Pages/Aboutus'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import DashboardLayout from './Layout/DashboardLayout'
import Homelayout from './Layout/Homelayout'
import Addincome2 from './Component/Addincome2'
import Addexpense from './Component/Addexpense'
import AddTransaction from './Component/AddTransaction'


const App = () => {

  const arr=[0]
  const arr2=[0]
  const arr3=[0]
  const [user,setUser]=useState();

  const getdataInc=(d)=>{
    const{name,accno,amount,payment}=d
    arr.push(d)
     
  }

  const getdataExp=(d)=>{
    const{name,expense,payment,amount}=d
    arr2.push(d)
  }

  const getdataTra=(d)=>{
    const{name,from,to,payment,amount}=d
    arr3.push(d)
  }

  const getUser=(d)=>{
    setUser(d)
  }
  


  const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<RootLayout />}>
      <Route index element={<Login val={getUser}/>} />
      <Route path='Register' element={<Register />} />
      <Route path='/dash' element={<DashboardLayout />}>
        <Route path='Hole' element={<Homelayout val={arr} val2={arr2} val3={arr3} val4={user}/>}>
          <Route path='Addincome2' element={<Addincome2 data={getdataInc} />} />
          <Route path='Addexpense' element={<Addexpense data={getdataExp}/>} />
          <Route path='Addtransaction' element={<AddTransaction data={getdataTra} />} />
        </Route>
        <Route path='Account' element={<Account />} />
        <Route path='Setting' element={<Setting />} />
        <Route path='Aboutus' element={<Aboutus />} />
        <Route path='Contactus' element={<Contactus />} />
      </Route>
    </Route>
  ))

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App

