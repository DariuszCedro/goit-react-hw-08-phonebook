import React from 'react';
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


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="login" element={<ProtectedRoute element={<Login />} redirect="/contacts"/>}/>
          <Route path="register" element={<ProtectedRoute element={<Register />} redirect="/contacts"/>}/>
          <Route path="contacts" element={<PrivateRoute element={<><Form/><Filter/><List/></>} redirect="/login"/>}/>
            
        </Route>
        </Routes>
      {/* <Form></Form>
      <h2>Contacts</h2>
      <Filter></Filter>
      <List></List> */}
      
      -----------------------------------------------------------
    </div>
  );
};
