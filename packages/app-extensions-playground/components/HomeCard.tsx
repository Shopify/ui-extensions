import React from 'react';
import {Card, Button} from '@shopify/polaris';
import styled from 'styled-components';
import {Heading} from '@shopify/polaris';

type Props = {
  url: string;
  image: string;
  title: string;
  description?: string;
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

export default function HomeCard({url, image, title, description = ''}: Props) {
  return (
    <Card sectioned>
      <CardContents>
        <CardImage src={image} />
        <Heading>{title}</Heading>
        <CardDescription>{description}</CardDescription>
        <Button url={url}>Go to {title}</Button>
      </CardContents>
    </Card>
  );
}
