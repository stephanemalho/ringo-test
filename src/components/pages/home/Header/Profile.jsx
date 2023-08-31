import { styled } from "styled-components";
import { theme } from "../../../../theme";

const Profile = () => {
  return (
    <ProfileStyled>
      <img src="images/profile-picture.png" alt="profile" />
    </ProfileStyled>
  );
};

export default Profile;

const ProfileStyled = styled.div`
  /* border: 1px solid red; */

  width: 50px;
  height: 50px;
  position: relative;
  right: 2px;
  img {
    border-radius: ${theme.borderRadius.circle};
    object-fit: cover;
    object-position: center;
    width: 100%;
  }
`;
