import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBills,
  faMoneyBillTransfer,
  faMoneyCheck,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";

const coreFeatures = () => {
  return (
    <div className="p-20 w-full mx-auto bg-white">
      <h2 className="text-3xl text-center font-bold font-sans text-primary">
        You have the power
      </h2>
      <p className="text-center mt-4">
        Shojoy Pay provides the flexibility you need to manage your finance
        properly.
        <br /> Which is constantly getting better with you.
      </p>
      {/* CORE FUTURE CONTAINER */}
      <div className="coreServicesContainer mt-20 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        <div className="coreService text-center shadow rounded-xl p-5">
          <FontAwesomeIcon
            className="mx-auto text-[60px] text-primary"
            icon={faMoneyBillTransfer}
          />
          <p className="text-xl mt-4 mb-[6px]">Worldwide</p>
          <p>Worldwide payment is super easy with Shohoj Pay.</p>
        </div>
        <div className="coreService text-center shadow rounded-xl p-5">
          <FontAwesomeIcon
            className="mx-auto text-[60px] text-primary "
            icon={faMoneyCheck}
          />
          <p className="text-xl mt-4 mb-[6px]">eCheck</p>
          <p>Issue an eCheck with one tap with Shohoj Pay.</p>
        </div>
        <div className="coreService text-center shadow rounded-xl p-5">
          <FontAwesomeIcon
            className="mx-auto text-[60px] text-primary"
            icon={faPiggyBank}
          />
          <p className="text-xl mt-4 mb-[6px]">Savings</p>
          <p>
            Shohoj Pay also allows you to save money with upto 3% of interest.
          </p>
        </div>
        <div className="coreService text-center shadow rounded-xl p-5">
          <FontAwesomeIcon
            className="mx-auto text-[60px] text-primary"
            icon={faMoneyBills}
          />
          <p className="text-xl mt-4 mb-[6px]">Loan</p>
          <p>Shohoj Pay provides adequate amount.</p>
        </div>
      </div>
    </div>
  );
};

export default coreFeatures;
