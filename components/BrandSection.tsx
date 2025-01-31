import Image from 'next/image'
import React from 'react'

const BrandSection = () => {
  return (
    <div className='bg-black w-full flex items-center justify-center py-6'>
      <section className='w-[90%] flex items-center justify-between flex-wrap
       xs:w-[93%] xs:justify-center xs:gap-4
       md:justify-between md:gap-3 md:
      '>
        <Image className='xs:w-28 md:w-auto' src="/images/versace-brand.png" alt="versace" />
        <Image className='xs:w-16 md:w-auto' src="/images/zara-brand.png" alt="zara" />
        <Image className='xs:w-28 md:w-auto' src="/images/gucci-brand.png" alt="gucci" />
        <Image className='xs:w-28 md:w-auto' src="/images/prada-brand.png" alt="prada" />
        <Image className='xs:w-28 md:w-auto' src="/images/ck-brand.png" alt="prada" />
      </section>
    </div>
  )
}

export default BrandSection
