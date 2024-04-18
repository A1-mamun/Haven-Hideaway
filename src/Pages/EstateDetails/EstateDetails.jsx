import { Link, useLoaderData, useParams } from "react-router-dom";
import Facility from "../Home/Facility";
import { Helmet } from "react-helmet-async";

const EstateDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const estate = estates.find((estate) => estate.id == id);
  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
    offer,
  } = estate;
  return (
    <div className="mt-7 container mx-auto  px-3 md:px-5 lg:px-0 ">
      <Helmet>
        <title>HavenHideaway | Estate Details</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-16 lg:h-[600px] border border-dark-15  p-5 rounded-xl">
        <div className="rounded-2xl lg:w-1/2 flex justify-center items-center">
          <img
            className="rounded-xl md:h-[400px] lg:h-full"
            src={image}
            alt={segment_name}
          />
        </div>
        <div className="font-worksans lg:w-1/2 flex flex-col">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-playfair text-dark">
            {estate_title}
          </h1>
          <div className="flex justify-between items-center">
            <p className="text-base md:text-xl font-medium text-dark-8 my-3 md:my-3 lg:my-4">
              {segment_name}
            </p>
            <p className="text-base md:text-xl font-medium text-dark-8 my-3 md:my-3 lg:my-4">
              {location}
            </p>
          </div>

          <hr />
          <div className="flex justify-between items-center">
            <p className="text-base md:text-xl font-medium text-dark-8 py-2 md:py-3 lg:py-4">
              {area}
            </p>
            <p className="text-base md:text-xl font-medium text-dark-8 py-2 md:py-3 lg:py-4">
              {status}
            </p>
          </div>

          <hr />
          <p className="text-sm md:text-base text-dark-7 py-3 md:py-4 lg:py-5 grow">
            <span className="font-bold text-dark">Details :</span> {description}
          </p>
          <div className=" mb-3 md:mb-4 lg:mb-5 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            <h4 className="font-bold text-dark text-lg">Facilities</h4>
            <div className="flex gap-2">
              {facilities.map((facility, idx) => (
                <Facility key={idx} facility={facility}></Facility>
              ))}
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center mt-5">
            <div className="flex gap-2 items-center">
              <h2 className=" text-3xl text-green font-bold">{price}</h2>
              {offer && (
                <p className="badge badge-primary badge-lg font-bold">
                  {offer}
                </p>
              )}
            </div>

            <Link to="/">
              <button className="btn btn-accent">Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
