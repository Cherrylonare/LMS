// import React from 'react'
// import { Skeleton } from "../../components/ui/skeleton.jsx";
// import { Course } from "./Course.jsx"

// const Courses = () => {
//   const isLoading = true;
//   return (
//     <div className="bg-gray-50">
//       <div className="max-w-7xl mx-auto p-6">
//         <h2 className="font-bold text-3xl text-center mb-10">Our Courses</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//        {isLoading ? (
//         Array.from({length: 8}).map((_,index) => (
//         <CourseSkeleton key={index} />
//        ))
//       ) : (
//         <Course/>
//       )}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Courses;

// const CourseSkeleton = () => {

//   return (
//     <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
//       <Skeleton className="w-full h-36" />
//       <div className="px-5 py-4 space-y-3">
//         <Skeleton className="h-6 w-3/4" />
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <Skeleton className="h-6 w-6 rounded-full" />
//             <Skeleton className="h-4 w-20" />
//           </div>
//           <Skeleton className="h-4 w-16" />
//         </div>
//         <Skeleton className="h-4 w-1/4" />
//       </div>
//     </div>
//   );
// };
// import React from 'react';
// import { Skeleton } from "../../components/ui/skeleton"; // .jsx हटाओ, बस यही काफी है

// const Courses = () => {
//   const isLoading = true;

//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
//           Our Courses
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {isLoading ? (
//             // 8 बार shadcn का असली Skeleton Card दिखाओ
//             Array.from({ length: 8 }).map((_, i) => (
//               <RealCourseSkeleton key={i} />
//             ))
//           ) : (
//             <p className="text-center col-span-full text-gray-500">
//               No courses available
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ये रहा असली वाला शाइनी Skeleton – पहली फोटो जैसा बिल्कुल!
// const RealCourseSkeleton = () => {
//   return (
//     <div className="flex flex-col space-y-4">
//       {/* Image placeholder */}
//       <Skeleton className="h-48 w-full rounded-xl bg-gray-200" />
      
//       <div className="space-y-3 px-1">
//         {/* Title */}
//         <Skeleton className="h-5 w-4/5 rounded-lg bg-gray-200" />
        
//         {/* Instructor + avatar */}
//         <div className="flex items-center gap-3">
//           <Skeleton className="h-10 w-10 rounded-full bg-gray-200" />
//           <Skeleton className="h-4 w-32 rounded-lg bg-gray-200" />
//         </div>

//         {/* Duration or price */}
//         <div className="flex items-center justify-between">
//           <Skeleton className="h-4 w-24 rounded-lg bg-gray-200" />
//           <Skeleton className="h-5 w-20 rounded-lg bg-gray-300" />
//         </div>

//         {/* Progress bar or rating */}
//         <Skeleton className="h-3 w-full rounded-full bg-gray-200" />
//       </div>
//     </div>
//   );
// };

// export default Courses;
// import React from 'react';
// import { Skeleton } from "../../components/ui/skeleton";

// const Courses = () => {
//   const isLoading = false;

//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
//           Our Courses
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> {/* gap-8 से gap-6 */}
//           {isLoading ? (
//             // 8 बार shadcn का असली Skeleton Card दिखाओ
//             Array.from({ length: 8 }).map((_, i) => (
//               <RealCourseSkeleton key={i} />
//             ))
//           ) : (
//             <p className="text-center col-span-full text-gray-500">
//               No courses available
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // असली वाला शाइनी Skeleton – सिर्फ साइज़ छोटा किया
// const RealCourseSkeleton = () => {
//   return (
//     <div className="flex flex-col space-y-3"> {/* space-y-4 से space-y-3 */}
//       {/* Image placeholder – h-48 से h-40 */}
//       <Skeleton className="h-40 w-full rounded-xl bg-gray-200" />
      
//       <div className="space-y-3 px-1">
//         {/* Title – h-5 से h-4 */}
//         <Skeleton className="h-4 w-4/5 rounded-lg bg-gray-200" />
        
//         {/* Instructor + avatar – h-10 से h-9 */}
//         <div className="flex items-center gap-3">
//           <Skeleton className="h-9 w-9 rounded-full bg-gray-200" /> {/* w-10 से w-9 */}
//           <Skeleton className="h-4 w-32 rounded-lg bg-gray-200" />
//         </div>

//         {/* Duration or price – h-5 से h-4 */}
//         <div className="flex items-center justify-between">
//           <Skeleton className="h-4 w-24 rounded-lg bg-gray-200" />
//           <Skeleton className="h-4 w-20 rounded-lg bg-gray-300" /> {/* h-5 से h-4 */}
//         </div>

//         {/* Progress bar or rating – h-3 से h-2 */}
//         <Skeleton className="h-2 w-full rounded-full bg-gray-200" />
//       </div>
//     </div>
//   );
// };

// export default Courses;
import React from 'react';
import { Skeleton } from "../../components/ui/skeleton";
import Course from "./Course.jsx";  // Course component import किया

const Courses = () => {
  const isLoading = false;  // false करो जब real data दिखाना हो

  const dummyCourses = Array(8).fill(null); // 8 cards के लिए

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Our Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            // Skeleton Loading
            Array.from({ length: 8 }).map((_, i) => (
              <RealCourseSkeleton key={i} />
            ))
          ) : (
            // Real Course Cards
            dummyCourses.map((_, i) => (
              <Course key={i} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// Skeleton – बिल्कुल पहली फोटो जैसा शाइनी वाला
const RealCourseSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-40 w-full rounded-xl bg-gray-200" />
      <div className="space-y-3 px-1">
        <Skeleton className="h-5 w-4/5 rounded-lg bg-gray-200" />
        <div className="flex items-center gap-3">
          <Skeleton className="h-9 w-9 rounded-full bg-gray-200" />
          <Skeleton className="h-4 w-32 rounded-lg bg-gray-200" />
        </div>
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-24 rounded-lg bg-gray-200" />
          <Skeleton className="h-5 w-20 rounded-lg bg-gray-300" />
        </div>
        <Skeleton className="h-2 w-full rounded-full bg-gray-200" />
      </div>
    </div>
  );
};

export default Courses;