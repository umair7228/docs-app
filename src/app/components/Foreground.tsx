"use client"
import React, { useRef } from 'react'
import Cards from './Cards'

const Foreground = () => {

  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem numquam voluptatem mollitia repellat placeat ut a atque doloribus, tenetur perspiciatis?",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green"
      }
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem numquam voluptatem mollitia repellat placeat ut a atque doloribus, tenetur perspiciatis?",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "sky"
      }
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem numquam voluptatem mollitia repellat placeat ut a atque doloribus, tenetur perspiciatis?",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green"
      }
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem numquam voluptatem mollitia repellat placeat ut a atque doloribus, tenetur perspiciatis?",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "sky"
      }
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem numquam voluptatem mollitia repellat placeat ut a atque doloribus, tenetur perspiciatis?",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green"
      }
    },
  ]

  return (
    <div ref={ref}
        className='fixed top-0 left-0 z-[3] w-full h-full flex gap-8 flex-wrap p-8'>
        {data.map((item, index) => (
          <Cards data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground
