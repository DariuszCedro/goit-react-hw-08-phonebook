import React from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { List } from './List/List';
import {Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import Login from './Login/Login';
import Register from './Register/Register';
import Contacts from './Contacts/Contacts';
import Home from './Home/Home';


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
          <Route path="contacts" element={<Contacts />}/>
        </Route>
        </Routes>
      <Form></Form>
      <h2>Contacts</h2>
      <Filter></Filter>
      <List></List>
      
      -----------------------------------------------------------
    </div>
  );
};
