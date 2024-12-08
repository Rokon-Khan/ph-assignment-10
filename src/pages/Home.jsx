import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import CampaignCard from "../components/CampaignCard";
import OurGoal from "../components/OurGoal";
import OurMission from "../components/OurMission";
import Slider from "../components/Slider";

const Home = () => {
  // const navigate = useNavigate();

  const data = useLoaderData();
  // const { category } = useParams();
  const [campaign, setCampaign] = useState([]);
  // console.log(campaign);

  useEffect(() => {
    setCampaign(data);
  }, [data]);

  return (
    <div>
      <Slider></Slider>
      <div className="text-3xl font-bold max-w-[1024px] mx-auto py-4 rounded-lg bg-slate-300 mb-5 text-center">
        <h1
          style={{ paddingTop: "1rem", margin: "auto 0", fontWeight: "normal" }}
        >
          Joint Our Fund Raiser Project to{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Contribute Social", "Make Innovative "]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 max-w-[1140px] mx-auto">
        {campaign.map((campaignItem) => (
          <CampaignCard key={campaignItem._id} campaignItem={campaignItem} />
        ))}
      </div>
      <OurGoal></OurGoal>
      <OurMission></OurMission>
    </div>
  );
};

export default Home;
