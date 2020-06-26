import React from 'react';
import { withRouter } from 'react-router-dom';
import { TASKS } from '../constants.js';
import { StyledListTasks, StyledTask } from './styled.jsx';
import { SECTIONS } from '../constants.js';
import * as services from '../utils/services.js';

class ListTasks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onRepairWheel = (e) => {
		const { 
			car, 
			mechanic, 
			position, 
			setError, 
			showTasks, 
			setLoading, 
			setScore,
		} = this.props;

		showTasks(false);
		setLoading(true);
		services.actionWheels(car.id, mechanic, position, e.target.innerText.toLowerCase())
			.then((response) => {
				this.onUpdate(response.data);
				setScore(5);
			})
			.catch((error) => setError(`(${error.response.data.code}) - ${error.response.data.message}`))
			.finally(() => setLoading(false))
	}

	onUpdate(data) {
		const { car, setStatus, setError } = this.props;
		setError(null);
		setStatus(data);

		services.checkCar(car.id)
			.then((status) => {
				(status.data.ready) && 
				 this.props.history.push(SECTIONS[2]);
			})
	}

	render() {
		const { wheel_tasks } = this.props;

		return(
			<StyledListTasks>
				{
					(wheel_tasks) &&
						TASKS.map((task, i) =>
							<StyledTask key={i} onClick={this.onRepairWheel} data={task}>{task}</StyledTask>
						)
				}
			</StyledListTasks>
		);

	}

}

export default withRouter(ListTasks);
