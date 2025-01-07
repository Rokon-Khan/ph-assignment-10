// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import CampaignCardLeft from "../components/CampaignCardLeft";
// import CampaignCardRight from "../components/CampaignCardRight";

// const AllCampaign = () => {
//   const data = useLoaderData();
//   const [campaign, setCampaign] = useState([]);
//   // console.log(campaign);

//   useEffect(() => {
//     setCampaign(data);
//   }, [data]);
//   return (
//     <div>
//       <div className="grid grid-cols-1  my-12">
//         {campaign.map((campaignItem, idx) =>
//           idx % 2 === 0 ? (
//             <CampaignCardLeft
//               key={campaignItem._id}
//               campaignItem={campaignItem}
//             />
//           ) : (
//             <CampaignCardRight
//               key={campaignItem._id}
//               campaignItem={campaignItem}
//             />
//           )
//         )}

//         {/* {donations
//           .filter((campaign) => campaign.id % 2 !== 0)
//           .map((campaign) => (
//             <CardLeft key={campaign.id} campaign={campaign} />
//           ))} */}
//       </div>
//     </div>
//   );
// };

// export default AllCampaign;

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CampaignCardLeft from "../components/CampaignCardLeft";
import CampaignCardRight from "../components/CampaignCardRight";

const AllCampaign = () => {
  const data = useLoaderData();
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    setCampaign(data);
  }, [data]);

  return (
    <div>
      <div className="overflow-x-auto my-12">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="text-xl font-bold">User Info</th>
              <th className="text-xl font-bold">Campaign Name</th>
              <th className="text-xl font-bold">Campaign Description</th>
              <th className="text-xl font-bold">View Detail</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaign;
