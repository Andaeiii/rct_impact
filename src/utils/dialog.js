import * as appConfig from '../config/Settings.js';

import { toast } from 'react-toastify';               // Importing toastify module
import 'react-toastify/dist/ReactToastify.css';     // Import toastify css file

toast.configure(); //compulsory..

export const warning = (msg) => toast.warning(msg, appConfig.toastSettings);
export const success = (msg) => toast.success(msg, appConfig.toastSettings);
export const error = (msg) => toast.error(msg, appConfig.toastSettings);