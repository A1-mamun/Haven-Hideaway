import { useLoaderData } from "react-router-dom";
import EstateCard from "./EstateCard";

const Home = () => {
  const estates = useLoaderData();
  // console.log(estates);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {estates.map((estate) => (
          <EstateCard key={estate.id} estate={estate}></EstateCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
