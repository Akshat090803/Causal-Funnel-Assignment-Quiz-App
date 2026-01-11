import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { QuizContext } from "@/store/context-store";


const EmailGuard = ({ children }) => {
  const { email } = useContext(QuizContext);
  const navigate = useNavigate();

  if (!email) {
    return (
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col w-full items-center gap-y-2">
          <span className="text-7xl">📧</span>
          <span className="text-lg font-medium">
            Email required
          </span>
          <span className="text-sm text-muted-foreground text-center">
            Please enter your email to continue with the quiz.
          </span>
          <Button
            className="max-w-3xs w-full cursor-pointer"
            onClick={() => navigate("/")}
          >
            Go to Home
          </Button>
        </div>
      </div>
    );
  }

  return children;
};

export default EmailGuard;
