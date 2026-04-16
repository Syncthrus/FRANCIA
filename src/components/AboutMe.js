import React from 'react';

const AboutMe = ({ dark }) => {
  return (
    <section className="py-16 border-b border-gray-800">
      <p className="text-xs font-bold tracking-widest text-teal-400 font-mono mb-2 uppercase">// section</p>
      <h2 className="text-3xl font-extrabold text-white mb-8">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-gray-400 text-base leading-relaxed mb-4">
            I am a driven IT student specializing in Network Security, passionate about protecting digital infrastructures and building secure systems. I enjoy analyzing vulnerabilities and crafting solutions that keep networks safe.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            Outside of academics, I explore ethical hacking, study emerging cybersecurity threats, and work on personal security projects to sharpen my practical skills.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Projects", value: "12+", color: "teal" },
            { label: "Technologies", value: "8+", color: "purple" },
            { label: "Experience", value: "2 yrs", color: "purple" },
            { label: "Certifications", value: "4", color: "teal" },
          ].map(item => (
            <div key={item.label} className={`rounded-xl p-5 text-center border ${
              item.color === "teal"
                ? "border-teal-900 bg-teal-400 bg-opacity-5"
                : "border-purple-900 bg-purple-400 bg-opacity-5"
            }`}>
              <p className={`text-3xl font-extrabold font-mono mb-1 ${item.color === "teal" ? "text-teal-400" : "text-purple-400"}`}>
                {item.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;