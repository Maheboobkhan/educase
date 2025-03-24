import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      {/* Below is Mobile View */}
      <div className="min-h-screen bg-[#F7F8F9] flex items-end px-5 md:hidden">
        <div className="flex flex-col items-start mb-10">
          <h1 className="text-[28px] font-medium leading-[17px] font-Rubik text-[#1D2226]">
            Welcome to PopX
          </h1>
          <p className="text-[18px] leading-[22px] mt-4 mb-6 font-Rubik text-[#777a7c]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <Link to="/signup" className="w-full">
            <button className="bg-[#6C25FF] cursor-pointer text-[#FFFFFF] py-4 rounded-[6px] w-full text-white py-2 text-[16px] leading-[17px] font-medium font-Rubik transition-all duration-300 transform hover:bg-[#5a1dcd] active:scale-95">
              Create Account
            </button>
          </Link>

          <Link to="/login" className="w-full">
            <button className="bg-[#6C25FF4B] cursor-pointer mt-2 text-[#1D2226] py-4 rounded-[6px] w-full py-2 text-[16px] leading-[17px] font-medium font-Rubik transition-all duration-300 transform hover:bg-[#5a1dcd] active:scale-95">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>

      {/* Below is Desktop View */}
      <div className="min-h-screen bg-[#F7F8F9] flex items-center justify-center px-5 hidden md:flex">
        <div className="flex flex-row items-center text-left max-w-[80%] md:space-x-12">
        
          <div className="flex flex-col items-start mb-10 md:mb-0 w-full md:w-1/2">
            <h1 className="text-[36px] font-medium leading-[48px] font-Rubik text-[#1D2226]">
              Welcome to PopX
            </h1>
            <p className="text-[20px] leading-[26px] mt-4 mb-6 font-Rubik text-[#777a7c] max-w-[80%] md:max-w-[90%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="leading-30">
              <Link to="/signup" className="w-full">
                <button className="bg-[#6C25FF] cursor-pointer text-[#FFFFFF] py-4 rounded-[6px] w-full text-white text-[16px] leading-[17px] font-medium font-Rubik transition-all duration-300 transform hover:bg-[#aa6dff] active:scale-95">
                  Create Account
                </button>
              </Link>

              <Link to="/login" className="w-full mt-3">
                <button className="bg-[#6C25FF4B] mt-3 cursor-pointer text-[#1D2226] py-4 rounded-[6px] w-full text-[16px] leading-[17px] font-medium font-Rubik transition-all duration-300 transform hover:bg-[#aa6dff] hover:text-gray-50 active:scale-95">
                  Already Registered? Login
                </button>
              </Link>
            </div>
          </div>

        
          <div className="mt-8 md:mt-0 w-full md:w-1/2 flex justify-center">
            <img src="https://cdn.pixabay.com/photo/2017/06/10/16/22/coffee-2390136_640.jpg" alt="Landing Image" className="w-full max-w-[600px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
