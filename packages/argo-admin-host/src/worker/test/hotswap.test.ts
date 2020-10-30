import {makeApiFunctionsHotSwappable} from '../hotswap';

describe('makeApiFunctionsHotSwappable()', () => {
  it('makes api functions hot-swappable', () => {
    const hostRef: any = {
      action: [],
    };
    const api = {
      someApi: {
        setAction: (action) => {
          hostRef.action.push(action);
        },
      },
    };

    makeApiFunctionsHotSwappable(api);

    api.someApi.setAction({onAction: () => {}});

    const newAction = jest.fn();
    api.someApi.setAction({onAction: newAction});

    const wrappedOriginalAction = hostRef.action[0];
    wrappedOriginalAction.onAction();

    expect(newAction).toHaveBeenCalled();
  });

  it('returns value from calling hot-swappable api', () => {
    const api = {
      someApi: {
        getSessionToken: () => {
          return '1234';
        },
      },
    };

    makeApiFunctionsHotSwappable(api);

    expect(api.someApi.getSessionToken()).toStrictEqual('1234');
  });
});
