import { APP_TOKEN_SUCCESS } from '../types';

let initialState = {
  token: null,      //token is null on start... 
  data: {}
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case APP_TOKEN_SUCCESS:
      let { access_token:token, expires_in:expiry, user } = action.payload;
      let st = {  ...state,  token, expiry, user };
      return st;

    default:
      return state;
  }
}

export default reducer;