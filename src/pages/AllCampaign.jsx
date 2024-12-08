import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CampaignCardLeft from "../components/CampaignCardLeft";
import CampaignCardRight from "../components/CampaignCardRight";

const AllCampaign = () => {
  const data = useLoaderData();
  const [campaign, setCampaign] = useState([]);
  // console.log(campaign);

  useEffect(() => {
    setCampaign(data);
  }, [data]);
  return (
    <div>
      <div className="grid grid-cols-1  my-12">
        {campaign.map((campaignItem, idx) =>
          idx % 2 === 0 ? (
            <CampaignCardLeft
              key={campaignItem._id}
              campaignItem={campaignItem}
            />
          ) : (
            <CampaignCardRight
              key={campaignItem._id}
              campaignItem={campaignItem}
            />
          )
        )}

        {/* {donations
          .filter((campaign) => campaign.id % 2 !== 0)
          .map((campaign) => (
            <CardLeft key={campaign.id} campaign={campaign} />
          ))} */}
      </div>
    </div>
  );
};

export default AllCampaign;
