import { Link } from "react-router-dom";
import UseAuth from "../customHook/UseAuth";


const TutorCard = ({tutor}) => {
  const {theme} = UseAuth();
    // console.log(tutor);
    const { name, photo, language, review, description,_id } = tutor;
    return (
      <div
        className={`p-6 rounded-md shadow-md border ${
          theme && "bg-[#0B1120] border-gray-700"
        }`}
      >
        <img
          src={photo}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="flex items-center justify-between">
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
              Tutor
            </span>
            <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
          </div>
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
              Language
            </span>
            <h2 className="text-xl font-semibold tracking-wide">{language}</h2>
          </div>
        </div>
        <p className="dark:text-gray-800">
          {description.substring(0, 100)} ...
        </p>
        <div className="flex items-center justify-between mt-3">
          <h3>
            <span className="block text-sm font-medium tracking-widest dark:text-violet-600">
              Review: {review}
            </span>
          </h3>
          <Link to={`/tutor/${_id}`}>
            <button
              type="button"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium text-lg py-2 px-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    );
};

export default TutorCard;