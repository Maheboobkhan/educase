import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUserId = localStorage.getItem("currentUser");
    console.log("currentUserId: ", currentUserId);

    if (!currentUserId) {
      navigate("/login");
    } else {
      const userData = JSON.parse(currentUserId);
      console.log("userData: ", userData);
      setUser(userData);
    }
  }, [navigate]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleClick = () => {
    document.getElementById("file-input").click();
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div>
      <div className="bg-[#F7F8F9] min-h-screen block md:hidden">
        <div className="flex items-center bg-white pl-4 py-4 px-2 justify-between">
          <h1 className="font-rubik text-18px leading-[21px] text-text-main tracking-normal capitalize">
            Account Settings
          </h1>

          <button
            className="bg-[#6C25FF] cursor-pointer px-4 text-[#FFFFFF] py-4 rounded-[6px] text-[16px] leading-[17px] font-medium font-Rubik transition-all duration-300 transform hover:bg-[#5a1dcd] active:scale-95"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        {user && (
          <div className="flex px-6 gap-x-7 mt-7">
            <div className="relative">
              <img
                src={image || "/profile-image.png"}
                alt="profile"
                className="cursor-pointer"
                onClick={handleClick}
              />
              <img
                src="/attach-image.png"
                className="absolute bottom-0 right-0 cursor-pointer"
                alt="image attachment"
                onClick={handleClick}
              />
              <input
                id="file-input"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <div>
              <h1 className="font-rubik text-15px leading-[19px] text-text-main tracking-normal font-medium capitalize">
                {user.fullName}
              </h1>
              <p className="font-rubik text-14px leading-[19px] text-text-main tracking-normal font-normal capitalize">
                {user.email}
              </p>
            </div>
          </div>
        )}

        <p className="font-rubik text-[14px] leading-[22px] text-text-main tracking-normal capitalize px-6 mt-7 mx-auto">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>

      {/* desktop view */}
      <div className="bg-[#F7F8F9] min-h-screen hidden md:block">
        <div className="flex items-center bg-white pl-4 py-4 px-2 justify-between">
          <h1 className="font-rubik text-18px leading-[21px] text-text-main tracking-normal capitalize">
            Account Settings
          </h1>

          <button
            className="bg-[#6C25FF] cursor-pointer px-4 text-[#FFFFFF] py-4 rounded-[6px] text-[16px] leading-[17px] font-medium font-Rubik transition-all duration-300 transform hover:bg-[#5a1dcd] active:scale-95"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        {user && (
          <div className="flex px-6 gap-x-7 mt-7">
            <div className="relative">
              <img
                src={image || "/profile-image.png"}
                alt="profile"
                className="w-[250px] cursor-pointer"
                onClick={handleClick}
              />
              <img
                src="/attach-image.png"
                className="absolute w-[30px] bottom-10 right-0 cursor-pointer"
                alt="image attachment"
                onClick={handleClick}
              />
              <input
                id="file-input"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <div className="flex">
              <div className="w-[30%]">
                <h1 className="font-rubik text-[17px] leading-[19px] text-text-main tracking-normal font-medium capitalize">
                  <span className="font-bold text-[20px]">Name: </span>{user.fullName}
                </h1>
                <p className="font-rubik text-[17px] leading-[19px] text-text-main tracking-normal font-normal capitalize">
                <span className="font-bold text-[20px]">Email: </span>{user.email}
                </p>
              </div>
              <p className="w-[70%] border-[1px] border-[#ccc] font-rubik text-[14px] leading-[22px] text-text-main tracking-normal capitalize px-6 mt-7 mx-auto">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
