import React from 'react';

import {Caption, DisplayText, TextStyle} from '@shopify/polaris';

import {mountWithAppProvider as mount} from '../../../../../../test-utils/mount';
import {TextProps} from '@shopify/argo';
import Text from '../Text';

describe('<Text />', () => {
  it('renders string text', () => {
    const mountedText = mount(<Text>What's up?</Text>);
    expect(mountedText).toContainReactText("What's up?");
  });

  it('uses the proper component for sizing the text', async () => {
    const titleText: TextProps['size'][] = [
      'titleSmall',
      'titleMedium',
      'titleLarge',
      'titleExtraLarge',
    ];
    const displyTextMap = {
      titleSmall: 'small',
      titleMedium: 'medium',
      titleLarge: 'large',
      titleExtraLarge: 'extraLarge',
    };

    const smallText = await mount(<Text size="small">Small Text</Text>);
    expect(smallText).toContainReactComponent(Caption);

    titleText.forEach(async (textSize) => {
      const titleText = await mount(<Text size={textSize}>{textSize} Text</Text>);
      expect(titleText).toContainReactComponent(DisplayText, {size: displyTextMap[textSize]});
    });
  });

  it('applies the proper color based on the color property', async () => {
    const successText = await mount(<Text color="success">Success Text</Text>);
    expect(successText).toContainReactComponent(TextStyle, {variation: 'positive'});

    const errorText = await mount(<Text color="error">Error Text</Text>);
    expect(errorText).toContainReactComponent(TextStyle, {variation: 'negative'});

    const secondaryText = await mount(<Text color="secondary">Secondary Text</Text>);
    expect(secondaryText).toContainReactComponent(TextStyle, {variation: 'subdued'});
  });

  it('applies the correct text style based on the property', async () => {
    const boldText = await mount(<Text style="strong">Strong Text</Text>);
    expect(boldText).toContainReactComponent(TextStyle, {variation: 'strong'});

    const codeText = await mount(<Text style="monospace">Code Text</Text>);
    expect(codeText).toContainReactComponent(TextStyle, {variation: 'code'});
  });
});
