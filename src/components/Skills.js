import React from 'react';

const Skills = ({ dark }) => {
  const categories = [
    {
      title: "Security & Systems",
      color: "teal",
      skills: [
        { name: "Network Security", level: 80 },
        { name: "Linux / Kali Linux", level: 75 },
        { name: "Ethical Hacking", level: 65 },
        { name: "Wireshark / Nmap", level: 70 },
      ],
    },
    {
      title: "Programming",
      color: "purple",
      skills: [
        { name: "Python", level: 82 },
        { name: "Java", level: 75 },
        { name: "Bash Scripting", level: 68 },
        { name: "SQL / MySQL", level: 65 },
      ],
    },
  ];

  const tools = ["Git & GitHub", "VS Code", "Cisco Packet Tracer", "VirtualBox", "Metasploit", "TCP/IP", "Firewall Config", "React JS"];

  return (
    <section className="py-16 border-b border-gray-800">
      <p className="text-xs font-bold tracking-widest text-teal-400 font-mono mb-2 uppercase">// section</p>
      <h2 className="text-3xl font-extrabold text-white mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        {categories.map(cat => (
          <div key={cat.title}>
            <div className="flex items-center gap-2 mb-5">
              <div className={`w-2 h-2 rounded-full ${cat.color === "teal" ? "bg-teal-400" : "bg-purple-400"}`} />
              <h3 className={`text-sm font-bold font-mono tracking-wide ${cat.color === "teal" ? "text-teal-400" : "text-purple-400"}`}>
                {cat.title}
              </h3>
            </div>
            <div className="space-y-4">
              {cat.skills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-gray-300 text-sm">{skill.name}</span>
                    <span className={`text-xs font-mono font-bold ${cat.color === "teal" ? "text-teal-400" : "text-purple-400"}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className={`w-full rounded-full h-1.5 ${cat.color === "teal" ? "bg-teal-900" : "bg-purple-900"}`}>
                    <div
                      className={`h-1.5 rounded-full ${cat.color === "teal" ? "bg-teal-400" : "bg-purple-400"}`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-800 pt-8">
        <p className="text-xs font-bold tracking-widest text-gray-600 font-mono mb-4 uppercase">Tools & Technologies</p>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool, i) => (
            <span key={tool} className={`text-xs font-mono font-medium px-4 py-2 rounded-lg border ${
              i % 2 === 0
                ? "text-teal-400 border-teal-900 bg-teal-400 bg-opacity-5"
                : "text-purple-400 border-purple-900 bg-purple-400 bg-opacity-5"
            }`}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;