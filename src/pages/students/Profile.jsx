// // // // // import React, { useEffect, useState } from 'react'
// // // // // import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar'
// // // // // import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
// // // // // import Button from '../../components/ui/button';
// // // // // import { Input } from '../../components/ui/input';
// // // // // import { Loader } from 'lucide-react';
// // // // // import { Loader2 } from 'lucide-react';
// // // // // import { en } from 'zod/v4/locales';
// // // // // import Course from './Course';
// // // // // import { useLoadUserQuery, useUpdateUserMutation } from '../../features/api/authApi';
// // // // // import { set } from 'zod';
// // // // // const Profile = () => {
// // // // //   const [name ,setName] = useState("");
// // // // //   const [profilePhoto, setProfilePhoto] = useState("");

// // // // //   const{data, isLoading} = useLoadUserQuery();
// // // // //   const[, {data: updateUserData,isLoading: updateUserIsLoading,isError, error, isSuccess}] = useUpdateUserMutation();

// // // // //   const onChangeHandler = (e) => {  
// // // // //     const file = e.target.files?.[0];
// // // // //     if(file) 
// // // // //       setProfilePhoto(file);
    
// // // // //     if(e.target.name === "name") {
// // // // //       setName(e.target.value);
// // // // //     }
// // // // //   };

// // // // //   // const enrolledCourses = [1,2]; // Example enrolled courses array

// // // // //  if(isLoading) return <h1> Profile Loading...</h1>
// // // // //  const{user} = data;

// // // // // const updateUserHandler = async () => {
// // // // // const formData = new FormData();
// // // // // formData.append("name", name);
// // // // // formData.append("profilePhoto", profilePhoto);
// // // // // await updateUser(formData);
// // // // // };

// // // // // useEffect(() => {
// // // // //   if(isSuccess) {
// // // // //     toast.success(data.message) ||" Profile updated successfully";
// // // // //   }
// // // // //   if(isError) {
// // // // //     toast.error(error.message || "Something went wrong. Please try again.");
// // // // //   }
// // // // // }  ,
// // // // // [error ,data, isSuccess]);

// // // // //   return (
// // // // //     <div className="max-w-4xl mx-auto px-4 my-24">
// // // // //       <h1 className="text-2xl font-bold  text-center md:text-left">PROFILE</h1>
// // // // //       <div className='flex flex-col md:flex-row items-center md:items-start gap-8 my-5'>
// // // // //         <div className="flex flex-col items-center">
// // // // //           <Avatar className="w-24 h-24 md:w-32 md:h-32 mb-4">
// // // // //             <AvatarImage src={user.photoUrl || "https://github.com/shadcn.png"} alt="@shadcn" />
// // // // //             <AvatarFallback>CN</AvatarFallback>
// // // // //           </Avatar>
// // // // //         </div>
// // // // //         <div>
// // // // //           <div className="mb-2">
// // // // //             <h1 className="font-semibold text-gray-900 dark:text-gray-100"></h1>
// // // // // Name:
// // // // // <span className="font-normal text-gray-700 dark:text-gray-300 mi-2"> {user.name} </span>
// // // // //           </div>
// // // // //           <div className="mb-2">
// // // // //             <h1 className="font-semibold text-gray-900 dark:text-gray-100"></h1>
// // // // // Email:
// // // // // <span className="font-normal text-gray-700 dark:text-gray-300 mi-2"> {user.email}</span>
// // // // //           </div>
// // // // //           <div className="mb-2">
// // // // //             <h1 className="font-semibold text-gray-900 dark:text-gray-100"></h1>
// // // // // Role:
// // // // // <span className="font-normal text-gray-700 dark:text-gray-300 mi-2"> {user.role.toUpperCase()}</span>
// // // // //           </div>
// // // // //           <Dialog>
// // // // //             <DialogTrigger asChild>
// // // // //              <Button className="bg-zinc-900 hover:bg-zinc-800 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-700 min-w-40" >Edit Profile</Button>
// // // // //             </DialogTrigger>
// // // // //             <DialogContent className="sm:max-w-md p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
// // // // //               <DialogHeader className="text-left">
// // // // //                 <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">Edit Profile</DialogTitle>
// // // // //                 <DialogDescription className="text-sm text-gray-500 dark:text-gray-400 mt-1">Make changes to your profile here. Click save when you're done.</DialogDescription>
// // // // //               </DialogHeader>
// // // // //               <div className='grid gap-4 py-4'>
// // // // //                 <div className='grid grid-cols-4 gap-4 items-center'>
// // // // //                   <label className='text-sm font-medium text-gray-700 dark:text-gray-300'>Name</label>
// // // // //                   <Input type="text" placeholder="Name" className="col-span-3" value={name} onChange={(e)=> setName(e.target.value)} />
// // // // //                 </div>
// // // // //                 <div className='grid grid-cols-4 gap-4 items-center'>
// // // // //                   <label className='text-sm font-medium text-gray-700 dark:text-gray-300'>Profile Photo</label>
// // // // //                   <Input onChange={onChangeHandler} type="file" accept="image/*" className="col-span-3"/>
// // // // //               </div>
// // // // //               </div>
// // // // //               <DialogFooter>
// // // // //                 <button disaabled={isLoading} className="bg-zinc-700 hover:bg-zinc-800 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-700 min-w-40 flex items-center justify-center" onClick={updateUserHandler}>
// // // // //                   {
// // // // // isLoading ? (
// // // // //   <>
// // // // //   <Loader2 className="animate-spin mr-2 h-4 w-4"/>Please wait
// // // // //   </>
// // // // // ) :"Save Changes"
// // // // //                   }
// // // // //                 </button>
// // // // //               </DialogFooter>
// // // // //             </DialogContent>
// // // // //           </Dialog>
// // // // //         </div>
// // // // //       </div>
// // // // //       <div>
// // // // //         <h1 className='font-medium text-lg'>
// // // // //        Courses you're enrolled in
// // // // //         </h1>
// // // // //         <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 my-5'>
// // // // // {
// // // // //   user.enrolledCourses.length === 0 ? 
// // // // //     <h1 className='text-gray-500'>You are not enrolled in any courses yet.</h1>
// // // // //    : ( user.enrolledCourses.map((course) => <Course course={course} key={course._id}/>)
// // // // // )
// // // // // }
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>


// // // // //   )
// // // // // }
// // // // // export default Profile;
// // // // import React, { useEffect, useState } from 'react';
// // // // import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
// // // // import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
// // // // import Button from '../../components/ui/button';
// // // // import { Input } from '../../components/ui/input';
// // // // import { Loader2 } from 'lucide-react';
// // // // import Course from './Course';
// // // // import { useLoadUserQuery, useUpdateUserMutation } from '../../features/api/authApi';

// // // // const Profile = () => {
// // // //   const [name, setName] = useState("");
// // // //   const [profilePhoto, setProfilePhoto] = useState("");

// // // //   const { data, isLoading } = useLoadUserQuery();
// // // //   const [updateUser, { 
// // // //     data: updateUserData, 
// // // //     isLoading: updateUserIsLoading, 
// // // //     isError, 
// // // //     error, 
// // // //     isSuccess 
// // // //   }] = useUpdateUserMutation();

// // // //   // Hooks ke baad hi early return karo (ye sabse important fix hai)
// // // //   if (isLoading) {
// // // //     return <h1 className="text-center text-2xl my-20">Profile Loading...</h1>;
// // // //   }

// // // //   const { user } = data;

// // // //   // Name ko initial value do taaki edit dialog mein empty na dikhe
// // // //   useEffect(() => {
// // // //     if (user?.name) {
// // // //       setName(user.name);
// // // //     }
// // // //   }, [user]);

// // // //   const onChangeHandler = (e) => {
// // // //     if (e.target.type === "file") {
// // // //       const file = e.target.files?.[0];
// // // //       if (file) {
// // // //         setProfilePhoto(file);
// // // //       }
// // // //     }
// // // //   };

// // // //   const updateUserHandler = async () => {
// // // //     const formData = new FormData();
// // // //     if (name && name !== user.name) {
// // // //       formData.append("name", name);
// // // //     }
// // // //     if (profilePhoto) {
// // // //       formData.append("profilePhoto", profilePhoto);
// // // //     }

// // // //     if (formData.entries().next().done) {
// // // //       return; // kuch change nahi to API call mat karo
// // // //     }

// // // //     await updateUser(formData);
// // // //   };

// // // //   // Toast ke liye useEffect (ab safe hai kyunki early return hooks ke baad hai)
// // // //   useEffect(() => {
// // // //     if (isSuccess) {
// // // //       // toast.success(updateUserData?.message || "Profile updated successfully");
// // // //       console.log("Profile updated successfully");
// // // //     }
// // // //     if (isError) {
// // // //       // toast.error(error?.data?.message || "Something went wrong. Please try again.");
// // // //       console.error("Update failed");
// // // //     }
// // // //   }, [isSuccess, isError, updateUserData, error]);

// // // //   return (
// // // //     <div className="max-w-4xl mx-auto px-4 my-24">
// // // //       <h1 className="text-2xl font-bold text-center md:text-left">PROFILE</h1>

// // // //       <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-5">
// // // //         <div className="flex flex-col items-center">
// // // //           <Avatar className="w-24 h-24 md:w-32 md:h-32 mb-4">
// // // //             <AvatarImage src={user.photoUrl || "https://github.com/shadcn.png"} alt={user.name} />
// // // //             <AvatarFallback>{user.name?.[0]?.toUpperCase() || "U"}</AvatarFallback>
// // // //           </Avatar>
// // // //         </div>

// // // //         <div className="flex-1">
// // // //           <div className="mb-2">
// // // //             <span className="font-semibold text-gray-900 dark:text-gray-100">Name:</span>
// // // //             <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">{user.name}</span>
// // // //           </div>
// // // //           <div className="mb-2">
// // // //             <span className="font-semibold text-gray-900 dark:text-gray-100">Email:</span>
// // // //             <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">{user.email}</span>
// // // //           </div>
// // // //           <div className="mb-2">
// // // //             <span className="font-semibold text-gray-900 dark:text-gray-100">Role:</span>
// // // //             <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">{user.role.toUpperCase()}</span>
// // // //           </div>

// // // //           <Dialog>
// // // //             <DialogTrigger asChild>
// // // //               <Button className="bg-zinc-900 hover:bg-zinc-800 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-700 min-w-40">
// // // //                 Edit Profile
// // // //               </Button>
// // // //             </DialogTrigger>

// // // //             <DialogContent className="sm:max-w-md p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
// // // //               <DialogHeader className="text-left">
// // // //                 <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">Edit Profile</DialogTitle>
// // // //                 <DialogDescription className="text-sm text-gray-500 dark:text-gray-400 mt-1">
// // // //                   Make changes to your profile here. Click save when you're done.
// // // //                 </DialogDescription>
// // // //               </DialogHeader>

// // // //               <div className="grid gap-4 py-4">
// // // //                 <div className="grid grid-cols-4 gap-4 items-center">
// // // //                   <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
// // // //                   <Input
// // // //                     type="text"
// // // //                     placeholder="Name"
// // // //                     className="col-span-3"
// // // //                     value={name}
// // // //                     onChange={(e) => setName(e.target.value)}
// // // //                   />
// // // //                 </div>

// // // //                 <div className="grid grid-cols-4 gap-4 items-center">
// // // //                   <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Profile Photo</label>
// // // //                   <Input
// // // //                     onChange={onChangeHandler}
// // // //                     type="file"
// // // //                     accept="image/*"
// // // //                     className="col-span-3"
// // // //                   />
// // // //                 </div>
// // // //               </div>

// // // //               <DialogFooter>
// // // //                 <button
// // // //                   disabled={updateUserIsLoading}
// // // //                   className="bg-zinc-700 hover:bg-zinc-800 disabled:opacity-50 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-700 min-w-40 flex items-center justify-center"
// // // //                   onClick={updateUserHandler}
// // // //                 >
// // // //                   {updateUserIsLoading ? (
// // // //                     <>
// // // //                       <Loader2 className="animate-spin mr-2 h-4 w-4" /> Please wait
// // // //                     </>
// // // //                   ) : (
// // // //                     "Save Changes"
// // // //                   )}
// // // //                 </button>
// // // //               </DialogFooter>
// // // //             </DialogContent>
// // // //           </Dialog>
// // // //         </div>
// // // //       </div>

// // // //       <div>
// // // //         <h1 className="font-medium text-lg">Courses you're enrolled in</h1>
// // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
// // // //           {user.enrolledCourses?.length === 0 ? (
// // // //             <p className="text-gray-500 col-span-full text-center">
// // // //               You are not enrolled in any courses yet.
// // // //             </p>
// // // //           ) : (
// // // //             user.enrolledCourses?.map((course) => (
// // // //               <Course course={course} key={course._id} />
// // // //             ))
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Profile;
// // // import React, { useEffect, useState } from 'react';
// // // import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
// // // import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
// // // import Button from '../../components/ui/button';
// // // import { Input } from '../../components/ui/input';
// // // import { Loader2 } from 'lucide-react';
// // // import Course from './Course';
// // // import { useLoadUserQuery, useUpdateUserMutation } from '../../features/api/authApi';

// // // const Profile = () => {
// // //   const [name, setName] = useState("");
// // //   const [profilePhoto, setProfilePhoto] = useState("");

// // //   const { data, isLoading } = useLoadUserQuery();
// // //   const [updateUser, { 
// // //     data: updateUserData, 
// // //     isLoading: updateUserIsLoading, 
// // //     isError, 
// // //     error, 
// // //     isSuccess 
// // //   }] = useUpdateUserMutation();

// // //   // YE SAB HOOKS PEHLE CALL HO RAHE HAIN — YE SABSE BADA FIX HAI
// // //   // Ab early return hooks ke baad hai, isliye error nahi aayega

// // //   if (isLoading) {
// // //     return <h1>Profile Loading...</h1>;
// // //   }

// // //   const { user } = data;

// // //   const onChangeHandler = (e) => {  
// // //     const file = e.target.files?.[0];
// // //     if (file) 
// // //       setProfilePhoto(file);
    
// // //     if (e.target.name === "name") {
// // //       setName(e.target.value);
// // //     }
// // //   };

// // //   const updateUserHandler = async () => {
// // //     const formData = new FormData();
// // //     formData.append("name", name);
// // //     formData.append("profilePhoto", profilePhoto);
// // //     await updateUser(formData);
// // //   };

// // //   useEffect(() => {
// // //     if (isSuccess) {
// // //       // toast.success(data.message) || "Profile updated successfully";
// // //     }
// // //     if (isError) {
// // //       // toast.error(error.message || "Something went wrong. Please try again.");
// // //     }
// // //   }, [error, updateUserData, isSuccess, isError]);

// // //   return (
// // //     <div className="max-w-4xl mx-auto px-4 my-24">
// // //       <h1 className="text-2xl font-bold text-center md:text-left">PROFILE</h1>
// // //       <div className='flex flex-col md:flex-row items-center md:items-start gap-8 my-5'>
// // //         <div className="flex flex-col items-center">
// // //           <Avatar className="w-24 h-24 md:w-32 md:h-32 mb-4">
// // //             <AvatarImage src={user.photoUrl || "https://github.com/shadcn.png"} alt="@shadcn" />
// // //             <AvatarFallback>CN</AvatarFallback>
// // //           </Avatar>
// // //         </div>
// // //         <div>
// // //           <div className="mb-2">
// // //             <h1 className="font-semibold text-gray-900 dark:text-gray-100"></h1>
// // //             Name:
// // //             <span className="font-normal text-gray-700 dark:text-gray-300 ml-2"> {user.name} </span>
// // //           </div>
// // //           <div className="mb-2">
// // //             <h1 className="font-semibold text-gray-900 dark:text-gray-100"></h1>
// // //             Email:
// // //             <span className="font-normal text-gray-700 dark:text-gray-300 ml-2"> {user.email}</span>
// // //           </div>
// // //           <div className="mb-2">
// // //             <h1 className="font-semibold text-gray-900 dark:text-gray-100"></h1>
// // //             Role:
// // //             <span className="font-normal text-gray-700 dark:text-gray-300 ml-2"> {user.role.toUpperCase()}</span>
// // //           </div>
// // //           <Dialog>
// // //             <DialogTrigger asChild>
// // //               <Button className="bg-zinc-900 hover:bg-zinc-800 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-700 min-w-40">
// // //                 Edit Profile
// // //               </Button>
// // //             </DialogTrigger>
// // //             <DialogContent className="sm:max-w-md p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
// // //               <DialogHeader className="text-left">
// // //                 <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">Edit Profile</DialogTitle>
// // //                 <DialogDescription className="text-sm text-gray-500 dark:text-gray-400 mt-1">
// // //                   Make changes to your profile here. Click save when you're done.
// // //                 </DialogDescription>
// // //               </DialogHeader>
// // //               <div className='grid gap-4 py-4'>
// // //                 <div className='grid grid-cols-4 gap-4 items-center'>
// // //                   <label className='text-sm font-medium text-gray-700 dark:text-gray-300'>Name</label>
// // //                   <Input 
// // //                     type="text" 
// // //                     placeholder="Name" 
// // //                     className="col-span-3" 
// // //                     value={name} 
// // //                     onChange={(e) => setName(e.target.value)} 
// // //                   />
// // //                 </div>
// // //                 <div className='grid grid-cols-4 gap-4 items-center'>
// // //                   <label className='text-sm font-medium text-gray-700 dark:text-gray-300'>Profile Photo</label>
// // //                   <Input onChange={onChangeHandler} type="file" accept="image/*" className="col-span-3"/>
// // //                 </div>
// // //               </div>
// // //               <DialogFooter>
// // //                 <button 
// // //                   disabled={updateUserIsLoading} 
// // //                   className="bg-zinc-700 hover:bg-zinc-800 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-700 min-w-40 flex items-center justify-center" 
// // //                   onClick={updateUserHandler}
// // //                 >
// // //                   {updateUserIsLoading ? (
// // //                     <>
// // //                       <Loader2 className="animate-spin mr-2 h-4 w-4"/>Please wait
// // //                     </>
// // //                   ) : "Save Changes"}
// // //                 </button>
// // //               </DialogFooter>
// // //             </DialogContent>
// // //           </Dialog>
// // //         </div>
// // //       </div>
// // //       <div>
// // //         <h1 className='font-medium text-lg'>
// // //           Courses you're enrolled in
// // //         </h1>
// // //         <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 my-5'>
// // //           {user.enrolledCourses.length === 0 ? 
// // //             <h1 className='text-gray-500'>You are not enrolled in any courses yet.</h1>
// // //             : user.enrolledCourses.map((course) => <Course course={course} key={course._id}/>)
// // //           }
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Profile;
// // import React, { useEffect, useState } from 'react';
// // import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
// // import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
// // import Button from '../../components/ui/button';
// // import { Input } from '../../components/ui/input';
// // import { Loader2 } from 'lucide-react';
// // import Course from './Course';
// // import { useLoadUserQuery, useUpdateUserMutation } from '../../features/api/authApi';

// // const Profile = () => {
// //   const [name, setName] = useState("");
// //   const [profilePhoto, setProfilePhoto] = useState("");

// //   const { data, isLoading } = useLoadUserQuery();
// //   const [updateUser, { 
// //     data: updateUserData, 
// //     isLoading: updateUserIsLoading, 
// //     isError, 
// //     error, 
// //     isSuccess 
// //   }] = useUpdateUserMutation();

// //   // YE useEffect KO YAHAN UPAR LAO – SABSE BADA FIX
// //   useEffect(() => {
// //     if (isSuccess) {
// //       // toast.success(data.message) ||" Profile updated successfully";
// //     }
// //     if (isError) {
// //       // toast.error(error.message || "Something went wrong. Please try again.");
// //     }
// //   }, [error, updateUserData, isSuccess, isError]);

// //   // Ab early return safe hai kyunki saare hooks upar call ho chuke hain
// //   if (isLoading) {
// //     return <h1>Profile Loading...</h1>;
// //   }

// //   const { user } = data;

// //   const onChangeHandler = (e) => {  
// //     const file = e.target.files?.[0];
// //     if (file) 
// //       setProfilePhoto(file);
    
// //     if (e.target.name === "name") {
// //       setName(e.target.value);
// //     }
// //   };

// //   const updateUserHandler = async () => {
// //     const formData = new FormData();
// //     formData.append("name", name);
// //     formData.append("profilePhoto", profilePhoto);
// //     await updateUser(formData);
// //   };

// //   return (
// //     <div className="max-w-4xl mx-auto px-4 my-24">
// //       <h1 className="text-2xl font-bold text-center md:text-left">PROFILE</h1>
// //       <div className='flex flex-col md:flex-row items-center md:items-start gap-8 my-5'>
// //         <div className="flex flex-col items-center">
// //           <Avatar className="w-24 h-24 md:w-32 md:h-32 mb-4">
// //             <AvatarImage src={user.photoUrl || "https://github.com/shadcn.png"} alt="@shadcn" />
// //             <AvatarFallback>CN</AvatarFallback>
// //           </Avatar>
// //         </div>
// //         <div>
// //           <div className="mb-2">
// //             <h1 className="font-semibold text-gray-900 dark:text-gray-100"></h1>
// //             Name:
// //             <span className="font-normal text-gray-700 dark:text-gray-300 ml-2"> {user.name} </span>
// //           </div>
// //           <div className="mb-2">
// //             <h1 className="font-semibold text-gray-900 dark:text-gray-100"></h1>
// //             Email:
// //             <span className="font-normal text-gray-700 dark:text-gray-300 ml-2"> {user.email}</span>
// //           </div>
// //           <div className="mb-2">
// //             <h1 className="font-semibold text-gray-900 dark:text-gray-100"></h1>
// //             Role:
// //             <span className="font-normal text-gray-700 dark:text-gray-300 ml-2"> {user.role.toUpperCase()}</span>
// //           </div>
// //           <Dialog>
// //             <DialogTrigger asChild>
// //               <Button className="bg-zinc-900 hover:bg-zinc-800 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-700 min-w-40" >Edit Profile</Button>
// //             </DialogTrigger>
// //             <DialogContent className="sm:max-w-md p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
// //               <DialogHeader className="text-left">
// //                 <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">Edit Profile</DialogTitle>
// //                 <DialogDescription className="text-sm text-gray-500 dark:text-gray-400 mt-1">Make changes to your profile here. Click save when you're done.</DialogDescription>
// //               </DialogHeader>
// //               <div className='grid gap-4 py-4'>
// //                 <div className='grid grid-cols-4 gap-4 items-center'>
// //                   <label className='text-sm font-medium text-gray-700 dark:text-gray-300'>Name</label>
// //                   <Input type="text" placeholder="Name" className="col-span-3" value={name} onChange={(e)=> setName(e.target.value)} />
// //                 </div>
// //                 <div className='grid grid-cols-4 gap-4 items-center'>
// //                   <label className='text-sm font-medium text-gray-700 dark:text-gray-300'>Profile Photo</label>
// //                   <Input onChange={onChangeHandler} type="file" accept="image/*" className="col-span-3"/>
// //                 </div>
// //               </div>
// //               <DialogFooter>
// //                 <button 
// //                   disabled={updateUserIsLoading}
// //                   className="bg-zinc-700 hover:bg-zinc-800 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-700 min-w-40 flex items-center justify-center" 
// //                   onClick={updateUserHandler}
// //                 >
// //                   {
// //                     updateUserIsLoading ? (
// //                       <>
// //                         <Loader2 className="animate-spin mr-2 h-4 w-4"/>Please wait
// //                       </>
// //                     ) : "Save Changes"
// //                   }
// //                 </button>
// //               </DialogFooter>
// //             </DialogContent>
// //           </Dialog>
// //         </div>
// //       </div>
// //       <div>
// //         <h1 className='font-medium text-lg'>
// //           Courses you're enrolled in
// //         </h1>
// //         <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 my-5'>
// //           {
// //             user.enrolledCourses.length === 0 ? 
// //               <h1 className='text-gray-500'>You are not enrolled in any courses yet.</h1>
// //               : user.enrolledCourses.map((course) => <Course course={course} key={course._id}/>)
// //           }
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Profile;
// import React, { useEffect, useState } from 'react';
// import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
// import Button from '../../components/ui/button';
// import { Input } from '../../components/ui/input';
// import { Loader2 } from 'lucide-react';
// import Course from './Course';
// import { useLoadUserQuery, useUpdateUserMutation } from '../../features/api/authApi';

// const Profile = () => {
//   const [name, setName] = useState("");
//   const [profilePhoto, setProfilePhoto] = useState(null);

//   const { data, isLoading, isError: loadError } = useLoadUserQuery();
//   const [updateUser, { isLoading: updateLoading, isSuccess, isError, error }] = useUpdateUserMutation();

//   // Set initial name when user loads
//   useEffect(() => {
//     if (data?.user?.name) {
//       setName(data.user.name);
//     }
//   }, [data]);

//   // Success/Error handling
//   useEffect(() => {
//     if (isSuccess) {
//       alert("Profile updated successfully!");
//     }
//     if (isError) {
//       alert(error?.data?.message || "Update failed");
//     }
//   }, [isSuccess, isError, error]);

//   if (isLoading) {
//     return <div className="text-center text-2xl my-20">Profile Loading...</div>;
//   }

//   if (loadError || !data?.user) {
//     return <div className="text-center text-red-500">Failed to load profile. Please login again.</div>;
//   }

//   const { user } = data;

//   const handleFileChange = (e) => {
//     if (e.target.files?.[0]) {
//       setProfilePhoto(e.target.files[0]);
//     }
//   };

//   const handleUpdate = async () => {
//     const formData = new FormData();
//     if (name && name !== user.name) formData.append("name", name);
//     if (profilePhoto) formData.append("profilePhoto", profilePhoto);

//     if (!formData.has("name") && !formData.has("profilePhoto")) {
//       alert("No changes made");
//       return;
//     }

//     await updateUser(formData);
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 my-24">
//       <h1 className="text-2xl font-bold text-center md:text-left">PROFILE</h1>

//       <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-5">
//         <div className="flex flex-col items-center">
//           <Avatar className="w-32 h-32">
//             <AvatarImage src={user.photoUrl || "https://github.com/shadcn.png"} alt={user.name} />
//             <AvatarFallback>{user.name?.[0]?.toUpperCase() || "U"}</AvatarFallback>
//           </Avatar>
//         </div>

//         <div className="flex-1">
//           <div className="mb-4"><strong>Name:</strong> {user.name}</div>
//           <div className="mb-4"><strong>Email:</strong> {user.email}</div>
//           <div className="mb-4"><strong>Role:</strong> {user.role?.toUpperCase()}</div>

//           <Dialog>
//             <DialogTrigger asChild>
//               <Button className="bg-zinc-900 hover:bg-zinc-800 text-white">Edit Profile</Button>
//             </DialogTrigger>
//             <DialogContent>
//               <DialogHeader>
//                 <DialogTitle>Edit Profile</DialogTitle>
//                 <DialogDescription>Update your name and profile photo.</DialogDescription>
//               </DialogHeader>
//               <div className="grid gap-4 py-4">
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <label className="text-right">Name</label>
//                   <Input className="col-span-3" value={name} onChange={(e) => setName(e.target.value)} />
//                 </div>
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <label className="text-right">Photo</label>
//                   <Input type="file" accept="image/*" className="col-span-3" onChange={handleFileChange} />
//                 </div>
//               </div>
//               <DialogFooter>
//                 <button
//                   disabled={updateLoading}
//                   onClick={handleUpdate}
//                   className="bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-white px-6 py-2 rounded"
//                 >
//                   {updateLoading ? (
//                     <> <Loader2 className="inline animate-spin mr-2" /> Saving...</>
//                   ) : "Save Changes"}
//                 </button>
//               </DialogFooter>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>

//       <div>
//         <h2 className="text-lg font-medium mb-4">Courses you're enrolled in</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {user.enrolledCourses?.length === 0 ? (
//             <p className="text-gray-500 col-span-full text-center">No courses enrolled yet.</p>
//           ) : (
//             user.enrolledCourses?.map((course) => (
//               <Course key={course._id} course={course} />
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import Button from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Loader2 } from 'lucide-react';
import Course from './Course';
import { useLoadUserQuery, useUpdateUserMutation } from '../../features/api/authApi';

const Profile = () => {
  const [name, setName] = useState("");
  // const [profilePhoto, setProfilePhoto] = useState(null);  // Photo upload temporary comment out

  const { data, isLoading, isError: loadError } = useLoadUserQuery();
  const [updateUser, { isLoading: updateLoading, isSuccess, isError, error }] = useUpdateUserMutation();

  // Set initial name when user loads
  useEffect(() => {
    if (data?.user?.name) {
      setName(data.user.name);
    }
  }, [data]);

  // Success/Error handling
  useEffect(() => {
    if (isSuccess) {
      alert("Profile updated successfully!");
    }
    if (isError) {
      alert(error?.data?.message || "Update failed");
    }
  }, [isSuccess, isError, error]);

  if (isLoading) {
    return <div className="text-center text-2xl my-20">Profile Loading...</div>;
  }

  if (loadError || !data?.user) {
    return <div className="text-center text-red-500">Failed to load profile. Please login again.</div>;
  }

  const { user } = data;

  // const handleFileChange = (e) => {  // Photo upload handler comment out
  //   if (e.target.files?.[0]) {
  //     setProfilePhoto(e.target.files[0]);
  //   }
  // };

  const handleUpdate = async () => {
    const formData = new FormData();
    if (name && name !== user.name) formData.append("name", name);
    // if (profilePhoto) formData.append("profilePhoto", profilePhoto);  // Photo upload comment out

    if (!formData.has("name") /* && !formData.has("profilePhoto") */) {  // Photo check comment out
      alert("No changes made");
      return;
    }

    await updateUser(formData);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 my-24">
      <h1 className="text-2xl font-bold text-center md:text-left">PROFILE</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-5">
        <div className="flex flex-col items-center">
          <Avatar className="w-32 h-32">
            <AvatarImage src={user.photoUrl || "https://github.com/shadcn.png"} alt={user.name} />
            <AvatarFallback>{user.name?.[0]?.toUpperCase() || "U"}</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex-1">
          <div className="mb-4"><strong>Name:</strong> {user.name}</div>
          <div className="mb-4"><strong>Email:</strong> {user.email}</div>
          <div className="mb-4"><strong>Role:</strong> {user.role?.toUpperCase()}</div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-zinc-900 hover:bg-zinc-800 text-white">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>Update your name and profile photo.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Name</label>
                  <Input className="col-span-3" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                {/* 
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Photo</label>
                  <Input type="file" accept="image/*" className="col-span-3" onChange={handleFileChange} />
                </div>
                */}
              </div>
              <DialogFooter>
                <button
                  disabled={updateLoading}
                  onClick={handleUpdate}
                  className="bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-white px-6 py-2 rounded"
                >
                  {updateLoading ? (
                    <> <Loader2 className="inline animate-spin mr-2" /> Saving...</>
                  ) : "Save Changes"}
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium mb-4">Courses you're enrolled in</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {user.enrolledCourses?.length === 0 ? (
            <p className="text-gray-500 col-span-full text-center">No courses enrolled yet.</p>
          ) : (
            user.enrolledCourses?.map((course) => (
              <Course key={course._id} course={course} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;