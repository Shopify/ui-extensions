import React from 'react';
import {TextProps} from '@shopify/argo/components';
import {TextStyle, DisplayText, DisplayTextProps, Caption} from '@shopify/polaris';

type TitleTextSize = Exclude<TextProps['size'], 'small' | 'medium' | undefined>;

type DisplayTextMap = {
  [k in TitleTextSize]: DisplayTextProps['size'];
};

const displyTextMap: DisplayTextMap = {
  titleSmall: 'small',
  titleMedium: 'medium',
  titleLarge: 'large',
  titleExtraLarge: 'extraLarge',
};

function isDisplayText(textSize: TextProps['size']): textSize is TitleTextSize {
  return textSize !== undefined && textSize.includes('title');
}

const defaultProps: Partial<TextProps> = {
  size: 'medium',
  style: 'normal',
};

export default function Text(passedProps: TextProps) {
  const props = {
    ...defaultProps,
    ...passedProps,
  };

  const {style, color, alignment, size, children} = props;
  let text = <>{children}</>;
  const styles = {
    textAlign: alignment,
    fontStyle: style === 'italic' ? 'italic' : undefined,
  };

  let textStyleVariation;
  switch (style) {
    case 'monospace':
      textStyleVariation = 'code';
      break;
    case 'strong':
      textStyleVariation = 'strong';
      break;
  }
  if (textStyleVariation) text = <TextStyle variation={textStyleVariation}>{text}</TextStyle>;

  if (color) {
    let variation;
    switch (color) {
      case 'success':
        variation = 'positive';
        break;
      case 'error':
        variation = 'negative';
        break;
      case 'secondary':
        variation = 'subdued';
        break;
    }
    if (variation) text = <TextStyle variation={variation}>{text}</TextStyle>;
  }

  if (size && isDisplayText(size)) {
    text = <DisplayText size={displyTextMap[size]}>{text}</DisplayText>;
  } else if (size && size === 'small') {
    text = <Caption>{text}</Caption>;
  }

  return (
    <div className="scarlet-text" style={styles}>
      {text}
    </div>
  );
}
