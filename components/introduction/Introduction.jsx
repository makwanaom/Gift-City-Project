"use client"
import React from "react";
import 'animate.css';
import Banner from "../Banner/Banner";
// import NextNProgress from 'nextjs-progressbar';
// import dynamic from 'next/dynamic';

// const NextNProgress = dynamic(
//   () => import('nextjs-progressbar'),
//   { ssr: false }
// );

const Introduction = () => {
  return (
    <div className=" animate__animated animate__fadeIn h-fit flex flex-col mt-3 ">
     {/* <NextNProgress color='#29D ' startPosition={0.3}
        stopDelayMs={200}
        height={3} /> */}

       <img 
       className=" h-72"
       loading="lazy"
       srcSet="https://d27p8o2qkwv41j.cloudfront.net/wp-content/uploads/2015/12/a2-e1448961647287.jpg" />

        <div className="  mt-4 flex">
          <div className=" w-8/12 bg-yellow-300">
          <p className=" p-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tortor pretium viverra suspendisse potenti nullam. Maecenas ultricies mi eget mauris pharetra et ultrices. Gravida cum sociis natoque penatibus. Nisl condimentum id venenatis a. Lectus quam id leo in vitae turpis massa sed elementum. Eget mi proin sed libero enim sed faucibus turpis. Pellentesque habitant morbi tristique senectus et netus et. Tellus rutrum tellus pellentesque eu tincidunt. Sed blandit libero volutpat sed cras ornare. Eget nullam non nisi est. Ultrices gravida dictum fusce ut placerat orci nulla. Sit amet commodo nulla facilisi nullam vehicula. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Massa massa ultricies mi quis hendrerit dolor magna eget.
          <br/> <br/>
          Eu tincidunt tortor aliquam nulla. Amet mauris commodo quis imperdiet. Facilisis leo vel fringilla est. Consequat nisl vel pretium lectus quam id leo in vitae. Fringilla phasellus faucibus scelerisque eleifend. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sed lectus vestibulum mattis ullamcorper. Morbi tristique senectus et netus et malesuada fames ac. Sed odio morbi quis commodo odio aenean sed adipiscing diam. 
          
          </p>
         
         
          </div>

            

            <div className=" ml-20  ">
              <img 
              className=" h-44"
              loading="lazy"
              srcSet="https://i.ytimg.com/vi/vwftMIwzG04/maxresdefault.jpg"
              />

              <img 
              className=" mt-11 h-44"
              loading="lazy"
              srcSet="https://techstory.in/wp-content/uploads/2016/08/gift-smart-city-1024x576.jpg"
              />
              
            </div>
        </div>


      <div className=" max-w-screen-2xl mx-auto mt-0 text-gray-700 ">
       
        
        <Banner />
      </div>


  
    </div>
  );
};

export default Introduction;
