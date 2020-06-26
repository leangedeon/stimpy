import React from 'react';
import { withRouter } from 'react-router-dom';
import Mechanic from '../Mechanic';
import { SECTIONS } from '../constants.js';
import { StyledTeam } from './styled.jsx';

class ListMechanics extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		const { team } = this.props;

		(!!team) || 
	    	this.props.history.push(SECTIONS[0]);
	}

	render() {
		const { team, gender } = this.props;

		return(
			<StyledTeam>
				{
					(team && team.members) &&
	 					team.members.map((mechanic, i) => 
	 						<Mechanic key={mechanic.id} gender={gender} type={mechanic.role} position={i+1} mechanicId={mechanic.id} />
	 					)
 				}
			</StyledTeam>
		);

	}

}

export default withRouter(ListMechanics);