import { QuizContext } from "@/store/context-store"
import { useContext } from "react"
import InfoCard from "../components/info-card";
import QuestionCard from "../components/question-card";
import NoQuizResult from "../components/no-quiz";

const ReportPage = ()=>{

  const {quizEvaluation}=useContext(QuizContext);
  console.log("Quiz Evaluation:",quizEvaluation)
  const accuracy = (quizEvaluation?.score /(quizEvaluation?.totalQuestions || 15))*100;

  if(!quizEvaluation){
    return <NoQuizResult/>
  }
  return <div className="flex-1">
           <div className="h-full border-2 shadow-sm flex flex-col gap-y-10 py-5 px-10">

            <h1 className="text-2xl font-bold  text-center"><span className="bg-clip-text text-transparent bg-linear-to-b from-foreground from-60% to-[#999]">Quiz Report</span> 🏆</h1>

            {/* Summary */}
            <div>
              <h2 className="text-xl font-bold">🧾 Summary</h2>
              <div className="mt-4 border grid grid-cols-3  gap-2 p-4 place-items-center">
                <InfoCard title={"Time Taken"} value={quizEvaluation?.timetaken}/>
                <InfoCard title={"Total Questions"} value={quizEvaluation?.totalQuestions}/>
                <InfoCard title={"Attempted"} value={quizEvaluation?.attempted}/>
                <InfoCard title={"Correct"} value={quizEvaluation?.score}/>
                <InfoCard title={"Incorrect"} value={quizEvaluation?.incorrectCount}/>
                <InfoCard title={"Unattempted"} value={quizEvaluation?.unattemptedCount}/>

              </div>
            </div>

            {/* Score */}
             <div>
              <h2 className="text-xl font-bold">📈 Score   </h2>
              <div className="mt-4 border flex flex-col gap-y-2 p-4">
                  
                    <h3 className="text-xl font-semibold tracking-wider text-purple-500">
                      {quizEvaluation?.score || 0}
                      <span className="mx-2 text-white">/</span>
                      {quizEvaluation?.totalQuestions || 15}
                       <span className="mx-2 text-white">({accuracy.toFixed(2)|| 0} % accuracy)</span>
                     </h3>
              </div>
            </div>

            {/* Questions Review */}
             <div>
              <h2 className="text-xl font-bold">🧠 Question Review</h2>
              <div className="mt-4 border flex flex-col gap-y-2 p-4">
                  
                    <QuestionCard userEvaluation={quizEvaluation.userEvaluation || []}/>
              </div>
            </div>

           </div>
  </div>
}


export default ReportPage