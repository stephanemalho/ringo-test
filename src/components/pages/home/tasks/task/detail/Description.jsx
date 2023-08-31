import { Tooltip } from "@mui/material";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Description = ({ label, description, className }) => {
  return (
    <div className={className}>
      <Tooltip arrow title={`${label} : ${description}`} className="tooltip">
        <div className="icon-container">
          <AiOutlineInfoCircle />
        </div>
      </Tooltip>
    </div>
  );
};

export default Description;
