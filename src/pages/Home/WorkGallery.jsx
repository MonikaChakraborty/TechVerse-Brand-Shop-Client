
import { useState } from "react";
import Gallery from "../../../public/Gallery";
import './WorkGallery.css'

const WorkGallery = () => {

  const [galleries, setGalleries] = useState(Gallery);

  const filterGallery = (categoryGallery) => {
    const updatedGallery = Gallery.filter((currentElement) =>{
      return currentElement.category === categoryGallery;
    });

    setGalleries(updatedGallery);

  }


  return (
    <div className="max-w-screen-xl mx-auto mb-16 lg:mb-24">
      <h2 className="text-4xl mb-8 text-center text-teal-700 font-medium">Our Work Gallery</h2>

      <div className="flex justify-evenly mb-10">
      <button onClick={() => setGalleries(Gallery)} className="px-10 font-medium rounded text-white bg-teal-600 normal-case text-lg hover:bg-teal-800">All</button>
        <button onClick={() => filterGallery('collaboration')} className="p-3 font-medium rounded text-white bg-teal-600 normal-case text-lg hover:bg-teal-800">Collaboration</button>
        <button onClick={() => filterGallery('Work Project')} className="p-3 font-medium rounded text-white bg-teal-600 normal-case text-lg hover:bg-teal-800">Work Project</button>
        <button onClick={() => filterGallery('Innovation Hub')} className="p-3 font-medium rounded text-white bg-teal-600 normal-case text-lg hover:bg-teal-800">Innovation Hub</button>
        <button onClick={() => filterGallery('Creative Corner')} className="p-3 font-medium rounded text-white bg-teal-600 normal-case text-lg hover:bg-teal-800">Creative Corner</button>
      
      </div>

      {/* gallery */}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

        {
          galleries.map((element) => {
            const {id, name, image, category, description} = element;

            return (
              <div className="card gallery-card" key={id}>
            
                 <img className="w-full lg:h-[40vh] object-cover" src={image} alt="" />
               
               <div className="intro p-2 text-white white items-center justify-center font-bold">
                <h1 className=" p-2 uppercase">{category}</h1>
                 <p className="p-2">{description}</p>
               </div>
             </div>
            )
          })
        }
      

    
    </div>
    </div>
  );
};

export default WorkGallery;
