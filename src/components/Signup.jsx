// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const [fullName, setFullName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [companyName, setCompanyName] = useState("");
//   const [isAgency, setIsAgency] = useState(null);

//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     const userId = new Date().getTime();
//     const newUser = {
//       userId,
//       fullName,
//       phoneNumber,
//       email,
//       password,
//       companyName,
//       isAgency,
//     };

//     localStorage.setItem("userData", JSON.stringify(newUser));
//     navigate("/login");
//   };

//   return (
//     <div className="bg-[#F7F8F9] min-h-screen px-5 flex flex-col justify-between items-center">
//       <div className="mt-10">
//         <h1 className="text-[28px] font-medium leading-[36px] font-Rubik text-[#1D2226] w-3/4">
//           Sign in to your PopX account
//         </h1>
//         <p className="text-[18px] leading-[22px] mt-4 font-Rubik text-[#777a7c]">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//         </p>

//         <div className="relative mt-6">
//           <label className="text-[#6C25FF] text-[13px] absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
//             Full Name
//             <span className="text-red-600 text-[13px]">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter full name"
//             className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-2 outline-none"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//           />
//         </div>

//         <div className="relative mt-4">
//           <label className="text-[#6C25FF] text-[13px] absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
//             Phone Number
//             <span className="text-red-600 text-[13px]">*</span>
//           </label>
//           <input
//             type="tel"
//             placeholder="Enter phone number"
//             className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-2 outline-none"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//         </div>

//         <div className="relative mt-4">
//           <label className="text-[#6C25FF] text-[13px] absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
//             Email address
//             <span className="text-red-600 text-[13px]">*</span>
//           </label>
//           <input
//             type="email"
//             placeholder="Enter email address"
//             className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-2 outline-none"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="relative mt-4">
//           <label className="text-[#6C25FF] text-[13px] absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
//             Password
//             <span className="text-red-600 text-[13px]">*</span>
//           </label>
//           <input
//             type="password"
//             placeholder="Enter password"
//             className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-2 outline-none"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <div className="relative mt-4">
//           <label className="text-[#6C25FF] text-[13px] absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
//             Company name
//             <span className="text-red-600 text-[13px]">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter company name"
//             className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-2 outline-none"
//             value={companyName}
//             onChange={(e) => setCompanyName(e.target.value)}
//           />
//         </div>

//         <div className="mt-4">
//           <label className="text-[#6C25FF] text-[13px] pl-2 pr-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
//             Are you an Agency?
//             <span className="text-red-600 text-[13px]">*</span>
//           </label>

//           <div className="flex space-x-4 ml-2 mt-2">
//             <label className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 name="agency"
//                 className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] p-2 outline-none"
//                 onChange={() => setIsAgency(true)}
//               />
//               <span className="text-[#1D2226] text-[14px] font-Rubik">Yes</span>
//             </label>

//             <label className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 name="agency"
//                 className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] p-2 outline-none"
//                 onChange={() => setIsAgency(false)}
//               />
//               <span className="text-[#1D2226] text-[14px] font-Rubik">No</span>
//             </label>
//           </div>
//         </div>
//       </div>

//       <button
//         className="bg-[#6C25FF] cursor-pointer mb-6 text-[#FFFFFF] py-4 rounded-[6px] w-full text-[16px] leading-[17px] font-medium font-Rubik transition-all duration-300 transform hover:bg-[#5a1dcd] active:scale-95"
//         onClick={handleSubmit}
//       >
//         Create Account
//       </button>
//     </div>
//   );
// }

// export default Signup;



import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isAgency, setIsAgency] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = () => {
    const userId = new Date().getTime();
    const newUser = {
      userId,
      fullName,
      phoneNumber,
      email,
      password,
      companyName,
      isAgency,
    };

    localStorage.setItem("userData", JSON.stringify(newUser));
    navigate("/login");
  };

  return (
    <>
      {/* Mobile View */}
      <div className="bg-[#F7F8F9] min-h-screen px-5 flex flex-col justify-between items-center md:hidden">
        <div className="mt-10">
          <h1 className="text-[28px] font-medium leading-[36px] font-Rubik text-[#1D2226] w-3/4">
            Sign in to your PopX account
          </h1>
          <p className="text-[18px] leading-[22px] mt-4 font-Rubik text-[#777a7c]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          {/* Form Fields */}
          <div className="relative mt-6">
            <label className="text-[#6C25FF] text-[13px] absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
              Full Name
              <span className="text-red-600 text-[13px]">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-2 outline-none"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="relative mt-4">
            <label className="text-[#6C25FF] text-[13px] absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
              Phone Number
              <span className="text-red-600 text-[13px]">*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-2 outline-none"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="relative mt-4">
            <label className="text-[#6C25FF] text-[13px] absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
              Email address
              <span className="text-red-600 text-[13px]">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-2 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative mt-4">
            <label className="text-[#6C25FF] text-[13px] absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
              Password
              <span className="text-red-600 text-[13px]">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-2 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="relative mt-4">
            <label className="text-[#6C25FF] text-[13px] absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
              Company name
              <span className="text-red-600 text-[13px]">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter company name"
              className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-2 outline-none"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label className="text-[#6C25FF] text-[13px] pl-2 pr-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
              Are you an Agency?
              <span className="text-red-600 text-[13px]">*</span>
            </label>

            <div className="flex space-x-4 ml-2 mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] p-2 outline-none"
                  onChange={() => setIsAgency(true)}
                />
                <span className="text-[#1D2226] text-[14px] font-Rubik">Yes</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] p-2 outline-none"
                  onChange={() => setIsAgency(false)}
                />
                <span className="text-[#1D2226] text-[14px] font-Rubik">No</span>
              </label>
            </div>
          </div>
        </div>

        <button
          className="bg-[#6C25FF] cursor-pointer mb-6 text-[#FFFFFF] py-4 rounded-[6px] w-full text-[16px] leading-[17px] font-medium font-Rubik transition-all duration-300 transform hover:bg-[#5a1dcd] active:scale-95"
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </div>

      {/* Desktop View */}
      <div className="min-h-screen bg-[#F7F8F9] px-5 flex items-center justify-center hidden md:flex">
        <div className="flex flex-row items-center justify-center space-x-12 max-w-5xl w-full">
          <div className="w-full md:w-1/2">
            <h1 className="text-[36px] font-medium leading-[48px] font-Rubik text-[#1D2226]">
              Sign in to your PopX account
            </h1>
            <p className="text-[18px] leading-[24px] mt-4 font-Rubik text-[#777a7c] max-w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec pretium justo.
            </p>

            {/* Form Fields */}
            <div className="mt-6">
              {/* Full Name */}
              <div className="relative mb-4">
                <label className="text-[#6C25FF] text-[13px] absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
                  Full Name <span className="text-red-600 text-[13px]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-2 outline-none"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              {/* Phone Number */}
              <div className="relative mb-4">
                <label className="text-[#6C25FF] text-[13px] absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
                  Phone Number <span className="text-red-600 text-[13px]">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-2 outline-none"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              {/* Email Address */}
              <div className="relative mb-4">
                <label className="text-[#6C25FF] text-[13px] absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
                  Email address <span className="text-red-600 text-[13px]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-2 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className="relative mb-4">
                <label className="text-[#6C25FF] text-[13px] absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
                  Password <span className="text-red-600 text-[13px]">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-2 outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Company Name */}
              <div className="relative mb-4">
                <label className="text-[#6C25FF] text-[13px] absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
                  Company name <span className="text-red-600 text-[13px]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter company name"
                  className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-2 outline-none"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              {/* Agency Radio Buttons */}
              <div className="mt-4 mb-6">
                <label className="text-[#6C25FF] text-[13px] pl-2 pr-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
                  Are you an Agency? <span className="text-red-600 text-[13px]">*</span>
                </label>
                <div className="flex space-x-4 ml-2 mt-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="agency"
                      className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] p-2 outline-none"
                      onChange={() => setIsAgency(true)}
                    />
                    <span className="text-[#1D2226] text-[14px] font-Rubik">Yes</span>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="agency"
                      className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] p-2 outline-none"
                      onChange={() => setIsAgency(false)}
                    />
                    <span className="text-[#1D2226] text-[14px] font-Rubik">No</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                className="bg-[#6C25FF] cursor-pointer text-[#FFFFFF] py-4 rounded-[6px] w-full text-[16px] leading-[17px] font-medium font-Rubik transition-all duration-300 transform hover:bg-[#aa6dff] active:scale-95"
                onClick={handleSubmit}
              >
                Create Account
              </button>
            </div>
          </div>

          {/* Optional Image Section */}
          <div className="hidden md:flex md:w-1/2 justify-center">
            <img src="https://cdn.pixabay.com/photo/2015/05/31/10/58/cup-791072_640.jpg" alt="Signup Image" className="w-full max-w-[600px] max-h-[600px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
