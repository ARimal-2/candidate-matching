import { useState } from 'react';
import { Candidate } from '@/types/job';
import { Input } from "@/components/ui/input";
import { Separator } from '@/components/ui/separator';
import JobDescription from './JobDescription';
import { Label } from '@/components/ui/label';
import {
  AiReview,
  AiReviewButton,
  Back,
  CvScreening,
  CvScreeningIcon,
  Experience,
  Hired,
  HiredButton,
  InterviewRound,
  InterviewRoundButton,
  Search,
} from '@/components/icons/svg';
import Breifcase from '@/components/icons/svg';
import { Select } from '@nextui-org/react';

const stages = ['AI Review', 'CV Screening', 'Interview', 'Hired'];

const roundStatusOptions: { [key: string]: string[] } = {
  'AI Review': ['Suggested'],
  'CV Screening': ['Pending', 'In Review', 'Rejected', 'Selected'],
  'Interview': ['Pending', 'Selected', 'Rejected'],
  'Hired': ['Hired',''],
};

const initialCandidates: Candidate[] = [
  {
    id: 1,
    Name: 'Sarah Johnson',
    title: 'Full Stack Developer',
    experience: '5 years',
    description:
      "Sarah Johnson demonstrates a well-rounded skill set and professional background ideal for a Full Stack Engineer role. With over 5 years of hands-on experience in both frontend and backend development, she has successfully delivered scalable web applications across diverse industries.",
    skills: ['React', 'Node.js', 'MongoDB'],
    missing_skills: ['GraphQL', 'Docker'],
    type: '', // Add a default or appropriate value for 'type'
    round: 'AI Review', // Add a default value for 'round'
  },
  {
    id: 2,
    Name: 'Sarah Johnson',
    title: 'Full Stack Developer',
    experience: '5 years',
    description:
      "Sarah Johnson demonstrates a well-rounded skill set and professional background ideal for a Full Stack Engineer role. With over 5 years of hands-on experience in both frontend and backend development, she has successfully delivered scalable web applications across diverse industries.",
    skills: ['React', 'Node.js', 'MongoDB'],
    missing_skills: ['GraphQL', 'Docker'],
    type: '', // Add a default or appropriate value for 'type'
    round: 'AI Review', // Add a default value for 'round'
  },
  {
    id: 3,
    Name: 'Sarah Johnson',
    title: 'Full Stack Developer',
    experience: '5 years',
    description:
      "Sarah Johnson demonstrates a well-rounded skill set and professional background ideal for a Full Stack Engineer role. With over 5 years of hands-on experience in both frontend and backend development, she has successfully delivered scalable web applications across diverse industries.",
    skills: ['React', 'Node.js', 'MongoDB'],
    missing_skills: ['GraphQL', 'Docker'],
    type: '', // Add a default or appropriate value for 'type'
    round: 'AI Review', // Add a default value for 'round'
  },
  {
    id: 4,
    Name: 'Sarah Johnson',
    title: 'Full Stack Developer',
    experience: '5 years',
    description:
      "Sarah Johnson demonstrates a well-rounded skill set and professional background ideal for a Full Stack Engineer role. With over 5 years of hands-on experience in both frontend and backend development, she has successfully delivered scalable web applications across diverse industries.",
    skills: ['React', 'Node.js', 'MongoDB'],
    missing_skills: ['GraphQL', 'Docker'],
    type: '', // Add a default or appropriate value for 'type'
    round: 'AI Review', // Add a default value for 'round'
  },
];


const CandidateReview = () => {
  const [candidates, setCandidates] = useState(() =>
    initialCandidates.map(c => ({
      ...c,
      round: 'AI Review',
      status: 'Suggested',
    }))
  );


  const [showJobDescription, setShowJobDescription] = useState(true);
  const [interviewReadyCandidates, setInterviewReadyCandidates] = useState<number[]>([]);
  const [showInterviewNote, setShowInterviewNote] = useState<number | null>(null);
  
  const handleStatusChange = (id: number, newStatus: string) => {
    setCandidates(prev =>
      prev.map(c =>
        c.id === id ? { ...c, status: newStatus } : c
      )
    );
  };
  const handleNextRound = (id: number) => {
    type Stage = 'AI Review' | 'CV Screening' | 'Interview';

    const allowed: Record<Stage, string[]> = {
      'AI Review': ['Suggested'],
    
      'CV Screening': ['In Review', 'Selected'],
      'Interview': ['Schedule'],
    };

    setCandidates(prev =>
      prev.map(c => {
        if (c.id === id) {
          const currentIndex = stages.indexOf(c.round);
          const currentStage = c.round as Stage;
          const currentStatus = c.status;

          if (currentStage in allowed && !allowed[currentStage]?.includes(currentStatus)) {
            return c;
          }

          const nextRound = stages[currentIndex + 1] || c.round;
          return {
            ...c,
            round: nextRound,
            status: '',
          };
        }
        return c;
      })
    );

    const candidate = candidates.find(c => c.id === id);
    const currentIndex = stages.indexOf(candidate?.round || '');
    const nextStage = stages[currentIndex + 1];

    if (nextStage === 'Interview') {
      setInterviewReadyCandidates(prev => [...prev, id]);
    }
  };

  return (
    <div>
      {/* Top Bar with Back and Filters */}
      <div className='p-[30px]'>
        <div className="flex justify-between  ">
          <div className="flex px-6 items-center gap-2 text-[16px] cursor-pointer">
            <Back />
            <p>Back</p>
          </div>
          <div className="flex items-center gap-3 px-6  ">
            <div className=" inline-flex  gap-8   rounded-[12px] shadow-sm max-w-fit bg-white">
              <div className="flex items-center">
                <Search />
                <Input className="border-none" type="search" placeholder="Search" />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="experienceFilter" className="text-sm font-medium text-gray-700">
                  Experience:
                </label>
                <select id="experienceFilter" className="rounded text-sm text-gray-700">
                  <option value="0-2">(0-2 years)</option>
                  <option value="3-5">(3-5 years)</option>
                  <option value="6+">(6+ years)</option>
                </select>
              </div>

              <div className="h-[28px] mt-1">
                <Separator orientation="vertical" />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="roundFilter" className="text-sm font-medium text-gray-700">
                  Round:
                </label>
                <select id="roundFilter" className="rounded px-4 py-2 text-sm text-gray-700">
                  <option value="">All Rounds</option>
                  <option value="screening">Screening</option>
                  <option value="technical">Technical</option>
                  <option value="final">Final</option>
                </select>
              </div>

              <div className="h-[28px] mt-1">
                <Separator orientation="vertical" />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="statusFilter" className="text-sm font-medium text-gray-700">
                  Status:
                </label>
                <select id="statusFilter" className="rounded px-4 py-2 text-sm text-gray-700">
                  <option value="">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="in-review">In Review</option>
                  <option value="selected">Selected</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="toggleJD" className="text-sm font-medium text-gray-700">
                Job Description:
              </label>
              <button
                id="toggleJD"
                onClick={() => setShowJobDescription(!showJobDescription)}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 
      ${showJobDescription ? 'bg-orange-500' : 'bg-orange-300 '}`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300
        ${showJobDescription ? 'translate-x-6' : 'translate-x-0'}`}
                />
              </button>
            </div>

          </div>
        </div>

        {/* Candidate Details Box */} 
        <div className={`flex p-6 gap-6 ${showJobDescription ? 'flex-row' : 'flex-col'}`}>

          <div className={`${showJobDescription ? 'w-1/2' : 'w-full'} flex P-6 flex-col gap-6`}>
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className="border p-6 gap-6  rounded-[12px] shadow-sm bg-white overflow-auto h-fit"
              >
                {/* Name + Round + Status Dropdown */}
                <div className="flex  items-center justify-between">
                  <h2 className="text-xl font-bold">{candidate.Name}</h2>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">
                      <strong>Round:</strong> {candidate.round}
                      </span>
                {candidate.round === 'AI Review' ? (
                      <span className="text-sm text-green-600">Suggested</span>
                    ) : candidate.round === 'Hired' && candidate.status === 'Hired' ? (
                      <div className="text-green-600 font-semibold flex items-center gap-2">
                        <Hired /> Hired
                      </div>
                    ) : (
                      <select
                        className="rounded px-2 py-1 text-sm text-gray-700 border"
                        value={candidate.status}
                        onChange={(e) => handleStatusChange(candidate.id, e.target.value)}
                      >
                        <option value="">Select Status</option>
                        {roundStatusOptions[candidate.round]?.map(status => (
                          <option key={status} value={status}>{status}</option>
                        ))}
                      </select>
                    )}
                  </div>
                </div>

                <div className="flex items-center pt-[20px] gap-3 text-md text-gray-600">
                  {/* Title with Icon */}
                  <div className="flex items-center gap-1">
                    <Breifcase />
                    <p>{candidate.title}</p>
                  </div>

                  {/* Vertical Separator */}
                  <div className="h-[20px] mt-1">
                <Separator orientation="vertical" />
              </div>

                  {/* Experience */}
                  <div className="flex items-center gap-1">
                    <Experience />
                    <p>Experience: {candidate.experience}</p>
                  </div>
                </div>


                <div
                  className={`flex ${showJobDescription ? 'flex-col' : 'flex-row'
                    } gap-6 items-start`}
                >
                  {/* Candidate Info */}
                  <div className={`${showJobDescription ? 'w-full' : 'w-1/2'} flex flex-col gap-4`}>
                    <p className="text-sm text-gray-700">{candidate.description}</p>

                    <div className="flex flex-wrap gap-2">
                      <span className="font-semibold mr-2">Tech Stacks:</span>
                      {candidate.skills.map((skill) => (
                        <span
                          key={skill}
                          className="border px-3 py-1 rounded-[16px] text-sm text-gray-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="font-semibold mr-2">Missing Skills:</span>
                      {candidate.missing_skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[#FF1C1C] border px-3 py-1 rounded-[16px] text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Vertical Separator - hidden on mobile */}
                  {!showJobDescription && (
                    <div className="h-45 ">
                      <Separator orientation="vertical" />
                    </div>
                  )}

                  {/* Status Progress */}
                  <div className={`${showJobDescription ? 'w-full mt-4' : 'w-1/2'} flex flex-col gap-4`}>
                    <div className="flex flex-wrap justify-between text-center gap-4">
                      {stages.map((stage) => (
                        <div key={stage} className="flex flex-col items-center flex-1">
                          <div className="w-10 h-10 rounded-full border flex items-center justify-center mb-1">
                            {stage === 'AI Review' && <AiReviewButton />}
                            {stage === 'CV Screening' && <CvScreeningIcon />}
                            {stage === 'Interview' && <InterviewRoundButton />}
                            {stage === 'Hired' && <HiredButton />}
                          </div>
                          <p className="text-sm font-medium">{stage}</p>
                          <p className={`text-xs ${candidate.round === stage
                            ? candidate.status === 'Suggested'
                              ? 'text-green-600'
                              : 'text-blue-500'
                            : 'text-gray-400'
                            }`}>
                            {candidate.round === stage
                              ? candidate.status
                              : stage === 'Interview' || stage === 'Hired'
                                ? '---'
                                : 'Pending'}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Actions - now stacked below status */}
                     <div className="flex gap-4 w-full">
                      {candidate.round === 'Interview' && interviewReadyCandidates.includes(candidate.id) ? (
                        <>
                     
                          {showInterviewNote === candidate.id && (
                            <div className="border mt-4 p-4 rounded bg-gray-100 w-full">
                              <p className="mb-2">Would you like to schedule an interview?</p>
                              <div className="flex gap-4">
                                <button className="bg-green-500 text-white px-4 py-2 rounded">Yes</button>
                                <button
                                  onClick={() => setShowInterviewNote(null)}
                                  className="bg-red-500 text-white px-4 py-2 rounded"
                                >
                                  No
                                </button>
                              </div>
                            </div>
                          )}
                        </>
                      ) : candidate.round !== 'Hired' && (
                        <button
                          onClick={() => handleNextRound(candidate.id)}
                          className={`px-4 py-2 rounded flex-1 text-white ${candidate.status === 'Pending'
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-[#FF7614]'}`}
                          disabled={candidate.status === 'Pending'}
                        >
                          Move to {stages[stages.indexOf(candidate.round) + 1] || 'Next'}
                        </button>
                      )}
                      <button className="border px-4 py-2 rounded text-orange-600 flex-1">
                        View CV
                      </button>
                    </div>

                  </div>
                </div>

                <div>
                </div>

              </div>

            ))}

          </div>
          {showJobDescription && (
            <div className="w-1/2">
              <JobDescription />
            </div>
          )}

        </div>

      </div>
    </div>
  );
};




export default CandidateReview;
