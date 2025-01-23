import React from 'react'
import Form from './Form'

function Screen() {
    return (
        < >
        
        <div className='w-[850px] h-[1050] p-[32px] gap-[32px]  '>
            <div className='flex flex-col items-center'>
                <div className='w-[750px] h-[250px] gap-[15px]'>
                    <div className='flex justify-center'>
                        <div className='bg-[#008B5d] text-white w-full h-auto flex items-center rounded-xl p-10'>
                            <div className='flex flex-col justify-center ml-4'>
                                <span className='text-xl text-left font-semibold'>Premium Account</span>
                                <div className='text-sm text-left mt-1 p-2'>
                                    You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and cover letters in both PDF and Word formats.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Form/>
            

        </div>

        
        </>
        
    )
}

export default Screen