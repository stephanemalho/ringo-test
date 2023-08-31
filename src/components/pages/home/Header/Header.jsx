import Title from "../../../reusableUI/Title";
import { TASK_TITLE } from "../../../../constants/constants";
import styled from "styled-components";
import Logo from "../../../reusableUI/Logo";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Title label={TASK_TITLE} />
      <Logo />
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
