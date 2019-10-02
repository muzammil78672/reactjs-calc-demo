import ActionTypes from "../../constants/actionTypes";

const updateValue = value => {
  return {
    type: ActionTypes.UPDATE_VALUE,
    payload: {
      data: value
    }
  };
};

const addition = value => {
  return (dispatch, getState) => {
    let calculatedValue = getState().calculatedValue
      ? getState().calculatedValue + value
      : value;
    dispatch(updateValue(calculatedValue));
  };
};

const substraction = value => {
  return (dispatch, getState) => {
    let calculatedValue = getState().calculatedValue
      ? getState().calculatedValue - value
      : value;
    dispatch(updateValue(calculatedValue));
  };
};

const multiplication = value => {
  return (dispatch, getState) => {
    let calculatedValue = getState().calculatedValue
      ? getState().calculatedValue * value
      : value;
    dispatch(updateValue(calculatedValue));
  };
};

const division = value => {
  return (dispatch, getState) => {
    console.log(getState().calculatedValue);
    let calculatedValue = getState().calculatedValue
      ? getState().calculatedValue / value
      : value;
    dispatch(updateValue(calculatedValue));
  };
};

const squareRoot = value => {
  return (dispatch, getState) => {
    let calculatedValue =
      getState().calculatedValue || value ? Math.sqrt(value) : value;
    dispatch(updateValue(calculatedValue));
  };
};

const square = value => {
  console.log(value);
  return (dispatch, getState) => {
    let calculatedValue =
      getState().calculatedValue || value ? Math.pow(value, 2) : value;
    dispatch(updateValue(calculatedValue));
  };
};

const flipSign = value => {
  return (dispatch, getState) => {
    let calculatedValue =
      getState().calculatedValue || value
        ? Math.sign(value) === -1
          ? Math.abs(value)
          : -Math.abs(value)
        : value;
    dispatch(updateValue(calculatedValue));
  };
};

const toggleScientificMode = () => {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SCIENTIFIC_MODE,
      payload: {
        data: !getState().showScientificMode
      }
    });
  };
};

const changeTheme = value => {
  return {
    type: ActionTypes.CHANGE_THEME,
    payload: {
      data: value
    }
  };
};

export default {
  updateValue,
  addition,
  substraction,
  multiplication,
  division,
  squareRoot,
  square,
  flipSign,
  toggleScientificMode,
  changeTheme
};
