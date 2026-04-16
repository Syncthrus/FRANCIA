import React from 'react';

const Experience = ({ dark }) => {
  const jobs = [
    {
      role: "Frontend Developer Intern",
      company: "TechStart PH",
      period: "Jun 2024 – Dec 2024",
      color: "teal",
      tasks: [
        "Built and maintained UI components using React and Tailwind CSS.",
        "Collaborated with the design team to implement pixel-perfect interfaces.",
        "Integrated REST APIs and handled state management with React Hooks.",
      ],
    },
    {
      role: "Freelance Web Developer",
      company: "Self-employed",
      period: "Jan 2023 – Present",
      color: "purple",
      tasks: [
        "Designed and developed websites for small businesses and startups.",
        "Delivered 6+ projects on time using React, HTML/CSS, and JavaScript.",
        "Provided ongoing maintenance and feature additions for clients.",
      ],
    },
  ];

  return (
    <section className="py-16 border-b border-gray-800">
      <p className="text-xs font-bold tracking-widest text-teal-400 font-mono mb-2 uppercase">// section</p>
      <h2 className="text-3xl font-extrabold text-white mb-8">Experience</h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-700" />
        <div className="space-y-6 pl-12">
          {jobs.map((job, i) => (
            <div key={i} className="relative">
              <div className={`absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-gray-900 ${
                job.color === "teal" ? "bg-teal-400" : "bg-purple-400"
              }`} />
              <div className={`border-l-4 pl-5 pr-4 py-4 rounded-r-xl bg-gray-800 bg-opacity-50 hover:bg-opacity-80 transition duration-200 ${
                job.color === "teal" ? "border-teal-400" : "border-purple-400"
              }`}>
                <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{job.role}</h3>
                    <p className={`text-sm font-semibold ${job.color === "teal" ? "text-teal-400" : "text-purple-400"}`}>
                      {job.company}
                    </p>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                    job.color === "teal"
                      ? "text-teal-400 border-teal-800 bg-teal-400 bg-opacity-10"
                      : "text-purple-400 border-purple-800 bg-purple-400 bg-opacity-10"
                  }`}>{job.period}</span>
                </div>
                <ul className="space-y-1">
                  {job.tasks.map((task, j) => (
                    <li key={j} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">▹</span>{task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;