import {load} from '../worker';

jest.mock('../sandbox', () => ({
  ...require.requireActual('../sandbox'),
  apply: jest.fn(),
}));

const applyMock: jest.Mock = require.requireMock('../sandbox').apply;
const builtIns: jest.Mock = require.requireMock('../sandbox').builtIns;

describe('worker', () => {
  it('calls apply sandbox when load is called', () => {
    load('');

    expect(applyMock).toHaveBeenCalledWith(self, builtIns);
  });

  it('calls apply sandbox with extraDenylist when load is called', () => {
    const extraDenylist = {XMLHttpRequest: false, foo: true};

    load('', extraDenylist);

    expect(applyMock).toHaveBeenCalledWith(self, {...builtIns, ...extraDenylist});
  });
});
