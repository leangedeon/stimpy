import { connect } from 'react-redux';
import Mechanic from './presentational';
import { 
	setPlayer,
	setGender,
	setScore,
} from '../actions';

const mapStateToProps = state => ({
  player: state.player,
  gender: state.gender,
  score: state.score,
});

const mapDispatchToProps = dispatch => ({
  setPlayer: (player) => dispatch(setPlayer(player)),
  setGender: (gender) => dispatch(setGender(gender)),
  setScore: (score) => dispatch(setScore(score)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mechanic);
