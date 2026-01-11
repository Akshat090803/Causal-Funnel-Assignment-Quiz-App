import { useContext } from "react";
import QuizInfo from "../components/quiz-info";
import { QuizContext } from "@/store/context-store";
import QuizWrapper from "../components/quiz-wrapper";

const QuizPage = () => {
  const { isQuizStart, isQuizFinished, setIsQuizFinished, setIsQuizStart } =
    useContext(QuizContext);

    const handleStartQuiz = ()=>{
      setIsQuizStart(true);
      setIsQuizFinished(false)
    }
  return (
    <div className=" flex-1">

      {isQuizStart && !isQuizFinished && <QuizWrapper/> }
      {!isQuizStart && !isQuizFinished && <div>Resume Quiz</div> }
      {!isQuizStart && isQuizFinished && <QuizInfo handleQuizStart={handleStartQuiz}/> }
     
    </div>
  );
};

export default QuizPage;
