import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import EstateOfferCard from "./EstateOfferCard";

const Offer = () => {
  const offerState = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>HavenHideaway | Offer</title>
      </Helmet>
      <h2 className="text-3xl text-center my-10">Our Offeres</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {offerState.map((estate) => (
          <EstateOfferCard key={estate.id} estate={estate}></EstateOfferCard>
        ))}
      </div>
    </div>
  );
};

export default Offer;
