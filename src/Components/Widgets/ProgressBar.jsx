import React from "react";
import "./progressbar.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { faker } from "@faker-js/faker";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function ProgressBar() {
  return (
    <div className="progressbar">
      <div className="top">
        <h1 className="title">Sales Target</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="progressChart">
          <CircularProgressbar value={86} text={"86%"} strokeWidth={6} />
        </div>
        <p className="title">Total Daily Sales</p>
        <p className="amount">
          {faker.finance.amount({ min: 1000, max: 10000, symbol: "$" })}
        </p>
        <div className="summary">
          <div className="itemTitle">Target</div>
          <div className="itemResult">
            <KeyboardArrowDownIcon fontSize="small" />
            {faker.finance.amount({
              min: 100,
              max: 1000,
              dec: 0,
              symbol: "$",
            })}
          </div>
        </div>

        <div className="summary">
          <div className="itemTitle">Target</div>
          <div className="itemResult">
            <KeyboardArrowDownIcon fontSize="small" />
            {faker.finance.amount({
              min: 100,
              max: 1000,
              dec: 0,
              symbol: "$",
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
