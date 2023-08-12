import React from "react";
import "./widget.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { faker } from "@faker-js/faker";

const Widget = ({ type }) => {
  let data;

  //   customize Widget according to their type that passed as prop
  switch (type) {
    case "Repairs":
      data = {
        title: "Repairs",
      };
      break;
    case "Network unlocks":
      data = {
        title: "Network unlocks",
      };
      break;
    case "Accessories & parts":
      data = {
        title: "Accessories & parts",
      };
      break;
    case "Trade In":
      data = {
        title: "Trade In",
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title"> {data.title}</span>
        <span className="number">
          {faker.finance.amount({ min: 1000, max: 10000, symbol: "$" })}
        </span>

        <div className="percentage positive">
          <ArrowDropUpIcon />
          {faker.number.int({ min: 10, max: 100 })} %
        </div>
      </div>
      <div className="right">
        <span className="number">
          {faker.finance.amount({ min: 1000, max: 100000, symbol: "$" })}
        </span>
      </div>
    </div>
  );
};

export default Widget;
