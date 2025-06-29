import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
// import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const HeroText = () => {
  return (
    <>
      <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
        <div>
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
          >
            Area Sales Manager
          </motion.h2>
          <motion.h1
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
          >
            Manoranjan <br className="sm:hidden md:block" />
            Pothal
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="text-lg mt-4 px-5"
          >
            A Passionate Area Sales Manager with 10 Years in the Personal Loan
            Sector,
            <br /> Specializing in Team Leadership, Target Achievement, and
            Market Expansion.
          </motion.p>
        </div>
        <div className="flex items-center gap-6">
          {/* Resume Button */}
          {/* <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/images/myresume.pdf"; // Remove /public — public folder is base
              link.download = "myresume.pdf";
              link.target = "_blank";
              link.rel = "noopener noreferrer";
              link.click();
            }}
            className="px-12 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
          >
            Resume
            <div className="sm:hidden md:block">
              <LuArrowDownRight />
            </div>
          </button> */}

           <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/images/myresume.pdf"; // File path from public folder
              
              link.target = "_blank"; // Open in new tab
              link.rel = "noopener noreferrer";
              link.click();
            }}
            className="px-12 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
          >
            Resume
          </button>

          {/* Social Icons */}
          <div className="flex gap-4 text-3xl text-darkCyan">
            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN-ID"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-orange transition" />
            </a>
            <a
              href="https://www.instagram.com/YOUR-INSTAGRAM-ID"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-orange transition" />
            </a>
            <a
              href="https://www.facebook.com/YOUR-FACEBOOK-ID"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-orange transition" />
            </a>
            <a
              href="https://www.twitter.com/YOUR-TWITTER-ID"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-orange transition" />
            </a>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default HeroText;
