import React from "react";
import Logo from "../asset/tailwindcss.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faPlus,
  faBars,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
const iconUser = <FontAwesomeIcon icon={faUser} size={"lg"} />;
const iconSearch = <FontAwesomeIcon icon={faSearch} size={"lg"} />;
const iconPlus = <FontAwesomeIcon icon={faPlus} size={"lg"} />;
const iconMenu = <FontAwesomeIcon icon={faBars} size={"lg"} />;
const iconQuestion = <FontAwesomeIcon icon={faQuestionCircle} size={"lg"} />;
function SideUtility({ showMenu }) {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full">
      <div className="pt-3">
        <img
          src={Logo}
          alt="tailwind-logo"
          className="w-12 hover:cursor-pointer"
        />
        <div className="mt-3 hover:cursor-pointer">{iconSearch}</div>
        <div className="mt-3 hover:cursor-pointer">{iconPlus}</div>
      </div>
      <div className="pb-4">
        <div className="pb-3 hover:cursor-pointer" onClick={showMenu}>
          {iconMenu}
        </div>
        <div className="pb-3 hover:cursor-pointer">{iconUser}</div>
        <div className="hover:cursor-pointer">{iconQuestion}</div>
      </div>
    </div>
  );
}

export default SideUtility;
