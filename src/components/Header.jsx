import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/Animation - 1696402476841.json";
import Typed from "react-typed";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="flex bg-gradient-to-b absolute from-white to-purple-200 h-[100vh] w-full py-6 font-semibold font-serif">
        <h1 className=" px-[16vh]  text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text font-extrabold text-transparent">
          UnityLearn
        </h1>
        <div>
          <ul className=" flex font-serif flex-row text-blue-900 py-2">
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              Home
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              About
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              Donate
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              Blog
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              Gallery
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              Events
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              Contact
            </li>
          </ul>
          <div className=" flex flex-row justify-center mt-10 items-center -ml-[38vh]">
            <div className="text-6xl ">
              <div className=" w-[105vh]">
                Empowering{" "}
                <Typed className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text font-extrabold text-transparent" strings={['Abilities,','Potentials,','Strengths,']} typeSpeed={120} backSpeed={140} loop/>
              </div>
              <span>
                Fostering{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text font-extrabold text-transparent">
                  Unity,
                </span>
              </span>
              <br />
              <span>
                Igniting{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text font-extrabold text-transparent">
                  Learning.
                </span>{" "}
              </span>
              <br />
              <span className="text-xl"> "Where Every Mind Shines Bright."</span>
              <div className=" flex text-lg space-x-4 mt-6 mx-2">
              <button className="flex text-xl  px-4 rounded-lg hover:bg-transparent hover:text-black font-serif bg-black text-white"><Link to='/Login'>Log In</Link></button>
              <button className=" hover:bg-black text-xl hover:text-white hover:rounded-lg border border-solid border-black rounded-lg px-4 hover:px-4">Sign Up</button>
              </div>
            </div>
            <Lottie className=" h-[70vh]" animationData={animation} />
          </div>
        </div>

      </div>
    </>
  );
};

export default Header;
