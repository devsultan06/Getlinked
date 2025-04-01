import { useState } from "react";
import { motion } from "framer-motion";
import faqimage from "../../public/image/faqimg.png";
import plus from "../../public/image/plus.png";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "Yes, you can work on a project you started before the hackathon.",
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer:
        "We have mentors who will be available to help you during the hackathon.",
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer:
        "You can join a team and work on a project with other participants.",
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer:
        "You can join a team or come with one. We will have a team-building session at the beginning of the hackathon.",
    },
    {
      question: "What happens after the hackathon ends?",
      answer:
        "After the hackathon ends, you can continue working on your project or start a new one. We will also have a showcase event where you can present your project to the judges.",
    },
  ];

  return (
    <div className="bg-[#150e28] text-white border-b border-[#753386] px-6 py-10 flex  flex-col-reverse md:flex-row md:items-center md:justify-between">
      <div className="max-w-xl mx-auto text-center md:text-left">
        <h2 className="text-3xl font-bold">Frequently Asked</h2>
        <h2 className="text-[#D434FE] text-3xl font-bold mb-6">Questions</h2>
        <p className="mb-6">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-600 rounded-lg p-4">
              <div
                className="flex justify-between items-start cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <p className="font-semibold">{item.question}</p>
                <motion.img
                  src={plus}
                  alt="Toggle"
                  className="w-5 h-5"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-gray-300">{item.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:block md:w-1/3 lg:w-1/2">
        <img src={faqimage} alt="FAQ Illustration" className="w-full" />
      </div>
    </div>
  );
};

export default Faq;
