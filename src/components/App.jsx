import React, { useEffect }  from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { List } from './List/List';
import {Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from './Home/Home';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import {current} from '../redux/operations';
import { selecIsRefreshing } from '../redux/selectors';
import {Helmet, HelmetProvider} from "react-helmet-async";


export const App = () => {
  const dispatch = useDispatch();
  const IsRefreshing = useSelector(selecIsRefreshing);
  useEffect(()=> {
dispatch(current())
  },[dispatch]);
  if(IsRefreshing) return <p>Loading...</p>
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HelmetProvider><Helmet><title>Home</title></Helmet><Home /></HelmetProvider>} />
          <Route path="login" element={<ProtectedRoute element={<HelmetProvider><Helmet><title>Login</title></Helmet><Login /></HelmetProvider>} redirect="/contacts"/>}/>
          <Route path="register" element={<ProtectedRoute element={<HelmetProvider><Helmet><title>Register</title></Helmet><Register /></HelmetProvider>} redirect="/contacts"/>}/>
          <Route path="contacts" element={<PrivateRoute element={<HelmetProvider><Helmet><title>Contacts</title></Helmet><Form/><Filter/><List/></HelmetProvider>} redirect="/login"/>}/>
            
        </Route>
        </Routes>
          
      -----------------------------------------------------------
    </div>
  );
};
