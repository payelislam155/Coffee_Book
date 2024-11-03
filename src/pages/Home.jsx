import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../component/banner";
import Heading from "../component/Heading";
import Caegories from "./Caegories";

const Home = () => {
    const categories = useLoaderData()
    return (
      <div>
        {/* Banner */}
        <Banner></Banner>
        {/* Heading */}
        <Heading
          title={"Browse Coffees by Category"}
          subtitle={
            "choose something from something He chose a shirt from the many in his wardrobe"
          }
        ></Heading>
        {/* Categories Tab */}
        <Caegories categories={categories}></Caegories>
        {/* Dynamic Nested Components */}
        <Outlet></Outlet>
      </div>
    );
};

export default Home;