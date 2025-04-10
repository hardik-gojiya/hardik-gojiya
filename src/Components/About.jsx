import React from "react";

function About() {
  return (
    <div className="px-6 md:px-16 py-10 bg-gray-100 h-full">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-indigo-600 mb-2">About Me</h1>
        <hr className="w-24 mx-auto border-indigo-400" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-10">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="my-image.png"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover border-4 border-indigo-500 shadow-md"
          />
        </div>

        <div className="w-full md:w-2/3 text-gray-800 space-y-3 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-indigo-600">
            Hardik Gojiya
          </h2>
          <p className="text-base leading-relaxed">
            I’m a passionate{" "}
            <strong className="text-indigo-600">MERN Stack Developer</strong>{" "}
            with hands-on experience in building scalable web applications using{" "}
            <strong>MongoDB, Express.js, React.js, and Node.js</strong>. I enjoy
            solving real-world problems with clean code. My
            expertise lies in authentication systems, RESTful APIs, real-time
            chat apps, and responsive frontends using{" "}
            <strong>Tailwind CSS</strong>. I'm continuously learning and
            growing, ready to contribute to impactful projects.
          </p>

        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Educational Qualifications:
      </h3>

      <div className="overflow-x-auto">
        <table className="table-auto w-full max-w-3xl mx-auto border border-indigo-300 shadow-md rounded-lg overflow-x-scroll">
          <thead className="bg-indigo-100 text-indigo-800 font-semibold">
            <tr>
              <th className="px-4 py-2 border border-indigo-300">Sr. No</th>
              <th className="px-4 py-2 border border-indigo-300">
                Name of Education
              </th>
              <th className="px-4 py-2 border border-indigo-300">Year</th>
              <th className="px-4 py-2 border border-indigo-300">
                Percentage/CGPA
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="hover:bg-indigo-50">
              <td className="px-4 py-2 border border-indigo-200">1</td>
              <td className="px-4 py-2 border border-indigo-200">
                B.E in Information Technology
              </td>
              <td className="px-4 py-2 border border-indigo-200">2026</td>
              <td className="px-4 py-2 border border-indigo-200">9 CGPA</td>
            </tr>
            <tr className="hover:bg-indigo-50">
              <td className="px-4 py-2 border border-indigo-200">2</td>
              <td className="px-4 py-2 border border-indigo-200">
                12<sup>th</sup> Science
              </td>
              <td className="px-4 py-2 border border-indigo-200">2022</td>
              <td className="px-4 py-2 border border-indigo-200">65%</td>
            </tr>
            <tr className="hover:bg-indigo-50">
              <td className="px-4 py-2 border border-indigo-200">3</td>
              <td className="px-4 py-2 border border-indigo-200">
                10<sup>th</sup>
              </td>
              <td className="px-4 py-2 border border-indigo-200">2020</td>
              <td className="px-4 py-2 border border-indigo-200">82.8%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default About;
