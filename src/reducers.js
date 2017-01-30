const reducer = (state = {
  address: '',
  isPending: false,
  reps: [],
}, action) => {
  switch (action.type) {
    case 'REQUEST_REPS':
      return {
        ...state,
        address: action.address,
        isPending: true,
      };
    case 'RECEIVE_REPS':
      return {
        ...state,
        isPending: false,
        reps: action.reps,
      }
  }
}
