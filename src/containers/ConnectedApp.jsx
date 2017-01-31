import { connect } from 'react-redux';
import { requestReps, receiveReps, fetchReps } from '../actions';
import App from '../components/App';

const mapStateToProps = (state) => {
  return {
    address: state.address,
    isPending: state.isPending,
    reps: state.reps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestReps: (address) => {
      dispatch(requestReps(address))
    },
    receiveReps: (reps) => {
      dispatch(receiveReps(reps))
    },
    fetchReps: (address) => {
      dispatch(fetchReps(address))
    },
  };
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default ConnectedApp
