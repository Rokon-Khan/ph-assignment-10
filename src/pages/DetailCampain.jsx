import { useEffect, useState } from "react";
import { IoMdStarHalf } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";

const DetailCampain = () => {
  const data = useLoaderData();
  console.log(data);

  const { id } = useParams();
  const [campaigns, setCampaigns] = useState({});
  console.log(campaigns);

  useEffect(() => {
    const singleCampaign = data.find((campaign) => campaign._id == id);
    setCampaigns(singleCampaign);
  }, [data, id]);
  const { campaignTitle, photo, description, date, number } = campaigns || {};
  return (
    <div>
      <div className="hero max-w-[1020px] bg-base-200 mx-auto rounded-xl my-6">
        <div className="hero-content flex-col lg:flex-row gap-6">
          <img
            className="lg:max-w-[424px] lg:max-h-[503px] max-w-[300px] max-h-[300px] rounded-2xl"
            src={photo}
          />
          <div className="space-y-3">
            <h2 className="text-3xl semi-bold">{campaignTitle}</h2>

            <span className="badge bg-[rgba(47,156,8,0.1)] p-3 font-bold">
              Status: Running
            </span>
            <h1 className="text-2xl md:text-lg">
              Campaign Detail: {description}
            </h1>
            <h1 className="text-2xl md:text-lg font-bold">
              Campaign Duration: {date}
            </h1>
            <h1 className="text-2xl md:text-lg font-bold">
              Target Amount: ${number}
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
    </div>
  );
};

export default DetailCampain;
