import { QuizContext } from "@/store/context-store";
import { useContext, useEffect} from "react";
import Quiz from "./quiz";
import { useTimerCountDown } from "@/hooks/use-timer-countdown";
import CustomLoader from "@/components/custom/loader";


const QuizWrapper = () => {
  const { loading, quesData, fetchQuestions } = useContext(QuizContext);
  const {start,pause,reset,time,minutes,seconds} = useTimerCountDown({initialTime:1800});
  const timeInfo = {
    minutes,seconds,time
  }
  useEffect(() => {
    fetchQuestions();
  }, []);
  useEffect(()=>{
      if(!loading) start();
      else pause();
  },[loading])

  return quesData && quesData.length ? (
    <Quiz quizData={quesData} timeInfo={timeInfo} pause={pause} reset={reset} />
  ) : loading ? (
    <CustomLoader/>
  ) : (
    <div>No Data</div>
  );
};

export default QuizWrapper;
