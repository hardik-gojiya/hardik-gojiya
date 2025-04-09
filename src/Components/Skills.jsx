import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    <div className="w-full px-6 py-10 bg-white text-center">
      <h1 className="text-3xl font-bold text-indigo-600 mb-2" title="Skills">
        Skills
      </h1>
      <hr className="w-24 mx-auto border-indigo-400 mb-6" />

      <div className="flex justify-center gap-10 flex-wrap mb-10">
        <div className="flex flex-col items-center" title="HTML">
          <FontAwesomeIcon icon={faHtml5} size="3x" className="text-red-500" />
          <span className="mt-2 font-medium text-gray-700">HTML5</span>
        </div>
        <div className="flex flex-col items-center" title="CSS">
          <FontAwesomeIcon icon={faCss3Alt} size="3x" className="text-blue-600" />
          <span className="mt-2 font-medium text-gray-700">CSS3</span>
        </div>
        <div className="flex flex-col items-center" title="JavaScript">
          <FontAwesomeIcon icon={faJs} size="3x" className="text-yellow-400" />
          <span className="mt-2 font-medium text-gray-700">JavaScript</span>
        </div>
        <div className="flex flex-col items-center" title="ReactJS">
          <FontAwesomeIcon icon={faReact} size="3x" className="text-cyan-400 animate-spin-slow" />
          <span className="mt-2 font-medium text-gray-700">ReactJS</span>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-indigo-600 mb-2" title="Projects">
        Projects
      </h1>
      <hr className="w-24 mx-auto border-indigo-400 mb-4" />
    </div>
  );
}

export default Skills;
