import React, { useState } from 'react';

const Contact = ({ dark }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
    setErrors({});
  };

  return (
    <section className="py-16">
      <p className="text-xs font-bold tracking-widest text-teal-400 font-mono mb-2 uppercase">// section</p>
      <h2 className="text-3xl font-extrabold text-white mb-8">Contact</h2>
      {submitted ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-full border-2 border-teal-400 flex items-center justify-center text-teal-400 text-2xl mx-auto mb-4">
            ✓
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg space-y-5">
          {[
            { field: "name", label: "Name", placeholder: "Your full name", type: "input" },
            { field: "email", label: "Email", placeholder: "you@example.com", type: "input" },
            { field: "message", label: "Message", placeholder: "Write your message here...", type: "textarea" },
          ].map(({ field, label, placeholder, type }) => (
            <div key={field}>
              <label className="block text-xs font-bold tracking-widest text-teal-400 font-mono uppercase mb-2">
                {label}
              </label>
              {type === "textarea" ? (
                <textarea
                  className="w-full bg-gray-800 text-white border border-gray-700 focus:border-teal-400 rounded-lg px-4 py-3 outline-none transition duration-200 resize-none h-32 text-sm"
                  placeholder={placeholder}
                  value={form[field]}
                  onChange={e => setForm({ ...form, [field]: e.target.value })}
                />
              ) : (
                <input
                  className="w-full bg-gray-800 text-white border border-gray-700 focus:border-teal-400 rounded-lg px-4 py-3 outline-none transition duration-200 text-sm"
                  placeholder={placeholder}
                  value={form[field]}
                  onChange={e => setForm({ ...form, [field]: e.target.value })}
                />
              )}
              {errors[field] && <p className="text-red-400 text-xs mt-1">{errors[field]}</p>}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 rounded-lg transition duration-200 tracking-wide"
          >
            Send Message →
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;