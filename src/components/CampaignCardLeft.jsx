/* eslint-disable react/prop-types */
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
const CampaignCardLeft = ({ campaignItem }) => {
  const { _id, campaignTitle, photo, description } = campaignItem || {};
  return (
    <div>
      <div className="hero card bg-base-200 max-w-[1024px] my-8 mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-white w-max-[400px] h-max-[400px] p-6">
            <img className="rounded-lg" src={photo} />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">
              Campaign Name: {campaignTitle}
            </h1>

            <p className="font-base"> {description}</p>

            <Link
              to={`/detailcampaign/${_id}`}
              className="btn bg-green-500 text-xl font-bold text-white"
            >
              See Detail
              <GoArrowUpRight className="text-3xl font-bold text-green-500 rounded-full bg-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCardLeft;
