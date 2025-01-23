import React from 'react'

function Form() {
    return (
        <div>
            <div className='w-[850px]h-[1050px] gap-[16px] flex flex-col'>
                <div className='w-[850px]h-[1050px]'>
                    <div className='font-bold text-[25px] text-left mt-8'>
                        Personal Information
                    </div>
                    <fieldset className='flex ali'>
                        <div>
                        <legend >FirstName</legend>
                        <input  type="text" name="" id="" placeholder='Enter your name'/>

                        </div>
                        <div>
                        <legend>Lastname</legend>
                        <input type="text" name="" id="" placeholder='Lastname'/>

                        </div>
                    
                   
                    </fieldset>
                   

                </div>
            </div>
        </div>
    )
}

export default Form