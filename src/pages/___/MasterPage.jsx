import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';
import Contact from './Contact';
import Products from './Products';
import BVNCheck from './BVNCheck';
import AccountInfo from './AccountInfo';
import UserRefs from './UserRefs';
import UploadFiles from './UploadFiles';
import AccType from './AccType';
import MandateInfo from './MandateInfo';

import '../Styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAppToken } from '../redux/actions/core';

import './css/MasterPage.css';


var headTxt;

//to change the static info @ the top.... 

let hometxt = 'Fidelity Bank<br />Online Account <br />Opening Portal <br />',
  intxt = 'We Are Fidelity,<br /> We Keep Our Word', ptxt = '';;

setInterval(function () {
  ptxt = window.location.pathname === '/' ? hometxt : intxt;
  headTxt.current = ptxt;
}, 200);

/////////////////static info stops here.... 

const MasterPage = () => {

  headTxt = useRef();

  let dispatch = useDispatch();
  let { app } = useSelector(store => store);

  useEffect(() => {
    // dispatch(getAppToken());
  }, [])

  if (!app.token) {

    //return false;

  }


  return (

    <div className="mainbody">

      <div className="blogo">
        <img src="/imgs/logo.svg" width="110" />
      </div>

      <div id="accImgObj" className="imgobj">
        <img src="/imgs/girl.jpg" height="750" />
      </div>

      <div className="formobj">
        <div className="fbox">

          <div id='headTxt' ref={headTxt} className="fhead f20"></div>

          <div className='pageDivs'>5

            <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/bvn-check' element={<BVNCheck />} />
              <Route path='/acc-type' element={<AccType />} />

              <Route path='/profile' element={<Profile />} />
              <Route path='/contacts' element={<Contact />} />
              <Route path='/products' element={<Products />} />
              <Route path='/acc-info' element={<AccountInfo />} />
              <Route path='/refs' element={<UserRefs />} />

              <Route path='/mandate/upload' element={<UploadFiles />} />
              <Route path='/mandate-info' element={MandateInfo} />

            </Routes>

          </div>

        </div>


      </div>

    </div>

  )
}

export default MasterPage;




