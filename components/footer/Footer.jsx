import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white p-4 border shadow-md  bottom-0">
      <div className="flex flex-row justify-between items-start gap-2 mx-20 ">
        <div className="">
          <div className="flex flex-col items-start gap-2">
            <img src="logo.png" alt="" className="mb-10" />
            <div className="text-sm text-gray-600">
              © 2023 GIFT City - All intellectual property rights reserved
            </div>

            <div className="mt-4 md:mt-0">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-blue-600 hover:underline p-2 border rounded-full">
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-blue-600 hover:underline p-2 border rounded-full">
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-blue-600 hover:underline p-2 border rounded-full">
                  Youtube
                </a>
                <a
                  href="#"
                  className="text-blue-600 hover:underline p-2 border rounded-full">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="list-none flex flex-col items-center gap-2 ">
          <h2>ABOUT</h2>
          <li>BUSINESS</li>
          <li>UPDATES</li>
          <li>CONTACT</li>
          <li>PRIVACY</li>
        </div>
        <div className="list-none flex flex-col items-center gap-2">
          <h2>DOWNLOADS</h2>
          <li>RIGHT TO INFORMATION</li>
          <li>ODAS</li>
          <li>CAREER</li>
          <li>ACCREDITATION</li>
          <li>USEFUL LINKS</li>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <span className="">KEEP ME UPDATES</span>
            <p className="text-xs max-w-sm ">
              I want to stay up to date with the lastest developments and
              exciting news on how we are shaping the future !
            </p>
            <div className="border-b-2 mt-10 ">
              <input
                type="text"
                typeof="email"
                placeholder="your email"
                required
                className="bg-transparent border-none overflow-none border-spacing-0   ring-offset-white ring-offset-0"
              />
              <button className="border-none bg-transparent">SIGN UP</button>
            </div>
            <div className="flex flex-row gap-1">
              <input
                class="PrivateSwitchBase-input css-1m9pwf3"
                type="checkbox"
                data-indeterminate="false"
              />
              <span className="text-xs text-gray-500">
                I consent to share my information with GIFT City
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mx-20 justify-between  py-5 border-t mt-10 ">
        <div>+91-9099700247</div>
          <span className="text-orange-600 font-semibold text-base  ">query@giftgujarat.in | 079-61708300 | 1800 120 1300</span>
          <div>{""}</div>
      
      </div>
    </footer>
  );
};

export default Footer;
