import { Link } from "react-router-dom";


const TutorCard = ({tutor}) => {
    console.log(tutor);
    const { name, photo, language, review, description,_id } = tutor;
    return (
      <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
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
              className="px-4 py-1 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:shadow-md ease-in-out duration-300 transition-transform transform hover:scale-105"
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    );
};

export default TutorCard;