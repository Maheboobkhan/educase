// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     const storedUser = localStorage.getItem("userData");
//     console.log("storedUser: ", storedUser);
//     if (storedUser) {
//       try {
//         const user = JSON.parse(storedUser);
//         if (user.email == email && user.password == password) {
//           localStorage.setItem("currentUser", JSON.stringify(user));
//           window.location.href = "/profile";
//         } else {
//           alert("Invalid credentials");
//         }
//       } catch (error) {
//         alert("Error parsing user data:", error);
//       }
//     } else {
//       alert("No user data found in localStorage");
//     }
//   };

//   return (
//     <div className="bg-[#F7F8F9] min-h-screen px-5 flex justify-center">
//       <div className="mt-10">
//         <h1 className="text-[28px] font-medium leading-[36px] font-Rubik text-[#1D2226] w-3/4">
//           Signin to your PopX account
//         </h1>
//         <p className="text-[18px] leading-[22px] mt-4 font-Rubik text-[#777a7c]">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//         </p>

//         {/* Email */}
//         <div className="relative mt-6">
//           <label className="text-[#6C25FF] text-[13px] absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
//             Email Address
//           </label>
//           <input
//             type="email"
//             placeholder="Enter email address"
//             className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-2 outline-none"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         {/* Password */}
//         <div className="relative mt-4">
//           <label className="text-[#6C25FF] text-[13px] absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
//             Password
//           </label>
//           <input
//             type="password"
//             placeholder="Enter password"
//             className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-2 outline-none"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <button
//           className="bg-[#CBCBCB] cursor-pointer mt-5 text-[#FFFFFF] py-4 rounded-[6px] w-full text-[16px] leading-[17px] font-medium font-Rubik transition-all duration-300 transform hover:bg-[#a5a5a5] active:scale-95"
//           onClick={handleLogin}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = localStorage.getItem("userData");
    console.log("storedUser: ", storedUser);
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        if (user.email === email && user.password === password) {
          localStorage.setItem("currentUser", JSON.stringify(user));
          window.location.href = "/profile";
        } else {
          alert("Invalid credentials");
        }
      } catch (error) {
        alert("Error parsing user data:", error);
      }
    } else {
      alert("No user data found in localStorage");
    }
  };

  return (
    <div className="bg-[#F7F8F9] min-h-screen px-5 flex justify-center md:items-center">
      
      {/* Mobile view (default) */}
      <div className="w-full md:hidden mt-10">
        <h1 className="text-[28px] font-medium leading-[36px] font-Rubik text-[#1D2226] w-3/4">
          Sign in to your PopX account
        </h1>
        <p className="text-[18px] leading-[22px] mt-4 font-Rubik text-[#777a7c]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        {/* Email */}
        <div className="relative mt-6">
          <label className="text-[#6C25FF] text-[13px] absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
            Email Address
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
        <div className="relative mt-4">
          <label className="text-[#6C25FF] text-[13px] absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-2 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="bg-[#CBCBCB] cursor-pointer mt-5 text-[#FFFFFF] py-4 rounded-[6px] w-full text-[16px] leading-[17px] font-medium font-Rubik transition-all duration-300 transform hover:bg-[#a5a5a5] active:scale-95"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>

      {/* Desktop View (With Image on the Right) */}
      <div className="hidden md:flex md:w-full md:max-w-[1200px] md:rounded-lg shadow-lg">
        <div className="md:w-1/2 p-10">
          <h1 className="text-3xl font-medium leading-9 font-Rubik text-[#1D2226] text-center mb-6">
            Sign in to your PopX account
          </h1>
          <p className="text-lg leading-6 font-Rubik text-[#777a7c] mb-6 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Email */}
          <div className="relative mb-4">
            <label className="text-[#6C25FF] text-sm absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-3 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="relative mb-6">
            <label className="text-[#6C25FF] text-sm absolute pl-2 pr-3 top-[-8px] left-3 bg-[#F7F8F9] leading-[17px] font-Rubik font-normal tracking-normal block mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="border border-[#CBCBCB] bg-[#F7F8F9] rounded-[6px] w-full p-3 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="bg-[#6C25FF] cursor-pointer w-full text-[#FFFFFF] py-2 rounded-[6px] text-lg font-medium font-Rubik transition-all duration-300 transform hover:bg-[#5a1dcd] active:scale-95"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>

        {/* Image */}
        <div className="md:w-full min-h-[80vh] bg-cover bg-center rounded-r-lg" style={{ backgroundImage: "url('/login.jpg')" }}></div>
      </div>
    </div>
  );
}

export default Login;
