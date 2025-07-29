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
