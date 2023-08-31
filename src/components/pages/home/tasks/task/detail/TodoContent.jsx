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
  // on click info, show description
  const handleClickInfo = () => {
    setIsTodoDone((prevIsInfoChecked) => !prevIsInfoChecked);
  };

  return (
    <TodoContentStyled>
      <span>{label}</span>
      <div className="bottom-line">
        <div className="description">
          <Tooltip arrow title={description} className="tooltip">
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
            isTodoDone ? theme.colors.background_green : theme.colors.orange
          }
          IconBadgeColor={
            isTodoDone ? theme.colors.success : theme.colors.brown
          }
          messageBadgeColor={
            isTodoDone ? theme.colors.success : theme.colors.brown
          }
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
    /* width: 100%; */
    font-size: 16px;
    line-height: 21px;
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
