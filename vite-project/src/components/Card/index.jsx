import PropTypes from "prop-types";
import {
  StyledCardWrapper,
  StyledCardContainer,
  StyledCardHeaderContainer,
  StyledCardHeader,
  StyledDivider,
  StyledCardContentContainer,
  StyledCardContentHeader,
  StyledCardContentParagraph,
} from "./style";

const Card = ({ color, title }) => {
  const isBlack = color === "black";
  const cardStyle = {
    backgroundColor: isBlack ? "black" : color,
    color: isBlack ? "white" : "black",
  };

  return (
    <StyledCardContainer>
      <StyledCardWrapper style={cardStyle}>
        <StyledCardHeaderContainer>
          <StyledCardHeader>Header</StyledCardHeader>
        </StyledCardHeaderContainer>
        <StyledDivider></StyledDivider>
        <StyledCardContentContainer>
          <StyledCardContentHeader>{title}</StyledCardContentHeader>
          <StyledCardContentParagraph>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </StyledCardContentParagraph>
        </StyledCardContentContainer>
      </StyledCardWrapper>
    </StyledCardContainer>
  );
};

Card.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Card;
