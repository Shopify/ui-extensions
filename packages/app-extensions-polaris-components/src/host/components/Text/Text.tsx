import React from 'react';
import {TextStyle, DisplayText, Caption} from '@shopify/polaris';

export enum TextSize {
  Small = 'small',
  Medium = 'medium',
  TitleSmall = 'titleSmall',
  TitleMedium = 'titleMedium',
  TitleLarge = 'titleLarge',
  TitleExtraLarge = 'titleExtraLarge',
}

export enum Style {
  Normal = 'normal',
  Italic = 'italic',
  Monospace = 'monospace',
  Strong = 'strong',
}

export enum Alignment {
  Left = 'left',
  Right = 'right',
  Center = 'center',
  Justify = 'justify',
}

export enum Color {
  Primary = 'primary',
  Secondary = 'secondary',
  Warning = 'warning',
  Error = 'error',
  Success = 'success',
}

interface TextProps {
  size?: TextSize;
  style?: Style;
  color?: Color;
  alignment?: Alignment;
  children: React.ReactNode;
}

const displyTextMap = {
  titleSmall: 'small',
  titleMedium: 'medium',
  titleLarge: 'large',
  titleExtraLarge: 'extraLarge',
};

const isDisplayText = textSize => textSize.includes('title');

const defaultProps = {
  size: TextSize.Medium,
  style: Style.Normal,
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
    fontStyle: style === Style.Italic ? 'italic' : undefined,
  };

  let textStyleVariation;
  switch (style) {
    case Style.Monospace:
      textStyleVariation = 'code';
      break;
    case Style.Strong:
      textStyleVariation = 'strong';
      break;
  }
  if (textStyleVariation) text = <TextStyle variation={textStyleVariation}>{text}</TextStyle>;

  if (color) {
    let variation;
    switch (color) {
      case Color.Success:
        variation = 'positive';
        break;
      case Color.Error:
        variation = 'negative';
        break;
      case Color.Secondary:
        variation = 'subdued';
        break;
    }
    if (variation) text = <TextStyle variation={variation}>{text}</TextStyle>;
  }

  if (size && isDisplayText(size)) {
    text = <DisplayText size={displyTextMap[size]}>{text}</DisplayText>;
  } else if (size && size === TextSize.Small) {
    text = <Caption>{text}</Caption>;
  }

  return <div style={styles}>{text}</div>;
}
