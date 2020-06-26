import axios from 'axios';

	
const API_URL = `https://backend-test-qfxw6.stensul.dev`;

export const getCar = async function(id) {
  let json = await axios.get(`${API_URL}/cars/${id}`);
	
  return json;
}

export const createCar = async function() {
  let json = await axios.post(`${API_URL}/cars`);
  return json.data;
}

export const createTeam = async function(name) {
  let json = await axios.post(`${API_URL}/teams`, {name: name});
  return json.data;
}

export const liftCar = async function(idCar, idMember) {
	let json = await axios.post(`${API_URL}/cars/${idCar}/lift`, {}, {headers: {'x-member-id': idMember}})
  return json;
}

export const fillTank = async function(idCar, idMember) {
  let json = await axios.post(`${API_URL}/cars/${idCar}/fill-tank`, {}, {headers: {'x-member-id': idMember}});
  return json;
}

export const checkCar = async function(idCar) {
  let json = await axios.post(`${API_URL}/cars/${idCar}/check`);
  return json;
}

export const actionWheels = async function(idCar, idMember, position, action) {
  let json = await axios.post(`${API_URL}/cars/${idCar}/wheels/${position}/${action}`, {}, {headers: {'x-member-id': idMember}});
  return json;
}