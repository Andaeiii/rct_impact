import { APP_TOKEN_SUCCESS } from "../types";
import * as api from '../../api/all';


export const getAppToken = (data) => async (dispatch) => {
  try {
    const tokendata = await api.getAppToken(data);
    dispatch({ type: APP_TOKEN_SUCCESS, payload: tokendata.data });
  } catch (err) {
    console.log(err);
  }
}

