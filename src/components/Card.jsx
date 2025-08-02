import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";


function Card({data}) {
  return (
    <div className="relative w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-10 px-8 overflow-hidden">
        <FaRegFileAlt/>
        <p className="leading-tight m-2 font-semibold text-sm">
            {data.desc}
        </p>
        <div className="footer absolute w-full bottom-0 left-0">
            <div className="flex justify-between items-center mb-2 py-3 px-8">
                <h5>{data.fileSize}</h5>
                <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
                    <LuDownload size=".7rem" color="#fff"/>
                </span>
            </div>
            <div className="tag bg-green-600 w-full py-4 flex justify-center items-center">
                <h3 className="text-sm font-semibold">Download Now</h3>
            </div>
        </div>
    </div>
  )
}

export default Card
