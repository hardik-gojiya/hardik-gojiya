import React from "react";

function About() {
  return (
    <div className="px-6 md:px-16 py-10 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 h-full">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
          About Me
        </h1>
        <hr className="w-24 mx-auto border-indigo-400" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-10">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/my-image.png"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover border-4 border-indigo-500 shadow-md"
          />
        </div>

        <div className="w-full md:w-2/3 space-y-3 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
            Hardik Gojiya
          </h2>
          <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
            I'm a passionate and self-motivated{" "}
            <strong className="text-indigo-600 dark:text-indigo-400">
              MERN Stack Developer
            </strong>{" "}
            currently pursuing my B.E in Information Technology. As a fresher,
            I’ve built several full-stack projects that demonstrate my strong
            foundation in{" "}
            <strong>MongoDB, Express.js, React.js, and Node.js</strong>. I enjoy
            crafting clean, user-friendly interfaces and efficient backend
            systems.
          </p>
          <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
            My projects include real-time chat apps, authentication systems,
            PDF/image tools, and file converters. I’m also familiar with{" "}
            <strong>Tailwind CSS</strong>, REST APIs, and working with external
            APIs. I'm a quick learner, team player, and excited to contribute to
            real-world software development environments.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
        Educational Qualifications:
      </h3>

      <div className="overflow-x-auto">
        <table className="table-auto w-full max-w-3xl mx-auto border border-indigo-300 dark:border-indigo-600 shadow-md rounded-lg">
          <thead className="bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 font-semibold">
            <tr>
              <th className="px-4 py-2 border border-indigo-300 dark:border-indigo-600">
                Sr. No
              </th>
              <th className="px-4 py-2 border border-indigo-300 dark:border-indigo-600">
                Name of Education
              </th>
              <th className="px-4 py-2 border border-indigo-300 dark:border-indigo-600">
                Year
              </th>
              <th className="px-4 py-2 border border-indigo-300 dark:border-indigo-600">
                Percentage/CGPA
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-100">
            <tr className="hover:bg-indigo-50 dark:hover:bg-indigo-700">
              <td className="px-4 py-2 border border-indigo-200 dark:border-indigo-600">1</td>
              <td className="px-4 py-2 border border-indigo-200 dark:border-indigo-600">
                B.E in Information Technology
              </td>
              <td className="px-4 py-2 border border-indigo-200 dark:border-indigo-600">
                Expected in 2026
              </td>
              <td className="px-4 py-2 border border-indigo-200 dark:border-indigo-600">8 CGPA</td>
            </tr>
            <tr className="hover:bg-indigo-50 dark:hover:bg-indigo-700">
              <td className="px-4 py-2 border border-indigo-200 dark:border-indigo-600">2</td>
              <td className="px-4 py-2 border border-indigo-200 dark:border-indigo-600">
                12<sup>th</sup> Science
              </td>
              <td className="px-4 py-2 border border-indigo-200 dark:border-indigo-600">2022</td>
              <td className="px-4 py-2 border border-indigo-200 dark:border-indigo-600">65%</td>
            </tr>
            <tr className="hover:bg-indigo-50 dark:hover:bg-indigo-700">
              <td className="px-4 py-2 border border-indigo-200 dark:border-indigo-600">3</td>
              <td className="px-4 py-2 border border-indigo-200 dark:border-indigo-600">
                10<sup>th</sup>
              </td>
              <td className="px-4 py-2 border border-indigo-200 dark:border-indigo-600">2020</td>
              <td className="px-4 py-2 border border-indigo-200 dark:border-indigo-600">82.8%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default About;
