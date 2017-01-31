export const requestReps = (address) => {
  return {
    type: 'REQUEST_REPS',
    address,
  };
};

export const receiveReps = (reps) => {
  return {
    type: 'RECEIVE_REPS',
    reps,
  };
};

export const fetchReps = (address) => {
  return function (dispatch) {
    dispatch(requestReps(address));
    fetch(`https://www.googleapis.com/civicinfo/v2/representatives?address=${address}&key=AIzaSyAB_cHrXX9pkEW4F-AjFDaucQRT7nUvcQg`)
      .then(response => response.json())
      .then(data => dispatch(receiveReps(data)));
    };
}
