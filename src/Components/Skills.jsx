import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNode,
  faPython,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faServer, faDatabase } from "@fortawesome/free-solid-svg-icons";
import ProjectTemp from "./ProjectTemp";

function Skills() {
  return (
    <div className="w-full px-6 py-10 bg-gray-100 dark:bg-gray-900 text-center text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-indigo-600 mb-2" title="Skills">
        Skills
      </h1>
      <hr className="w-24 mx-auto border-indigo-400 mb-6" />

      <div className="flex justify-center gap-10 flex-wrap mb-10">
        <Skill icon={faHtml5} label="HTML5" color="text-red-500" />
        <Skill icon={faCss3Alt} label="CSS3" color="text-blue-600" />
        <Skill icon={faJs} label="JavaScript" color="text-yellow-400" />
        <Skill
          icon={faReact}
          label="ReactJS"
          color="text-cyan-400 animate-spin-slow"
        />
        <Skill icon={faNode} label="Node.js" color="text-green-600" />
        <Skill icon={faServer} label="Express.js" color="text-gray-700" />
        <Skill icon={faDatabase} label="MongoDB" color="text-green-800" />
      </div>

      <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
        Other Skills
      </h2>
      <hr className="w-20 mx-auto border-indigo-300 mb-6" />
      <div className="flex justify-center gap-10 flex-wrap mb-10">
        <Skill icon={faPython} label="Python" color="text-yellow-600" />
        <Skill icon={faGitAlt} label="Git" color="text-orange-500" />
      </div>

      <h1 className="text-3xl font-bold text-indigo-600 mb-2" title="Projects">
        Projects
      </h1>
      <hr className="w-24 mx-auto border-indigo-400 mb-4" />
      <ProjectTemp />

      <h2 className="text-3xl font-bold text-indigo-600 mb-4">GitHub Streak</h2>
      <hr className="w-24 mx-auto border-indigo-400 mb-8" />

      <div className="flex justify-center gap-8 items-center flex-wrap mb-8">
        <div className="flex justify-center items-center max-w-md">
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=hardik-gojiya&exclude_days=Sun%2CSat&hide_current_streak=true&theme=dark"
            alt="GitHub Streak"
            className="w-full max-w-md border-2 rounded-lg shadow-lg"
          />
        </div>

        <div className="flex justify-center items-center max-w-2xl">
          <img
            src="https://ghchart.rshah.org/2196f3/hardik-gojiya"
            alt="GitHub Contributions"
            className="w-full max-w-2xl border-2 p-10 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

function Skill({ icon, label, color }) {
  return (
    <div className="flex flex-col items-center" title={label}>
      <FontAwesomeIcon icon={icon} size="3x" className={color} />
      <span className="mt-2 font-medium text-gray-700 dark:text-gray-200">{label}</span>
    </div>
  );
}

export default Skills;
