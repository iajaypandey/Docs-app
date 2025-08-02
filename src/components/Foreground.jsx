import { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null)

    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            fileSize: ".7mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
        },
        {
            desc: "This is Dragable Doc web.",
            fileSize: "14mb",
            close: false,
            tag: {isOpen: true, tagTitle: "loading", tagColor: "sky"},
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam unde nostrum maiores id nulla similique.",
            fileSize: ".9mb",
            close: false,
            tag: {isOpen: true, tagTitle: "Download", tagColor: "red"},
        },
    ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-7 flex-wrap p-5'>
        {data.map((item)=>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground