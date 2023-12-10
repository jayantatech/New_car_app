import { DemoCar } from "../assets/img/index";
const CarCards = ({ carInfo }) => {
  const findMonth = new Intl.DateTimeFormat("en-IN", { month: "long" }).format(
    new Date()
  );

  return (
    <div className="j w-full lg:w-[320px] h-full lg:h-[360px] mx-auto md:w-[220px] bg-white overflow-hidden rounded-md border border-gray-300 max-md:w-[300px]">
      <a href="#">
        <img src={`${carInfo.img}`} alt="" className="w-full h-[180px]" />
      </a>
      <div className="j px-2 py-3 bg-[#f1f2f6]">
        <a
          href="#"
          className="j text-[16px] font-medium lg:text-[16px] font-[roboto] block py-0.5 md:text-[15px]"
        >
          {carInfo.title}
        </a>
        <a className="text-[18px] font-medium font-[roboto] block lg:text-[18px] md:text-[16px]">
          {carInfo.price}
        </a>
        <p className="j text-[13px] font-medium font-[roboto] pb-2">
          Avg. Ex-Showroom price
        </p>
        <p className="text-[14px] font-medium font-[roboto] text-gray-500 lg:text-[14px] md:text-[13px]">
          {carInfo.Fuel === "Electric" ? carInfo.Mileage : carInfo.Engine} |{" "}
          {carInfo.Fuel}
        </p>
        <div className="flex justify-center items-center">
          <button className="p py-2 lg:px-[60px] px-[60px] md:px-4 max-md:px-[50px] my-2 border border-primary rounded-md hover:bg-primary hover:text-white text-primary">
            <span className="j font-medium ">{`View ${findMonth} Offers`}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCards;
