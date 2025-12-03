import { type ChangeEvent, type FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

interface VolunteerForm {
  fullName: string;
  email: string;
  mobile: string;
  age: string;
  availability: "weekend" | "weekday" | "fulltime";
  skills: string[];
  motivation: string;
}

interface ModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const skillOptions = ["Communication", "Field Work", "Tech Support", "Event Planning"];

const VolunteerModal = ({ open, setOpen }: ModalProps) => {
  const [form, setForm] = useState<VolunteerForm>({
    fullName: "",
    email: "",
    mobile: "",
    age: "",
    availability: "weekend",
    skills: [],
    motivation: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (skill: string) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Volunteer Data:", form);

    // Show thank you message
    setIsSubmitted(true);

    // Auto-close after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setOpen(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-3"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-4 sm:p-6 w-full max-w-lg sm:max-w-xl shadow-xl border border-blue-100"
          >
            {/* HEADER (hidden when thank you message is visible) */}
            {!isSubmitted && (
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h2 className="text-lg sm:text-2xl font-semibold text-gray-800">
                  Join as Volunteer
                </h2>
                <button onClick={() => setOpen(false)}>
                  <X className="w-6 h-6 text-gray-600 hover:text-red-500 transition" />
                </button>
              </div>
            )}

            {/* CONTENT WITH FADE TRANSITION */}
            <div className="relative min-h-[150px] sm:min-h-[180px]">
              <AnimatePresence>

                {/* FORM */}
                {!isSubmitted && (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-3 sm:space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <input
                        name="fullName"
                        type="text"
                        placeholder="Full Name"
                        value={form.fullName}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-300 bg-gray-50 
                        focus:border-green-500 focus:ring-2 focus:ring-green-300 transition-all text-sm sm:text-base"
                        required
                      />

                      <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-300 bg-gray-50 
                        focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all text-sm sm:text-base"
                        required
                      />

                      <input
                        name="mobile"
                        type="tel"
                        placeholder="Mobile Number"
                        value={form.mobile}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-300 bg-gray-50 
                        focus:border-green-500 focus:ring-2 focus:ring-green-300 transition-all text-sm sm:text-base"
                        required
                      />

                      <input
                        name="age"
                        type="number"
                        placeholder="Age"
                        value={form.age}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-300 bg-gray-50 
                        focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all text-sm sm:text-base"
                        required
                      />

                      <select
                        name="availability"
                        value={form.availability}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-300 bg-gray-50 
                        focus:border-green-500 focus:ring-2 focus:ring-green-300 transition-all text-sm sm:text-base"
                      >
                        <option value="weekend">Weekend</option>
                        <option value="weekday">Weekdays</option>
                        <option value="fulltime">Full Time</option>
                      </select>
                    </div>

                    {/* SKILLS */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Skills (Select multiple)
                      </label>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1.5">
                        {skillOptions.map((skill) => (
                          <label
                            key={skill}
                            className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-xl 
                            border border-gray-200 cursor-pointer text-sm"
                          >
                            <input
                              type="checkbox"
                              checked={form.skills.includes(skill)}
                              onChange={() => handleSkillChange(skill)}
                              className="text-green-600 focus:ring-green-300"
                            />
                            <span>{skill}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* MOTIVATION */}
                    <textarea
                      name="motivation"
                      placeholder="Why do you want to volunteer?"
                      value={form.motivation}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-300 bg-gray-50 
                      focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all text-sm sm:text-base"
                    />

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl text-white font-semibold shadow-md
                      bg-gradient-to-r from-green-500 to-blue-500 
                      hover:from-green-600 hover:to-blue-600 transition-all text-sm sm:text-base"
                    >
                      Submit
                    </button>
                  </motion.form>
                )}

                {/* THANK YOU MESSAGE */}
                {isSubmitted && (
                  <motion.div
                    key="thankyou"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                  >
                    <CheckCircle className="w-14 h-14 text-green-500 mb-3" />

                    <h2 className="text-2xl font-bold text-gray-800 mb-1">
                      Thank You!
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Your volunteer request has been submitted successfully.
                    </p>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VolunteerModal;
