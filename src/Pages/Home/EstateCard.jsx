import Facility from "./Facility";
import { Link } from "react-router-dom";

const EstateCard = ({ estate }) => {
  const {
    id,
    estate_title,
    segment_name,
    price,
    status,
    area,
    location,
    facilities,
    image,
    offer,
    animation,
    delay,
    duration,
  } = estate;
  const shortFacilities = facilities.slice(0, 2);
  return (
    <div
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      className="card bg-base-100 shadow-xl p-7 border border-dark-15 font-worksans flex flex-col h-full"
    >
      <figure className="bg-dark-05 rounded-2xl">
        <img className="h-56 lg:h-72 w-full" src={image} alt={segment_name} />
      </figure>
      <div className="border-b-2 border-dashed pb-5 mt-5 grow">
        <div className="flex flex-col md:flex-row gap-2">
          {shortFacilities.map((facility, idx) => (
            <Facility key={idx} facility={facility}></Facility>
          ))}
        </div>
        <h2 className="card-title my-4 text-2xl font-playfair font-bold ">
          {estate_title}
        </h2>
        <div className="flex justify-between text-dark-8 font-medium">
          <p className="text-dark-8 font-medium"> {segment_name}</p>
          <p className="text-dark-8 font-medium"> {location}</p>
        </div>
      </div>
      <div className="flex justify-between mt-5 text-dark-8 font-medium">
        <p>{area}</p>
        <p>{status}</p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <h4 className="text-2xl text-green font-semibold">{price}</h4>
        <Link to={`/state/${id}`}>
          <button className="btn btn-success btn-sm">View Property</button>
        </Link>
      </div>
    </div>
  );
};

export default EstateCard;
