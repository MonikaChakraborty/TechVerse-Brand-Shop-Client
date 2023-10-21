import { MdEmail } from "react-icons/md";
import { BsFillClockFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";

// import { BiMap } from "react-icons/bi";

const GetInTouch = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-24">
      <div className="bg-gradient-to-r from-teal-600 to-sky-200 flex lg:flex-row flex-col justify-center gap-16 p-8 rounded-xl shadow-lg">
        <div className="flex flex-col w-1/2">
          <h1 className="text-4xl text-center mb-8 font-bold text-teal-100">
            Get In Touch
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <input
                className="w-full p-2 rounded-md border focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
                type="text"
              />
              <input
                className="w-full p-2 rounded-md border focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
                type="text"
              />
            </div>
            <input
              className="w-full p-2 rounded-md border focus:outline-none focus:border-blue-500"
              placeholder="Phone Number"
              type="text"
            />
            <textarea
              className="w-full p-2 rounded-md border focus:outline-none focus:border-blue-500"
              placeholder="Let us know what you need"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
            <button className="btn w-48 bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-md flex items-center gap-2 border-none">
              <FiSend />
              Send Message
            </button>
          </div>
        </div>

        <div className="flex flex-col bg-sky-100 p-4 w-1/2 gap-4 rounded-xl shadow-lg">
          <ContactInfo
          
            icon={<FaLocationDot />}
            title="Office Address"
            info="London, UK"
          />
          <ContactInfo
            icon={<MdEmail />}
            title="Mail Us On"
            info="techverse@gmail.com"
          />
          <ContactInfo
            icon={<BsFillClockFill />}
            title="Opening Hour"
            info="Sat-Thurs: 09-05 pm"
          />
          <ContactInfo
            icon={<BsFillTelephoneFill />}
            title="Make a call"
            info="+012-021-0123"
          />
          <button className="btn mt-2 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700">
            Find Our Location
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, title, info }) => (
  <div className="flex items-center gap-4">
    <span className="rounded-full p-2 bg-sky-200 text-2xl">{icon}</span>
    <div>
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="text-gray-700">{info}</p>
    </div>
  </div>
);

export default GetInTouch;
