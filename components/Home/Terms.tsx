
import React from 'react'
import Image from 'next/image'

const Terms = () => {
    return (
        <>
            { /* 4. Terms + Flag Icons List */}
            <div className='mt-10 w-full h-auto'>
                <Image className='w-auto' src={"/images/home/flags.png"} width={100} height={100} alt='Irani World' />
                <p className='font-opensans text-white-shade-8 mt-3'>
                    Terms and conditions outline
                    <br />
                    what users can and cannot do
                    <br />
                    with your
                </p>
            </div>

        </>
    )
}

export default Terms