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

    expect(applyMock).toBeCalledWith(self, builtIns);
  });

  it('calls apply sandbox with extraBlacklist when load is called', () => {
    const extraBlacklist = {XMLHttpRequest: false, foo: true};

    load('', extraBlacklist);

    expect(applyMock).toBeCalledWith(self, {...builtIns, ...extraBlacklist});
  });
});
