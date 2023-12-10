import React, { useReducer } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import UnderLine from "../Components/UnderLine";
import CarCards from "../Components/CarCards";
import CarBlogs from "../Components/CarBlogs";
import VideoUpdates from "./VideoUpdates";

const CarSlider = ({ allinfo, carOBJ }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let dataMap = carOBJ.tab1;

  const dataChingCal = (state, action) => {
    if (action === `${allinfo.tab2}`) {
      return (dataMap = carOBJ.tab2), action;
    }
    if (action === `${allinfo.tab1}`) {
      return (dataMap = carOBJ.tab1), action;
    }
    if (action === `${allinfo.tab3}`) {
      return (dataMap = carOBJ.tab3), action;
    }
    return state;
  };
  const [featuredActiv, setFeaturedActiv] = useReducer(
    dataChingCal,
    `${allinfo.tab1}`
  );

  return (
    <div className="flex justify-center items-center py-6 px-4 max-md:px-2 max-md:py-3 ">
      <div className="w-full h-full xl:w-[1080px] xl:h-[470px]">
        <div>
          {/* Featured Cars header section  */}
          <div className="w w-full h-full xl:px-7">
            <h2 className="j text-[26px] font-semibold font-lato pb-4 max-sm:text-xl">
              {allinfo.title}
            </h2>
            {carOBJ.tabON && (
              <div className="u uppercase grid grid-cols-8 border-b-2">
                <div className="k col-span-2 grid grid-cols-3 text-sm font-bold font-lato md:col-span-3 lg:col-span-2 max-sm:col-span-6 max-sm:text-sm">
                  <span
                    className={`j relative pb-3 cursor-pointer flex justify-start items-center max-sm:mr-3 ${
                      featuredActiv === `${allinfo.tab1}` && "text-blue-600"
                    }`}
                    onClick={() => setFeaturedActiv(`${allinfo.tab1}`)}
                  >
                    {allinfo.tab1}
                    {featuredActiv === `${allinfo.tab1}` && <UnderLine />}
                  </span>
                  <span
                    className={`j relative pb-3 cursor-pointer flex justify-start items-center ${
                      featuredActiv === `${allinfo.tab2}` && "text-blue-600"
                    }`}
                    onClick={() => setFeaturedActiv(`${allinfo.tab2}`)}
                  >
                    {allinfo.tab2}
                    {featuredActiv === `${allinfo.tab2}` && <UnderLine />}
                  </span>
                  <span
                    className={`j relative pb-3 cursor-pointer flex justify-start items-center ${
                      featuredActiv === `${allinfo.tab3}` && "text-blue-600"
                    }`}
                    onClick={() => setFeaturedActiv(`${allinfo.tab3}`)}
                  >
                    {allinfo.tab3}
                    {featuredActiv === `${allinfo.tab3}` && <UnderLine />}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Featured cards sections  */}
          <div className="w-full h-full py-4 px-6 max-md:px-4 gap-4 ">
            <Slider {...settings}>
              {!carOBJ.carslide &&
                dataMap.map((car) => (
                  <CarCards key={car.title} carInfo={car} />
                ))}
              {carOBJ.carslide &&
                dataMap.map((car) =>
                  // Conditionally render CarBlogs or YouTubeVideos based on the active tab
                  allinfo.tab1 === featuredActiv ? (
                    <CarBlogs key={car.title} carInfo={car} />
                  ) : (
                    <VideoUpdates key={car.title} carInfo={car} />
                  )
                )}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSlider;
