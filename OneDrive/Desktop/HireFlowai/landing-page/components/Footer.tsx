import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to land <span className="text-purple">your</span> dream job?
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center">
          Start practicing interviews and tracking applications with HireFlow AI.
        </p>

        {/* ✅ Updated email CTA */}
        <a href="mailto:contact@hireflowai.in?subject=Inquiry%20from%20HireFlow%20Website">
          <MagicButton
            title="Contact Us"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

        {/* ✅ Optional: visible email */}
        <p className="text-sm text-white-300 mt-4">
          or email us at{" "}
          <a
            href="mailto:contact@hireflowai.in"
            className="text-purple underline"
          >
            contact@hireflowai.in
          </a>
        </p>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          © 2026 HireFlow AI
        </p>

        
      </div>
    </footer>
  );
};

export default Footer;
