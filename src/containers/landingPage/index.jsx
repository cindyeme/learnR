import AboutBrief from "./aboutBrief";
import Banner from "./Banner";
import Discover from "./Discover";
import Explore from "./Explore";
import Teachers from "./Teachers";

const HomeIndex = () => {
  return (
    <div className="pb-16">
      <Banner />
      <AboutBrief />
      <Discover />
      <Explore />
      <Teachers title="Meet the Best Teachers" home />
    </div>
  )
}

export default HomeIndex;