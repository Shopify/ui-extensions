import React from 'react';
import {TextContainer, TextStyle, Caption, Heading, Subheading} from '@shopify/polaris';

export default {
  TextContainer: textElementDecorator(TextContainer),
  TextStyle: textElementDecorator(TextStyle),
  Caption: textElementDecorator(Caption),
  Heading: textElementDecorator(Heading),
  Subheading: textElementDecorator(Subheading),
  div: textElementDecorator('div'),
  p: textElementDecorator('p'),
  span: textElementDecorator('span'),
};

function textElementDecorator(TextComponent: React.ReactNode) {
  return ({text, children, ...props}) => {
    const content = `
      ${text ? String(text) : ''}
      ${children ? String(children) : ''}
    `;
    return <TextComponent {...props}>{content}</TextComponent>;
  };
}
