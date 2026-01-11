import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const decodeHTML = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

export const QuizContext = createContext({
  email: "",
  setEmail: () => {},
  emailSubmitHandler: () => {},
  isQuizStart: false,
  isQuizFinished: true,
  setIsQuizFinished: () => {},
  setIsQuizStart: () => {},
  loading: false,
  fetchQuestions: () => {},
  quesData: [],
  userAnswers: [],
  handleUserAnswer: () => {},
  visited: [],
  handleQuesVisit: () => {},
  handleQuizEvaluation:()=>{},
  quizEvaluation:{}
});

const QuizContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isQuizFinished, setIsQuizFinished] = useState(true);
  const [isQuizStart, setIsQuizStart] = useState(false);
  const [quesData, setQuesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [visited, setVisited] = useState([]);
  const [quizEvaluation, setQuizEvaluation] = useState(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const emailSubmitHandler = () => {
    if (!email.trim()) {
      toast.error("Please enter your email.");
    } else if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
    } else {
      navigate("/quiz");
    }
  };

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://opentdb.com/api.php?amount=15");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const reqData = data.results
        ? data.results.map((item) => {
            const question = decodeHTML(item.question);
            const correct_answer = decodeHTML(item.correct_answer);
            const incorrect_answers = item.incorrect_answers.map((ans) =>
              decodeHTML(ans)
            );

            const allOptions = [...incorrect_answers, correct_answer].sort(
              () => Math.random() - 0.5
            );

            return {
              ...item,
              question,
              correct_answer,
              incorrect_answers,
              allOptions,
            };
          })
        : [];
      console.log(reqData);
      setQuesData(reqData);
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUserAnswer = (questionIndex, optionValue) => {
    setUserAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = optionValue;
      return newAnswers;
    });
  };

  const handleQuesVisit = (quesInd) => {
    setVisited((prev) => {
      const newArr = [...prev];
      newArr[quesInd] = true;
      return newArr;
    });
  };

  const handleQuizEvaluation = (timetaken) => {
    let score = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;
    const userEvaluation = quesData.map((item, ind) => {
      const status =
        userAnswers[ind] === item.correct_answer
          ? "correct"
          : userAnswers[ind]
          ? "incorrect"
          : "unattempted";

      if (status === "correct") score++;
      else if (status === "incorrect") incorrectCount++;
      else unattemptedCount++;
      return {
        answer: userAnswers[ind],
        correctAnswer: item.correct_answer,
        question: item.question,
        status,
      };
    });

    setQuizEvaluation({
      score,
      incorrectCount,
      unattemptedCount,
      userEvaluation,
      totalQuestions:quesData.length,
      attempted:score+incorrectCount,
      timetaken
    })
  };

  return (
    <QuizContext.Provider
      value={{
        email,
        setEmail,
        emailSubmitHandler,
        isQuizFinished,
        isQuizStart,
        setIsQuizFinished,
        setIsQuizStart,
        loading,
        fetchQuestions,
        quesData,
        userAnswers,
        handleUserAnswer,
        visited,
        handleQuesVisit,
        handleQuizEvaluation,
        quizEvaluation
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
