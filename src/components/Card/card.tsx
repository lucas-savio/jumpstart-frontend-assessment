import React, { useState } from "react";
import data from "../../assets/card-data.json";
import corporateBylawsIcon from "../../assets/corporate-bylaws-icon.svg";
import options from "../../assets/options.svg";
import del from "../../assets/delete.svg";
import download from "../../assets/download.svg";
import print from "../../assets/print.svg";
import "./hovering.css";

import {
  CardBody,
  CardOptionsButton,
  CardOptionsMenu,
  CardIcon,
  CardTitle,
  CardText,
  CardButton,
} from "./styles";

const Card: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <CardBody id="card-body">
      <CardOptionsButton
        onClick={() => setOpen(!open)}
        className="card-options"
      >
        <img src={options} alt="option button dots" />
      </CardOptionsButton>

      {open && (
        <CardOptionsMenu id="opt-menu">
          <ul>
            <li>
              <a href="#download">
                <div className="icon-wrapper">
                  <img
                    id="download"
                    src={download}
                    alt="download action icon"
                  />
                </div>
                <span>Download</span>
              </a>
            </li>
            <li>
              <a href="#print">
                <div className="icon-wrapper">
                  <img 
                    id="print"
                    src={print}
                    alt="print action icon" />
                </div>
                <span>Print</span>
              </a>
            </li>
            <li id="delete-item">
              <a href="#delete">
                <div className="icon-wrapper">
                    <img 
                        id="delete"
                        src={del}
                        alt="delete action icon"/>
                </div>
                <span>Delete</span>
              </a>
            </li>
          </ul>
        </CardOptionsMenu>
      )}

      <CardIcon src={corporateBylawsIcon} alt="corporate bylaws icon" />

      <CardTitle>{data.title}</CardTitle>

      <CardText>{data.text}</CardText>

      <CardButton>View document</CardButton>
    </CardBody>
  );
};

export default Card;
