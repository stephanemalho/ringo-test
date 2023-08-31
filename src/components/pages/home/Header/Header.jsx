import Title from "../../../reusableUI/Title";
import { TASK_TITLE } from "../../../../constants/constants";
import styled from "styled-components";
import Logo from "../../../reusableUI/Logo";
import Profile from "./Profile";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Title className="title" label={TASK_TITLE} />
      <Profile />
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .title {
    position: absolute;
    right: 50%;
    bottom: 25%;
    transform: translate(50%, 50%);
  }
`;
