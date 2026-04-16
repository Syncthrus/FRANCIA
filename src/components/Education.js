import React from 'react';

const Education = ({ dark }) => {
  const items = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "University of the Cordilleras (UC Baguio)",
      period: "2021 – 2025",
      gpa: "1.75 GWA",
      details: "Major in Network Security • Dean's Lister, 3rd Year",
      color: "teal",
    },
    {
      degree: "High School",
      school: "College of the Immaculate Conception",
      period: "2010 – 2014",
      gpa: "",
      details: "Cabanatuan City, Nueva Ecija",
      color: "purple",
    },
  ];

  return (
    <section className="py-16 border-b border-gray-800">
      <p className="text-xs font-bold tracking-widest text-teal-400 font-mono mb-2 uppercase">// section</p>
      <h2 className="text-3xl font-extrabold text-white mb-8">Education</h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className={`border-l-4 pl-5 pr-4 py-4 rounded-r-xl bg-gray-800 bg-opacity-50 hover:bg-opacity-80 transition duration-200 ${
            item.color === "teal" ? "border-teal-400" : "border-purple-400"
          }`}>
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{item.degree}</h3>
                <p className={`text-sm font-semibold mb-1 ${item.color === "teal" ? "text-teal-400" : "text-purple-400"}`}>
                  {item.school}
                </p>
                <p className="text-gray-500 text-sm">{item.details}</p>
              </div>
              <div className="text-right">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                  item.color === "teal"
                    ? "text-teal-400 border-teal-800 bg-teal-400 bg-opacity-10"
                    : "text-purple-400 border-purple-800 bg-purple-400 bg-opacity-10"
                }`}>{item.period}</span>
                {item.gpa && <p className="text-teal-400 font-mono font-bold text-sm mt-2">{item.gpa}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;