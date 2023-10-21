// // import banner from '../../assets/Polygon Luminary.svg'
// import banner from '../../assets/Polygon Luminary (1).svg'

// const Banner = () => {
//     return (
//         <div className="mb-24">
//             <img className="h-screen" src={banner} alt="" />
//         </div>
//     );
// };

// export default Banner;

import banner from '../../assets/Polygon Luminary (1).svg';

const Banner = () => {
  return (
    <div className="relative mb-24">
      {/* Background Image */}
      <img
        className="h-screen w-full object-cover"
        src={banner}
        alt="TechVerse Banner"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text */}
      <div className="absolute inset-0 text-center flex flex-col justify-center">
        <h1 className='text-5xl font-bold text-sky-100 mb-4'>Welcome to TechVerse</h1>
        <p className='text-lg font-medium text-sky-200'>Welcome to TechVerse - Where Technology and Innovation converge. Discover a world of high-quality electronics, unparalleled performance, and endless possibilities. Experience the next level of Innovation at TechVerse. From State-of-the-Art smart devices to cutting-edge home appliances, we bring Tomorrow's Technology to you Today
</p>
      </div>
    </div>
  );
};

export default Banner;

