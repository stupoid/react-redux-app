// import axios from 'axios'

export const LOGIN_REQUESTED = 'login/LOGIN_REQUESTED'
export const LOGGED_IN = 'login/LOGGED_IN'

const initialState = {
  isLoggingIn: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return {
        ...state,
        isLoggingIn: true
      }

    case LOGGED_IN:
      return {
        ...state,
        isLoggingIn: false
      }

    default:
      return state
  }
}

export const userLoginRequest = (userData) => {
  return dispatch => {
    console.log(userData);
    dispatch({ type: LOGIN_REQUESTED })

    // axios post request
    // on done send dispatch LOGGED_IN
    return setTimeout(() => {
      dispatch({
        type: LOGGED_IN
      })
    }, 3000)
  }
}
