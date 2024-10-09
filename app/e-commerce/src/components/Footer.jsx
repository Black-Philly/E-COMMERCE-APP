import React from "react";
import {
  FaFacebookSquare,
  FaYoutube,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import {
  FaCcMastercard,
  FaCcVisa,
  FaDhl,
  FaCcPaypal,
  FaFedex,
  FaAlipay,
  FaCcStripe,
  FaUps 
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-white">
      <div className="flex justify-between mt-5 bg-amber-700 p-10">
        <div>
          <h2 className="text-left font-serif font-semibold">NEED HELP?</h2>
          {/* <p className="mt-2"> */}
            <ul className="no-bullet">
              <li> Chat with us </li>
              <li> Help Center </li>
              <li> Contact Us </li>
            </ul>
          {/* </p> */}

          <h2 className="text-left font-serif font-semibold mt-5">
            USEFUL LINKS
          </h2>
          {/* <p className="mt-2"> */}
            <ul className="no-bullet">
              <li> Service Center </li>
              <li> Delivery options </li>
              <li> Product return policy </li>
              <li> Bulk Purchase </li>
              <li> Report a product </li>
              <li> Dispute resolution </li>
            </ul>
          {/* </p> */}
        </div>

        <div>
          <h2 className="text-left font-serif font-semibold">ABOUT WE SHOP </h2>
          {/* <p className="mt-2"> */}
            <ul className="no-bullet">
              <li>About Us</li>
              <li>Careers and Vacancy</li>
              <li>Terms and Conditions</li>
              <li>Privacy Notice</li>
              <li>Store Credit</li>
              <li>Cookie Notice</li>
            </ul>
          {/* </p> */}
        </div>

        <div>
          <h2 className="text-left font-serif font-semibold">
            MAKE MONEY WITH US
          </h2>
          <p className="mt-2">
            <ul className="no-bullet">
              <li>Sell with us</li>
              <li>Vendor hub</li>
              <li>Become a Sales Consultant</li>
              <li>Join the improved sales program</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="flex pt-0 bg-amber-700 px-10 pb-10 ">
        <div>
            <h2 className="text-left font-serif font-semibold ">
              JOIN US ON
            </h2>
            <p className="flex items-center gap-3"> 
            <FaFacebookSquare className="w-[25px] h-[25px]"/>
            <FaYoutube className="w-[35px] h-[35px]"/>
            <FaInstagramSquare className="w-[25px] h-[25px]"/>
            <FaTwitterSquare className="w-[25px] h-[25px]" />
            </p>
        </div>

        <div className="ml-72">
          <h2 className="text-left font-serif font-semibold">
            PAYMENT METHODS AND LOGISTICS PARTNERS
          </h2>
          <p className="flex items-center gap-3">
            <FaAlipay className="w-[25px] h-[25px]" />
            <FaCcStripe className="w-[25px] h-[25px]"/>
            <FaCcMastercard className="w-[25px] h-[25px]"/>
            <FaCcVisa className="w-[25px] h-[25px]"/>
            <FaCcPaypal className="w-[25px] h-[25px]"/>
            <FaDhl className="w-[35px] h-[35px]"/>
            <FaFedex className="w-[35px] h-[35px]"/>
            <FaUps className="w-[25px] h-[25px]"/>

          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
