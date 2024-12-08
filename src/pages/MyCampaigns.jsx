import { useContext, useEffect, useState } from "react";
import { IoMdStarHalf } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { AuthContext } from "../authprovider/AuthProvider";

const MyCampaigns = () => {
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      if (!user?.email) return;

      try {
        const response = await fetch(
          `http://localhost:5000/addnewcampaign?email=${user.email}`
        );
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, [user]);

  return (
    <div>
      <h1>My Campaigns</h1>
      {campaigns.length > 0 ? (
        campaigns.map((campaign) => (
          <div
            key={campaign._id}
            className="hero max-w-[1020px] bg-base-200 mx-auto rounded-xl my-6"
          >
            <div className="hero-content flex-col lg:flex-row gap-6">
              <img
                className="lg:max-w-[424px] lg:max-h-[503px] max-w-[300px] max-h-[300px] rounded-2xl"
                src={campaign?.photo}
              />
              <div className="space-y-3">
                <h2 className="text-3xl semi-bold">
                  {campaign?.campaignTitle}
                </h2>

                <span className="badge bg-[rgba(47,156,8,0.1)] p-3 font-bold">
                  Status: Running
                </span>
                <h1 className="text-2xl md:text-lg">
                  Campaign Detail: {campaign?.description}
                </h1>
                <h1 className="text-2xl md:text-lg">
                  Campaign Duration: {campaign?.date}
                </h1>

                <h4 className="text-xl font-bold flex gap-2 justify-start items-center">
                  Public Rating: 4.9
                  <span className="text-yellow-400 font-bold flex gap-2">
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <IoMdStarHalf />
                  </span>
                </h4>
              </div>
            </div>
          </div>
          // <div key={campaign._id}>
          //   <h2>{campaign.campaignTitle}</h2>
          //   <p>{campaign.description}</p>
          // </div>
        ))
      ) : (
        <p className="text-3xl font-bold text-center max-w-[1024px] mx-auto bg-slate-300 py-4 rounded-lg">
          No campaigns found.
        </p>
      )}
    </div>
  );
};

export default MyCampaigns;
