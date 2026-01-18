function About() {
  const internships = [
    {
      company: "Floatbot.ai",
      role: "Node.js Developer Intern",
      duration: "Jan 2026 - Present",
      location: "",
      isCurrent: true,
      description: [
        // "Building and maintaining backend services for AI-powered conversational platform",
        // "Developing scalable APIs using Node.js and Express",
        // "Contributing to database optimization and performance improvements",
      ],
      technologies: ["Node.js", "Express", "REST APIs"],
    },
    {
      company: "Zidio Development",
      role: "MERN Stack Developer Intern (Virtual)",
      duration: "May 2024 - July 2024",
      location: "Virtual",
      isCurrent: false,
      description: [
        "Gained hands-on experience in MERN stack development with real-world project training",
        "Built and optimized full-stack applications focusing on REST APIs, authentication.",
        "Collaborated with team members on a demo MERN project",
      ],
      technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    },
  ];

  return (
    <div className="px-6 md:px-16 py-10 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          About Me
        </h1>
        <hr className="w-24 mx-auto border-blue-400" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-10">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/my-image.png"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-md"
          />
        </div>

        <div className="w-full md:w-2/3 space-y-3 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
            Hardik Gojiya
          </h2>
          <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
            I’m a passionate and self-motivated{" "}
            <strong className="text-blue-600 dark:text-blue-400">
              MERN Stack Developer.
            </strong>{" "}
            As a fresher, I’ve built several full-stack projects that
            demonstrate my strong foundation in{" "}
            <strong>MongoDB, Express.js, React.js, and Node.js</strong>. I enjoy
            crafting clean, user-friendly interfaces and efficient backend
            systems.
          </p>
          <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
            My projects include real-time chat apps, Modern Blogging Platform,
            authentication systems, PDF/image tools, and file converters. I’m
            also familiar with <strong>Tailwind CSS</strong>, REST APIs, and
            working with external APIs. I’m a quick learner, team player, and
            excited to contribute to real-world software development
            environments.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
        Educational Qualifications:
      </h3>

      <div className="overflow-x-auto mb-16">
        <table className="table-auto w-full max-w-3xl mx-auto border border-blue-300 dark:border-blue-600 shadow-md rounded-lg">
          <thead className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 font-semibold">
            <tr>
              <th className="px-4 py-2 border border-blue-300 dark:border-blue-600">
                Sr. No
              </th>
              <th className="px-4 py-2 border border-blue-300 dark:border-blue-600">
                Name of Education
              </th>
              <th className="px-4 py-2 border border-blue-300 dark:border-blue-600">
                Year
              </th>
              <th className="px-4 py-2 border border-blue-300 dark:border-blue-600">
                Percentage/CGPA
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-100">
            <tr className="hover:bg-blue-50 dark:hover:bg-blue-700">
              <td className="px-4 py-2 border border-blue-200 dark:border-blue-600">
                1
              </td>
              <td className="px-4 py-2 border border-blue-200 dark:border-blue-600">
                B.E in Information Technology
              </td>
              <td className="px-4 py-2 border border-blue-200 dark:border-blue-600">
                Expected in 2026
              </td>
              <td className="px-4 py-2 border border-blue-200 dark:border-blue-600">
                7.80 CGPA
              </td>
            </tr>
            <tr className="hover:bg-blue-50 dark:hover:bg-blue-700">
              <td className="px-4 py-2 border border-blue-200 dark:border-blue-600">
                2
              </td>
              <td className="px-4 py-2 border border-blue-200 dark:border-blue-600">
                12<sup>th</sup> Science
              </td>
              <td className="px-4 py-2 border border-blue-200 dark:border-blue-600">
                2022
              </td>
              <td className="px-4 py-2 border border-blue-200 dark:border-blue-600">
                65%
              </td>
            </tr>
            <tr className="hover:bg-blue-50 dark:hover:bg-blue-700">
              <td className="px-4 py-2 border border-blue-200 dark:border-blue-600">
                3
              </td>
              <td className="px-4 py-2 border border-blue-200 dark:border-blue-600">
                10<sup>th</sup>
              </td>
              <td className="px-4 py-2 border border-blue-200 dark:border-blue-600">
                2020
              </td>
              <td className="px-4 py-2 border border-blue-200 dark:border-blue-600">
                82.8%
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-full py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              Internship/Experience
            </h2>
            <hr className="w-24 mx-auto border-blue-400" />
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"></div>

            {internships.map((internship, idx) => (
              <div key={idx} className="mb-12 md:mb-16">
                <div
                  className={`flex ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-stretch gap-6`}
                >
                  <div className="hidden md:flex w-full md:w-1/2 justify-center">
                    <div
                      className={`flex ${
                        idx % 2 === 0
                          ? "justify-end pr-8"
                          : "justify-start pl-8"
                      } w-full`}
                    >
                      <div className="flex flex-col justify-center items-end text-right gap-2">
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                          {internship.duration}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {internship.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex w-full md:w-0 justify-center">
                    <div
                      className={`relative flex items-center justify-center`}
                    >
                      <div
                        className={`
                        w-5 h-5 rounded-full border-4 z-10 shadow-lg
                        ${
                          internship.isCurrent
                            ? "bg-emerald-500 border-emerald-600 dark:border-emerald-400"
                            : "bg-blue-500 border-blue-600 dark:border-blue-400"
                        }
                      `}
                      ></div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2">
                    <div
                      className={`
                      ${
                        internship.isCurrent
                          ? "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-400 dark:border-emerald-500"
                          : "bg-white dark:bg-gray-800 border border-blue-300 dark:border-blue-700"
                      }
                      rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group
                    `}
                    >
                      {internship.isCurrent && (
                        <div className="absolute top-0 right-0 bg-emerald-500 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                          Current
                        </div>
                      )}

                      <div className="md:hidden mb-3 pb-3 border-b border-gray-300 dark:border-gray-600">
                        <p className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                          {internship.duration} • {internship.location}
                        </p>
                      </div>

                      <h3
                        className={`text-xl font-bold mb-1 ${
                          internship.isCurrent
                            ? "text-emerald-700 dark:text-emerald-300"
                            : "text-blue-700 dark:text-blue-300"
                        }`}
                      >
                        {internship.role}
                      </h3>

                      <p
                        className={`text-sm font-semibold mb-4 ${
                          internship.isCurrent
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-blue-600 dark:text-blue-400"
                        }`}
                      >
                        {internship.company}
                      </p>

                      {internship.description.length > 0 && (
                        <ul className="space-y-2 mb-4">
                          {internship.description.map((item, index) => (
                            <li
                              key={index}
                              className="flex gap-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                            >
                              <span
                                className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5 ${
                                  internship.isCurrent
                                    ? "bg-emerald-500"
                                    : "bg-blue-500"
                                }`}
                              ></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {internship.technologies &&
                        internship.technologies.length > 0 && (
                          <div className="pt-4 border-t border-gray-300 dark:border-gray-600">
                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                              Technologies
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {internship.technologies.map((tech, index) => (
                                <span
                                  key={index}
                                  className={`
                                  px-3 py-1 text-xs font-medium rounded-full transition-colors
                                  ${
                                    internship.isCurrent
                                      ? "bg-emerald-200 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300"
                                      : "bg-blue-200 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300"
                                  }
                                `}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
