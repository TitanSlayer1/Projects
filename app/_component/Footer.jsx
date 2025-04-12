import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";  
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-green-50 mt-6 dark:bg-gray-900">
      
      <h2 className="text-[12px] pt-1 text-center align-center text-green-900 px-5 mb-5">
        {" "}
        @ Developed by Shubham Vishwakarma During React-Next Workshop{" "}
      </h2>
      <div className="p-5 pl-140 md:pl-112 sm:pl-140 lg:pl-160">
      <Image src={'/logo.png'} alt='logo' width={170} height={50} />
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-gray-500 dark:text-gray-400">
        Grocery Store Application built using React and Next.js in a hands-on
        workshop. Project guided by Yatish Gautam and developed by workshop
        attender Shubham Vishwakarma, focusing on real-time shopping UI and
        Firebase integration.
      </p>
      <ul className="mt-12 flex flex-wrap justify-center gap-6  md:gap-8 lg:gap-12 text-gray-700 transition">
      <li className=" hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 cursor-pointer">
        <a href="https://lucky-react-next.vercel.app/firebase"></a>About</li>
      <li className=" hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 cursor-pointer">Careers</li>
      <li className=" hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 cursor-pointer">History</li>
      <li className=" hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 cursor-pointer">Services</li>
      <li className=" hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 cursor-pointer">Projects</li>
      <li className=" hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 cursor-pointer">Blog</li>
      </ul>
      <ul className="flex mt-12 gap-10 pl-145 align-middle space-y-12 ">
        <li className=" hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 cursor-pointer"><a href="https://react-icons.github.io/react-icons/search/#q=insta">
        <FaLinkedin size={25}/>
            </a></li>
        <li className=" hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 cursor-pointer"><a href="https://www.instagram.com/">
                <FaInstagramSquare size={25}/>
              </a></li>
        <li className=" hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 cursor-pointer"><a href="https://github.com/">
                <FaGithubSquare size={25}/>
              </a></li>
        <li className=" hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 cursor-pointer"><a href="https://www.youtube.com/">
                <FaSquareYoutube size={25}/>
              </a></li>
        <li className=" hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 cursor-pointer"><a href="https://discord.gg/sAeFEgKTXv">
                <FaDiscord size={25}/>
              </a></li>
      </ul>
      </div>
    
  );
}

export default Footer;