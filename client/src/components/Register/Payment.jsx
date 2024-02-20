import React from 'react'
import visa from "../../images/logos/Visa.svg";
import masterCard from "../../images/logos/Mastercard_Logo.svg";
import rupay from "../../images/logos/Rupay.svg";
import bhim from "../../images/logos/Bhim.svg";
import paytm from "../../images/logos/Paytm.svg";
import phonepe from "../../images/logos/Phone_Pe.svg";
import googlepay from "../../images/logos/Google_Pay.svg";
import { FaChevronRight } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { Link } from 'react-router-dom';

function Payment() {
    return (
        <div className="main h-full w-full flex justify-center">
            <div className="pay-card h-[30rem] w-[30rem] mt-10 flex flex-col gap-3 items-center justify-center">
                <div className="flex items-center justify-center rounded-full border-2 border-brand p-2">
                    <IoIosLock className="text-brand text-3xl" />
                </div>
                <p className="text-gray-600 text-sm">STEP 3 OF 3</p>
                <p className="text-3xl font-semibold">Choose how to pay</p>
                <p className="text-center text-lg">Your payment is encrypted and you can change your payment method at anytime.</p>
                <p className="text-lg font-semibold">Secure for peace of mind. Cancel easily online.</p>
                <div className="w-full">
                    <Link to=".././success-message">
                        <div className="flex pay">
                            <span className="text-lg">Credit or Debit Card</span>
                            <div className="flex gap-4">
                                <img src={visa} alt="" />
                                <img src={masterCard} alt="" />
                                <img src={rupay} alt="" />
                            </div>
                            <FaChevronRight />
                        </div>
                    </Link>
                    <Link to=".././success-message">
                        <div className="flex mt-1 pay">
                            <span className="text-lg">UPI AutoPay</span>
                            <div className="flex gap-4">
                                <img src={bhim} alt="" />
                                <img src={paytm} alt="" />
                                <img src={phonepe} alt="" />
                                <img src={googlepay} alt="" />
                            </div>
                            <FaChevronRight />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Payment;
