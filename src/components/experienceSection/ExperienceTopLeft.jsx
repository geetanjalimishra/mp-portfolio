import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <>
      {/* <div className="flex flex-col gap-6 w-[300px]">
        <p className="text-orange font-bold uppercase text-3xl font-special text-center">
          Since 2022
        </p>
        <div className="flex justify-center items-center gap-4">
          <ExperienceInfo number="3" text="Years" />
          <p className="font-bold text-6xl text-lightBrown">-</p>
          <ExperienceInfo number="23" text="Websites" />
        </div>
        <p className="text-center">
          With 3 years of experience building dynamic and user-friendly web
          applications.
        </p>
        <ExperienceInfo number="$100k" text="Max Budget" />
      </div> */}

      <div className="text-white text-center space-y-4">
        <p className="text-orange font-bold uppercase text-3xl font-special text-center">
          Since 2018
        </p>
        <div className="flex justify-center items-center gap-4">
          <div>
            <ExperienceInfo number="6+" text="Years" />

            {/* <p className="text-3xl font-bold text-cyan-400">6+</p> */}
            {/* <p className="text-gray-400">Years</p> */}
          </div>
          <p className="text-3xl text-white">-</p>
          <div>
            <ExperienceInfo number="3" text="Companies" />

            {/* <p className="text-3xl font-bold text-cyan-400">3</p> */}
            {/* <p className="text-gray-400">Companies</p> */}
          </div>
        </div>
        <p className="text-gray-300">
          Led teams, exceeded sales targets, and managed client <br/>relations across
          multiple companies and regions.
        </p>
        <ExperienceInfo number="$500k" text="Loan Portfolio Handled" />

        {/* <p className="text-3xl font-bold text-cyan-400">$500k+</p> */}
        {/* <p className="text-gray-400">Loan Portfolio Handled</p> */}
      </div>
    </>
  );
};

export default ExperienceTopLeft;
