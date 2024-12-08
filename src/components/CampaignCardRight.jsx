/* eslint-disable react/prop-types */
import { useContext } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";

const CampaignCardRight = ({ campaignItem }) => {
  const { user } = useContext(AuthContext);
  const { _id, campaignTitle, description } = campaignItem || {};
  return (
    <div>
      {/* <div className="card hero bg-base-200 max-w-[1024px] my-8 mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card bg-white w-max-[400px] h-max-[400px] p-5">
            <img className="rounded-lg" src={photo} />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">
              Campaign Name: {campaignTitle}
            </h1>

            <p> {description}</p>
            <Link
              to={`/detailcampaign/${_id}`}
              className="btn bg-green-500 text-xl font-bold text-white"
            >
              See Detail
              <GoArrowUpRight className="text-3xl font-bold text-green-500 rounded-full bg-white" />
            </Link>
          </div>
        </div>
      </div> */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="text-xl font-bold">User Info</th>
              <th className="text-xl font-bold">Campaign Name</th>
              <th className="text-xl font-bold"> Campaign Description</th>
              <th className="text-xl font-bold">View Detail</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user?.photoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user?.displayName}</div>
                  </div>
                </div>
              </td>
              <td className="text-xl font-bold">{campaignTitle}</td>
              <td>{description}</td>
              <td>
                <div>
                  <Link
                    to={`/detailcampaign/${_id}`}
                    className="btn items-center flex-nowrap bg-green-500 text-lg font-bold text-white"
                  >
                    See More
                    <GoArrowUpRight className="text-3xl font-bold text-green-500 rounded-full bg-white" />
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignCardRight;
