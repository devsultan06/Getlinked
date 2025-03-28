/* eslint-disable no-unused-vars */
import CurvedLine from "./CurvedLine";
import Navbar from "./Navbar";
import Man from "/image/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import TitleWithTypingEffect from "./TitleWithypingEffect";
import Star from "/image/image1.png";
import CountdownTimer from "./CoundownTimer";
import Star2 from "/image/star.png";
import Creative1 from "/image/creative1.png";
import Chain from "/image/chain93651167621444.png";
import Boom from "/image/_1f4a5.png";
const Header = () => {
  return (
    <header className=" text-white bg-[#150e28] border-b border-[#753386] ">
      <Navbar />
      <div className="circle1 bg-no-repeat bg-cover absolute bg-purple-lens-flare pointer-events-none "></div>
      <div className="circle2 bg-no-repeat bg-cover absolute bg-purple-lens-flare left-[561px] top-0 w-[971px] h-[994px] pointer-events-none"></div>
      <TitleWithTypingEffect />
      <div className="title">
        <div className="all-inner">
          <div className="box flex pt-[50px] max-1000:pt-[200px] items-center justify-between w-full ">
            <div className="text">
              <div className="relative z-10">
                <h1 className="text-5xl font-bold mb-3 z-10">getlinked Tech</h1>

                <h1 className="text-5xl font-bold mb-6 z-10">
                  Hackathon <span className="text-[#D434FE]">1.0</span>{" "}
                </h1>
                <p className="mb-6">
                  Participate in getlinked tech Hackathon 2023 stand a chance to
                  win a Big prize
                </p>
                <img
                  src={Creative1}
                  alt=""
                  className=" w-[50px] h-[50px] absolute top-[-40px] left-[300px]"
                />
                <img src={Chain} alt="" className="chain absolute w-[50px] h-[50px] top-[55px] max-1000:top-[50px] left-[350px] max-1000:left-[330px] z-0" />
                <img src={Boom} alt="" className="boom absolute w-[50px] h-[50px] top-[55px] max-1000:top-[48px] left-[400px] max-1000:left-[-5px] z-0" />
                <img src={Star2} alt="" className="small-star absolute w-[50px] h-[50px] top-[-120px] max-1000:top-[-80px] left-[40px]" />


              </div>

              <div className="button">
                <button
                  to="/get-started"
                  className="register 
          bg-gradient-to-r from-[#ff26b9] via-[#d434fe] to-[#903aff]
        text-white py-2.5 px-8 rounded cursor-pointer"
                >
                  Register
                </button>
              </div>

              <CountdownTimer />
            </div>
            <div className="image relative">
              <img
                src={Man}
                alt=""
                className="w-[600px] h-[500px] max-1000:w-auto max-1000:h-auto"
              />
              <img src={Star} alt="" className="image2 absolute top-0" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
