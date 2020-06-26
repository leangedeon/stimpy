import React from 'react';
import { withRouter } from 'react-router-dom';
import { SECTIONS } from '../constants.js';
import { TITLE_SCORE, YOUR_SCORE, PLAY_AGAIN } from '../strings.js';
import { 
	StyledDashboard, 
	StyledSuccess,
	StyledText,
	Row,
	TitleRow,
	StyledButton,
} from './styled.jsx';

class Score extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onClickButton = () => {
		this.props.history.push(SECTIONS[0]);
	}

	render() {
		const { score } = this.props;
		return(
			<div>
				<TitleRow><h1>{TITLE_SCORE}</h1></TitleRow>
				<StyledDashboard>
	        		<StyledSuccess />

	        		<Row>
						<StyledText>{`${YOUR_SCORE} ${score}`}</StyledText>
					</Row>
					<StyledButton onClick={this.onClickButton}>{PLAY_AGAIN}</StyledButton>
				</StyledDashboard>
			</div>
		);

	}

}

export default withRouter(Score);
