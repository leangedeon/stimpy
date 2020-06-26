import React from 'react';
import { Droppable } from 'react-drag-and-drop'
import { withRouter } from 'react-router-dom';
import Overlay from '../Overlay';
import { SECTIONS } from '../constants.js';
import * as services from '../utils/services.js';
import ListTasks from '../ListTasks';
import { 
	CarPartsLi, 
	StyledCar, 
	ListPartsUl, 
	StyledTextError,
	Row,
	RowStatus,
	StyledText,
} from './styled.jsx';

class Car extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	onCleanErrors() {
		const { setError } = this.props;
		setError(null);
	}

	onFillTank(data) {
		const { car, setError, setLoading, setScore } = this.props;
		const mechanicId = Object.values(data)[0];
		setLoading(true);
		services.fillTank(car.id, mechanicId)
			.then((response) => {
				this.onUpdate(response.data);
				setScore(5);
			})
			.catch((error) => setError(`(${error.response.data.code}) - ${error.response.data.message}`))
			.finally(() => setLoading(false))
	}

	onLiftCar(data) {
		const { car, setError, setLoading, setScore, } = this.props;
		const mechanicId = Object.values(data)[0];
		setLoading(true);

		services.liftCar(car.id, mechanicId)
			.then((response) => {
				this.onUpdate(response.data);
				setScore(5);
			})
			.catch((error) => setError(`(${error.response.data.code}) - ${error.response.data.message}`))
			.finally(() => setLoading(false))
	}

	onUpdate(data) {
		const {setStatus} = this.props;
		this.onCleanErrors();
		setStatus(data);
	}

	onDropWheel(e) {
		const { setMechanic  } = this.props;
		const mechanicId = Object.values(e)[0];
		setMechanic(mechanicId);
		this.onShowTask();
	}

	onDragEnter(position){
		const { setWheelPosition } = this.props;
		setWheelPosition(position);
	}

	onShowTask() {
		const { showTasks } = this.props;
		this.onCleanErrors();
		showTasks(true);
	}

	componentDidMount() {
		const { car } = this.props;
		this.onCleanErrors();
		(!car) &&
	    	this.props.history.push(SECTIONS[0]);
	}

	render() {
		const { car, wheel_tasks, error, loading } = this.props;

		return (
			<div>
				{
					(loading) && <Overlay />
				}
				<StyledCar>
				{
					<React.Fragment>
						<Droppable types={["gasman"]} onDrop={this.onFillTank.bind(this)}>
							<ListPartsUl>
								<CarPartsLi key="fuel">
									<div className={`car-wheel fuel`}></div>
								</CarPartsLi>
							</ListPartsUl>		
						</Droppable>
						{ 
							(car && car.wheels && car.wheels.length > 0) && (
								<ListPartsUl>
									{
										car.wheels.map((wheel) => (
											<CarPartsLi key={wheel.position}>
												<div className={`car-wheel ${wheel.position}`}>
													<Droppable 
														types={["mechanic"]} 
														className="drop" 
														onDrop={this.onDropWheel.bind(this)}
														onDragEnter={() => this.onDragEnter(wheel.position)}
													>
														{wheel.status}
													</Droppable>
												</div>
											</CarPartsLi>	
										))
									}

		 						</ListPartsUl>
	 						) 
						}
 					

	 					<Droppable types={["jackman"]} onDrop={this.onLiftCar.bind(this)}>	
	 						<ListPartsUl>
		 						<CarPartsLi key="lifted">
									<div className={`car-wheel lifted`}></div>
								</CarPartsLi>
							</ListPartsUl>	
						</Droppable>
 					</React.Fragment>
				}
				</StyledCar>
				<RowStatus>
					<StyledText>{`Fuel ${car.fuel}`}</StyledText>
					<StyledText>{(car.lifted) ? "Lifted" : "No Lifted"}</StyledText>
				</RowStatus>
				<Row>
					{
						(error) && <StyledTextError>{error}</StyledTextError>
					}

					<ListTasks tasks={wheel_tasks} onUpdate={this.onUpdate} />
				</Row>
			</div>
		)


	}

}

export default withRouter(Car);