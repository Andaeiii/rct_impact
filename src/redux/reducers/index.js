import { combineReducers } from 'redux';
import loader from './loader';
import app from './app';

export default combineReducers({ loader, app });       //all the indivisual reducers.. , 