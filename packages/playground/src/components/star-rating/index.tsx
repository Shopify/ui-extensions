import React from "react";
import {Icon, Stack} from '@shopify/polaris';
// @ts-ignore
import {StarFilledMinor, StarOutlineMinor} from '@shopify/polaris-icons';
import './styles.scss';

interface LabelProps {
  rating: number;
  totalReviews: number;
  totalStars?: number;
}

export default function Label({rating, totalReviews, totalStars = 5}: LabelProps) {
  const icons = [];
  const totalPercent = rating/totalStars * 100;
  const starUnit = 100 / totalStars;

  for(let i = 0; i < totalStars; i++) {
    const currentStep = starUnit * (i+1);
    let stepPercent = 0;
    if(currentStep < totalPercent) {
      stepPercent = 1;
    } else {
      const partialCheck = totalPercent - (currentStep - starUnit);
      if(partialCheck > 0) {
        stepPercent = partialCheck / starUnit;
      }
    }

    icons.push(<StarPiece percent={stepPercent} />)
  }

  return (
    <Stack vertical spacing="tight" alignment="trailing">
      <Stack spacing="tight">
        <div className="star-rating-container">{icons}</div>
      </Stack>
      <span className="star-rating-summary">{totalReviews} reviews ({rating})</span>
    </Stack>
  );
}

type StarPieceProps = {
  percent: number;
  color?: string;
};

function StarPiece({percent, color = 'yellow'}: StarPieceProps) {
  const convertedPercent =  (((9 * percent) + 5)/20) * 100;
  const dynamicWidth:React.CSSProperties = {
    width: `${convertedPercent}%`,
  };

  // @ts-ignore
  const filledIcon = <Icon source={StarFilledMinor} color={color} />

  return (
    <div className="star-rating__star-piece">
      <div className="star-piece-position">
        <div className="star-piece-size" style={dynamicWidth}>
          <div className="star-piece-icon">{filledIcon}</div>
        </div>
      </div>
      <Icon source={StarOutlineMinor} color="inkLighter" />
    </div>
  )
}
