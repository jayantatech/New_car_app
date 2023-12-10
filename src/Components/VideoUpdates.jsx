import { DemoCar } from "../assets/img/index";
import { MdOutlineVideoSettings } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

const VideoUpdates = ({ carInfo }) => {
  const findMonth = new Intl.DateTimeFormat("en-IN", { month: "long" }).format(
    new Date()
  );

  const CutWords = carInfo.title.split(" ").slice(0, 15).join(" ");

  return (
    <div className="j w-full lg:w-[320px] h-full lg:h-[360px] mx-auto md:w-[220px] overflow-hidden rounded-md border border-gray-300 max-md:w-[300px]">
      {/* <video src={`${carInfo.iframeNode}`} className="w-full h-[180px]" /> */}
      {carInfo.iframeNode && (
        <iframe
          width="100%"
          height="200"
          src={`${carInfo.iframeNode}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          frameborder="0"
          allowFullScreen
        ></iframe>
      )}
      <div className="j px-2 py-3 bg-[#f1f2f6]">
        <a
          href="#"
          className="j text-[16px] font-medium lg:text-[16px] font-[roboto] block py-0.5 md:text-[13px] max-lg:h-[60px]"
        >
          {CutWords.padEnd(45, " .")}
        </a>
        <p className="j text-[13px] font-medium font-[roboto] pb-2 flex justify-between">
          <span className="text-gray-500">
            By{" "}
            <span className="j text-[16px] text-black">
              {carInfo.channelName}{" "}
            </span>
          </span>
          <span className="text-gray-500 text-[14px]">
            {" "}
            {carInfo.datePublished}
          </span>
        </p>

        <div className="flex justify-between flex-row py-3 border px-2 border-gray-300 rounded-lg">
          <div className="flex items-center justify-center gap-1">
            <MdOutlineVideoSettings className=" text-primary text-2xl max-lg:text-sm" />
            <span className="max-lg:text-sm">{carInfo.views} views</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <AiOutlineLike className=" text-primary text-2xl max-lg:text-sm" />
            <span className="max-lg:text-sm">{carInfo.likes} likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoUpdates;
