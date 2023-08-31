import { styled } from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Badge from "../../../../../reusableUI/Badge";
import { FaCalendarAlt } from "react-icons/fa";
import { theme } from "../../../../../../theme";
import { formatDateToStandard } from "../../../../../../utils";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TodoContent = ({ description, label, date }) => {
  const [isInfoChecked, setisInfoChecked] = useState(false);

  // on click info, show description
  const handleClickInfo = () => {
    setisInfoChecked((prevIsInfoChecked) => !prevIsInfoChecked);
  };

  return (
    <TodoContentStyled>
      <p>{label}</p>
      <div className="bottom-line">
        <div className="description" onClick={handleClickInfo}>
          {isInfoChecked ? (
            <div className="tooltip">
              <span className="arrow-tooltip"></span>
              {description}
            </div>
          ) : (
            <AiOutlineInfoCircle />
          )}
        </div>
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
      position: relative;
      margin-right: 16px;
      display: flex;
      color: ${theme.colors.greyLight};
      width: 20px;
      height: 20px;
      svg {
        width: 100%;
        height: 100%;
      }
      .tooltip {
        padding: 10px;
        position: absolute;
        width: 200px;
        height: auto;
        top: 20px;
        left: 0;
        background: ${theme.colors.greyLight};
        color: ${theme.colors.white};
        border-radius: 4px;
        z-index: 1;
      }
      .arrow-tooltip {
        position: absolute;
        top: -20px;
        left: 6%;
        margin-left: -10px;
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent ${theme.colors.greyLight}
          transparent;
      }
    }
  }
`;
