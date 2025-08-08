import Navbar from "./Component/Navbar";
// import Home from "./Component/Home";
import CandidateReview from "./Component/CandidateReview";
import { Separator } from "@/components/ui/separator";
export default function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Separator />
      <CandidateReview/>
      {/* <Home /> */}
    </div>
  );
}



