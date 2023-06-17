import * as React from "react";

import './Loadr.css';

const Loadr = (props) => (

  props.visible === 'block' && <div className="spinner">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto"
      }}
      width={150}
      height={150}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <circle cx={48.582} cy={50} fill="#0f227e" r={11}>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="0.9345794392523364s"
          keyTimes="0;0.5;1"
          values="39;61;39"
          begin="-0.4672897196261682s"
        />
      </circle>
      <circle cx={51.418} cy={50} fill="#50c344" r={11}>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="0.9345794392523364s"
          keyTimes="0;0.5;1"
          values="39;61;39"
          begin="0s"
        />
      </circle>
      <circle cx={48.582} cy={50} fill="#0f227e" r={11}>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="0.9345794392523364s"
          keyTimes="0;0.5;1"
          values="39;61;39"
          begin="-0.4672897196261682s"
        />
        <animate
          attributeName="fill-opacity"
          values="0;0;1;1"
          calcMode="discrete"
          keyTimes="0;0.499;0.5;1"
          dur="0.9345794392523364s"
          repeatCount="indefinite"
        />
      </circle>
    </svg >

    <span>{props.title}</span>
  </div>

)

export default Loadr;

