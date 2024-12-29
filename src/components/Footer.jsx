
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon  from '@mui/icons-material/Facebook';
import TwitterIcon  from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon   from '@mui/icons-material/Reddit';
import logo from "../assets/anime.png"

function Footer() {
//all the icnons inported  from material UI 
  return (
    <>
    <div className="line_bg my-4 w-[100%]"></div>
    <footer id="About" className="flex flex-col sm:flex-row justify-center items-center  p-1 mt-8 rounded-sm box_bg">
      <div className="flex justify-center flex-col items-start">
        <p  ><img src={logo} alt="logo" className="w-[30%] h-[30%]"/></p>
      </div>
      <div className="flex flex-col justify-center items-start">
        <h1 className="font-bold text-xl">Join Community</h1>
        <p className="m-2 text-2xl font-semibold cursor-pointer  hover:text-orange-600">Career</p>
        <p className="m-2 text-2xl font-semibold cursor-pointer  hover:text-orange-600">Movies</p>
        <p className="m-2 text-2xl font-semibold cursor-pointer  hover:text-orange-600">Latest</p>
        <p className="m-2 text-2xl font-semibold cursor-pointer  hover:text-orange-600">contact us</p>
      </div>
        
      <div className="flex justify-center items-start">
        <p className=" m-2 cursor-pointer  hover:text-black"><InstagramIcon></InstagramIcon></p>
        <p className=" m-2 cursor-pointer  hover:text-black"><FacebookIcon></FacebookIcon></p>
        <p className=" m-2 cursor-pointer  hover:text-black"><TwitterIcon></TwitterIcon></p>
        <p className=" m-2 cursor-pointer  hover:text-black"><LinkedInIcon></LinkedInIcon></p>
        <p className=" m-2 cursor-pointer  hover:text-black"><RedditIcon></RedditIcon></p>
      </div>
      <hr />
    </footer>

   <div className="m-1 text-center mb-5">© 2023 Your Company. All rights reserved.</div>
   </>
  );
}

export default Footer;
