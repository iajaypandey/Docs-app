import Card from './Card'

function Foreground() {
    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            fileSize: ".7mb",
            close: true,
            tag: {isOpen: true, tagtitle: "Download", tagColor: "green"},
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam unde nostrum maiores id nulla similique.",
            fileSize: ".5mb",
            close: true,
            tag: {isOpen: true, tagtitle: "Download", tagColor: "green"},
        },
    ]
  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-3.5'>
        {data.map((item)=>(
            <Card data={item}/>
        ))}
    </div>
  )
}

export default Foreground