// import { useState } from 'react';
// import Navbar from './Navbar';
// import logo from '../img/logo.png';
// import { Job } from '@/types/job';
// import { Sheet, SheetTrigger } from '@/components/ui/sheet';
// import { Button } from '@/components/ui/button';
// import { Separator } from '@/components/ui/separator';
// import CreateJobForm from './CreateForm';
// import Viewallbutton from '@/components/common/Viewallbutton';
// import Briefcase, { AiReview, CvScreening, Deadline, DotIcon, Hired, InterviewRound, JobType, Location, TotalApplicant }  from '@/components/icons/svg';
// import AiReviewCard from '@/components/Cards/AiReview';

// const initialJobs: Job[] = [
//   {
//     id: 1,
//     title: 'Full-Stack Engineer',
//     location: 'Kathmandu, Nepal',
//     repolink: 'https://github.com/company/software-engineer',
//     openings: 3,
//     type: 'Full-time',
//     experience: 2,
//     description:
//       "We're looking for a skilled software engineer to join our team.",
//     deadline: new Date('12/08/2025'),
//     status: 'active',
//   },
//   {
//     id: 2,
//     title: 'Full-Stack Engineer',
//     location: 'Kathmandu, Nepal',
//     repolink: 'https://github.com/company/software-engineer',
//     openings: 3,
//     type: 'Full-time',
//     experience: 2,
//     description:
//       "We're looking for a skilled software engineer to join our team.",
//     deadline: new Date('12/08/2025'),
//     status: 'active',
//   },
// ];

// const Home = () => {
//   const [jobs, setJobs] = useState<Job[]>(initialJobs);

//   const handleCreateJob = (newJob: Job) => {
//     setJobs((prevJobs) => [...prevJobs, newJob]);
//   };

//   return (
//     <div className="h-full">
//       <div className="flex justify-between  px-[109px] py-8">
//         <h1
//           className="font-sen flex gap-1 font-bold"
//           style={{
//             fontSize: '20px',
//             lineHeight: '28px',
//             letterSpacing: '-0.04em',
//           }}
//         >
//           Active Jobs
//         </h1>
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button className="bg-[#FF7614] hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-2">
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 20 20"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M10.8337 4.99999C10.8337 4.77898 10.7459 4.56701 10.5896 4.41073C10.4333 4.25445 10.2213 4.16666 10.0003 4.16666C9.77931 4.16666 9.56735 4.25445 9.41107 4.41073C9.25479 4.56701 9.16699 4.77898 9.16699 4.99999V9.16666H5.00033C4.77931 9.16666 4.56735 9.25445 4.41107 9.41073C4.25479 9.56701 4.16699 9.77898 4.16699 9.99999C4.16699 10.221 4.25479 10.433 4.41107 10.5892C4.56735 10.7455 4.77931 10.8333 5.00033 10.8333H9.16699V15C9.16699 15.221 9.25479 15.433 9.41107 15.5892C9.56735 15.7455 9.77931 15.8333 10.0003 15.8333C10.2213 15.8333 10.4333 15.7455 10.5896 15.5892C10.7459 15.433 10.8337 15.221 10.8337 15V10.8333H15.0003C15.2213 10.8333 15.4333 10.7455 15.5896 10.5892C15.7459 10.433 15.8337 10.221 15.8337 9.99999C15.8337 9.77898 15.7459 9.56701 15.5896 9.41073C15.4333 9.25445 15.2213 9.16666 15.0003 9.16666H10.8337V4.99999Z"
//                   fill="white"
//                 />
//               </svg>
//               Create Vacancy Post
//             </Button>
//           </SheetTrigger>

//           <CreateJobForm onSubmit={handleCreateJob} />
//         </Sheet>
//       </div>

//       <div className=" px-[109px] ">
//         {jobs.length === 0 ? (
//           <div className="flex justify-center ">
//             <div className="flex flex-col items-center  w-fit py-24">
//               <img
//                 src={logo}
//                 alt="No Jobs"
//                 className="mb-4"
//                 style={{ width: '360px', height: '204px', objectFit: 'cover' }}
//               />
//               <div className="text-center  font-bold text-[28px] leading-[28px]">
//                 No job listings available
//               </div>
//               <div className="  text-center text-4 py-4 px-[6px] leading-[22px] text-[#6E7191] max-w-md">
//                 There are currently no job listings available. To create a new
//                 listing, click the Create Vacancy Post button.
//               </div>
//             </div>
//           </div>
//         ) : (
//           <ul className="space-y-4">
//             {jobs.map((job) => (
//               <li key={job.id} className=" p-7 border rounded-[12px]  shadow-sm">
                
//                 <div className="flex  gap-2 items-center">
//                   {/* Folder Icon */}
//                 <Briefcase/>
//                   <span className="text-2xl font-plusjakarta text-[#262338] leading-7 font-bold ">
//                     {job.title}{' '}
//                     <span className="text-sm text-gray-500">
//                       ({job.openings} required)
//                     </span>
//                   </span>

//                   {/* Dots icon */}
//                  <DotIcon/>
//                 </div>

//                 {/* Job details */}
//                 <div className="flex gap-4   items-center py-[18px] text-sm text-gray-700">
//                   <div className="gap-1 flex items-center">
//                     {/* Location Icon */}
//                     <Location/>
//                     {job.location}
//                   </div>

    // <div className="h-[20px]">
    //       <Separator orientation="vertical" />
    //     </div>               
//            <p className=" flex gap-1 text-gray-500">
//              <JobType/>
//                     {job.type}
//                   </p>

//     <div className="h-[20px]">
//           <Separator orientation="vertical" />
//         </div>                       <span className="flex gap-1">
//                   <Deadline/>
//                     {job.deadline
//                       ? new Date(job.deadline).toLocaleDateString('en-US', {
//                           year: 'numeric',
//                           month: 'numeric',
//                           day: 'numeric',
//                         })
//                       : 'No deadline'}
//                   </span>
//                 </div>
//                 <div className="flex py-6 text-500 justify-between text-[#4E4B66]">
//                   <div className="flex gap-1">
//                     <TotalApplicant/>
//                     Total 50 Applicants
//                   </div>
//                  <Viewallbutton>
//                               <span>View All </span>
//                             </Viewallbutton>
//                 </div>
//                 <div className="flex  ">
//                   {/* <div className="flex-2  border p-3 rounded-lg shadow-sm justify-items-center text-center h-fit ">
//                   <AiReview/>
//                 Ai Review
//                     <div className="flex mt-8  w-full gap-3  h-fit">
//                       <div className="flex-1  p-4 border min-w-[40%]   rounded-[12px] shadow-sm  h-fit ">
//                         <div className="text-left ">
//                           <div className="text-[#1EB04C] ">20</div> Suggested
//                         </div>
//                         <div className="py-2">
//                           <Viewallbutton>
//                             <span>View </span>
//                           </Viewallbutton>
//                         </div>
//                       </div>
//                       <div className="flex-1 p-4 border  min-w-[40%] rounded-[12px] shadow-sm   ">
//                         <div className="text-left ">
//                           <div className="text-[#ED5356]">30</div> Rejected
//                         </div>
//                         <div className="py-2 ">
//                           <Viewallbutton>
//                             <span>View </span>
//                           </Viewallbutton>
//                         </div>
//                       </div>
//                     </div>
//                   </div> */}
//                   <AiReviewCard/>
//                   <div className="pt-12 pb-12 gap-2">
//                     <Separator
//                       decorative
//                       className="!w-[48px] !border-t-2 border-dashed text-[#D9DBE9] mx-auto"
//                     />
//                   </div>

//                   <div className="flex-2 p-3 border rounded-lg shadow-sm justify-items-center text-center h-fit  " >
//                  <CvScreening/>
//                     CV Screening
//                     <div className="w-full flex flex-col gap-3  pt-[33px] ">
//                       {/* Top row: Suggested + Rejected */}
//                       <div className="flex gap-4">
//                       <div className="flex-2 p-4 border  rounded-[12px] shadow-sm h-fit  ">
//                           <div className="text-left">
//                             <div className="text-[#1EB04C]">20</div> Selected
//                           </div>
//                           <div className="py-2">
//                             <Viewallbutton>
//                               <span>View </span>
//                             </Viewallbutton>
//                           </div>
//                         </div>

//                       <div className="flex-2 p-4 border  rounded-[12px] shadow-sm h-fit  ">
//                           <div className="text-left">
//                             <div className="text-[#ED5356]">20</div> Rejected
//                           </div>
//                           <div className="py-2">
//                             <Viewallbutton>
//                               <span>View </span>
//                             </Viewallbutton>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex gap-3">
//                       <div className="flex-2 p-4 border  rounded-[12px] shadow-sm h-fit  ">
//                           <div className="text-left">
//                             <div className="text-[#FABC00]">20</div> Pending
//                           </div>
//                           <div className="py-2">
//                             <Viewallbutton>
//                               <span>View </span>
//                             </Viewallbutton>
//                           </div>
//                         </div>

//                       <div className="flex-2 p-4 border  rounded-[12px] shadow-sm h-fit  ">
//                           <div className="text-left">
//                             <div>20</div> Hold On
//                           </div>
//                           <div className="py-2">
//                             <Viewallbutton>
//                               <span>View </span>
//                             </Viewallbutton>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="pt-12 pb-12 gap-2">
//                     <Separator
//                       decorative
//                       className="!w-[48px] !border-t-2 border-dashed text-[#D9DBE9] mx-auto"
//                     />
//                   </div>
//                   <div className="flex-2 p-3  border rounded-lg shadow-sm justify-items-center text-center  ">
//                    <InterviewRound/>
//                     Interview Round
//                     <div className="flex w-full flex-col gap-6  pt-[33px] h-fit  ">
//                       {/* Top row: Suggested + Rejected */}
//                       <div className="flex  gap-3 ">
//                       <div className="flex-2 p-4 border  rounded-[12px] shadow-sm h-fit   ">
//                           <div className="text-left">
//                             <div className="text-[#1EB04C]">20</div> Selected
//                           </div>
//                           <div className="py-2">
//                             <Viewallbutton>
//                               <span>View </span>
//                             </Viewallbutton>
//                           </div>
//                         </div>

//                       <div className="flex-2 p-4 border  rounded-[12px] shadow-sm h-fit ">
//                           <div className="text-left">
//                             <div className="text-[#ED5356]">20</div> Rejected
//                           </div>
//                           <div className="py-2">
//                             <Viewallbutton>
//                               <span>View </span>
//                             </Viewallbutton>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex gap-3">
                     
//    <div className="flex-2 p-4 border rounded-[12px] shadow-sm h-fit ">
//   <div className="flex items-center justify-between">
//     <div className="text-left flex gap-2">
//       <div className=" text-[#FABC00]">20</div>
//       <div>Pending</div>
//     </div>
//     <Viewallbutton>
//       <span>View</span>
//     </Viewallbutton>
// </div>


                         
//  <div className="flex w-full py-4 gap-13 py-[26px">
//   {/* Unscheduled */}
//   <div className="flex flex-col   ">
//     <div className="text-[#6E7191] text-[16px] text-left font-medium">20</div>
// <div className="text-[12px] text-[#6E7191]  whitespace-nowrap ">Un-Scheduled</div>
//     <div className="pt-1">
//       <Viewallbutton>
//         <span>View</span>
//       </Viewallbutton>
//     </div>
//   </div>

//   {/* Vertical separator (no rotation needed) */}
//   <div className="w-px h-[48px] bg-gray-300" />

//   {/* Scheduled */}
//   <div className="flex flex-col  px-[26px] text-left">
//     <div className="text-[#6E7191] text-[16px] font-medium ">20</div>
//     <div className="text-[12px] text-[#6E7191]">Scheduled</div>
//     <div className="pt-1">
//       <Viewallbutton>
//         <span>View</span>
//       </Viewallbutton>
//     </div>
//   </div>
// </div>



//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="pt-12 pb-12 gap-2">
//                     <Separator
//                       decorative
//                       className="!w-[48px] !border-t-2 border-dashed border-[#D9DBE9] mx-auto"
//                     />
//                   </div>
//                   <div className="flex-1 p-4 border rounded-lg shadow-sm justify-items-center text-center h-fit ">
//                   <Hired/>
//                     Hired
//                     <div className="w-full  gap-3 pt-[33px] ">
//                       {/* Top row: Suggested + Rejected */}
//                       <div className="flex w-full gap-3">
//                       <div className="flex-1 w-full p-4 border  rounded-[12px] shadow-sm  ">
//                           <div className="text-left">
//                             <div className="text-[#1EB04C]">20</div> Selected
//                           </div>
//                           <div className="py-2">
//                             <Viewallbutton>
//                               <span>View </span>
//                             </Viewallbutton>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
