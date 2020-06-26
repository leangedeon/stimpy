import React from 'react';
import { withRouter } from 'react-router-dom';
import { 
	StyledScore, 
	StyledText, 
	StyledButton,
} from './styled.jsx';

class ScoreData extends React.Component {

	onClickButton = () => {
    	let path = `intro`;
	    this.props.history.push(path);
	}

	render() {
		const { 
			score, 
			player, 
			gender, 
		} = this.props;

		return(
			<StyledScore>
				<StyledText>{`Player ${player}`}</StyledText>
				<StyledText>{`Pit Team ${gender}`}</StyledText>
				<StyledText>{`Score ${score}`}</StyledText>
				<StyledButton onClick={this.onClickButton}>{`Go back!`}</StyledButton>
			</StyledScore>
		);

	}

}

export default withRouter(ScoreData);