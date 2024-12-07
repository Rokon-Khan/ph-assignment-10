import React from "react";

const AddNewCampaign = () => {
  return (
    <div>
      <div className="card bg-base-100 w-full lg:max-w-screen-lg max-w-sm mx-auto shrink-0 shadow-2xl">
        <form className="card-body">
          {/* Photo and Title Row */}
          <div className="form-control lg:flex-row justify-between items-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Campaign Title</span>
              </label>
              <input
                type="text"
                name="text"
                placeholder="email"
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
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCampaign;
