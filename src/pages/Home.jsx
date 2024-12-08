import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CampaignCard from "../components/CampaignCard";
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
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 max-w-[1140px] mx-auto">
        {campaign.map((campaignItem) => (
          <CampaignCard key={campaignItem._id} campaignItem={campaignItem} />
        ))}
      </div>
    </div>
  );
};

export default Home;
