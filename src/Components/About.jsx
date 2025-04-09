import React from "react";

function About() {
  return (
    <div className="w-full px-6 py-10 bg-gray-50 text-center">
      <h1 className="text-3xl font-bold text-indigo-600 mb-2">About Me</h1>
      <hr className="w-24 mx-auto border-indigo-400 mb-6" />

      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Educational Qualifications:
      </h3>

      <div className="overflow-x-auto">
        <table className="table-auto w-full max-w-3xl mx-auto border border-indigo-300 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-indigo-100 text-indigo-800 font-semibold">
            <tr>
              <th className="px-4 py-2 border border-indigo-300">Sr. No</th>
              <th className="px-4 py-2 border border-indigo-300">Name of Education</th>
              <th className="px-4 py-2 border border-indigo-300">Year</th>
              <th className="px-4 py-2 border border-indigo-300">Percentage/CGPA</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="hover:bg-indigo-50">
              <td className="px-4 py-2 border border-indigo-200">1</td>
              <td className="px-4 py-2 border border-indigo-200">B.E in Information Technology</td>
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
              <td className="px-4 py-2 border border-indigo-200">10<sup>th</sup></td>
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
