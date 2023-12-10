import { DemoCar } from "../assets/img/index";
const CarBlogs = ({ carInfo }) => {
  const newWord = carInfo.description.split(" ").slice(0, 10).join(" ");
  return (
    <div className="j w-full lg:w-[320px] h-full lg:h-[360px] mx-auto md:w-[220px] bg-white overflow-hidden rounded-md border border-gray-300 max-md:w-[300px]">
      <a href="#">
        <img src={`${carInfo.img}`} alt="" className="w-full h-[180px]" />
      </a>
      <div className="j px-2 py-3 bg-[#f1f2f6]">
        <a
          href="#"
          className="j text-[16px] font-medium lg:text-[16px] font-[roboto] block py-0.5 max-lg:text-[12px] max-lg:h-[45px]"
        >
          {carInfo.title}
        </a>

        <p className="text-[14px] font-medium font-[roboto] text-gray-500 lg:text-[14px] md:text-[11px] flex justify-between pb-2">
          <span>
            by <span> {carInfo.publishedBy} </span>
          </span>
          <span> {carInfo.date}</span>
        </p>
        <p className="j text-[13px] font-medium font-[roboto] pb-2 max-lg:text-[12px] max-lg:h-[50px]">
          {newWord + " " + "..." || carInfo.description}
        </p>
        <div className="flex justify-end items-center py-1">
          <span className="j font-medium text-primary cursor-pointer">
            Read More..
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarBlogs;
