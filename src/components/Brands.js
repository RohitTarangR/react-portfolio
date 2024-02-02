import React from 'react'
import { brands } from '../data'


const Brands = () => {
  return (
    <section className='min-h-[146px] bg-tertiary flex items-center'>
        <div className='container flex mx-auto items-center justify-evenly flex-wrap md:justify-between'>
            {brands.map((brands,index)=>{
                return (
                    <div key={index}>
                        <img src={brands.img} alt="" />
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Brands