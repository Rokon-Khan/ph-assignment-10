import { GoArrowUpRight } from "react-icons/go";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div className="mb-10">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Autoplay]}
        spaceBetween={500}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ autoplay: true }}
      >
        <SwiperSlide>
          <div className="hero min-h-[600px] bg-cover bg-no-repeat bg-banner">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-lg">
                <h1 className="mb-5 text-4xl font-bold">
                  Empower The Education Fundraiser Campaign
                </h1>
                <p className="mb-5 ">
                  The Education Fundraiser Campaign seeks to provide
                  scholarships, learning resources, and school supplies for
                  underprivileged children. By raising funds, the campaign aims
                  to remove financial barriers to education, ensuring every
                  child has the opportunity to succeed academically and build a
                  brighter future.
                </p>

                <Link
                  to="/allcampaign"
                  className="btn bg-green-500 text-xl font-bold text-white"
                >
                  Visit All Campaign
                  <GoArrowUpRight className="text-3xl font-bold text-green-500 rounded-full bg-white" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-[600px] bg-banner_1 bg-cover bg-no-repeat ">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-lg">
                <h1 className="mb-5 text-4xl font-bold">
                  Spreading With Technology Fundraiser Campaign
                </h1>
                <p className="mb-5">
                  The Technology Fundraiser Campaign focuses on bridging the
                  digital divide by providing students and communities with
                  access to computers, internet services, and tech training. The
                  goal is to equip individuals with essential technology skills,
                  enabling them to thrive in an increasingly digital world.
                </p>

                <Link
                  to="/allcampaign"
                  className="btn bg-green-500 text-xl font-bold text-white"
                >
                  Visit All Campaign
                  <GoArrowUpRight className="text-3xl font-bold text-green-500 rounded-full bg-white" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-[600px] bg-banner_2 bg-cover bg-no-repeat ">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-lg">
                <h1 className="mb-5 text-4xl font-bold">
                  Health Care Fundraiser Campaign
                </h1>
                <p className="mb-5">
                  The Health Care Fundraiser Campaign works to provide critical
                  medical services, medications, and wellness support to
                  underserved populations. Through donations, the campaign aims
                  to improve access to healthcare, ensuring that vulnerable
                  individuals receive the care they need to live healthier
                  lives.
                </p>

                <Link
                  to="/allcampaign"
                  className="btn bg-green-500 text-xl font-bold text-white"
                >
                  Visit All Campaign
                  <GoArrowUpRight className="text-3xl font-bold text-green-500 rounded-full bg-white" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
