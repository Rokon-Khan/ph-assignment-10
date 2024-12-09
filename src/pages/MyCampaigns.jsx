import { useContext, useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../authprovider/AuthProvider";
//
const MyCampaigns = () => {
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      if (!user?.email) return;

      try {
        const response = await fetch(
          `https://ph-assignment-server-10.vercel.app/addnewcampaign?email=${user.email}`
        );
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, [user]);

  const handleDelte = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://ph-assignment-server-10.vercel.app/addnewcampaign/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Done!!!",
                text: "Campaign Deleted Successfully!",
                icon: "success",
              });
              const remaining = campaigns.filter((camp) => camp._id !== _id);
              setCampaigns(remaining);
            } else {
              Swal.fire({
                title: "Error",
                text: "Failed to delete the campaign.",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting campaign:", error);
            Swal.fire({
              title: "Error",
              text: "Failed to delete the campaign.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      {campaigns.length > 0 ? (
        campaigns.map((campaign) => (
          <div key={campaign._id} className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-xl font-bold">Campaign Name</th>
                  <th className="text-xl font-bold">Status</th>
                  <th className="text-xl font-bold">Deadline Date </th>
                  <th className="text-xl font-bold">Update</th>
                  <th className="text-xl font-bold">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-xl font-bold">
                    {campaign?.campaignTitle}
                  </td>
                  <td className="text-xl font-bold">Running</td>
                  <td className="text-xl font-bold">{campaign?.date}</td>
                  <td>
                    <Link
                      to={`/updateCampaign/${campaign?._id}`}
                      className="btn items-center flex-nowrap bg-green-500 text-lg font-bold text-white"
                    >
                      Update
                      <GoArrowUpRight className="text-2xl font-bold text-green-500 rounded-full bg-white" />
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelte(campaign._id)}
                      className="btn btn-error text-lg font-bold text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
