import React from 'react';
import { withRouter } from 'react-router-dom';
import { SECTIONS } from '../constants.js';
import { QUIT_RACE, TITLE_BOXES } from '../strings.js';
import Pits from '../Pits';
import ScoreData from '../ScoreData';
import { 
	StyledDashboard, 
	PitRow, 
	ScoreRow, 
	TitleRow, 
	StyledButton,
	ButtonRow,
} from './styled.jsx';

class Boxes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		const { player, gender, } = this.props;
		
		(!!player || !!gender) || 
	    	this.props.history.push(SECTIONS[0]);
	}

	onClickButton = () => {
		this.props.history.push(SECTIONS[2]);
	}

	render() {

		return(

			<StyledDashboard>
				<TitleRow>
					<h1>{TITLE_BOXES}</h1>
				</TitleRow>


				<ScoreRow>
        			<ScoreData />
				</ScoreRow>
				
				<PitRow>
					<Pits />
				</PitRow>

				<ButtonRow>
					<StyledButton onClick={this.onClickButton}>{QUIT_RACE}</StyledButton>
				</ButtonRow>	
			</StyledDashboard>
		);

	}

}

export default withRouter(Boxes);
