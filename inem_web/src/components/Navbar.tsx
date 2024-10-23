import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import rightArrow from "../assets/decorations/ArrowRight.svg";
import logo from "../assets/Logo1.svg";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isDrawerOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const redirect = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
    setIsDrawerOpen(false); // Close drawer on navigation
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={`navbar-wrapper w-full items-center ${isAtTop ? "bg-[rgba(255,255,255,0)] text-white" : "bg-[#0E2442] text-white"} flex justify-between px-[8%] pl-[8%] xl:px-[16%] xl:pl-[16%] transition-all duration-1000`}>
      <div className="w-[40%] xl:w-auto">
        <img className="w-32 h-28 cursor-pointer" src={logo} alt="logo image" onClick={() => redirect("/")} />
      </div>
      <div className="gap-x-10 items-center hidden xl:flex">
        <h2 className={`cursor-pointer hover:text-[#439C91] ${isAtTop ? "text-white" : "text-white"} duration-300 ${isActive("/") ? "font-bold !text-[#439C91]" : "text-white"}`} onClick={() => redirect("/")}>
          Accueil
        </h2>
        <h2 className={`cursor-pointer hover:text-[#439C91] ${isAtTop ? "text-white" : "text-white"} duration-300 ${isActive("/projects") ? "font-bold !text-[#439C91]" : ""}`} onClick={() => redirect("/projects")}>
          Nos réalisations
        </h2>
        <h2 className={`cursor-pointer hover:text-[#439C91] ${isAtTop ? "text-white" : "text-white"} duration-300 ${isActive("/services") ? "font-bold !text-[#439C91]" : ""}`} onClick={() => redirect("/services")}>
          Nos prestations
        </h2>
        <h2 className={`cursor-pointer hover:text-[#439C91] ${isAtTop ? "text-white" : "text-white"} duration-300 ${isActive("/about") ? "font-bold !text-[#439C91]" : ""}`} onClick={() => redirect("/about")}>
          Notre histoire
        </h2>
      </div>
      <div className="items-center justify-center hidden mb-3 xl:flex h-full">
        <button className={`bg-[#439C91] mt-3 h-1/2 rounded-md px-[20px] duration-300 py-[10px] text-[#FFFFFF] font-medium hover:cursor-pointer hover:opacity-80 transform hover:scale-105 ${isActive("/contact") ? "font-bold" : ""}`} onClick={() => redirect("/contact")}>
          Contacte
        </button>
      </div>
      <div className="xl:hidden flex items-center">
        {isDrawerOpen === false && (
          <button onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        )}
      </div>

      {isDrawerOpen && <div className="fixed inset-0 opacity-90 z-40" onClick={() => setIsDrawerOpen(false)}></div>}
      <div className={`fixed top-0 left-0 w-[70%] h-full bg-[#0E2442] z-50 flex flex-col px-5 py-10 transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between w-full mb-10">
          <img src={logo} alt="logo image" className="w-[100px]" />
          <button className="mr-2 text-center" onClick={() => setIsDrawerOpen(false)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <p className="text-white font-medium text-sm mb-5">Menu</p>
        <div className="flex flex-col gap-y-5 text-white">
          <h2 className={`cursor-pointer hover:text-[#0B63E5] hover:duration-300 font-medium text-lg duration-300 ${isActive("/") ? "font-bold underline" : ""}`} onClick={() => redirect("/")}>
            {isActive("/") && <img src={rightArrow} alt="right arrow" className="inline mr-2 w-[20px]" />}
            Accueil
          </h2>
          <h2 className={`cursor-pointer hover:duration-300 font-medium text-lg duration-300 ${isActive("/projects") ? "font-bold underline" : ""}`} onClick={() => redirect("/projects")}>
            {isActive("/projects") && <img src={rightArrow} alt="right arrow" className="inline mr-2 w-[20px]" />}
            Nos réalisations
          </h2>
          <h2 className={`cursor-pointer  hover:duration-300 font-medium text-lg duration-300 ${isActive("/services") ? "font-bold underline" : ""}`} onClick={() => redirect("/services")}>
            {isActive("/services") && <img src={rightArrow} alt="right arrow" className="inline mr-2 w-[20px]" />}
            Services
          </h2>
          <h2 className={`cursor-pointer hover hover:duration-300 font-medium text-lg duration-300 ${isActive("/about") ? "font-bold underline" : ""}`} onClick={() => redirect("/about")}>
            {isActive("/about") && <img src={rightArrow} alt="right arrow" className="inline mr-2 w-[20px]" />}
            Notre histoire
          </h2>
          <h2 className={`cursor-pointer hover hover:duration-300 font-medium text-lg duration-300 ${isActive("/contact") ? "font-bold underline" : ""}`} onClick={() => redirect("/contact")}>
            {isActive("/contact") && <img src={rightArrow} alt="right arrow" className="inline mr-2 w-[20px]" />}
            Contacte
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
