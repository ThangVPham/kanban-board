import React from "react";
import ReactLogo from "../asset/react-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faListCheck,
  faToolbox,
  faGear,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
const iconExpandArrow = <FontAwesomeIcon icon={faAngleDown} size={"sm"} />;
const iconDashboard = <FontAwesomeIcon icon={faListCheck} size={"sm"} />;
const iconFeatures = <FontAwesomeIcon icon={faToolbox} size={"sm"} />;
const iconSettings = <FontAwesomeIcon icon={faGear} size={"sm"} />;
const iconFeedback = <FontAwesomeIcon icon={faCommentAlt} size={"sm"} />;

function SideMain() {
  return (
    <div>
      <div className="flex w-full justify-center pt-3 ">
        <img
          src={ReactLogo}
          alt="react-logo"
          className="w-10 bg-slate-600 hover:cursor-pointer"
        />
        <div className="pl-2 text-sm text-start">
          <h5>Kanban</h5>
          <p>Software Project</p>
        </div>
        <div className="w-10 hover:cursor-pointer">{iconExpandArrow}</div>
      </div>
      <div className="w-3/4 mx-auto mt-6 ">
        <div className="flex justify-start my-1 gap-4 hover:cursor-pointer bg-slate-500 py-1 px-2 rounded-lg">
          <span>{iconDashboard}</span>
          <button
            data-modal-target="popup-modal"
            data-modal-toggle="popup-modal"
            type="button"
          >
            Dashboard
          </button>
        </div>
        <div className="flex justify-start my-1 gap-4 hover:cursor-pointer py-1 px-2">
          <span>{iconFeatures}</span>
          <button
            data-modal-target="popup-modal"
            data-modal-toggle="popup-modal"
            type="button"
          >
            Features
          </button>
        </div>
        <div className="flex justify-start my-1 gap-4 hover:cursor-pointer py-1 px-2">
          <div>{iconSettings}</div>
          <button
            data-modal-target="popup-modal"
            data-modal-toggle="popup-modal"
            type="button"
          >
            Setings
          </button>
        </div>
      </div>
      <div
        id="popup-modal"
        tabIndex="-1"
        className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        hello
      </div>
      <div className="w-3/4 mx-auto pt-20">
        <div className="flex justify-start gap-4 hover:cursor-pointer px-2 py-1">
          <div>{iconFeedback}</div>
          <div>Give Feedback</div>
        </div>
      </div>
    </div>
  );
}

export default SideMain;
