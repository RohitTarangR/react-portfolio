import React from 'react'

const Project = ({item}) => {
  return (
    <>
    <div key={item.id} className='flex flex-col items-center text-center'>
        <div className='mb-8'>
          <a href={item.liveUrl} target='me'>
            <img className='rounded-2xl h-60 object-cover border border-gray-600 hover:brightness-75 transition-all duration-300' src={item.image} alt="" />
          </a>
            <p className='capitalize text-accent text-sm my-3 '>{item.category}</p>
            <h3 className='text-2xl font-semibold capitalize mb-3'>
                {item.name}
            </h3>
        </div>
    </div>
    </>
  )
}

export default Project