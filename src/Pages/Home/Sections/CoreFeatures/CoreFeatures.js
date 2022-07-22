import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faEarthAmerica,
  faGlobe,
  faMoneyBill,
  faMoneyBills,
  faMoneyBillTransfer,
  faMoneyCheck,
  faMoneyCheckDollar,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";

const coreFeatures = () => {
  return (
    <div className="my-8 w-[90%] mx-auto">
      <h2 className="text-3xl text-center font-bold font-sans">
        You have the power
      </h2>
      <p className="text-center mt-4">
        Shojoy Pay provides the flexibility you need to manage your finance
        properly.
        <br /> Which is constantly getting better with you.
      </p>
      <div className="coreServicesContainer mt-12 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        <div className="coreService text-center py-3 shadow rounded-xl px-3">
          <FontAwesomeIcon
            className="mx-auto text-[60px]"
            icon={faMoneyBillTransfer}
          />
          <p className="text-xl mt-4 mb-[6px]">Worldwide</p>
          <p>Worldwide payment is super easy with Shohoj Pay.</p>
        </div>
        <div className="coreService text-center py-3 shadow rounded-xl px-3">
          <FontAwesomeIcon
            className="mx-auto text-[60px]"
            icon={faMoneyCheck}
          />
          <p className="text-xl mt-4 mb-[6px]">eCheck</p>
          <p>Issue an eCheck with one tap with Shohoj Pay.</p>
        </div>
        <div className="coreService text-center py-3 shadow rounded-xl px-3">
          <FontAwesomeIcon className="mx-auto text-[60px]" icon={faPiggyBank} />
          <p className="text-xl mt-4 mb-[6px]">Savings</p>
          <p>
            Shohoj Pay also allows you to save money with upto 3% of interest.
          </p>
        </div>
        <div className="coreService text-center py-3 shadow rounded-xl px-3">
          <FontAwesomeIcon
            className="mx-auto text-[60px]"
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
