import Viewallbutton from "@/components/common/Viewallbutton";
import { AiReview } from "../icons/svg";



export default function AiReviewCard() {
  return (
     <div className="flex-2  border p-3 rounded-lg shadow-sm justify-items-center text-center h-fit ">
                  <AiReview/>
                Ai Review
                    <div className="flex mt-8  w-full gap-3  h-fit">
                      <div className="flex-1  p-4 border min-w-[40%]   rounded-[12px] shadow-sm  h-fit ">
                        <div className="text-left ">
                          <div className="text-[#1EB04C] ">20</div> Suggested
                        </div>
                        <div className="py-2">
                          <Viewallbutton>
                            <span>View </span>
                          </Viewallbutton>
                        </div>
                      </div>
                      <div className="flex-1 p-4 border  min-w-[40%] rounded-[12px] shadow-sm   ">
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
  )
}
