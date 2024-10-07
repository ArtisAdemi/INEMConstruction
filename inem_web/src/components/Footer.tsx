import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/Logo1.svg";

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = (path: string) => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="footer-wrapper px-[8%] xl:px-[16%] bg-[#0E2442] flex flex-col justify-between">
      <div className="justify-between xl:flex gap-3 py-[125px] border-b border-[#999999]">
        <div className="md:w-[30%] w-full">
          <div className="mb-5 items-end">
            <img className="w-64 cursor-pointer" src={logo} alt="logo image" onClick={() => redirect("/")} />
          </div>
          <p className="text-[#999999] mb-8">We build readymade websites, mobile applications, and elaborate online business services</p>
        </div>
        <div className="md:w-[30%] w-full">
          <div className="mb-5 items-end">
            <h2 className="text-white font-semibold mb-3">WORKING HOURS</h2>
            <p className="text-[#999999]">We work 7 days a week, every day excluding major holidays. Contact us if you have an emergency, with our Hotline and Contact form.</p>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-[#999999]">Monday-Friday</p>
              <p className="text-[#999999]">Saturday</p>
              <p className="text-[#999999]">Sunday and holidays</p>
            </div>
            <div>
              <p className="text-[#999999]">10:00 - 16:00</p>
              <p className="text-[#999999]">12:00 - 15:00</p>
              <p className="text-[#999999]">09:00 - 12:00</p>
            </div>
          </div>
        </div>

        <div className="xl:flex gap-3 justify-center md:w-[30%] w-full mt-12 xl:mt-4">
          <div className="flex flex-col gap-y-2">
            <h2 className={`cursor-pointer hover:text-[#439C91] duration-300 ${isActive("/") ? "font-bold text-[#439C91]" : "text-[#999999]"}`} onClick={() => redirect("/")}>
              {isActive("/") ? "- Home" : "Home"}
            </h2>
            <h2 className={`cursor-pointer hover:text-[#439C91] duration-300 ${isActive("/projects") ? "font-bold text-[#439C91]" : "text-[#999999]"}`} onClick={() => redirect("/projects")}>
              {isActive("/projects") ? "- Projects" : "Projects"}
            </h2>
            <h2 className={`cursor-pointer hover:text-[#439C91] duration-300 ${isActive("/services") ? "font-bold text-[#439C91]" : "text-[#999999]"}`} onClick={() => redirect("/services")}>
              {isActive("/services") ? "- Services" : "Services"}
            </h2>
            <h2 className={`cursor-pointer hover:text-[#439C91] duration-300 ${isActive("/about") ? "font-bold text-[#439C91]" : "text-[#999999]"}`} onClick={() => redirect("/about")}>
              {isActive("/about") ? "- About Us" : "About Us"}
            </h2>
            <h2 className={`cursor-pointer hover:text-[#439C91] duration-300 ${isActive("/contact") ? "font-bold text-[#439C91]" : "text-[#999999]"}`} onClick={() => redirect("/contact")}>
              {isActive("/contact") ? "- Contact Us" : "Contact Us"}
            </h2>
          </div>
        </div>
      </div>
      <div className="mb-20 md:mb-0 md:py-8 flex justify-center">
        <span className=" text-white hover:text-[#439C91]">Copyright © {new Date().getFullYear()} Influxo. All Rights Reserved.</span>
      </div>
    </div>
  );
};
