export const SET_PLAYER = 'SET_PLAYER';
export const SET_GENDER = 'SET_GENDER';
export const SET_SCORE = 'SET_SCORE';
export const SET_ERROR = 'SET_ERROR';
export const SET_CAR = 'SET_CAR';
export const SET_TEAM = 'SET_TEAM';
export const SET_STATUS = 'SET_STATUS';
export const SHOW_TASKS = 'SHOW_TASKS';
export const SET_POSITION = 'SET_POSITION';
export const SET_MECHANIC = 'SET_MECHANIC';
export const SET_LOADING = 'SHOW_LOADING';
export const SHOW_LEGAL = 'SHOW_LEGAL';

export const setPlayer = (player) => ({
    type: SET_PLAYER,
    payload: player,
});

export const setGender = (gender) => ({
    type: SET_GENDER,
    payload: gender,
});

export const setScore = (score) => ({
    type: SET_SCORE,
    payload: score,
});

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
});

export const setCar = (car) => ({
    type: SET_CAR,
    payload: car,
});

export const setTeam = (team) => ({
    type: SET_TEAM,
    payload: team,
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    payload: status,
});

export const showTasks = (visibility) => ({
    type: SHOW_TASKS,
    payload: visibility,
});

export const setWheelPosition = (position) => ({
    type: SET_POSITION,
    payload: position,
});

export const setMechanic = (id) => ({
    type: SET_MECHANIC,
    payload: id,
});

export const setLoading = (status) => ({
    type: SET_LOADING,
    payload: status,
});

export const showLegal = (visibility) => ({
    type: SHOW_LEGAL,
    payload: visibility,
});
