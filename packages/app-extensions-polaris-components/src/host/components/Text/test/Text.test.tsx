import React from 'react';
import {Caption, DisplayText, TextStyle} from '@shopify/polaris';
import {mountWithAppProvider as mount} from '../../../../../../../test-utils/mount';
import Text, {TextSize, Alignment, Color, Style} from '../Text';

describe('<Text />', () => {
  it('renders string text', () => {
    const mountedText = mount(<Text>What's up?</Text>);
    expect(mountedText).toContainReactText("What's up?");
  });

  it('uses the proper component for sizing the text', async () => {
    const titleText = [
      TextSize.TitleSmall,
      TextSize.TitleMedium,
      TextSize.TitleLarge,
      TextSize.TitleExtraLarge,
    ];
    const displyTextMap = {
      [TextSize.TitleSmall]: 'small',
      [TextSize.TitleMedium]: 'medium',
      [TextSize.TitleLarge]: 'large',
      [TextSize.TitleExtraLarge]: 'extraLarge',
    };

    const smallText = await mount(<Text size={TextSize.Small}>Small Text</Text>);
    expect(smallText).toContainReactComponent(Caption);

    titleText.forEach(async textSize => {
      const titleText = await mount(<Text size={textSize}>{textSize} Text</Text>);
      expect(titleText).toContainReactComponent(DisplayText, {size: displyTextMap[textSize]});
    });
  });

  it('applies the proper color based on the color property', async () => {
    const successText = await mount(<Text color={Color.Success}>Success Text</Text>);
    expect(successText).toContainReactComponent(TextStyle, {variation: 'positive'});

    const errorText = await mount(<Text color={Color.Error}>Error Text</Text>);
    expect(errorText).toContainReactComponent(TextStyle, {variation: 'negative'});

    const secondaryText = await mount(<Text color={Color.Secondary}>Secondary Text</Text>);
    expect(secondaryText).toContainReactComponent(TextStyle, {variation: 'subdued'});
  });

  it('applies the correct text style based on the property', async () => {
    const boldText = await mount(<Text style={Style.Strong}>Strong Text</Text>);
    expect(boldText).toContainReactComponent(TextStyle, {variation: 'strong'});

    const codeText = await mount(<Text style={Style.Monospace}>Code Text</Text>);
    expect(codeText).toContainReactComponent(TextStyle, {variation: 'code'});
  });
});
