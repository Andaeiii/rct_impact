import React, { useState, useRef } from 'react';
import * as Dialog from '../utils/dialog';
import * as Krypto from '../utils/Krypto';
import * as config from '../config/Settings';
import gsap from 'gsap';

import Rodal from 'rodal';// include styles
import 'rodal/lib/rodal.css';

import CheckAccount from '../popups/CheckAccount';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './css/Home.css';

const Home = () => {

  let dispatch = useDispatch();
  let store = useSelector(state => state);
  let navigate = useNavigate();

  let initVars = {
    accType: null
  };

  let [pageVars, setPageVars] = useState(initVars);

  let [disabled, setDisabled] = useState(true);   //disable or enable the buttons.. 
  let [hideBtns, setHideBtns] = useState(true);    //hide the buttons by default.  .

  //let accInput = otpInput = useRef();
  let savingsBtn = useRef(), currentBtn = useRef();

  let [modalOpen, setModalOpen] = useState(false);

  //object for getting account info...
  let [accountInfo, setAccountInfo] = useState({ accountNumber: '', otpNumber: '' });

  //if false - switch to OTP input screen....
  let [bvnPromptDialog, setBvnPromptDialog] = useState(true);


  let showAccountButtons = () => {
    setDisabled(!disabled);
    setHideBtns(!hideBtns);


    // if (hideBtns) {
    //   //reset the opacity.. 
    //   gsap.set(savingsBtn.current, { opacity: 1 });
    //   gsap.set(currentBtn.current, { opacity: 1 });
    //   //animate object...   
    //   gsap.to(savingsBtn.current, { duration: 0.5, opacity: 0 });
    //   gsap.to(currentBtn.current, { duration: 0.5, opacity: 0 });


    // } else {
    //   gsap.set(savingsBtn.current, { opacity: 0 });
    //   gsap.set(currentBtn.current, { opacity: 0 });
    //   //animate object...   
    //   gsap.to(savingsBtn.current, { duration: 0.5, delay: 0.5, opacity: 1 });
    //   gsap.to(currentBtn.current, { duration: 0.5, delay: 0.5, opacity: 1 });
    // }

  }


  let setAccType = (pg) => {
    store.app.accType = pg;

    console.log(store);
    navigate(`/bvn-check`);
  }


  let showAccountModal = () => {
    console.log(bvnPromptDialog);
    setModalOpen(true);
  }

  let closeModalWin = () => {
    console.log('modal is closing...');
    setModalOpen(false);
  }

  let getAccountInfo = () => {
    console.log(accountInfo);


    let _json_data = JSON.stringify(accountInfo);
    let _encryptedData = Krypto.encrypt(_json_data, config.PSSTRING);
    console.log(_encryptedData);

    console.log(bvnPromptDialog);

    dispatch({ type: 'AJAX_PROGRESS' });

    setModalOpen(false);

    //mock action when the loader shows... 
    setTimeout(() => {
      dispatch({ type: 'AJAX_COMPLETE' });
      setBvnPromptDialog(false);
      setModalOpen(true)
    }, 2000);

  }


  let verifyAccountOTP = () => {

  }

  //animation="rotate" 

  return (

    <div>

      <Rodal height={150} width={300} visible={modalOpen}
        duration={400}
        closeMaskOnClick={false}
        showCloseButton={false} onClose={closeModalWin}>

        <>
          {

            bvnPromptDialog ?

              (<div>
                <p className=''>Enter Your Account Number. </p>
                <div className="input-group  mb-3">
                  <input type="number" value={accountInfo.accountNumber}
                    className="form-control" placeholder="Enter Account Number...."
                    onChange={(e) => setAccountInfo({ ...accountInfo, accountNumber: e.target.value })} />
                  <button className="btn btn-sm input-group-addon" onClick={getAccountInfo}>submit</button>
                </div>
              </div>)

              :

              (<div>
                <p className=''>Enter OTP sent to phone </p>
                <div className="input-group  mb-3">
                  <input type="number" value={accountInfo.otpNumber}
                    className="form-control" min={0} max={4} placeholder="Enter OTP..."
                    onChange={(e) => setAccountInfo({ ...accountInfo, otpNumber: e.target.value })} />
                  <button className="btn btn-sm input-group-addon" onClick={verifyAccountOTP}>submit</button>
                </div>
              </div>)
          }

        </>

      </Rodal>

      <br className="clrbreak" />

      <p className="finfo">
        Welcome, open your Fidelity savings or <br />current account in just a few easy steps
      </p>

      <br />

      <div className="accbtns">
        <div className="mbtn">
          <a className="btn btn-success white-txt accbtns" onClick={showAccountButtons}>Open A New Account &nbsp; &#8594;</a>
        </div>

        <div className="clr"></div>
        <div className="three3btns" style={{ display: hideBtns ? 'none' : 'block' }}>
          <button onClick={() => setAccType('savings')} ref={savingsBtn} className="btn btn-fdt white-txt accbtns" disabled={disabled}>Savings &nbsp; &#8594;</button>
          <button onClick={() => setAccType('current')} ref={currentBtn} className="btn btn-fdt white-txt accbtns" disabled={disabled}>Current &nbsp; &#8594;</button>
          <button onClick={() => setAccType('diaspora')} className="btn btn-fdt white-txt accbtns" disabled={disabled}>Diaspora  &nbsp; &#8594;</button>
        </div>
      </div>


      <hr className="divider" />


      <br />
      <button className="btn btn-fdt-outline accbtns" onClick={showAccountModal}>Upload Signature And Passport &nbsp; &#8594;</button>


      <div className="foot">
        <a href="">Terms &amp; Conditions </a> |
        <a>Contact Us </a> |
        <a>Branch Locator </a> |
        <a>FAQ</a><br />
        <a>Corporate Registration Form/Guide</a> |
        <span>Copyright Fidelity Bank 2020</span>
      </div>




    </div>
  )
}

export default Home;