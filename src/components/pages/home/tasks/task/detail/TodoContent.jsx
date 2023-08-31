import { styled } from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Badge from "../../../../../reusableUI/Badge";
import { FaCalendarAlt } from "react-icons/fa";
import { theme } from "../../../../../../theme";
import { formatDateToStandard } from "../../../../../../utils";
import { Tooltip } from "@mui/material";

// eslint-disable-next-line react/prop-types
const TodoContent = ({
  description,
  label,
  date,
  isTodoDone,
  setIsTodoDone,
}) => {
  return (
    <TodoContentStyled>
      <span>{label}</span>
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
          message={formatDateToStandard(date)}
          className="badge"
          Icon={<FaCalendarAlt size={12} />}
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
  span {
    border: 1px solid yellow;
    display: block;
    font-size: 16px;
    line-height: 21px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .bottom-line {
    border: 1px solid red;
    margin-top: 7px;
    display: flex;
    align-items: center;
    .description {
      margin-right: 16px;
      /* border: 3px solid purple; */
      .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
