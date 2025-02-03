import { Home, List, ReceiptText, ChefHat, UserSearch, ChartNoAxesColumn, MessageSquareText, UtensilsCrossed, ListCollapse, UserRoundPen, CalendarCheck, MessageCircleMore, Wallet } from 'lucide-react'
import React from 'react'

function Sidemenu() {
    const tube = 'list-none ml-10 flex space-x-2 w-[250px]  rounded-md hover:bg-[#00b07581] px-4 py-2'
    return (
        <div className="w-[349px] h-[1872px]  left-[-4px] bg-white px-4 mt-[41px]">
            <div className=" flex flex-col mt-[41px] ml-[49px]">
                <h1 className="text-4xl font-bold text-black ml-1">Sedap.</h1>
                <p className="text-base text-gray-600">Moerden admin dashboard</p>
            </div>
            <div className='mt-12 space-y-4 '>
                <li className={tube}>
                    <Home />
                    <button>DashBoard</button>
                </li>
                <li className='list-none ml-10 flex space-x-2 w-[250px]  rounded-md hover:bg-[#00b07581] px-4 py-2'>
                    <List />
                    <button>Order List</button>
                </li>
                <li className='list-none ml-10 flex space-x-2 w-[250px]  rounded-md hover:bg-[#00b07581] px-4 py-2'>
                    <ReceiptText />
                    <button>Order Details</button>
                </li>
                <li className='list-none ml-10 flex space-x-2 w-[250px]  rounded-md hover:bg-[#00b07581] px-4 py-2'>
                    <UserSearch />
                    <button>Customer</button>
                </li>
                <li className='list-none ml-10 flex space-x-2 w-[250px]  rounded-md hover:bg-[#00b07581] px-4 py-2'>
                    <ChartNoAxesColumn />
                    <button>Analytics</button>
                </li>
                <li className='list-none ml-10 flex space-x-2 w-[250px]  rounded-md hover:bg-[#00b07581] px-4 py-2'>
                    <MessageSquareText />
                    <button>Reviews</button>
                </li>
                <li className='list-none ml-10 flex space-x-2 w-[250px]  rounded-md hover:bg-[#00b07581] px-4 py-2'>
                    <UtensilsCrossed />
                    <button>Foods</button>
                </li>
                <li className='list-none ml-10 flex space-x-2 w-[250px]  rounded-md hover:bg-[#00b07581] px-4 py-2'>
                    <ListCollapse />
                    <button>Food Details</button>
                </li>
                <li className='list-none ml-10 flex space-x-2 w-[250px]  rounded-md hover:bg-[#00b07581] px-4 py-2'>
                    <UserRoundPen />
                    <button>Customer Detail</button>
                </li>
                <li className='list-none ml-10 flex space-x-2 w-[250px]  rounded-md hover:bg-[#00b07581] px-4 py-2'>
                    <CalendarCheck />
                    <button>Calender</button>
                </li>
                <li className='list-none ml-10 flex space-x-2 w-[250px]  rounded-md hover:bg-[#00b07581] px-4 py-2'>
                    <MessageCircleMore />
                    <button>Chat</button>
                </li>
                <li className='list-none ml-10 flex space-x-2 w-[250px]  rounded-md hover:bg-[#00b07581] px-4 py-2'>
                    <Wallet />
                    <button>Wallet</button>
                </li>
                <div className='shadow-lg flex ml-10 mt-16 p-[5px] w-[250px] h-[150px] rounded-[10px] bg-[#00B074]'>
                    <div className='h-[50px] w-[150px] mt-[17px] text-[12px] font-medium absolute
                     leading-[20px] text-left underline decoration-skip-ink-0'>Please, organize your
                        menus through button
                        bellow!
                    </div>
                    <button className='h-[40px] w-[105px] bg-white rounded-xl mt-[86px] ml-[35px]'>Add menu</button>   
                    <ChefHat className=' h-[90px] w-[100px] mt-[22px]' color="#ffffff" strokeWidth={3} />
                </div>
                <div className='w-[250px] h-[78px] ml-[38px] mt-[50px]'>
                    <h3 className='text-sm text-[#969BA0] leading-[18px] font-bold'>Sedap Restaurant Admin Dashboard</h3>
                    <span className='text-[12px] text-[#969BA0] font-normal'>© 2020 All Rights Reserved</span>

                </div>

            </div>



        </div>

    )
}

export default Sidemenu
