import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Timer from "./timer";
import QuesNavBlock from "@/components/custom/ques-block";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { QuizContext } from "@/store/context-store";
import { btnColors, legendsData } from "@/lib/utils";
import Legend from "@/components/custom/legend";
import { useNavigate } from "react-router-dom";

const Quiz = ({ quizData, timeInfo, pause,reset }) => {
  const navigate = useNavigate();
  const {
    userAnswers,
    handleUserAnswer,
    visited,
    handleQuesVisit,
    handleQuizEvaluation,
  } = useContext(QuizContext);
  const [currQuesInd, setCurrQuesInd] = useState(0);
  const currQues = quizData[currQuesInd];

  const handlePagination = (action) => {
    if (action === "prev") {
      setCurrQuesInd((prev) => Math.max(0, prev - 1));
    } else if (action === "next") {
      const limit = quizData.length - 1;
      setCurrQuesInd((prev) => Math.min(prev + 1, limit));
    }
  };

  const getQuesBtnColor = (quesIndex) => {
    if (currQuesInd === quesIndex) {
      return btnColors.current;
    } else if (userAnswers[quesIndex]) {
      return btnColors.answered;
    } else if (visited[quesIndex]) {
      return btnColors.visited;
    } else {
      return btnColors.unvisited;
    }
  };

  const handleSubmit = () => {
    pause();
    const totalSeconds = 30 * 60 - (timeInfo.minutes * 60 + timeInfo.seconds);
    const takenMin = Math.floor(totalSeconds / 60);
    const takenSec = totalSeconds % 60;
    const timeTaken = `${String(takenMin).padStart(2, "0")} min ${String(
      takenSec
    ).padStart(2, "0")} sec`;
    handleQuizEvaluation(timeTaken);
    reset()
    navigate("/quiz/result");
  };

  useEffect(() => {
    handleQuesVisit(currQuesInd);
  }, [currQuesInd]);
  return (
    <div className=" h-full flex flex-row gap-4">
      {/* timer and ques Navigation */}
      <div className="flex flex-col gap-8 w-[25%] border-r pr-4 ">
        <Timer minutes={timeInfo.minutes} seconds={timeInfo.seconds} />
        <div className="grid grid-cols-3 gap-2">
          {quizData?.map((_, ind) => (
            <QuesNavBlock
              value={ind + 1}
              key={ind}
              onClick={() => setCurrQuesInd(ind)}
              className={getQuesBtnColor(ind)}
            />
          ))}
        </div>

        <div className="space-y-3">
          {legendsData.map((legend, ind) => (
            <Legend
              key={ind}
              title={legend.title}
              border={legend.border}
              bg={legend.bg}
              text={legend.text}
            />
          ))}
        </div>

        <div></div>
      </div>

      {/* div Ques */}
      <div className="flex-1 overflow-y-auto">
        <Card className={"pb-10 "}>
          <CardHeader>
            <CardTitle className={""}>
              Question {currQuesInd + 1} of {quizData.length}
            </CardTitle>
          </CardHeader>
          <CardContent className={"space-y-5"}>
            <p className="text-xl font-medium">{currQues?.question}</p>

            <div className="space-y-3">
              {currQues.allOptions.map((opt, ind) => {
                const isSelected = userAnswers[currQuesInd] === opt;
                return (
                  <div key={`option-${ind}`} className="space-x-2 text-lg">
                    <input
                      type="radio"
                      id={`option-${ind}`}
                      name="quiz-option"
                      checked={isSelected}
                      value={opt}
                      onChange={() => handleUserAnswer(currQuesInd, opt)}
                    />
                    <label htmlFor={`option-${ind}`}>{opt}</label>
                  </div>
                );
              })}
            </div>
          </CardContent>
          <CardFooter className={"mt-5"}>
            <div className="flex justify-center  w-full gap-2">
              <Button
                disabled={currQuesInd === 0}
                onClick={() => handlePagination("prev")}
                className={"cursor-pointer max-w-3xs w-full"}
              >
                Previous Question
              </Button>
              {currQuesInd === quizData.length - 1 ? (
                <Button
                  onClick={() => handleSubmit()}
                  className={"cursor-pointer max-w-3xs w-full"}
                >
                  Submit Quiz
                </Button>
              ) : (
                <Button
                  onClick={() => handlePagination("next")}
                  className={"cursor-pointer max-w-3xs w-full"}
                >
                  Next Question
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
