/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { theme } from "../../theme";

const Badge = ({
  message,
  className,
  Icon,
  backgroundBadgeColor,
  IconBadgeColor,
  messageBadgeColor,
}) => {
  return (
    <BadgeStyled
      className={className}
      IconBadgeColor={IconBadgeColor}
      messageBadgeColor={messageBadgeColor}
      backgroundBadgeColor={backgroundBadgeColor}
    >
      <span className="icon">{Icon}</span>
      <p>{message}</p>
    </BadgeStyled>
  );
};

export default Badge;

const BadgeStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.backgroundBadgeColor};

  font-size: ${theme.fonts.size.XS};
  line-height: 21px;
  border-radius: ${theme.borderRadius.round};
  padding: 0 8px 0;
  height: 21px;

  .icon {
    margin-right: 6px;
    display: flex;
    color: ${(props) => props.IconBadgeColor};
  }

  p {
    color: ${(props) => props.messageBadgeColor};
  }
`;
