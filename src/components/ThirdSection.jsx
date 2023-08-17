import React from 'react'
import { personPaying, asset1, asset2, asset3, asset4, group24 } from '../assets'


function ThirdSection() {
    return (
        <div>
            <div className='flex'>
                <div>
                    <p className='font-bold px-10 pt-10 pb-3'>
                        Introducing <span className='text-lg'>PAYBLAUQ</span>
                    </p>
                    <p className='px-10 pb-5 text-sm font-semibold'>
                        A comprehensive and fully integrated suite of financial and <br /> payments products designed to revolutionize your business <br />operations. Seamlessly manage your payments, reduce costs,<br /> and unlock new revenue streams with our advanced platform,<br /> tailored to both Web2 and Web3 environments.
                    </p>
                    <div className='grid grid-cols-2 px-10 justify-center gap-4'>
                        <div className='bg-blue-600 rounded-lg box-border h-50 w-55'>
                            <div className='flex justify-start pl-5 pt-5 pb-2'>
                                <img src={asset1} width={24} height={5} className='pl-2' />
                                <p className='pl-3 text-sm font-bold text-white'>Payment Methods</p>
                            </div>
                            <div>
                                <p className='text-xs px-5 pt-2 pb-7 font-semibold text-white'>Condimentum pharetra purus <br></br>sociosqu dignissim suspendisse<br /> nec montes non iaculis magnis<br /> hac.</p>
                            </div>
                        </div>

                        <div className='bg-blue-900 rounded-lg box-border h-50 w-55'>
                            <div className='flex justify-start pl-10 pt-5 pb-2'>
                                <img src={asset4} width={24} height={5} className='pl-2' />
                                <p className='pl-3 text-sm font-bold text-white'>e-Wallet</p>
                            </div>
                            <div>
                                <p className='text-xs px-5 pt-2 pb-7 font-semibold text-white'>Condimentum pharetra purus <br></br>sociosqu dignissim suspendisse<br /> nec montes non iaculis magnis<br /> hac.</p>
                            </div>
                        </div>

                        <div className='bg-blue-600 rounded-lg box-border h-50 w-55'>
                            <div className='flex justify-start pl-5'>
                                <img src={asset3} width={24} height={5} className='pl-2 pt-4' />
                                <p className='pl-3 pt-4 text-sm font-bold text-white'>Payment Methods</p>
                            </div>
                            <div>
                                <p className='text-xs px-5 pt-2 pb-7 font-semibold text-white'>Condimentum pharetra purus <br></br>sociosqu dignissim suspendisse<br /> nec montes non iaculis magnis<br /> hac.</p>
                            </div>
                        </div>

                        <div className='bg-blue-600 rounded-lg box-border h-50 w-55'>
                            <div className='flex justify-start pl-5'>
                                <img src={asset2} width={24} height={5} className='pl-2 pt-4' />
                                <p className='pl-3 pt-4 text-sm font-bold text-white'>Payment Methods</p>
                            </div>
                            <div>
                                <p className='text-xs px-5 pt-2 pb-7 font-semibold text-white'>Condimentum pharetra purus <br></br>sociosqu dignissim suspendisse<br /> nec montes non iaculis magnis<br /> hac.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <img src={personPaying} width={300} className='pt-3' />
                </div>

            </div>
            <div className="bg-[url('./assets/bg.png')]">
                <img src={group24} width={500} className='pt-10' />
                

            </div>

            
      </div>
      
  )
}

export default ThirdSection