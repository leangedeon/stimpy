import { connect } from 'react-redux';
import Intro from './presentational';
import { 
  setPlayer,
  setGender,
  setScore,
  setError,
  setCar,
  setTeam,
  showLegal,
} from '../actions';

const mapStateToProps = state => ({
  player: state.player,
  gender: state.gender,
  score: state.score,
  error: state.error,
  legal: state.legal,
});

const mapDispatchToProps = dispatch => ({
  setPlayer: (player) => dispatch(setPlayer(player)),
  setGender: (gender) => dispatch(setGender(gender)),
  setScore: (score) => dispatch(setScore(score)),
  setError: (error) => dispatch(setError(error)),
  setCar: (car) => dispatch(setCar(car)),
  setTeam: (team) => dispatch(setTeam(team)),
  showLegal: (visibility) => dispatch(showLegal(visibility)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro);