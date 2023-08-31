import { styled } from "styled-components";
import Badge from "../../../../../reusableUI/Badge";
import { FaCalendarAlt } from "react-icons/fa";
import { theme } from "../../../../../../theme";
import { formatDateToStandard } from "../../../../../../utils";

// eslint-disable-next-line react/prop-types
const TodoContent = ({ description, label, date }) => {
  return (
    <TodoContentStyled>
      <p>{label}</p>
      <div className="bottom-line">
        <p className="description">{description}</p>
        <Badge
          message={formatDateToStandard(date)}
          className="badge"
          Icon={<FaCalendarAlt size={12} />}
          backgroundBadgeColor={theme.colors.orange}
          IconBadgeColor={theme.colors.brown}
          messageBadgeColor={theme.colors.white}
        />
      </div>
    </TodoContentStyled>
  );
};

export default TodoContent;

const TodoContentStyled = styled.div`
  padding-left: 20px;
  border: 1px solid red;

  .bottom-line {
    border: 1px solid red;
    display: flex;
    align-items: center;

    .description {
      margin-right: 16px;
    }
  }
`;
