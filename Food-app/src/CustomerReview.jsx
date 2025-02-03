// import React from 'react'
// import { ChevronsRight, ChevronsLeft } from 'lucide-react';

// function CustomerReview() {
//     const ScrollableCards = () => {
//         const scrollContainerRef = useRef(null);
      
//         const scrollLeft = () => {
//           scrollContainerRef.current.scrollBy({
//             left: -300, // Adjust scroll amount
//             behavior: "smooth",
//           });
//         };
      
//         const scrollRight = () => {
//           scrollContainerRef.current.scrollBy({
//             left: 300, // Adjust scroll amount
//             behavior: "smooth",
//           });
//         };
//     }




//     return (
//         <div className='w-[1108px] h-[379px] rounded-xl bg-white ' >
//             <div className='w-[1100px] h-[71px]   flex justify-between pt-4 px-4'>
//                 <div className='w-[275px] h-[71px]'>
//                     <div className='w-[246px] h-[38px] text-[24px] text-[#464255] font-semibold'>Customer Review</div>
//                     <div className='w-[275px] h-[22px] text-[16px] text-[#A3A3A3] font-medium'>Eum fuga consequuntur utadsjn et.</div>
//                 </div>
//                 <div className='flex space-x-4'>
//                     <div className='w-[50px] h-[50px] bg-white border flex justify-center items-center '>
//                         <button onClick={scrollLeft}><ChevronsLeft /></button>
//                     </div>
//                     <div className='w-[50px] h-[50px] bg-white border flex justify-center items-center'>
//                         <button onClick={scrollRight}> <ChevronsRight /></button>
//                     </div>
//                 </div>
//             </div>

//             <div className='w-[1108x] h-[308px]'>

//             </div>
//         </div>
//     )
// }

// export default CustomerReview
// import React, { useRef } from "react";
// import { ChevronsRight, ChevronsLeft } from "lucide-react";

// function CustomerReview() {
//   const scrollContainerRef = useRef(null);

//   const scrollLeft = () => {
//     scrollContainerRef.current.scrollBy({
//       left: -300, // Adjust scroll amount
//       behavior: "smooth",
//     });
//   };

//   const scrollRight = () => {
//     scrollContainerRef.current.scrollBy({
//       left: 300, // Adjust scroll amount
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="w-[1108px] h-[379px] rounded-xl bg-white">
//       <div className="w-[1100px] h-[71px] flex justify-between pt-4 px-4">
//         <div className="w-[275px] h-[71px]">
//           <div className="w-[246px] h-[38px] text-[24px] text-[#464255] font-semibold">
//             Customer Review
//           </div>
//           <div className="w-[275px] h-[22px] text-[16px] text-[#A3A3A3] font-medium">
//             Eum fuga consequuntur utadsjn et.
//           </div>
//         </div>
//         <div className="flex space-x-4">
//           <div className="w-[50px] h-[50px] bg-white border flex justify-center items-center">
//             <button onClick={scrollLeft}>
//               <ChevronsLeft />
//             </button>
//           </div>
//           <div className="w-[50px] h-[50px] bg-white border flex justify-center items-center">
//             <button onClick={scrollRight}>
//               <ChevronsRight />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div
//         className="w-[1108px] h-[308px] flex overflow-x-auto space-x-4 px-4 scroll-smooth"
//         ref={scrollContainerRef}
//       >
//         {[1, 2, 3, 4, 5].map((item) => (
//           <div
//             key={item}
//             className="w-[300px] h-[250px] bg-blue-100 rounded-xl shadow-md flex items-center justify-center text-lg font-semibold text-blue-600"
//           >
//             Card {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CustomerReview;

import React, { useRef } from "react";
import { ChevronsRight, ChevronsLeft } from "lucide-react";

// Reusable ReviewCard Component
const ReviewCard = ({ name, timeAgo, review, rating, imgSrc, dishImg }) => {
  return (
    <div className="w-[525px] h-[271px] flex relative my-4">
      {/* Card Content */}
      <div className="w-[458px] h-[271px] bg-white rounded-2xl shadow-2xl shadow-gray-400 pt-6 pl-3 ">
        <div className="w-[302px]">
          <div className="flex items-start gap-4">
            <img
              src={imgSrc}
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">{name}</h2>
              <p className="text-sm text-gray-500">{timeAgo}</p>
            </div>
          </div>
          {/* Review Content */}
          <p className="text-gray-700 mt-4">{review}</p>
          {/* Ratings */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={index < Math.floor(rating) ? "yellow" : "none"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 17.75l-6.472 4.032 1.926-7.708-6.047-4.74 7.92-.63L12 2.25l2.673 6.455 7.92.63-6.047 4.74 1.926 7.708L12 17.75z"
                  />
                </svg>
              ))}
            </div>
            <span className="text-gray-700 font-medium">{rating}</span>
          </div>
        </div>
      </div>
      {/* Dish Image */}
      <div className="w-[223px] h-[223px] -ml-[111.5px] z-10">
        <div className="my-4">
          <img
            src={dishImg}
            alt="Dish"
            className="w-[223px] h-[223px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

// CustomerReview Component
const CustomerReview = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300, // Adjust scroll amount
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300, // Adjust scroll amount
      behavior: "smooth",
    });
  };

  // Card data
  const reviews = [
    {
      name: "Jons Sena",
      timeAgo: "2 days ago",
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      rating: 4.5,
      imgSrc: "https://i.pravatar.cc/40",
      dishImg: "/f1.png",
    },
    {
      name: "Emily Parker",
      timeAgo: "3 days ago",
      review: "This is another dummy review text used to showcase the layout.",
      rating: 4.0,
      imgSrc: "https://i.pravatar.cc/41",
      dishImg: "/f1.png",
    },
    {
      name: "Michael Scott",
      timeAgo: "1 week ago",
      review: "Great experience! Loved the dish and service.",
      rating: 4.8,
      imgSrc: "https://i.pravatar.cc/42",
      dishImg: "/f1.png",
    },
    {
      name: "Sarah Connor",
      timeAgo: "5 hours ago",
      review: "Absolutely amazing! Highly recommend.",
      rating: 5.0,
      imgSrc: "https://i.pravatar.cc/43",
      dishImg: "/f1.png",
    },
    {
      name: "John Doe",
      timeAgo: "2 weeks ago",
      review: "It was decent. Could be better.",
      rating: 3.5,
      imgSrc: "https://i.pravatar.cc/44",
      dishImg: "/f1.png",
    },
  ];

  return (
    <div className="w-[1689px] h-[379px] rounded-xl">
      <div className="w-[1468px] h-[71px] flex justify-between pt-4 px-4">
        <div className="w-[275px] h-[71px]">
          <div className="w-[246px] h-[38px] text-[24px] text-[#464255] font-semibold">
            Customer Review
          </div>
          <div className="w-[275px] h-[22px] text-[16px] text-[#A3A3A3] font-medium">
            Eum fuga consequuntur utadsjn et.
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-[50px] h-[50px] bg-white border flex justify-center items-center">
            <button onClick={scrollLeft}>
              <ChevronsLeft />
            </button>
          </div>
          <div className="w-[50px] h-[50px] bg-white border flex justify-center items-center">
            <button onClick={scrollRight}>
              <ChevronsRight />
            </button>
          </div>
        </div>
      </div>

      <div
        className="w-[1468px] h-[308px] flex overflow-x-auto space-x-4 px-4 scroll-smooth hide-scrollbar"
        ref={scrollContainerRef}
      >
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            timeAgo={review.timeAgo}
            review={review.review}
            rating={review.rating}
            imgSrc={review.imgSrc}
            dishImg={review.dishImg}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
