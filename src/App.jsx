import React from 'react'
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

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Login />} />
      <Route path='Register' element={<Register />} />
      <Route path='/dash' element={<DashboardLayout />}>
        <Route path='Hole' element={<Homelayout />}>
          <Route path='Addincome2' element={<Addincome2 />} />
          <Route path='Addexpense' element={<Addexpense />} />
          <Route path='Addtransaction' element={<AddTransaction />} />
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