import { useState } from 'react';
import Navbar from './Navbar';
import logo from '../img/logo.png';
import { Job } from '@/types/job';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import CreateJobForm from './CreateForm';
import Viewallbutton from '@/components/common/Viewallbutton';

const initialJobs: Job[] = [
  {
    id: 1,
    title: 'Full-Stack Engineer',
    location: 'Kathmandu, Nepal',
    repolink: 'https://github.com/company/software-engineer',
    openings: 3,
    type: 'Full-time',
    experience: 2,
    description:
      "We're looking for a skilled software engineer to join our team.",
    deadline: new Date('12/08/2025'),
    status: 'active',
  },
];

const Home = () => {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);

  const handleCreateJob = (newJob: Job) => {
    setJobs((prevJobs) => [...prevJobs, newJob]);
  };

  return (
    <div className="h-full">
      <div className="flex justify-between  px-[109px] py-8">
        <h1
          className="font-sen flex gap-1 font-bold"
          style={{
            fontSize: '20px',
            lineHeight: '28px',
            letterSpacing: '-0.04em',
          }}
        >
          Active Jobs
        </h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-[#FF7614] hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8337 4.99999C10.8337 4.77898 10.7459 4.56701 10.5896 4.41073C10.4333 4.25445 10.2213 4.16666 10.0003 4.16666C9.77931 4.16666 9.56735 4.25445 9.41107 4.41073C9.25479 4.56701 9.16699 4.77898 9.16699 4.99999V9.16666H5.00033C4.77931 9.16666 4.56735 9.25445 4.41107 9.41073C4.25479 9.56701 4.16699 9.77898 4.16699 9.99999C4.16699 10.221 4.25479 10.433 4.41107 10.5892C4.56735 10.7455 4.77931 10.8333 5.00033 10.8333H9.16699V15C9.16699 15.221 9.25479 15.433 9.41107 15.5892C9.56735 15.7455 9.77931 15.8333 10.0003 15.8333C10.2213 15.8333 10.4333 15.7455 10.5896 15.5892C10.7459 15.433 10.8337 15.221 10.8337 15V10.8333H15.0003C15.2213 10.8333 15.4333 10.7455 15.5896 10.5892C15.7459 10.433 15.8337 10.221 15.8337 9.99999C15.8337 9.77898 15.7459 9.56701 15.5896 9.41073C15.4333 9.25445 15.2213 9.16666 15.0003 9.16666H10.8337V4.99999Z"
                  fill="white"
                />
              </svg>
              Create Vacancy Post
            </Button>
          </SheetTrigger>

          <CreateJobForm onSubmit={handleCreateJob} />
        </Sheet>
      </div>

      <div className="py-2 px-[109px] ">
        {jobs.length === 0 ? (
          <div className="flex justify-center ">
            <div className="flex flex-col items-center  w-fit py-24">
              <img
                src={logo}
                alt="No Jobs"
                className="mb-4"
                style={{ width: '360px', height: '204px', objectFit: 'cover' }}
              />
              <div className="text-center  font-bold text-[28px] leading-[28px]">
                No job listings available
              </div>
              <div className="  text-center text-4 py-4 px-[6px] leading-[22px] text-[#6E7191] max-w-md">
                There are currently no job listings available. To create a new
                listing, click the Create Vacancy Post button.
              </div>
            </div>
          </div>
        ) : (
          <ul className="space-y-4">
            {jobs.map((job) => (
              <li key={job.id} className="px-7 p-4 border rounded-lg shadow-sm">
                <div className="flex py-7  gap-2 items-center">
                  {/* Folder Icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6665 5.83334H3.33317C2.4127 5.83334 1.6665 6.57953 1.6665 7.5V15.8333C1.6665 16.7538 2.4127 17.5 3.33317 17.5H16.6665C17.587 17.5 18.3332 16.7538 18.3332 15.8333V7.5C18.3332 6.57953 17.587 5.83334 16.6665 5.83334Z"
                      stroke="#FF7614"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3332 17.5V4.16667C13.3332 3.72464 13.1576 3.30072 12.845 2.98816C12.5325 2.67559 12.1085 2.5 11.6665 2.5H8.33317C7.89114 2.5 7.46722 2.67559 7.15466 2.98816C6.8421 3.30072 6.6665 3.72464 6.6665 4.16667V17.5"
                      stroke="#FF7614"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="text-2xl font-plusjakarta text-[#262338] leading-7 font-bold ">
                    {job.title}{' '}
                    <span className="text-sm text-gray-500">
                      ({job.openings} required)
                    </span>
                  </span>

                  {/* Dots icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 ml-auto text-gray-600 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                    />
                  </svg>
                </div>

                {/* Job details */}
                <div className="flex items-center gap-4 text-sm text-gray-700">
                  <div className="flex items-center gap-1">
                    {/* Location Icon */}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 6.66666C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66666C2 5.07536 2.63214 3.54924 3.75736 2.42402C4.88258 1.29881 6.4087 0.666664 8 0.666664C9.5913 0.666664 11.1174 1.29881 12.2426 2.42402C13.3679 3.54924 14 5.07536 14 6.66666Z"
                        stroke="#FF7614"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 8.66666C9.10457 8.66666 10 7.77123 10 6.66666C10 5.56209 9.10457 4.66666 8 4.66666C6.89543 4.66666 6 5.56209 6 6.66666C6 7.77123 6.89543 8.66666 8 8.66666Z"
                        stroke="#FF7614"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {job.location}
                  </div>

                  <div className="h-5 border-l border-gray-300" />
                  <p className=" flex gap-1 text-gray-500">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6667 2.66666H3.33333C2.59695 2.66666 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66666 12.6667 2.66666Z"
                        stroke="#FF7614"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2 6.66666H14"
                        stroke="#FF7614"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.6665 1.33334V4"
                        stroke="#FF7614"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.3335 1.33334V4"
                        stroke="#FF7614"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {job.type}
                  </p>

                  <div className="h-5 border-l border-gray-300" />
                  <span className="flex gap-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_652_6950)">
                        <path
                          d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8C14.6668 4.3181 11.6821 1.33334 8.00016 1.33334C4.31826 1.33334 1.3335 4.3181 1.3335 8C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z"
                          stroke="#FF7614"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 4V8L10.6667 9.33333"
                          stroke="#FF7614"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_652_6950">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    {job.deadline
                      ? new Date(job.deadline).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'numeric',
                          day: 'numeric',
                        })
                      : 'No deadline'}
                  </span>
                </div>
                <div className="flex py-6 text-500 justify-between text-[#4E4B66]">
                  <div className="flex gap-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1665 17.5V15.8333C19.166 15.0948 18.9201 14.3773 18.4676 13.7936C18.0152 13.2099 17.3816 12.793 16.6665 12.6083"
                        stroke="#FF7614"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.1668 17.5V15.8333C14.1668 14.9493 13.8156 14.1014 13.1905 13.4763C12.5654 12.8512 11.7176 12.5 10.8335 12.5H4.16683C3.28277 12.5 2.43493 12.8512 1.80981 13.4763C1.18469 14.1014 0.833496 14.9493 0.833496 15.8333V17.5"
                        stroke="#FF7614"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.3335 2.60833C14.0505 2.79192 14.686 3.20892 15.1399 3.79359C15.5937 4.37827 15.84 5.09736 15.84 5.8375C15.84 6.57764 15.5937 7.29673 15.1399 7.88141C14.686 8.46608 14.0505 8.88308 13.3335 9.06667"
                        stroke="#FF7614"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.49984 9.16667C9.34079 9.16667 10.8332 7.67428 10.8332 5.83333C10.8332 3.99238 9.34079 2.5 7.49984 2.5C5.65889 2.5 4.1665 3.99238 4.1665 5.83333C4.1665 7.67428 5.65889 9.16667 7.49984 9.16667Z"
                        stroke="#FF7614"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>{' '}
                    Total 50 Applicants
                  </div>
                  <button
                    type="button"
                    className="flex items-center gap-2 me-2 mb-2 text-sm font-plusjakarta  text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    View all
                    <svg
                      width="5"
                      height="10"
                      viewBox="0 0 5 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.82188 4.56208C4.93601 4.67626 5.00013 4.83108 5.00013 4.99252C5.00013 5.15396 4.93601 5.30878 4.82188 5.42295L1.37779 8.86704C1.32163 8.92519 1.25445 8.97157 1.18017 9.00348C1.10589 9.03539 1.026 9.05218 0.945164 9.05288C0.864325 9.05359 0.784156 9.03818 0.709335 9.00757C0.634513 8.97696 0.566537 8.93175 0.509373 8.87459C0.45221 8.81742 0.407003 8.74945 0.376391 8.67463C0.345779 8.5998 0.330375 8.51964 0.331078 8.4388C0.33178 8.35796 0.348575 8.27807 0.380483 8.20379C0.41239 8.12951 0.458771 8.06233 0.51692 8.00617L3.53057 4.99252L0.516919 1.97887C0.406018 1.86404 0.344653 1.71025 0.34604 1.55062C0.347427 1.39099 0.411456 1.2383 0.524335 1.12541C0.637215 1.01254 0.789915 0.948505 0.949545 0.947119C1.10918 0.945731 1.26296 1.0071 1.37779 1.118L4.82188 4.56208Z"
                        fill="#262338"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex  ">
                  <div className="flex-1  border p-3 rounded-lg shadow-sm justify-items-center text-center h-fit w-72">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 9C6.268 9 9 6.363 9 0C9 6.363 11.713 9 18 9C11.713 9 9 11.713 9 18C9 11.713 6.268 9 0 9Z"
                        fill="#FF7614"
                        stroke="#FF7614"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                Ai Review
                    <div className="flex py-[25px] gap-3  h-fit">
                      <div className="flex-2  p-4 border  rounded-[12px] shadow-sm  h-fit  w-[118px]">
                        <div className="text-left ">
                          <div className="text-[#1EB04C] ">20</div> Suggested
                        </div>
                        <div className="py-2">
                          <Viewallbutton>
                            <span>View </span>
                          </Viewallbutton>
                        </div>
                      </div>
                      <div className="flex-2 p-4 border  rounded-[12px] shadow-sm   w-[118px]">
                        <div className="text-left ">
                          <div className="text-[#ED5356]">30</div> Rejected
                        </div>
                        <div className="py-2 ">
                          <Viewallbutton>
                            <span>View </span>
                          </Viewallbutton>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-12 pb-12 gap-2">
                    <Separator
                      decorative
                      className="!w-[48px] !border-t-2 border-dashed text-[#D9DBE9] mx-auto"
                    />
                  </div>

                  <div className="flex-2 p-3 border rounded-lg shadow-sm justify-items-center text-center h-fit  " >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="20" height="20" rx="10" fill="#FF7614" />
                      <path
                        d="M11.5337 5.31818V15.5H9.99254V6.85938H9.93288L7.4968 8.45028V6.97869L10.0373 5.31818H11.5337Z"
                        fill="#FCFCFC"
                      />
                    </svg>
                    CV Screening
                    <div className="flex flex-col gap-3 p-2  pt-[33px] ">
                      {/* Top row: Suggested + Rejected */}
                      <div className="flex gap-4">
                      <div className="flex-2 p-4 border  rounded-[12px] shadow-sm h-fit  w-[118px]">
                          <div className="text-left">
                            <div className="text-[#1EB04C]">20</div> Selected
                          </div>
                          <div className="py-2">
                            <Viewallbutton>
                              <span>View </span>
                            </Viewallbutton>
                          </div>
                        </div>

                      <div className="flex-2 p-4 border  rounded-[12px] shadow-sm h-fit  w-[118px]">
                          <div className="text-left">
                            <div className="text-[#ED5356]">20</div> Rejected
                          </div>
                          <div className="py-2">
                            <Viewallbutton>
                              <span>View </span>
                            </Viewallbutton>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                      <div className="flex-2 p-4 border  rounded-[12px] shadow-sm h-fit  w-[118px]">
                          <div className="text-left">
                            <div className="text-[#FABC00]">20</div> Pending
                          </div>
                          <div className="py-2">
                            <Viewallbutton>
                              <span>View </span>
                            </Viewallbutton>
                          </div>
                        </div>

                      <div className="flex-2 p-4 border  rounded-[12px] shadow-sm h-fit  w-[118px]">
                          <div className="text-left">
                            <div>20</div> Hold On
                          </div>
                          <div className="py-2">
                            <Viewallbutton>
                              <span>View </span>
                            </Viewallbutton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-12 pb-12 gap-2">
                    <Separator
                      decorative
                      className="!w-[48px] !border-t-2 border-dashed text-[#D9DBE9] mx-auto"
                    />
                  </div>
                  <div className="flex-3 py-2 gap-6 border rounded-lg shadow-sm justify-items-center text-center  ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="20" height="20" rx="10" fill="#FF7614" />
                      <path
                        d="M6.68643 15.5V14.3864L10.1317 10.8168C10.4996 10.429 10.8029 10.0893 11.0415 9.79759C11.2835 9.5026 11.4641 9.22254 11.5835 8.95739C11.7028 8.69223 11.7624 8.41051 11.7624 8.11222C11.7624 7.77415 11.6829 7.48248 11.5238 7.23722C11.3647 6.98864 11.1476 6.79806 10.8725 6.66548C10.5974 6.52959 10.2875 6.46165 9.94283 6.46165C9.57824 6.46165 9.26006 6.53622 8.98828 6.68537C8.7165 6.83452 8.50769 7.04498 8.36186 7.31676C8.21603 7.58854 8.14311 7.90672 8.14311 8.27131H6.67649C6.67649 7.65151 6.81901 7.10961 7.10405 6.6456C7.38909 6.18158 7.78018 5.82197 8.27734 5.56676C8.7745 5.30824 9.33961 5.17898 9.97266 5.17898C10.6123 5.17898 11.1758 5.30658 11.663 5.56179C12.1535 5.81368 12.5363 6.15838 12.8114 6.59588C13.0865 7.03007 13.2241 7.5206 13.2241 8.06747C13.2241 8.44531 13.1528 8.81487 13.0103 9.17614C12.8711 9.5374 12.6275 9.9401 12.2795 10.3842C11.9315 10.825 11.4476 11.3603 10.8278 11.9901L8.80433 14.108V14.1825H13.3881V15.5H6.68643Z"
                        fill="#FCFCFC"
                      />
                    </svg>
                    Interview Round
                    <div className="flex flex-col gap-6 p-4 pt-[33px] h-fit  ">
                      {/* Top row: Suggested + Rejected */}
                      <div className="flex w-max gap-3 ">
                      <div className="flex-2 p-4 border  rounded-[12px] shadow-sm h-fit w-[118px]  ">
                          <div className="text-left">
                            <div className="text-[#1EB04C]">20</div> Selected
                          </div>
                          <div className="py-2">
                            <Viewallbutton>
                              <span>View </span>
                            </Viewallbutton>
                          </div>
                        </div>

                      <div className="flex-2 p-4 border  rounded-[12px] shadow-sm h-fit  w-[118px]">
                          <div className="text-left">
                            <div className="text-[#ED5356]">20</div> Rejected
                          </div>
                          <div className="py-2">
                            <Viewallbutton>
                              <span>View </span>
                            </Viewallbutton>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                     
   <div className="flex-2 p-4 border rounded-[12px] shadow-sm h-fit w-[118px]">
  <div className="flex items-center justify-between">
    <div className="text-left flex gap-2">
      <div className=" text-[#FABC00]">20</div>
      <div>Pending</div>
    </div>
    <Viewallbutton>
      <span>View</span>
    </Viewallbutton>
</div>


                         
 <div className="flex items-center justify-between p-4  w-fit gap-6">
  {/* Unscheduled */}
  <div className="flex flex-col items-center text-center">
    <div className="text-[#6E7191] text-[16px] font-medium">20</div>
<div className="text-[12px] text-[#6E7191] whitespace-nowrap">Un-Scheduled</div>
    <div className="pt-1">
      <Viewallbutton>
        <span>View</span>
      </Viewallbutton>
    </div>
  </div>

  {/* Vertical separator (no rotation needed) */}
  <div className="w-px h-[48px] bg-gray-300" />

  {/* Scheduled */}
  <div className="flex flex-col items-center text-center">
    <div className="text-[#6E7191] text-[16px] font-medium">20</div>
    <div className="text-[12px] text-[#6E7191]">Scheduled</div>
    <div className="pt-1">
      <Viewallbutton>
        <span>View</span>
      </Viewallbutton>
    </div>
  </div>
</div>



                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-12 pb-12 gap-2">
                    <Separator
                      decorative
                      className="!w-[48px] !border-t-2 border-dashed border-[#D9DBE9] mx-auto"
                    />
                  </div>
                  <div className="flex-3 p-4 border rounded-lg shadow-sm justify-items-center text-center h-fit w-fit">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="20" height="20" rx="10" fill="#FF7614" />
                      <path
                        d="M6.68643 15.5V14.3864L10.1317 10.8168C10.4996 10.429 10.8029 10.0893 11.0415 9.79759C11.2835 9.5026 11.4641 9.22254 11.5835 8.95739C11.7028 8.69223 11.7624 8.41051 11.7624 8.11222C11.7624 7.77415 11.6829 7.48248 11.5238 7.23722C11.3647 6.98864 11.1476 6.79806 10.8725 6.66548C10.5974 6.52959 10.2875 6.46165 9.94283 6.46165C9.57824 6.46165 9.26006 6.53622 8.98828 6.68537C8.7165 6.83452 8.50769 7.04498 8.36186 7.31676C8.21603 7.58854 8.14311 7.90672 8.14311 8.27131H6.67649C6.67649 7.65151 6.81901 7.10961 7.10405 6.6456C7.38909 6.18158 7.78018 5.82197 8.27734 5.56676C8.7745 5.30824 9.33961 5.17898 9.97266 5.17898C10.6123 5.17898 11.1758 5.30658 11.663 5.56179C12.1535 5.81368 12.5363 6.15838 12.8114 6.59588C13.0865 7.03007 13.2241 7.5206 13.2241 8.06747C13.2241 8.44531 13.1528 8.81487 13.0103 9.17614C12.8711 9.5374 12.6275 9.9401 12.2795 10.3842C11.9315 10.825 11.4476 11.3603 10.8278 11.9901L8.80433 14.108V14.1825H13.3881V15.5H6.68643Z"
                        fill="#FCFCFC"
                      />
                    </svg>
                    Hired
                    <div className="flex flex-col gap-3 pt-[33px] h-max ">
                      {/* Top row: Suggested + Rejected */}
                      <div className="flex w-max gap-3">
                      <div className="flex-2 p-4 border  rounded-[12px] shadow-sm h-fit  w-[118px]">
                          <div className="text-left">
                            <div className="text-[#1EB04C]">20</div> Selected
                          </div>
                          <div className="py-2">
                            <Viewallbutton>
                              <span>View </span>
                            </Viewallbutton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
