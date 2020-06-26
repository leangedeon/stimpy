import React from 'react';
import { TASKS } from '../constants.js';
import { StyledListTasks, StyledTask } from './styled.jsx';
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
		const { setStatus, setError } = this.props;
		setError(null);
		setStatus(data);
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

export default ListTasks;
