import { connect } from 'react-redux';
import ListTasks from './presentational';
import { 
  setPlayer,
  setGender,
  setScore,
  setError,
  setStatus,
  showTasks,
  setWheelPosition,
  setMechanic,
  setLoading,
} from '../actions';

const mapStateToProps = state => ({
  player: state.player,
  gender: state.gender,
  score: state.score,
  car: state.car,
  error: state.error,
  wheel_tasks: state.wheel_tasks,
  mechanic: state.mechanic,
  position: state.position,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  setPlayer: (player) => dispatch(setPlayer(player)),
  setGender: (gender) => dispatch(setGender(gender)),
  setScore: (score) => dispatch(setScore(score)),
  setError: (error) => dispatch(setError(error)),
  setStatus: (status) => dispatch(setStatus(status)),
  showTasks: (visibility) => dispatch(showTasks(visibility)),
  setWheelPosition: (position) => dispatch(setWheelPosition(position)),
  setMechanic: (id) => dispatch(setMechanic(id)),
  setLoading: (status) => dispatch(setLoading(status)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTasks);