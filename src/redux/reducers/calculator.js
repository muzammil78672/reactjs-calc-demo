import ActionTypes from "../../constants/actionTypes";

const initialState = {
  calculatedValue: 0,
  showScientificMode: false,
  theme: "light"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_VALUE: {
      return {
        ...state,
        calculatedValue: action.payload.data
      };
    }
    case ActionTypes.SCIENTIFIC_MODE: {
      return {
        ...state,
        showScientificMode: action.payload.data
      };
    }
    case ActionTypes.CHANGE_THEME: {
      return {
        ...state,
        theme: action.payload.data
      };
    }
    default:
      return state;
  }
};
