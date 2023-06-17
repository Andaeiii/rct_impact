import React, { useState, useRef, useEffect } from 'react';

import Login from './Auth/Login';

import { useDispatch, useSelector } from 'react-redux';
import { getAppToken } from '../redux/actions/core';




const MasterPage = () => {


  let dispatch = useDispatch();
  let { app } = useSelector(store => store);


  return (



    <Login />
           
  )




}

export default MasterPage;




