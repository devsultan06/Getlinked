import CurvedLine from "./CurvedLine"; 
import { ReactTyped } from "react-typed";

const TitleWithTypingEffect = () => {
  return (
    <div className="float-right w-full text-center block px-[20px] py-[30px]">
      <div className="">
        <h1 className="text-2xl">
          <ReactTyped
            className="hello"
            strings={["Igniting a Revolution in HR Innovation"]}
            typeSpeed={50} 
            backSpeed={50}
            loop={true}
            showCursor={true} 
          />
        </h1>
      </div>

      {/* <CurvedLine /> */}
      
    </div>
  );
};

export default TitleWithTypingEffect;
