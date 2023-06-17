import { AJAX_COMPLETE, AJAX_PROGRESS, APP_TOKEN_SUCCESS } from "../types";

let initialState = {
  text: null,
  display: false
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case AJAX_PROGRESS:
      return { display: true, text: action.evt }

    case AJAX_COMPLETE:
      return { display: false, text: null }

    default:
      return state;

  }
}

export default reducer;