import type {I18nTranslate} from '../../api/standard/standard';
import {useTranslate} from '../translate';

import {
  mount,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('useTranslate', () => {
  afterEach(tearDownGlobalShopifyMock);
  it('returns string translation', async () => {
    const simpleTranslation = 'This is a simple string translation';

    setupGlobalShopifyMock({
      i18n: {
        translate: (() => simpleTranslation) as I18nTranslate,
      },
    });

    const {value} = mount.hook(() => useTranslate());
    const translate = value;

    expect(translate('exampleKey')).toStrictEqual(simpleTranslation);
  });

  it('returns array with strings, numbers, and components', async () => {
    function Name() {
      return <p>Fred</p>;
    }

    const simpleTranslation = [
      'Hello, ',
      <Name key="name" />,
      ' . You are applicant #',
      1,
    ];
    const translateInSandbox = jest.fn(() => simpleTranslation);

    setupGlobalShopifyMock({
      i18n: {
        translate: translateInSandbox,
      },
    });

    const {value} = mount.hook(() => useTranslate());
    const translate = value;

    // Expect that a the same array is returned, with any valid components wrapped in a React.Fragment
    expect(translate('exampleKey')).toMatchObject([
      'Hello, ',
      expect.objectContaining({type: Name}),
      ' . You are applicant #',
      1,
    ]);
  });

  it('returns array with an element that is not a string, number, or component', async () => {
    const simpleTranslation = ['Hello, ', undefined, ' .'];
    const translateInSandbox = jest.fn(() => simpleTranslation);

    setupGlobalShopifyMock({
      i18n: {
        translate: translateInSandbox,
      },
    });

    const {value} = mount.hook(() => useTranslate());
    const translate = value;

    expect(translate('exampleKey')).toStrictEqual(simpleTranslation);
  });
});
