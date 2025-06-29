import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Area Sales Manager – Personal & Business Loans",
    company: "Bajaj Finance Ltd., New Delhi",
    date: "April 2021 – Present",
    responsibilities: [
      "Managed a team of 4 Sales Managers and 16 Sales Representatives across Delhi NCR.",
      "Consistently exceeded monthly and quarterly loan sales targets.",
      "Implemented strategic initiatives to grow the personal loan portfolio.",
      "Conducted market analysis to identify expansion opportunities.",
      
    ],
  },
  {
    job: "Relationship Officer (Axis Bank)",
    company: "Quess Corp Ltd., Bhubaneswar",
    date: "Jan 2020 – April 2021",
    responsibilities: [
      "Built strong client relationships to provide tailored financial solutions.",
      "Assessed loan and credit needs in alignment with bank policies.",
      "Advised clients on loan eligibility and documentation requirements.",
      "Worked closely with loan teams to ensure smooth loan processing.",
      "Collaborated with cross-functional teams to enhance customer experience.",

    ],
  },
  {
    job: "Accounts Executive",
    company: "Bhubaneswar Health Services Pvt. Ltd.",
    date: "Feb 2018 – Jan 2020",
    responsibilities: [
      "Managed accounts payables and receivables, including payroll for 120+ employees.",
      "Oversaw online banking operations and internal financial documentation.",
      "Monitored expenses, handled purchase invoices, and supported mail and phone operations.",
      "Provided coaching and mentoring to improve team performance and career growth.",
    ],
  },
];


const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
    {experiences.map((experience, index) => {
  return (
    <>
      <SingleExperience key={index} experience={experience} />
      {index < 2 ? (
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <FaArrowRightLong className="text-5xl text-orange lg:block sm:hidden" />
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
})}

    </div>
  );
};

export default AllExperiences;
