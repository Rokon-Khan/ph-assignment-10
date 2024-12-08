import "animate.css";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import tech from "../assets/slider-1.jpg";
const OurGoal = () => {
  return (
    <div>
      <div className="bg-base-200 max-w-[1024px] mx-auto my-6 rounded-lg animate__animated animate__backInRight animate__delay-2s">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card bg-white p-6 max-w-[600px] max-h-[600px]">
            <img className="rounded-xl" src={tech} />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Our Goal</h1>
            <p className="py-6">
              Our goal with this fundraising campaign is to raise the necessary
              funds to support to help technological groth. With your generous
              contributions, we aim to describe the purpose, e.g., provide
              essential resources, fund critical programs, support those in
              Every donation, no matter the size, makes a significant impact and
              brings us closer to achieving our mission.
            </p>
            <Link
              to="/allcampaign"
              className="btn bg-green-500 text-xl font-bold text-white"
            >
              Visit Campaign
              <GoArrowUpRight className="text-3xl font-bold text-green-500 rounded-full bg-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGoal;
