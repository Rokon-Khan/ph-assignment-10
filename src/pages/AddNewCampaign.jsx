import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../authprovider/AuthProvider";
const AddNewCampaign = () => {
  const { user } = useContext(AuthContext);

  const handleAddNewCampaign = (e) => {
    e.preventDefault();

    const campaignTitle = e.target.campaignTitle.value;
    const email = e.target.email.value;
    const userName = e.target.userName.value;
    const photo = e.target.photo.value;
    const number = e.target.number.value;
    const description = e.target.description.value;
    const campaignType = e.target.campaignType.value;
    const date = e.target.date.value;

    const addNewCampaign = {
      campaignTitle,
      email,
      userName,
      photo,
      number,
      description,
      campaignType,
      date,
    };

    console.log(addNewCampaign);

    // Send data to the server and database
    fetch("http://localhost:5000/addnewcampaign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addNewCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("Successfully added");
          Swal.fire({
            title: "Success!",
            text: "New Campaign added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error adding campaign:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to add campaign. Please try again later.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  return (
    <div>
      <div className="w-full h-[250px] bg-green-600 text-center text-white space-y-3  py-6">
        <h2 className="text-3xl font-bold">Add New Campaign</h2>
        <p className=" max-w-[796px] mx-auto">
          Ready to make a difference? Start your own crowdfunding campaign
          today! Whether it's a personal cause, a community initiative, a
          creative project, or a life-changing event, our platform empowers you
          to bring your vision to life.
        </p>
      </div>
      <div className="card bg-base-100 w-full lg:max-w-screen-lg max-w-sm mx-auto my-10 shrink-0 shadow-2xl">
        <form onSubmit={handleAddNewCampaign} className="card-body">
          {/* Title Row & Photo Row*/}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Campaign Title</span>
              </label>
              <input
                type="text"
                name="campaignTitle"
                placeholder="Write Your Campaign Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                required
                name="photo"
                placeholder="Input Campaign Photo URL"
                className="input input-bordered"
              />
            </div>
          </div>
          {/* Campaign Type & Description*/}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Slect a Campaign to Create</span>
                </div>
                <select
                  className="select select-bordered"
                  name="campaignType"
                  defaultValue="default"
                  required
                >
                  <option value="default" disabled>
                    Select a Campaign
                  </option>
                  <option value="Technology">Technology</option>
                  <option value="Startup">Startup</option>
                  <option value="Photography">Photography</option>
                  <option value="Skill Development">Skill Development</option>
                  <option value="Education">Education</option>
                  <option value="Medical and Health">Medical and Health</option>
                  <option value="Fashion and Design">Fashion and Design</option>
                </select>
              </label>
            </div>

            <div className="form-control">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">
                    Write your Campaign Description
                  </span>
                </div>
                <input
                  type="text"
                  name="description"
                  placeholder="Write Your Campaign Description"
                  className="input input-bordered"
                  required
                />
              </label>
            </div>
          </div>
          {/* Campaign Date and Donation amount Row*/}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Minimum Donation Amount</span>
              </label>
              <input
                type="number"
                name="number"
                placeholder="Write your minimum donation amount"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Deadline Date</span>
              </label>
              <input
                type="date"
                required
                name="date"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="Email"
                name="email"
                defaultValue={user?.email}
                readOnly
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                required
                name="userName"
                readOnly
                defaultValue={user?.displayName}
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-green-500 text-xl font-bold text-white">
              Add New Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCampaign;
