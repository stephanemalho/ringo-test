import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
const Icon = ({ Icon, onClick }) => {
  return <IconStyled onClick={onClick}>{Icon}</IconStyled>;
};

export default Icon;

const IconStyled = styled.div`
  border: 1px solid yellow;
  display: inline;
`;
