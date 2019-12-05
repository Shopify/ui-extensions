import React from 'react';
import {Card, Button} from '@shopify/polaris';
import styled from 'styled-components';
import {Heading} from '@shopify/polaris';

type Props = {
  url: string;
  image: string;
  title: string;
  description?: string;
  label?: string;
};

const CardImage = styled.img`
  margin: 0 auto;
  display: block;
  width: 300px;
  height: 210px;
  padding-bottom: 10px;
`;

const CardContents = styled.div`
  width: 300px;
`;

const CardDescription = styled.p`
  padding-bottom: 20px;
`;

const Ribbon = ({children}: {children: React.ReactNode}) => {
  const RibbonStyle = styled.div`
    transform: rotate(-45deg);
    border: 25px solid transparent;
    border-top: 25px solid #f00;
    position: absolute;
    bottom: 10px;
    right: -35px;
    padding: 0 10px;
    width: 120px;
    color: white;
    font-family: sans-serif;
    size: 11px;

    .ribbon-text {
      position: absolute;
      top: -22px;
      left: 20px;
    }
  `;

  return (
    <RibbonStyle>
      <div className="ribbon-text">{children}</div>
    </RibbonStyle>
  );
};

const ImageWithLabel = ({image, label}: {image: string; label: string}) => {
  const ImageWithLabelContainer = styled.div`
    width: 300px;
    height: 210px;
    position: relative;
  `;

  return (
    <ImageWithLabelContainer>
      <CardImage src={image} />
      {label && <Ribbon>{label}</Ribbon>}
    </ImageWithLabelContainer>
  );
};

export default function HomeCard({url, image, title, description = '', label}: Props) {
  return (
    <Card sectioned>
      <CardContents>
        {label ? <ImageWithLabel image={image} label={label} /> : <CardImage src={image} />}
        <Heading>{title}</Heading>
        <CardDescription>{description}</CardDescription>
        <Button url={url}>Go to {title}</Button>
      </CardContents>
    </Card>
  );
}
