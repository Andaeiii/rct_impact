import React from 'react';
import { useSelector } from 'react-redux';

import './css/BVNCheck.css';

const BVNCheck = () => {

  let store = useSelector(store => store);
  console.log('xstore', store);

  let verifyBVN = (e) => console.log('hello... bvn.');

  return (

    <div className='bvndiv'>

      <div className="flinks">
        <button className="btn active" style={{ textAlign: "center !important" }}> Open with your BVN </button>
        <button className="btn inactive"> Open without BVN </button>
        <div className="clr"></div>
      </div>


      <div className="content-area">

        <div className='panelx'> </div>


        {/* <div className="withBVN">

              <div className='panel bvnform'>

                <div id="bvnform" className="ingrp input-group">
                  <input id="bvn" type="number" className="form-control" placeholder="Enter BVN for Verification" />
                  <span className="input-group-btn">
                    <div className="vdiv"><img src="/OAP/imgs/not_verified.png" /></div>
                    <button onClick={verifyBVN} className="btn btn-success" type="button"> Verify</button>
                  </span>
                </div>

              </div>


              </div>



              <div className="panel noBVN">


              </div> */}

      </div>


    </div>



  )
}

export default BVNCheck;