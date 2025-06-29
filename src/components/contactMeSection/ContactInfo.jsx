import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="manoranjan-pothal@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="91-9439662838" Image={FiPhone} />
      <SingleInfo text="New Delhi, Delhi" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
