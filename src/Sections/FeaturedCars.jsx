import { trendingCars, PopularCars, electricCars } from "../constants/index";
import CarSlider from "../Components/CarSlider";

// const FeaturedCars = ({ allinfo }) => {
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   let dataMap = trendingCars;

//   const dataChingCal = (state, action) => {
//     if (action === `${allinfo.tab2}`) {
//       return (dataMap = PopularCars), action;
//     }
//     if (action === `${allinfo.tab1}`) {
//       return (dataMap = trendingCars), action;
//     }
//     if (action === `${allinfo.tab3}`) {
//       return (dataMap = electricCars), action;
//     }
//     return state;
//   };
//   const [featuredActiv, setFeaturedActiv] = useReducer(
//     dataChingCal,
//     `${allinfo.tab1}`
//   );

//   return (
//     <div className="flex justify-center items-center py-6 px-4 max-md:px-2 max-md:py-3">
//       <div className="w-full h-full xl:w-[1080px] xl:h-[470px]">
//         <div>
//           {/* Featured Cars header section  */}
//           <div className="w w-full h-full xl:h-[85px] ">
//             <h2 className="j text-[26px] pl-2 font-semibold font-lato pb-4 max-sm:text-xl max-sm:pl-2">
//               {allinfo.title}
//             </h2>
//             <div className="u uppercase grid grid-cols-8 border-b-2">
//               <div className="k col-span-2 grid grid-cols-3 text-sm font-bold font-lato max-sm:col-span-5 max-sm:text-sm">
//                 <span
//                   className={`j relative pb-3 cursor-pointer flex justify-start items-center p ${
//                     featuredActiv === `${allinfo.tab1}` && "text-blue-600"
//                   }`}
//                   onClick={() => setFeaturedActiv(`${allinfo.tab1}`)}
//                 >
//                   {allinfo.tab1}
//                   {featuredActiv === `${allinfo.tab1}` && <UnderLine />}
//                 </span>
//                 <span
//                   className={`j relative pb-3 cursor-pointer flex justify-start items-center ${
//                     featuredActiv === `${allinfo.tab2}` && "text-blue-600"
//                   }`}
//                   onClick={() => setFeaturedActiv(`${allinfo.tab2}`)}
//                 >
//                   {allinfo.tab2}
//                   {featuredActiv === `${allinfo.tab2}` && <UnderLine />}
//                 </span>
//                 <span
//                   className={`j relative pb-3 cursor-pointer flex justify-start items-center ${
//                     featuredActiv === `${allinfo.tab3}` && "text-blue-600"
//                   }`}
//                   onClick={() => setFeaturedActiv(`${allinfo.tab3}`)}
//                 >
//                   {allinfo.tab3}
//                   {featuredActiv === `${allinfo.tab3}` && <UnderLine />}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Featured cards sections  */}
//           <div className="w-full h-full py-4 px-6 max-md:px-4 gap-4 ">
//             <Slider {...settings}>
//               {dataMap.map((car) => (
//                 <CarCards key={car.title} carInfo={car} />
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const FeaturedCars = ({ allinfo }) => {
  return (
    <CarSlider
      allinfo={allinfo}
      carOBJ={{
        tab1: trendingCars,
        tab2: PopularCars,
        tab3: electricCars,
        tabON: true,
      }}
    />
  );
};

export default FeaturedCars;
