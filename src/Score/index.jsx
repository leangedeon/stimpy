import { connect } from 'react-redux';
import Score from './presentational';

const mapStateToProps = state => ({
  player: state.player,
  score: state.score,
});

export default connect(
  mapStateToProps,
)(Score);