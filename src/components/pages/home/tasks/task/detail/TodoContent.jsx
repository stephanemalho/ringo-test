import { styled } from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import Badge from "../../../../../reusableUI/Badge";
import { FaCalendarAlt } from "react-icons/fa";
import { theme } from "../../../../../../theme";
import { formatDateToStandard, hasEndDate } from "../../../../../../utils";
import { Tooltip } from "@mui/material";

// eslint-disable-next-line react/prop-types
const TodoContent = ({ description, label, startDate, endDate }) => {
  const isTodoDone = hasEndDate(endDate);

  return (
    <TodoContentStyled isTodoDone={isTodoDone}>
      <span className="label">{label}</span>
      <div className="bottom-line">
        <div className="description">
          <Tooltip
            arrow
            title={`${label} : ${description}`}
            className="tooltip"
          >
            <div className="icon-container">
              <AiOutlineInfoCircle />
            </div>
          </Tooltip>
        </div>
        <Badge
          message={formatDateToStandard(endDate ? endDate : startDate)}
          className="badge"
          Icon={
            isTodoDone ? (
              <BsCheckCircleFill size={12} />
            ) : (
              <FaCalendarAlt size={12} />
            )
          }
          backgroundBadgeColor={
            theme.colors[isTodoDone ? "background_green" : "orange"]
          }
          IconBadgeColor={theme.colors[isTodoDone ? "success" : "brown"]}
          messageBadgeColor={theme.colors[isTodoDone ? "success" : "brown"]}
        />
      </div>
    </TodoContentStyled>
  );
};

export default TodoContent;

const TodoContentStyled = styled.div`
  padding-left: 20px;
  .label {
    display: block;
    font-size: 16px;
    line-height: 21px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: ${(props) => (props.isTodoDone ? "line-through" : "none")};
    color: ${(props) => (props.isTodoDone ? theme.colors.greyLight : "none")};
  }
  .bottom-line {
    margin-top: 7px;
    display: flex;
    align-items: center;
    .description {
      margin-right: 16px;
      .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
