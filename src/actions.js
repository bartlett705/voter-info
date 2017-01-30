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
