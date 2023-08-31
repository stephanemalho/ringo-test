import { theme } from "../../theme";
import styled from "styled-components";
/* eslint-disable react/prop-types */
const Title = ({ label, className }) => {
  return <TitleStyled className={className}>{label}</TitleStyled>;
};

export default Title;

const TitleStyled = styled.h1`
  font-size: ${theme.fonts.size.P2};
  font-weight: ${theme.fonts.weights.regular};
  text-transform: uppercase;
`;
