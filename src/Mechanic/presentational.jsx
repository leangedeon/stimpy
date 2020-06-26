import React from 'react';
import { Draggable } from 'react-drag-and-drop'
import { StyledMechanic, StyledName } from './styled.jsx';

class Mechanic extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const { gender, type, position, mechanicId } = this.props;

		return(
			<div>
				<Draggable type={type} data={mechanicId}>
					<StyledMechanic 
						gender={gender} 
						type={type} 
						position={position}
						data={mechanicId}
          			/>
					<StyledName>{type}</StyledName>
				</Draggable>
			</div>
		);

	}

}

export default Mechanic;