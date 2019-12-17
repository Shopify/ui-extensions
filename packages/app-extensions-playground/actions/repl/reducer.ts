import {ReplActions, SupportedFormat} from './actions';
import {parseLisp, parseJSON, generateJSON, generateLisp} from '@shopify/app-extensions-renderer';

interface ReplState {
  pendingCode: string;
  pendingState: string;
  displayFormat: SupportedFormat;
  evaluatedFormat: SupportedFormat;
  code: string;
  state: string;
  activeState: {[key: string]: any};
}

function convertCode({
  code,
  from,
  to,
}: {
  code: string;
  from: SupportedFormat;
  to: SupportedFormat;
}): string {
  if (from === to) {
    return code;
  } else if (from === 'lisp' && to === 'json') {
    return JSON.stringify(JSON.parse(generateJSON(parseLisp(code))), null, 2);
  } else if (from === 'json' && to === 'lisp') {
    return generateLisp(parseJSON(code));
  } else {
    throw `Cannot convert from ${from} to ${to}`;
  }
}

export default function reducer(state: ReplState, action: ReplActions): ReplState {
  switch (action.type) {
    case 'EVALUATE':
      return {
        ...state,
        code: state.pendingCode,
        state: state.pendingState,
        activeState: JSON.parse(state.pendingState || '{}'),
        evaluatedFormat: state.displayFormat,
      };
    case 'LOAD_SNIPPET':
      if (state.pendingCode === action.code && state.pendingState === action.state) return state;

      return reducer(
        {
          ...state,
          pendingState: action.state,
          pendingCode: convertCode({code: action.code, from: 'lisp', to: state.displayFormat}),
        },
        {type: 'EVALUATE'},
      );
    case 'SET_STATE':
      return {
        ...state,
        activeState: {...state.activeState, [action.key]: action.value},
        pendingState: JSON.stringify({...state.activeState, [action.key]: action.value}),
      };
    case 'SET_FORMAT':
      return {
        ...state,
        displayFormat: action.displayFormat,
        pendingCode: convertCode({
          code: state.pendingCode,
          from: state.displayFormat,
          to: action.displayFormat,
        }),
      };
    case 'UPDATE_PENDING_CODE':
      return {...state, pendingCode: action.code};
    case 'UPDATE_PENDING_STATE':
      return {...state, pendingState: action.state};
    default:
      return state;
  }
}
