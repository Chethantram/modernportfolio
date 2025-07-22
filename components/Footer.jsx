
import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import Image from 'next/image';
import githubImg from "../images/github.png";
import linkedinImg from "../images/linkedin.png";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='border-t-2 bg-gray-300 dark:bg-transparent dark:border-white/40 py-4 text-center flex items-center justify-between px-3 md:px-16'>
      <span className='text-sm md:text-md font-medium text-gray-800 dark:text-gray-400'>&copy; {currentYear} Chethan | All rights reserved.</span>
      <div className='flex items-center gap-3'>
        <a target="_blank" rel="noopener noreferrer" href='https://github.com/Chethantram' className='opacity-80 dark:opacity-100'>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                  
                    src={githubImg}
                    alt="github"
                    width={30}
                    height={30}
                    className="bg-white/60 rounded-full -z-10 cursor-pointer"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github</p>
                </TooltipContent>
              </Tooltip>
            </a>
        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/chethant/' className='opacity-80 dark:opacity-100'>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={linkedinImg}
                    alt="linkedin"
                    width={32}
                    height={32}
                    className="bg-white/60 rounded-full -z-10 cursor-pointer"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Linkedin</p>
                </TooltipContent>
              </Tooltip>
            </a>
      </div>
    </div>
  )
}

export default Footer