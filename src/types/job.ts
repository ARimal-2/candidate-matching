export interface Job {
  id: number| null;
  title: string;
  location: string;
  repolink: string;
  openings: number;
  type: string;
  experience: number;
  description: string;
  deadline: Date|null;
  status: "active" | "closed";
}

export interface Candidate{
  id : number;
  title:string;
  Name: string;
  experience: string;
  description: string;
  skills:string [];
  missing_skills: string[];
  type: string;
  round: string;
}

  // const handleStatusChange = (id: number, newStatus: string) => {
  //   setCandidates(prev =>
  //     prev.map(c =>
  //       c.id === id ? { ...c, status: newStatus } : c
  //     )
  //   );
  // };
  // const handleNextRound = (id: number) => {
  //   type Stage = 'AI Review' | 'CV Screening' | 'Interview';

  //   const allowed: Record<Stage, string[]> = {
  //     'AI Review': ['Suggested'],
  //     'CV Screening': ['In Review', 'Selected'],
  //     'Interview': ['Schedule'],
  //   };

  //   setCandidates(prev =>
  //     prev.map(c => {
  //       if (c.id === id) {
  //         const currentIndex = stages.indexOf(c.round);
  //         const currentStage = c.round as Stage;
  //         const currentStatus = c.status;

  //         if (currentStage in allowed && !allowed[currentStage]?.includes(currentStatus)) {
  //           return c;
  //         }

  //         const nextRound = stages[currentIndex + 1] || c.round;
  //         return {
  //           ...c,
  //           round: nextRound,
  //           status: '',
  //         };
  //       }
  //       return c;
  //     })
  //   );

  //   const candidate = candidates.find(c => c.id === id);
  //   const currentIndex = stages.indexOf(candidate?.round || '');
  //   const nextStage = stages[currentIndex + 1];

  //   if (nextStage === 'Interview') {
  //     setInterviewReadyCandidates(prev => [...prev, id]);
  //   }
  // };
