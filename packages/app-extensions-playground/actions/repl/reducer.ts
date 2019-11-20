import {ReplActions} from './actions';

interface ReplState {
  pendingCode: string;
  pendingState: string;
  code: string;
  state: string;
  activeState: {[key: string]: any};
}

export default function reducer(state: ReplState, action: ReplActions): ReplState {
  switch (action.type) {
    case 'EVALUATE':
      return {
        ...state,
        code: state.pendingCode,
        state: state.pendingState,
        activeState: JSON.parse(state.pendingState || '{}'),
      };
    case 'LOAD_SNIPPET':
      if (state.pendingCode === action.code && state.pendingState === action.state) return state;

      return reducer(
        {
          ...state,
          pendingState: action.state,
          pendingCode: action.code,
        },
        {type: 'EVALUATE'},
      );
    case 'SET_STATE':
      return {
        ...state,
        activeState: {...state.activeState, [action.key]: action.value},
        pendingState: JSON.stringify({...state.activeState, [action.key]: action.value}),
      };
    case 'UPDATE_PENDING_CODE':
      return {...state, pendingCode: action.code};
    case 'UPDATE_PENDING_STATE':
      return {...state, pendingState: action.state};
    default:
      return state;
  }
}
