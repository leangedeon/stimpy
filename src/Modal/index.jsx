import { connect } from 'react-redux';
import Modal from './presentational';
import { showLegal } from '../actions';

const mapStateToProps = state => ({
  legal: state.legal,
});

const mapDispatchToProps = dispatch => ({
  showLegal: (visibility) => dispatch(showLegal(visibility)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);