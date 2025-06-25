import { CiMail, CiInstagram, CiLinkedin,  } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-8 space-y-8">
        <div className="py-8">
            <div id="connect" className="text-red-300 pb-8">
                <h1 className="font-bold text-7xl sm:text-9xl xl:text-[150px] pt-8">LET'S</h1>
                <h1 className="font-bold text-end text-7xl sm:text-9xl xl:text-[150px] pt-8">TALK</h1>
            </div>
            <div className="flex justify-end gap-x-8">
              <a href="mailto:muhammadichsan35341@gmail.com"><CiMail className="w-10 h-10 sm:w-16 sm:h-16"/></a>
              <a href="https://www.instagram.com/ichsan.frds/"><CiInstagram className="w-10 h-10 sm:w-16 sm:h-16"/></a>
              <a href="https://www.linkedin.com/in/ichsanfrds/"><CiLinkedin className="w-10 h-10 sm:w-16 sm:h-16"/></a>
              <a href="https://github.com/ichsan-frds"><FaGithub className="w-10 h-10 sm:w-16 sm:h-16"/></a>
            </div>
        </div>
    </footer>
  );
}