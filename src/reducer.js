const initialState = {
  curentLang: 'ALB'
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_LANG': {
      return {
        curentLang: action.payload
      }
    }
    default : {
      return state;
    }
  }

}

export default rootReducer;