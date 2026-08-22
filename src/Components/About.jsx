function About() {
  const internships = [
    {
      company: "Floatbot.ai",
      role: "Backend Developer",
      duration: "January 2026 - Current",
      location: "Bhavnagar",
      isCurrent: true,
      isInternship: false,
      description: [
        // "Building and maintaining backend services for AI-powered conversational platform",
        // "Developing scalable APIs using Node.js and Express",
        // "Contributing to database optimization and performance improvements",
      ],
      technologies: ["Node.js", "Express", "REST APIs", "MongoDB", "SQL", "Hubspot Apis", "Apollo Apis"],
    },
    // {
    //   company: "Floatbot.ai",
    //   role: "Backend Developer Intern",
    //   duration: "Jan 2026 - july 2026",
    //   location: "Bhavnagar",
    //   isCurrent: false,
    //   isInternship: true,
    //   description: [
    //     // "Building and maintaining backend services for AI-powered conversational platform",
    //     // "Developing scalable APIs using Node.js and Express",
    //     // "Contributing to database optimization and performance improvements",
    //   ],
    //   technologies: ["Node.js", "Express", "REST APIs", "MongoDB", "SQL", "Hubspot Apis", "Apollo Apis"],
    // },
    {
      company: "Zidio Development",
      role: "MERN Stack Developer Intern (Virtual)",
      duration: "May 2024 - July 2024",
      location: "Virtual",
      isCurrent: false,
      isInternship: true,
      description: [
        "Gained hands-on experience in MERN stack development with real-world project training",
        "Built and optimized full-stack applications focusing on REST APIs, authentication.",
        "Collaborated with team members on a demo MERN project",
      ],
      technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    },
  ];

  return (
    <div className="px-6 md:px-16 py-10 bg-transparent text-gray-800 dark:text-gray-100 min-h-screen transition-all duration-300 relative">
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-900/10 rounded-full blur-[100px] -z-10 animate-pulse-glow"></div>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          About Me
        </h1>
        <hr className="w-24 mx-auto border-blue-400" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-10">
        <div className="w-full md:w-1/3 flex justify-center">
           <img
            src="/myavatar.png"
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
             NodeJS | MERN Stack Developer.
            </strong>{" "}
            I’ve built several full-stack projects that
            demonstrate my strong foundation in{" "}
            <strong>Node.js, MongoDB, Express.js, React.js </strong>. I enjoy
            crafting clean, user-friendly interfaces and efficient backend
            systems.
          </p>
          <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
            My projects include AI Chatbot SaaS Platform, real-time chat apps, Modern Blogging Platform,
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
        <table className="table-auto w-full max-w-3xl mx-auto border border-gray-300/50 dark:border-gray-700/50 shadow-xl rounded-xl overflow-hidden backdrop-blur-sm bg-white/30 dark:bg-[#161b22]/30">
          <thead className="bg-indigo-500/10 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 font-bold uppercase tracking-widest text-sm">
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
          <tbody className="text-gray-700 dark:text-gray-200 font-medium">
            <tr className="hover:bg-indigo-500/5 transition-colors">
              <td className="px-4 py-3 border border-gray-200/40 dark:border-gray-700/40">
                1
              </td>
              <td className="px-4 py-2 border border-blue-200 dark:border-blue-600">
                B.E in Information Technology
              </td>
              <td className="px-4 py-2 border border-blue-200 dark:border-blue-600">
                April 2026
              </td>
              <td className="px-4 py-2 border border-blue-200 dark:border-blue-600">
                8.12 CGPA
              </td>
            </tr>
            <tr className="hover:bg-indigo-500/5 transition-colors">
              <td className="px-4 py-3 border border-gray-200/40 dark:border-gray-700/40">
                2
              </td>
              <td className="px-4 py-3 border border-gray-200/40 dark:border-gray-700/40">
                12<sup>th</sup> Science
              </td>
              <td className="px-4 py-3 border border-gray-200/40 dark:border-gray-700/40">
                2022
              </td>
              <td className="px-4 py-3 border border-gray-200/40 dark:border-gray-700/40">
                65%
              </td>
            </tr>
            <tr className="hover:bg-indigo-500/5 transition-colors">
              <td className="px-4 py-3 border border-gray-200/40 dark:border-gray-700/40">
                3
              </td>
              <td className="px-4 py-3 border border-gray-200/40 dark:border-gray-700/40">
                10<sup>th</sup>
              </td>
              <td className="px-4 py-3 border border-gray-200/40 dark:border-gray-700/40">
                2020
              </td>
              <td className="px-4 py-3 border border-gray-200/40 dark:border-gray-700/40">
                82.8%
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-full py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              Internship / Experience
            </h2>
            <hr className="w-24 mx-auto border-blue-400" />
          </div>

          <div className="flex flex-col gap-8">
            {internships.map((internship, idx) => (
              <div 
                key={idx} 
                className="flex flex-col md:flex-row gap-6 p-6 md:p-8 bg-white/60 dark:bg-[#161b22]/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
              >
                 {/* Left side: Date & Company */}
                 <div className="md:w-1/3 flex flex-col shrink-0 border-b md:border-b-0 md:border-r border-gray-200/50 dark:border-gray-700/50 pb-4 md:pb-0 md:pr-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">{internship.company}</h3>
                    <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-2 tracking-widest uppercase opacity-90">{internship.duration}</p>
                    {internship.location && (
                       <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{internship.location}</p>
                    )}
                 </div>

                 {/* Right side: Role & Details */}
                 <div className="md:w-2/3 flex flex-col">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                       <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100">
                            {internship.role}
                          </h4>
                        
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              internship.isInternship
                                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                                : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            }`}
                          >
                            {internship.isInternship ? "Internship" : "Experience"}
                          </span>
                        </div>
                       {internship.isCurrent && (
                          <span className="px-3 py-1 bg-green-100/80 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold tracking-widest rounded-full uppercase shadow-sm">
                            Current
                          </span>
                       )}
                    </div>
                    
                    {internship.description.length > 0 && (
                      <ul className="list-disc list-inside leading-relaxed text-gray-600 dark:text-gray-300 mb-6 space-y-2 text-sm md:text-base">
                        {internship.description.map((item, index) => (
                           <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {internship.technologies && internship.technologies.length > 0 && (
                       <div className="flex flex-wrap gap-2 mt-auto pt-4 md:pt-0">
                          {internship.technologies.map((tech, index) => (
                             <span key={index} className="px-3 py-1.5 bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-lg shadow-sm border border-gray-200/50 dark:border-gray-700/50">
                                {tech}
                             </span>
                          ))}
                       </div>
                    )}
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
