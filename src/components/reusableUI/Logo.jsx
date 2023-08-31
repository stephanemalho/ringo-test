import { styled } from "styled-components";

const Logo = ({ onClick }) => {
  return (
    <LogoStyled onClick={onClick}>
      <img src="images/ringover-logo.png" />
    </LogoStyled>
  );
};

export default Logo;

const LogoStyled = styled.div`
  img {
    object-fit: cover;
    object-position: center;
    width: 24px;
    height: 24px;
  }
`;
