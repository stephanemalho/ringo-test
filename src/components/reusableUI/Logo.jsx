import { styled } from "styled-components";

const Logo = () => {
  return (
    <LogoStyled>
      <img src="images/ringover-logo.png" />
    </LogoStyled>
  );
};

export default Logo;

const LogoStyled = styled.div`
  border: 1px solid blue;
  img {
    object-fit: cover;
    object-position: center;
    width: 100px;
    height: 100px;
  }
`;
