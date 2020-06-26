import React from 'react';
import { withRouter } from 'react-router-dom';
import { SECTIONS } from '../constants.js';
import { TITLE_INTRO, ERROR_LOGIN_MESSAGE, SEE_RULES } from '../strings.js';

import Modal from '../Modal';

import * as services from '../utils/services.js';
import { 
	StyledPlayer, 
	StyledText, 
	Input, 
	Select, 
	Row, 
	StyledButton, 
	StyledLegalText, 
	StyledTextError,
	TitleRow,
} from './styled.jsx';


class Intro extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	onChangeGender = (e) => {
		this.props.setGender(e.target.value);
	}

	onChangeName = (e) => {
		this.props.setPlayer(e.target.value);
	}

	onClickButton = () => {
		const { 
			player, 
			gender, 
			setCar,
			setTeam,
			setScore, 
		} = this.props;

		if (player && gender) {
			services.createCar()
				.then((newCar) => setCar(newCar))
				.then(() => services.createTeam(player))
				.then((newTeam) => setTeam(newTeam))
				.then(() => setScore(0))
				.then(() => this.props.history.push(SECTIONS[1]));
		} else {
			this.props.setError(ERROR_LOGIN_MESSAGE)
		}
	}

	onClickLegal = () => {
		const { showLegal } = this.props;
		showLegal(true);
	}

	render() {
		const { error, legal } = this.props;

	return(
			<StyledPlayer>
				
				{
					(legal) && (
						<Modal/>
					)
				}
				
				<TitleRow>
					<h1>{TITLE_INTRO}</h1>
				</TitleRow>
				<Row>
					<StyledText>Add your name</StyledText>
					<Input onChange={this.onChangeName} />
				</Row>
				<Row>
					<StyledText>Select your gender</StyledText>
					<Select onChange={this.onChangeGender}>
						<option value="">Select Gender</option>
						<option value="MALE">Male</option>
						<option value="FEMALE">Female</option>
					</Select>
				</Row>
				<Row>
					<StyledButton onClick={this.onClickButton}>{`Go!`}</StyledButton>
				</Row>

				<Row>
					<StyledLegalText onClick={this.onClickLegal}>{SEE_RULES}</StyledLegalText>
				</Row>
				
				<Row>
					<StyledTextError>{error}</StyledTextError>
				</Row>

			</StyledPlayer>
		);

	}

}

export default withRouter(Intro);