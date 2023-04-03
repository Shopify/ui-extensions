/**
 * @jest-environment jsdom
 */
import {render, extractComponentName} from '../render';

// get a reference of the mocked function
const {extend} = jest.requireMock('@shopify/checkout-ui-extensions') as {
  extend: jest.Mock;
};

// see https://stackoverflow.com/questions/60665358/not-able-to-access-variables-in-jest-mock-function
const mockDocument = document;

jest.mock('@shopify/checkout-ui-extensions', () => {
  const originalModule = jest.requireActual('@shopify/checkout-ui-extensions');
  return {
    __esModule: true,
    ...originalModule,
    // mocking `extend` allows us to test how remote-ui/react `render` method
    // is wrapped by our extensions specific `render` method
    extend: jest.fn((extensionPoint, render) => {
      render(mockDocument.createElement('div'), {});
    }),
  };
});

window.reportError = () => {};
jest.spyOn(window, 'reportError').mockImplementation();
// save reference to the original method to restore it after we run our test
// eslint-disable-next-line no-console
const consoleError = console.error.bind(console);

const IGNORABLE_TEST_ERRORS = [
  /The above error occurred in (the <.*>|one of your React) components?:/,
  /Error: Uncaught \[/,
];

describe('render()', () => {
  beforeEach(() => {
    // prevent spamming the test output, but allow the non-expected errors
    // to be logged
    jest.spyOn(console, 'error').mockImplementation((...args: any[]) => {
      const [firstArgument] = args;
      if (IGNORABLE_TEST_ERRORS.some((regex) => regex.test(firstArgument))) {
        return;
      }
      consoleError(...args);
    });
  });

  afterEach(() => {
    // remove the filtering of the expected react reconciler errors logs
    // eslint-disable-next-line no-console
    console.error = consoleError;
  });

  it('calls extend() with the extension point', () => {
    render('Checkout::Dynamic::Render', () => <></>);
    expect(extend).toHaveBeenCalledWith(
      'Checkout::Dynamic::Render',
      expect.any(Function),
    );
  });

  it('reports errors thrown during reconcilation onto global this', () => {
    render('Checkout::Dynamic::Render', () => {
      return <Thrown />;
    });

    expect(window.reportError).toHaveBeenCalled();
  });

  it('extracts component name from the stack correctly when it’s available on the thrown error', () => {
    const componentStacks = [
      `\nat Thrown (/src/github.com/Shopify/checkout-web/packages/checkout-ui-extensions-react/src/tests/render.test.tsx:82:9)
        at Parent
        at ErrorBoundary (/src/github.com/Shopify/checkout-web/packages/checkout-ui-extensions-react/src/render.tsx:69:74)`,
      `\nat Hello (webpack:///./src/index.tsx_+_220_modules?:1082:9)
        at Banner
        at Extension (webpack:///./src/index.tsx_+_220_modules?:1075:7)
        at render_esnext_ErrorBoundary (webpack:///./src/index.tsx_+_220_modules?:1052:124)`,
    ];
    expect(extractComponentName(componentStacks[0])).toBe('Thrown');
    expect(extractComponentName(componentStacks[1])).toBe('Hello');
  });
});

const Thrown = () => {
  throw new Error('Error thrown during the component tree rendering');
};
