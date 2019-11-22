import {useState} from 'react';

type LiteralTypes = boolean | string | number;

export interface State<T = LiteralTypes> {
  [key: string]: T;
}

export interface DataSource<T = LiteralTypes> {
  get: (key: string) => T;
  set: (key: string, value: T) => void;
  reset: (newState: State<T>) => void;
}

export default function useDataSource<T>(
  initialState: State<T> = {},
  onChange = (state: State<T>) => {},
): DataSource<T> {
  const [state, setState] = useState(initialState);

  const reset: DataSource<T>['reset'] = newState => {
    setState(newState);
    onChange(newState);
  };

  const set: DataSource<T>['set'] = (key, value) => {
    reset({...state, [key]: value});
  };

  const get: DataSource<T>['get'] = key => {
    return state[key];
  };

  return {get, set, reset};
}
