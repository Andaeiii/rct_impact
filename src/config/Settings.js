import { toast } from 'react-toastify';               // Importing toastify module

export const ROOT_URL = process.env.REACT_APP_API_URL;

//const AUTH_USR = process.env.REACT_APP_AUTH_USR;
//const AUTH_PWD = process.env.REACT_APP_AUTH_PWD;

//export const PSSTRING = process.env.REACT_APP_PSSTRING;

// export const AUTH_DATA = {
//   username: AUTH_USR,
//   password: AUTH_PWD,
//   grant_type: 'password'
// };

export const toastSettings = {
  position: toast.POSITION.TOP_CENTER, //TOP_CENTER,
  closeOnClick: true,
  //pauseOnHover: true,
  autoClose: 3000,  // false - doesnt close... 
};