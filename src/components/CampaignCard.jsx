import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CampaignCard = ({ campaignItem }) => {
  //   console.log(campaignItem);
  const { _id, campaignTitle, photo } = campaignItem || {};
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={photo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{campaignTitle}</h2>
          <p></p>
          <div className="card-actions justify-end">
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

export default CampaignCard;
