// import about1 from '../../assets/about1.jpg'
// import about2 from '../../assets/about2.jpg'
// import { BsFillLightbulbFill } from "react-icons/bs";
// import { BsPeopleFill } from "react-icons/bs";
// import { AiFillStar } from "react-icons/ai";
// import { FcGlobe } from "react-icons/fc";

// const AboutUs = () => {
//     return (
//         <div className='max-w-screen-xl mx-auto mb-24'>
//             <div className="flex justify-center  bg-sky-100 rounded-md">
//             <div className='w-[60%] p-16'>
//             <h1 className='text-4xl font-bold text-teal-800 mb-4'>About Us</h1>
//                 <h1 className='text-2xl font-bold text-teal-600 mb-4'>Discover the TechVerse Difference: Crafting Tomorrow's Technology Today</h1>
//                 <p className='text-bg text-gray-600'>At TechVerse, we are more than just a tech brand; we are enthusiasts, innovators, and pioneers in bringing cutting-edge technology to your fingertips. Our journey began with a passion for redefining the tech landscape, and today, we stand as your go-to destination for premium gadgets and electronics. With a commitment to quality, innovation, and customer satisfaction, we strive to elevate your tech experience.</p>

//                 <div className='mt-8 grid grid-cols-2 gap-12'>
//                     <h3><BsFillLightbulbFill></BsFillLightbulbFill>Innovative Technology</h3>
//                     <h3><BsPeopleFill></BsPeopleFill>Innovative Technology</h3>
//                     <h3><AiFillStar></AiFillStar>Innovative Technology</h3>
//                     <h3><FcGlobe></FcGlobe>Innovative Technology</h3>
//                 </div>
//             </div>
//             <div className="w-[40%] mt-12 -ml-12">
//                 <img className="rounded h-[400px]  w-[600px]" src={about2} alt="" />
//                 <img className="rounded relative -top-20  w-[300px] " src={about1} alt="" />
//             </div>
//         </div>
//         </div>
//     );
// };

// export default AboutUs;

// ... (your imports)

import about1 from "../../assets/about1.jpg";
// import about2 from "../../assets/about2.jpg";
import about2 from "../../assets/about4.jpg";

import { BsFillLightbulbFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { FcGlobe } from "react-icons/fc";
import { BsFillPlayCircleFill } from "react-icons/bs";


const AboutUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-24">
      <div className="flex justify-center bg-gradient-to-r from-sky-100 to-teal-400 rounded-xl p-8">
        <div className="w-[60%] p-16">
          <h1 className="text-4xl font-bold text-teal-800 mb-4">About Us</h1>
          <h2 className="text-2xl font-bold text-teal-600 mb-4">
            Discover the TechVerse Difference: Crafting Tomorrow's Technology
            Today
          </h2>
          <p className="text-lg text-gray-600">
            At TechVerse, we are more than just a tech brand; we are
            enthusiasts, innovators, and pioneers in bringing cutting-edge
            technology to your fingertips. Our journey began with a passion for
            redefining the tech landscape, and today, we stand as your go-to
            destination for premium gadgets and electronics. With a commitment
            to quality, innovation, and customer satisfaction, we strive to
            elevate your tech experience.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-8">
            <h3 className="flex items-center text-gray-600 font-semibold text-lg">
              <BsFillLightbulbFill size={30} className="mr-2 text-yellow-300"></BsFillLightbulbFill>
              Innovative Technology
            </h3>
            <h3 className="flex items-center text-gray-600 font-semibold text-lg">
              <BsPeopleFill size={30} className="mr-2 text-blue-500"></BsPeopleFill>Customer-Centric
              Approach
            </h3>
            <h3 className="flex items-center text-gray-600 font-semibold text-lg">
              <AiFillStar size={30} className="mr-2 text-amber-400"></AiFillStar>Quality Assurance
            </h3>
            <h3 className="flex items-center text-gray-600 font-semibold text-lg">
              <FcGlobe size={30} className="mr-2"></FcGlobe>Global Reach
            </h3>
          </div>
          <button className="btn mt-12 text-white bg-teal-600 normal-case text-base hover:bg-teal-800">Meet with Us</button>
        </div>
        <div className="w-[40%] mt-12 -ml-12 relative">
          <img
            className="rounded-xl h-[400px] w-[600px] object-cover"
            src={about2}
            alt=""
          />
         
          <img
            className="rounded-xl border-8 border-teal-400 absolute bottom-8 left-56 w-[300px] object-cover"
            src={about1}
            alt=""
          />
           <div className="absolute bottom-[215px] bg-teal-200 rounded-full border border-teal-200 left-52 text-teal-800 cursor-pointer">
            <BsFillPlayCircleFill size={40}></BsFillPlayCircleFill></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
