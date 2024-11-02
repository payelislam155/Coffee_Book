import Banner from "../component/banner";
import Heading from "../component/Heading";

const Home = () => {
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
        {/* Dynamic Nested Components */}
      </div>
    );
};

export default Home;