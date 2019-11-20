import {Snippet} from './lisp-snippets';

type ReplAction<T, P = {}> = {type: T} & P;

export type ReplActions =
  | ReplAction<'UPDATE_PENDING_STATE', {state: string}>
  | ReplAction<'UPDATE_PENDING_CODE', {code: string}>
  | ReplAction<'SET_STATE', {key: string; value: any}>
  | ReplAction<'LOAD_SNIPPET', {state: string; code: string}>
  | ReplAction<'EVALUATE'>;

const ReplActionFactories: {[name: string]: (...args: any) => ReplActions} = {
  updatePendingCode: code => ({type: 'UPDATE_PENDING_CODE', code}),
  updatePendingState: state => ({type: 'UPDATE_PENDING_STATE', state}),
  evaluate: () => ({type: 'EVALUATE'}),
  loadSnippet: ({code, state}: Snippet) => ({type: 'LOAD_SNIPPET', code, state}),
  setState: (key, value) => ({type: 'SET_STATE', key, value}),
};

export default ReplActionFactories;
