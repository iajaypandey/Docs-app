import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { motion } from "motion/react"


function Card({data, reference}) {
  return (
    <motion.div 
        drag dragConstraints={reference}
        whileDrag={{scale: 1.2}}
        dragElastic={0.2}
        dragTransition={{bounceStiffness: 100}}
        transition={{ type: "spring" }} animate={{ scale: 1 }}
        className="relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-10 px-8 overflow-hidden">
            <FaRegFileAlt/>
            <p className="leading-tight m-2 font-semibold text-sm">
            {data.desc}
            </p>

        <div className="footer absolute w-full bottom-0 left-0">
            <div className="flex justify-between items-center mb-2 py-3 px-8">
                <h5>{data.fileSize}</h5>
                <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
                    {data.close ? <MdClose /> : <LuDownload size=".7rem" color="#fff"/>}
                </span>
            </div>
            {data.tag.isOpen &&
                (<div className={`tag w-full ${data.tag.tagColor === "sky" ? "bg-sky-600" : "bg-green-600"} py-4 flex justify-center items-center`}>
                    <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
                </div>)
            }
        </div>
    </motion.div>
  )
}

export default Card
