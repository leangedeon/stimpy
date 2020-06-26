import { connect } from 'react-redux';
import Boxes from './presentational';
import { 
  setPlayer,
  setGender,
  setScore,
  setError,
  setCar,
  setTeam,
} from '../actions';

const mapStateToProps = state => ({
  player: state.player,
  gender: state.gender,
  score: state.score,
  team: state.team,
});

const mapDispatchToProps = dispatch => ({
  setPlayer: (player) => dispatch(setPlayer(player)),
  setGender: (gender) => dispatch(setGender(gender)),
  setScore: (score) => dispatch(setScore(score)),
  setError: (error) => dispatch(setError(error)),
  setCar: (car) => dispatch(setCar(car)),
  setTeam: (team) => dispatch(setTeam(team)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Boxes);