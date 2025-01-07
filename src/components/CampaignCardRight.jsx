// /* eslint-disable react/prop-types */
// import { useContext } from "react";
// import { GoArrowUpRight } from "react-icons/go";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../authprovider/AuthProvider";

// const CampaignCardRight = ({ campaignItem }) => {
//   const { user } = useContext(AuthContext);
//   const { _id, campaignTitle, description } = campaignItem || {};
//   return (
//     <div>
//       {/* <div className="card hero bg-base-200 max-w-[1024px] my-8 mx-auto">
//         <div className="hero-content flex-col lg:flex-row">
//           <div className="card bg-white w-max-[400px] h-max-[400px] p-5">
//             <img className="rounded-lg" src={photo} />
//           </div>
//           <div className="space-y-2">
//             <h1 className="text-3xl font-bold">
//               Campaign Name: {campaignTitle}
//             </h1>

//             <p> {description}</p>
//             <Link
//               to={`/detailcampaign/${_id}`}
//               className="btn bg-green-500 text-xl font-bold text-white"
//             >
//               See Detail
//               <GoArrowUpRight className="text-3xl font-bold text-green-500 rounded-full bg-white" />
//             </Link>
//           </div>
//         </div>
//       </div> */}
//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <th className="text-xl font-bold">User Info</th>
//               <th className="text-xl font-bold">Campaign Name</th>
//               <th className="text-xl font-bold"> Campaign Description</th>
//               <th className="text-xl font-bold">View Detail</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* row 1 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle h-12 w-12">
//                       <img
//                         src={user?.photoURL}
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">{user?.displayName}</div>
//                   </div>
//                 </div>
//               </td>
//               <td className="text-xl font-bold">{campaignTitle}</td>
//               <td>{description}</td>
//               <td>
//                 <div>
//                   <Link
//                     to={`/detailcampaign/${_id}`}
//                     className="btn items-center flex-nowrap bg-green-500 text-lg font-bold text-white"
//                   >
//                     See More
//                     <GoArrowUpRight className="text-3xl font-bold text-green-500 rounded-full bg-white" />
//                   </Link>
//                 </div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CampaignCardRight;

/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";

const CampaignCardRight = ({ campaignItem }) => {
  const { user } = useContext(AuthContext);
  const { _id, campaignTitle, description } = campaignItem || {};
  const truncatedDescription =
    description.length > 80 ? `${description.slice(0, 80)}...` : description;

  return (
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
              {user?.photoURL ? (
                <img src={user.photoURL} alt="User Avatar" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50px"
                  viewBox="0 -960 960 960"
                  width="50px"
                  fill="#currentColor"
                >
                  <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                </svg>
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{user?.displayName || "Guest User"}</div>
          </div>
        </div>
      </td>
      <td className="text-xl font-bold">{campaignTitle}</td>
      <td>{truncatedDescription}</td>
      <td>
        <Link
          to={`/detailcampaign/${_id}`}
          className="btn  bg-green-500 text-lg font-bold text-white"
        >
          See More
          {/* <GoArrowUpRight className="text-3xl font-bold text-green-500 rounded-full bg-white" /> */}
        </Link>
      </td>
    </tr>
  );
};

export default CampaignCardRight;
