import { types } from '../actions/actionTypes';

const initialState = {
    userName: '',
    email: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
    // console.log('login', action.payload)
      return {
        ...state,
        userName: action.payload.userName,
        email:action.payload.email
      }
      case types.LOGOUT:
        // console.log('logout')
        return {
          ...state,
          userName: '',
          email: ''
        }
    default:
      return state;
  }
}

export default reducer;