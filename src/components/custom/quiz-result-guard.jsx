import { Button } from "@/components/ui/button";
import { QuizContext } from "@/store/context-store";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const QuizResultGuard = ({ children }) => {
  const navigate = useNavigate();
  const { quizEvaluation } = useContext(QuizContext);

  if (quizEvaluation) {
    return children;
  }

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col w-full items-center gap-y-2 text-center">
        <span className="text-7xl">🐣</span>

        <span className="text-lg font-medium">No quiz results found</span>

        <span className="text-sm text-muted-foreground">
          Please complete a quiz to view your results.
        </span>

        <Button
          className="max-w-3xs w-full cursor-pointer"
          onClick={() => navigate("/")}
        >
          Take a Quiz
        </Button>
      </div>
    </div>
  );
};

export default QuizResultGuard;
