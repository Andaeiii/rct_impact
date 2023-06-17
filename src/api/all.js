import axios from "axios";
import * as config from '../config/Settings.js';
import { store } from '../index';


let hasToken = false;

    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "*",
    // "Access-Control-Allow-Credentials": "true",
    //"Content-Type": hasToken ? "application/json" : "application/x-www-form-urlencoded", 
const Http = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }, 
  baseURL: 'http://jwt.slydecorps.com/api',
  timeout: 10000

});


// Add a request interceptor
Http.interceptors.request.use(function (request) {
  store.dispatch({ type: 'AJAX_PROGRESS', evt: 'INITIALIZING' });
  let { app } = store.getState();

  if (app.token) {  //user has logged in...
    hasToken = true;
    request.headers.common.Authorization = `Bearer ${app.token}`;  //read the appstate from the store...
  }
  return request;
}, function (error) {
  //dispatch event here... on error.. 
  return Promise.reject(error);
});

// Add a response interceptor
Http.interceptors.response.use(function (response) {
  store.dispatch({ type: 'AJAX_COMPLETE', evt: null });
  return response;
}, function (error) {
  //dispatch event here... on error.. 
  return Promise.reject(error);
});


//let tokenData = new URLSearchParams(Object.entries(config.AUTH_DATA)).toString();


//auth data..
export const getAppToken = (authData) => Http.post('/auth/login', authData);