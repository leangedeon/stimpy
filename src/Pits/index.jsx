import React from 'react';
import Car from '../Car';
import ListMechanics from '../ListMechanics';
import { StyledPits } from './styled.jsx';

class Pits extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return(
			<StyledPits>
				<Car/>
				<ListMechanics/>
			</StyledPits>
		);

	}

}

export default Pits;