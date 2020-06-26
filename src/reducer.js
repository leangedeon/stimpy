import { 
  SET_PLAYER, 
  SET_SCORE, 
  SET_GENDER,
  SET_ERROR,
  SET_CAR,
  SET_TEAM,
  SET_STATUS,
  SHOW_TASKS,
  SET_POSITION,
  SET_MECHANIC,
  SET_LOADING,
  SHOW_LEGAL,
} from './actions';


function reducer(state = {}, {type, payload}) {

  switch (type) {
    case SET_PLAYER:
      return { ...state, player: payload };

    case SET_GENDER:
      return { ...state, gender: payload };  

    case SET_SCORE:
      return { 
        ...state, 
        score: (state.score + payload) 
      };

    case SET_ERROR:
      return { ...state, error: payload };
    
    case SET_CAR:
      return { ...state, car: payload };

    case SET_TEAM:
      return { ...state, team: payload };

    case SET_STATUS:
      return { 
          ...state,
          car: {
            ...state.car,
            ...payload,
          } 
        }; 

    case SHOW_TASKS:
      return { ...state, wheel_tasks: payload };

    case SET_POSITION:
      return { ...state, position: payload };

    case SET_MECHANIC:
      return { ...state, mechanic: payload };

    case SET_LOADING:
      return { ...state, loading: payload };    
    default:
      return state;

    case SHOW_LEGAL:
      return { ...state, legal: payload };
  }
}


export default reducer;