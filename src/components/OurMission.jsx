import "animate.css";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import vr from "../assets/slider-2.jpg";

const OurMission = () => {
  return (
    <div>
      <div className="bg-base-200 max-w-[1024px] mx-auto my-6 rounded-lg animate__animated animate__backInLeft animate__delay-1s">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-white p-6 max-w-[600px] max-h-[600px]">
            <img className="rounded-xl" src={vr} />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Our Mission</h1>
            <p className="py-6">
              Our mission for this fundraising campaign is to raise funds to
              advance key initiatives in Technology/Healthcare that will drive
              meaningful change. In the realm of technology, we aim to provide
              innovative solutions that improve accessibility, empower
              communities, and enhance lives. In healthcare, we focus on
              supporting critical medical programs, providing resources for
              underserved populations, and advancing research for better
              treatments.
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

export default OurMission;
