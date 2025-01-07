import "animate.css";
import { GiExitDoor } from "react-icons/gi";
import { RiRefund2Line, RiUserCommunityLine } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
const AboutUs = () => {
  return (
    <div>
      <div className="hero bg-base-200 max-w-[1024px] mx-auto my-6 rounded-lg animate__animated animate__zoomIn">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="lg:text-4xl text-3xl font-bold">About Us</h1>
            <p className="py-6 max-w-lg mx-auto">
              The Fund Raiser Project is a platform designed to empower
              individuals and organizations to launch and manage fundraising
              campaigns easily. It connects campaign creators with potential
              donors, helping to raise funds for various causes, such as
              education, healthcare, social welfare, and innovation.
            </p>
            <div className="card rounded-xl space-y-6">
              <h3 className="lg:text-2xl text-2xl font-bold text-center">
                Why you Choose us?
              </h3>
              <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 ">
                <div className="card items-center bg-white p-4 rounded-xl space-y-2">
                  <GiExitDoor className="text-5xl  text-green-500  rounded-full" />

                  <h3 className="text-xl font-bold text-center">
                    Accessibility and Reach
                  </h3>
                  <p>
                    Provides a user-friendly platform that enables anyone,
                    anywhere, to start a campaign and reach a global audience of
                    potential donors.
                  </p>
                </div>
                <div className="card items-center bg-white p-4 rounded-xl space-y-2">
                  <VscWorkspaceTrusted className="text-5xl bg-white text-green-500 rounded-full" />
                  <h3 className="text-xl font-bold text-center">
                    Transparency and Trust
                  </h3>
                  <p>
                    Offers clear updates on campaign progress, ensuring donors
                    are informed about how their contributions are making an
                    impact.
                  </p>
                </div>
                <div className="card items-center bg-white p-4 rounded-xl space-y-2">
                  <RiRefund2Line className="text-5xl bg-white text-green-500  rounded-full" />
                  <h3 className="text-xl font-bold text-center">
                    Efficient Fund Management
                  </h3>
                  <p>
                    Simplifies the process of collecting and managing donations,
                    ensuring that funds are securely transferred to the intended
                    recipients.
                  </p>
                </div>
                <div className="card items-center bg-white p-4 rounded-xl space-y-2">
                  <RiUserCommunityLine className="text-5xl bg-white text-green-500 rounded-full" />
                  <h3 className="text-xl font-bold text-center">
                    Community Building
                  </h3>
                  <p>
                    Encourages collaboration and support by bringing together
                    individuals and organizations with shared goals, fostering a
                    sense of community and collective effort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
