import { useLoaderData } from "react-router-dom";
import EstateCard from "./EstateCard";
import Banner from "./Banner";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const estates = useLoaderData();
  // console.log(estates);
  return (
    <div>
      <Helmet>
        <title>HavenHideaway | Home</title>
      </Helmet>
      <Banner></Banner>
      <h2 className="text-3xl text-center my-10">Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {estates.map((estate) => (
          <EstateCard key={estate.id} estate={estate}></EstateCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
